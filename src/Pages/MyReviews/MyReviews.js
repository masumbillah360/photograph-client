import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import SingleReview from "./SingleReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [reload, setReload] = useState(false);
  const email = user?.email;
  useTitle("My-Reviews");
  useEffect(() => {
    fetch(`http://localhost:8000/myreviews?email=${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => console.log(err));
  }, [email, reload]);
  return (
    <div>
      <>
        {reviews.length <= 0 ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          ""
        )}
      </>
      {reviews.length ? (
        <>
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
                <SingleReview
                  key={review._id}
                  review={review}
                  idx={idx}
                  setReload={setReload}
                  reload={reload}
                />
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <div className="text-center">
          <h1 className="fw-bold text-muted">No Reviews Found</h1>
        </div>
      )}

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default MyReviews;
