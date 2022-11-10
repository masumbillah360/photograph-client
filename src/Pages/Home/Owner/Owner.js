import React from "react";
import owner from "../../../assets/profile-1.jpg";

// owner section for home page
const Owner = () => {
  return (
    <div className="px-4 py-5 my-5 text-center bg-light rounded-2">
      <img
        className="d-block mx-auto mb-1 rounded-circle"
        src={owner}
        alt="logo Not Found"
        width="100"
        height="100"
      />
      <h1 className="display-5 fw-bold">Masum Billah</h1>
      <h5 className="fw-bold">
        Owner and Founder <span className="text-danger">Tasty</span>
        <span className="text-warning">Bite</span>
      </h5>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          This is simple cooking orders web page for to take orders people and
          get best service
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-outline-danger btn-lg px-4">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Owner;
