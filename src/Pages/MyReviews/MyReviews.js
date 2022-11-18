import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import SingleReview from "./SingleReview";
//toastify
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };
const MyReviews = () => {
  let [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [reload, setReload] = useState(false);
  const email = user?.email;
  console.log(reviews);

  //custom hok for change page title
  useTitle("My-Reviews");

  //load all review for each user
  useEffect(() => {
    fetch(`https://photograph-server.vercel.app/myreviews?email=${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => console.log(err));
    // setLoading(false);
  }, [email, reload]);
  return (
    <>
      <ClipLoader
        loading={loading}
        cssOverride={{ display: "block", margin: "0 auto" }}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {/* review Table  */}
      {reviews.length ? (
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
                loading={loading}
                setLoading={setLoading}
              />
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <h1 className="fw-bold text-muted display-1">No Reviews Found</h1>
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
    </>
  );
};

export default MyReviews;
