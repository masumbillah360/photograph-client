import React from "react";
import logo from "../../../assets/logo.jpg";

const Clients = () => {
  return (
    <div class="container">
      <div class="row text-center">
        <div class="col-lg-4 col-md-6">
          <img
            className="rounded-circle border border-5 border-secondary img-fluid mt-1"
            src={logo}
            alt="client-img"
          />
          <h4 class="fw-normal">Md Masum Billah</h4>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
        </div>
        <div class="col-lg-4 col-md-6">
          <img
            className="rounded-circle border border-5 border-secondary img-fluid mt-1"
            src={logo}
            alt="client-img"
          />
          <h4 class="fw-normal">Md Masum Billah</h4>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
        </div>
        <div class="col-lg-4 col-md-6">
          <img
            className="rounded-circle border border-5 border-secondary img-fluid mt-1"
            src={logo}
            alt="client-img"
          />
          <h4 class="fw-normal">Md Masum Billah</h4>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
