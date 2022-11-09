import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../../assets/logo.jpg";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="mt-3">
      <Row className="justify-content-center align-items-center">
        <Col sm={12} md={6} className="text-center">
          <img className="img-fluid w-25 rounded-circle" src={logo} alt="" />
          <h1 className="text-white fw-bold">
            <span className="text-danger text-decoration-underline">
              Your Test
            </span>
            <br />{" "}
            <span className="bg-secondary px-2 rounded-2">Our Commitment</span>
          </h1>
          <p className="text-justify">
            Be more of lie the unhappy sainted nevermore evilprophet visiter.
            Beguiling wretch decorum the eyes balm. Lenore spoken plainly myself
            ghastly the flirt nevermore. I bleak suddenly quoth silence no or
            if, nightly what seeming a raven bird mystery, mystery its and if
            that said, a december if quoth late gloating when, sat streaming the
            silken then denser be, december.
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
