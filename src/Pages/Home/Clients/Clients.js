import React from "react";
import client1 from "../../../assets/profile-1.jpg";
import client2 from "../../../assets/profile-2.jpg";
import client3 from "../../../assets/profile-3.jpg";

const Clients = () => {
  return (
    <div className="container">
      <h1 className="text-center fw-bold text-muted mb-3">Customer Review</h1>
      <p className="text-center lead">
        To judge us see our previews customer review here. We are try our best
        for our each customer. Every curstomer is Versy specail for us.
      </p>
      <div className="row text-center">
        {/* client 1 review  */}
        <div className="col-lg-4 col-md-6">
          <img
            className="rounded-circle border w-50 border-5 border-secondary img-fluid mt-1"
            src={client1}
            alt="client-img"
          />
          <h4 className="fw-normal">Mahmud</h4>
          <p>
            This guy is very talented and creative photographer. You guys can
            take his services.
          </p>
        </div>
        {/* client 2 review  */}
        <div className="col-lg-4 col-md-6">
          <img
            className="rounded-circle w-50 border border-5 border-secondary img-fluid mt-1"
            src={client2}
            alt="client-img"
          />
          <h4 className="fw-normal">Hasan Ali</h4>
          <p>
            It was amazing for me. You guys are so good and you Photography
            Quality. Thanks for give me amazing service.
          </p>
        </div>
        {/* client 3 review  */}
        <div className="col-lg-4 col-md-6">
          <img
            className="rounded-circle w-50 border border-5 border-secondary img-fluid mt-1"
            src={client3}
            alt="client-img"
          />
          <h4 className="fw-normal">Mamun</h4>
          <p>
            Absolutly amazing and Awesome Your photographs Quality. I will try
            next time as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
