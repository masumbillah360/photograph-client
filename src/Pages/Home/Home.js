import React from "react";
import Banner from "../Shared/Banner/Banner";
import AllFood from "./AllFood/AllFood";
import Clients from "./Clients/Clients";
import Owner from "./Owner/Owner";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mt-4">
        <AllFood />
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
