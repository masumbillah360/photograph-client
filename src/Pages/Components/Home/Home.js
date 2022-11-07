import React from "react";
import Banner from "../../Shared/Banner/Banner";
import NavBar from "../../Shared/NavBar/NavBar";
import AllFood from "./AllFood/AllFood";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <div className="mt-4">
        <AllFood />
      </div>
    </div>
  );
};

export default Home;
