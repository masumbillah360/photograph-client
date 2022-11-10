import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const UpdateReview = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { _id, postName, postId, comments, email, userThumb } = data;
  useTitle("updatedReveiew");
  const handleUpdate = (e) => {
    e.preventDefault();
    const newReview = e.target.newReview.value;
    const updatedReveiew = {
      postName,
      postId,
      comments: newReview,
      email,
      userThumb,
    };
    // update review method function
    fetch(`https://tasty-bite-server.vercel.app/review/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(updatedReveiew),
    })
      .then((res) => res.json())
      .then((data) => navigate("/myreviews"))
      .catch((err) => console.log(err));
  };
  return (
    <Row>
      <Col sm={12} md={5}>
        <div className="mt-3 d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="text-center">Update Your Review Now</h1>
          <p className="fw-bold lead">Stay With Us!</p>
          <p className="fw-bold text-success lead">Thank You.</p>
        </div>
      </Col>
      {/* update form  */}
      <Col sm={12} md={7}>
        <div className="my-5">
          <form onSubmit={handleUpdate}>
            <label htmlFor="postName" className="form-label">
              Post Name
            </label>
            <input
              type="text"
              id="postName"
              name="nesPost"
              readOnly
              defaultValue={postName}
              className="form-control"
            />
            <label htmlFor="newReview" className="form-label">
              Your Review
            </label>
            <textarea
              className="form-control"
              id="newReview"
              rows="4"
              name="newReview"
              defaultValue={comments}
            ></textarea>
            <div className="text-end mt-2">
              <input
                className="btn btn-info btn-sm"
                type="submit"
                value="Update Review"
              />
            </div>
          </form>
        </div>
      </Col>
    </Row>
  );
};

export default UpdateReview;
