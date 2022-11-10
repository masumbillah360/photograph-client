import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SingleReview = ({ review, idx, setReload, reload }) => {
  const { _id } = review;

  //delete review function
  const handleDelete = (id) => {
    fetch(`https://photograph-server.vercel.app/review/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(() => {
        setReload(!reload);
        toast.success("Successfully Deleted");
      })
      .catch((err) => console.log(err));
  };
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{review.comments}</td>
      <td>{review.postName}</td>
      <td className="d-flex justify-content-end">
        {/* update review page link  */}
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
