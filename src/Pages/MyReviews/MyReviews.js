import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import SingleReview from "./SingleReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const email = user?.email;
  useEffect(() => {
    fetch(`http://localhost:8000/myreviews?email=${email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [email]);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Serial</th>
            <th>Review</th>
            <th>Post Name</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, idx) => (
            <SingleReview key={review._id} review={review} idx={idx} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyReviews;
