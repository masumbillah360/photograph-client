import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Food from "./Food";

const AllFood = () => {
  return (
    <div className="">
      <Row>
        <Col sm={12} md={6} lg={4}>
          <Food />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Food />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Food />
        </Col>
      </Row>
      <div className="text-center mt-4">
        <button className="btn btn-outline-primary fw-bold">
          See All <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AllFood;
