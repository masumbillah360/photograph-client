import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SingleService from "../../Shared/SingleSErvice/SingleService";

const Service = () => {
  const [service, setService] = useState([]);
  // load data for hom page
  useEffect(() => {
    fetch("https://tasty-bite-server.vercel.app/homefood")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="">
      <Row className="gy-4">
        {/* showing load data on single food page  */}
        {service.map((serv) => (
          <Col sm={12} md={4} key={serv._id}>
            <SingleService service={serv} />
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Link to="/allfood" className="btn btn-outline-primary fw-bold">
          See All <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Service;