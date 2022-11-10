import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Revew from "./Revew";

const ServiceDetails = () => {
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useTitle("FoodDetails");
  const { user } = useContext(AuthContext);
  const foodInfo = useLoaderData();
  const navigate = useNavigate();
  const { _id, name, description, price, picture } = foodInfo;
  const postId = _id;
  const userEmail = user.email;
  useEffect(() => {
    fetch(
      `https://tasty-bite-server.vercel.app/review?postId=${postId}&email=${userEmail}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [refresh, postId, userEmail]);
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
    // sent reivew on server
    fetch("https://tasty-bite-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        setRefresh(!refresh);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  //delete post function
  const handleDeletePost = (id) => {
    console.log(id);
    fetch(`https://tasty-bite-server.vercel.app/myservices/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/myservices");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Row>
      {/* start food details section  */}
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
              {/* rating section  */}
              <div className="text-warning bg-secondary px-2 py-2 rounded-2 d-flex justify-content-center align-items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <>
                {/* conditional rendering for user to delete and update post/service info */}
                {userEmail === foodInfo?.email && (
                  <div>
                    <Link
                      to={`/updateService/${_id}`}
                      className="btn btn-sm btn-outline-info me-2"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDeletePost(_id)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </>
            </div>
          </Card.Body>
        </Card>
        {/* end card  */}
      </Col>
      {/* end food details section  */}

      {/* start review section  */}
      <Col sm={12} md={4}>
        {user.uid ? (
          <div className="mb-3">
            {/* review form  */}
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
            {/* end form  */}

            {/* show user review  */}
            <div className="overflow-auto vh-100 sm:h-auto">
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
          // conditional rendering for unauthorised users
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

export default ServiceDetails;
