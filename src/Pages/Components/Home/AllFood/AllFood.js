import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Food from "./Food";

const AllFood = () => {
  return (
    <div className="">
      <Row>
        <Col>
          <Food />
        </Col>
        <Col>
          <Food />
        </Col>
        <Col>
          <Food />
        </Col>
      </Row>
      <div className="text-center mt-4">
        <Button varient="primary">See All</Button>
      </div>
    </div>
  );
};

export default AllFood;
