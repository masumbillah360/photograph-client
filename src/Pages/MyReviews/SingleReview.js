import React from "react";
import { FaTrash } from "react-icons/fa";

const SingleReview = ({ review, idx }) => {
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{review.comments}</td>
      <td>{review.postName}</td>
      <td className="d-flex justify-content-end">
        <button className="btn btn-sm btn-info me-2">Update</button>
        <button className="btn btn-sm btn-danger">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default SingleReview;
