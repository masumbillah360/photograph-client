import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleFood from "../Shared/SingleFood/SingleFood";

const AllFood = () => {
  const foodData = useLoaderData();

  return (
    <div>
      <h1 className="text-center">Foods For You!!!</h1>
      <div className="row">
        {foodData.map((food) => (
          <div className="col-12 col-md-6">
            <SingleFood key={food._id} food={food} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFood;
