import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const data = useLoaderData();
  console.log(data);
  const { _id, postName, postId, comments, email, userThumb } = data;
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
    fetch(`http://localhost:8000/review/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedReveiew),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <Row>
      <Col sm={12} md={5}></Col>
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
