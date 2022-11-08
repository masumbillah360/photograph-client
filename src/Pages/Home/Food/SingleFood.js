import React from "react";
import Card from "react-bootstrap/Card";
import { FaArrowRight, FaStar, FaStarHalf } from "react-icons/fa";

const SingleFood = ({ food }) => {
  const { name, description, picture, price } = food;
  return (
    <Card>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title className="bg-success py-2 text-center rounded-2">
          <span className="text-white fw-bold">Name : {name}</span>
        </Card.Title>
        <Card.Text>
          <span className="d-block bg-danger text-white fw-bold py-2 text-center rounded-2">
            Price : {price}
          </span>

          <span className="d-block text-justify mt-2">
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </span>
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-warning bg-secondary px-2 py-2 rounded-2 d-flex justify-content-center align-items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </div>
          <button className="btn btn-outline-danger btn-sm fs-6">
            <FaArrowRight />
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleFood;
