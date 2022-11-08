import React from "react";
import { Card } from "react-bootstrap";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const foodInfo = useLoaderData();
  const { name, description, price, picture } = foodInfo;
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

          <span className="d-block text-justify mt-2">{description}</span>
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-warning bg-secondary px-2 py-2 rounded-2 d-flex justify-content-center align-items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FoodDetails;
