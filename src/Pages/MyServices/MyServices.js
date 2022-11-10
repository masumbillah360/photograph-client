import React, { useEffect, useState } from "react";

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
    <div>
      <h1>All Services {services.length}</h1>
    </div>
  );
};

export default MyServices;
