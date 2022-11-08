import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleFood from "../Home/Food/SingleFood";

const AllFood = () => {
  const foodData = useLoaderData();

  return (
    <div>
      <h1 className="text-center">Foods For You!!!</h1>
      {foodData.map((food) => (
        <SingleFood key={food._id} food={food} />
      ))}
    </div>
  );
};

export default AllFood;
