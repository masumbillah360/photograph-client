import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import SingleService from "../Shared/SingleSErvice/SingleService";

const AllServices = () => {
  const serviceData = useLoaderData();
  useTitle("All Services");

  return (
    <div className="row">
      {serviceData.map((service) => (
        <div className="col-12 col-md-6 mt-4" key={service._id}>
          <SingleService service={service} />
        </div>
      ))}
    </div>
  );
};

export default AllServices;
