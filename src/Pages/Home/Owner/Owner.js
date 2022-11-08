import React from "react";
import logo from "../../../assets/logo.jpg";

const Owner = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-1 rounded-circle"
        src={logo}
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
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world's most popular front-end open source toolkit.
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
