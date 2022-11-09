import React from "react";
import useTitle from "../../hooks/useTitle";
import Banner from "../Shared/Banner/Banner";
import Clients from "./Clients/Clients";
import Food from "./Food/Food";
import Owner from "./Owner/Owner";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <div className="mt-4">
        <Food />
      </div>
      <div>
        <Owner />
      </div>
      <div>
        <Clients />
      </div>
    </div>
  );
};

export default Home;
