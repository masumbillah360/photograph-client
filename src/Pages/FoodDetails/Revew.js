import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Revew = ({ review, setRefresh, refresh }) => {
  const { _id, userThumb, userName, comments, email } = review;
  const { user } = useContext(AuthContext);
  console.log(review);
  const handleDelete = (id) => {
    fetch(`http://localhost:8000/review/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("deleted");
        setRefresh(!refresh);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="border rounded-2 my-3">
      <div className="d-flex justify-content-start align-items-center">
        <img
          className="rounded-circle p-2 user-thumb "
          src={userThumb}
          alt="userProfile"
        />
        <div className="ms-1">
          <h6>{userName}</h6>
          <p>{comments}</p>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        {user.email === email ? (
          <>
            <Link
              to={`/updatereviews/${_id}`}
              className="btn btn-outline-info me-2"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline-danger"
            >
              <FaTrash />
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Revew;
