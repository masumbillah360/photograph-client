import React from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="mt-3">
      <Row className="justify-content-center align-items-center">
        <Col className="text-center">
          <h1 className="text-warning">
            <span className="fw-bold text-danger">Your Test</span> <br /> Our
            Commitment
          </h1>
          <p>
            Be more of lie the unhappy sainted nevermore evilprophet visiter.
            Beguiling wretch decorum the eyes balm. Lenore spoken plainly myself
            ghastly the flirt nevermore. I bleak suddenly quoth silence no or
            if, nightly what seeming a raven bird mystery, mystery its and if
            that said, a december if quoth late gloating when, sat streaming the
            silken then denser be, december.
          </p>
        </Col>
        <Col>
          <Slider />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
