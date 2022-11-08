import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Food from "./Food";

const AllFood = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/homefood")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="">
      <Row className="gy-4">
        {foods.map((food, idx) => (
          <Col sm={12} md={6}>
            <Food key={idx} food={food} />
          </Col>
        ))}
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
