import React, { useEffect, useState } from "react";
import SingleService from "../Shared/SingleSErvice/SingleService";

const MyServices = () => {
  const [services, setServices] = useState([]);
  const [reload, setReload] = useState(false);
  // load user's all services data
  useEffect(() => {
    fetch("https://tasty-bite-server.vercel.app/myservices", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, [reload]);
  return (
    <>
      {services.length > 0 ? (
        <div className="row">
          {services.map((service) => (
            <div className="col col-12 col-md-6" key={service._id}>
              <SingleService
                service={service}
                reload={reload}
                setReload={setReload}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <h1 className="desplay-1 fw-bold text-secondary">
            You Have No Services Yet!
          </h1>
        </div>
      )}
    </>
  );
};

export default MyServices;
