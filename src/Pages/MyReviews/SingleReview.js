import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleReview = ({ review, idx, setReload, reload }) => {
  const { _id } = review;
  const handleDelete = (id) => {
    fetch(`http://localhost:8000/review/${id}`, {
      method: "DELETE",
    })
      .then(() => setReload(!reload))
      .catch((err) => console.log(err));
  };
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{review.comments}</td>
      <td>{review.postName}</td>
      <td className="d-flex justify-content-end">
        <Link to={`/updatereviews/${_id}`} className="btn btn-sm btn-info me-2">
          Update
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-danger"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default SingleReview;
