import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleService from "../Shared/SingleSErvice/SingleService";

const AllServices = () => {
  const serviceData = useLoaderData();

  return (
    <div>
      <h1 className="text-center">Foods For You!!!</h1>
      <div className="row">
        {serviceData.map((service) => (
          <div className="col-12 col-md-6 mt-4" key={service._id}>
            <SingleService service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
