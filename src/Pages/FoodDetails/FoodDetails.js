import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { TitleContext } from "../../context/TitleContext/TitleContext";
import Revew from "./Revew";

const FoodDetails = () => {
  const { setTitle } = useContext(TitleContext);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { user } = useContext(AuthContext);
  const foodInfo = useLoaderData();
  const { _id, name, description, price, picture } = foodInfo;
  const postId = _id;
  const userEamil = user.email;
  setTitle(`Food Details-${name}`);
  useEffect(() => {
    fetch(`http://localhost:8000/review?postId=${postId}&email=${userEamil}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [refresh, postId, userEamil]);
  const handleReview = (e) => {
    e.preventDefault();
    const comments = e.target.review.value;
    const time = new Date().getTime();
    const review = {
      postName: name,
      postId: _id,
      email: user?.email,
      userThumb: user?.photoURL,
      userName: user?.displayName,
      comments,
      time,
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
          <PhotoProvider>
            <PhotoView src={picture}>
              <Card.Img variant="top" src={picture} />
            </PhotoView>
          </PhotoProvider>
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
                <Revew
                  key={idx}
                  review={review}
                  setRefresh={setRefresh}
                  refresh={refresh}
                />
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
