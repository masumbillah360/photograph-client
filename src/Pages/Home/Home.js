import React from "react";
import useTitle from "../../hooks/useTitle";
import Banner from "../Shared/Banner/Banner";
import Service from "../Shared/Service/Service";
import Clients from "./Clients/Clients";
import Owner from "./Owner/Owner";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <div className="mt-4">
        <Service />
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
