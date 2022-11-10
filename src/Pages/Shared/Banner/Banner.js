import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="mt-3">
      <Row className="justify-content-center align-items-center">
        <Col sm={12} md={6} className="text-center">
          <img
            className="img-fluid w-25 border border-success border-2 rounded-circle"
            src={logo}
            alt="logo"
          />
          <h1 className="text-white fw-bold">
            <span className="text-danger text-decoration-underline">
              Best Photography
            </span>
            <br />
            <span className="bg-secondary px-2 rounded-2">Our Commitment</span>
          </h1>
          <p className="text-center">
            To get spacial and very bery atractive Photography contact with
            <Link className="btn btn-sm btn-outline-danger" to="/">
              PhotoGraph
            </Link>
            . Wr are always ready for you to provide our Best Quality.
          </p>
        </Col>
        <Col sm={12} md={6}>
          <Slider />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
