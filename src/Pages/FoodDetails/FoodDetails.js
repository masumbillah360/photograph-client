import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaStar, FaStarHalf, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const FoodDetails = () => {
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { user } = useContext(AuthContext);
  const foodInfo = useLoaderData();

  const { name, description, price, picture } = foodInfo;

  useEffect(() => {
    fetch("http://localhost:8000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [refresh]);
  const handleReview = (e) => {
    e.preventDefault();
    const comments = e.target.review.value;
    const review = {
      email: user?.email,
      userThumb: user?.photoURL,
      name: user?.name,
      comments,
    };
    fetch("http://localhost:8000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRefresh(!refresh);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Row>
      <Col sm={12} md={8}>
        <Card>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title className="bg-success py-2 text-center rounded-2">
              <span className="text-white fw-bold">Name : {name}</span>
            </Card.Title>
            <Card.Text>
              <span className="d-block bg-danger text-white fw-bold py-2 text-center rounded-2">
                Price : {price}
              </span>

              <span className="d-block text-justify mt-2">{description}</span>
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <div className="text-warning bg-secondary px-2 py-2 rounded-2 d-flex justify-content-center align-items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4}>
        {user.uid ? (
          <div className="mb-3">
            <form onSubmit={handleReview}>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Write Your Review
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                name="review"
              ></textarea>
              <div className="text-end mt-2">
                <input
                  className="btn btn-danger btn-sm"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
            <div className="overflow-auto vh-100">
              {reviews.map((review, idx) => (
                <div key={idx} className="border rounded-2 my-3">
                  <div className="d-flex justify-content-start align-items-center">
                    <img
                      className="rounded-circle p-2 user-thumb "
                      src={review?.userThumb}
                      alt="userProfile"
                    />
                    <div className="ms-1">
                      <h6>{review?.name}</h6>
                      <p>{review.comments}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-info me-2">Edit</button>
                    <button className="btn btn-outline-danger">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center mt-4">
            <h3>Please Login to Write Review</h3>
            <Link className="btn btn-sm btn-outline-success" to="/login">
              Login
            </Link>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default FoodDetails;
