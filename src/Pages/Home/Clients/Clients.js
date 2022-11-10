import React from "react";
import logo from "../../../assets/logo.jpg";

const Clients = () => {
  return (
    <div className="container">
      <div className="row text-center">
        {/* client 1 review  */}
        <div className="col-lg-4 col-md-6">
          <img
            className="rounded-circle border border-5 border-secondary img-fluid mt-1"
            src={logo}
            alt="client-img"
          />
          <h4 className="fw-normal">Mahmud</h4>
          <p>
            This Tasty Bites Is Awesome. Their Food Quality is so good. you guys
            can take foods from Tasty Bites.
          </p>
        </div>
        {/* client 2 review  */}
        <div className="col-lg-4 col-md-6">
          <img
            className="rounded-circle border border-5 border-secondary img-fluid mt-1"
            src={logo}
            alt="client-img"
          />
          <h4 className="fw-normal">Hasan Ali</h4>
          <p>
            It was amazing for me. You guys are so good and you food Quality.
            Thanks for give me amazing service.
          </p>
        </div>
        {/* client 3 review  */}
        <div className="col-lg-4 col-md-6">
          <img
            className="rounded-circle border border-5 border-secondary img-fluid mt-1"
            src={logo}
            alt="client-img"
          />
          <h4 className="fw-normal">Mamun</h4>
          <p>
            Absolutly Tasty and Awesome Your Food Quality. I will try next time
            as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
