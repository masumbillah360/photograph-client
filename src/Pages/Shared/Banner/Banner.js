import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="mt-3">
      <Row className="justify-content-center align-items-center">
        <Col sm={12} md={6} className="text-center">
          <img
            className="img-fluid w-25 border border-success border-2 rounded-circle"
            src={logo}
            alt=""
          />
          <h1 className="text-white fw-bold">
            <span className="text-danger text-decoration-underline">
              Your Test
            </span>
            <br />{" "}
            <span className="bg-secondary px-2 rounded-2">Our Commitment</span>
          </h1>
          <p className="text-center">
            To get your Favorite foods and dessert contact us at{" "}
            <Link to="/">Tasty Bite</Link>. Wr are always ready to send you our
            best quality food.
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
