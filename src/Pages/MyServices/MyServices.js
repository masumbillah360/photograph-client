import React, { useEffect, useState } from "react";
import SingleFood from "../Shared/SingleFood/SingleFood";

const MyServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/myservices", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {services.length > 0 ? (
        <div>
          {services.map((service) => (
            <SingleFood key={service._id} food={service} />
          ))}
        </div>
      ) : (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <h1 className="desplay-1 fw-bold text-secondary">
            No Item's You Added !
          </h1>
        </div>
      )}
    </>
  );
};

export default MyServices;