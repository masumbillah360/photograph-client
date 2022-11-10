import React from "react";
import useTitle from "../../hooks/useTitle";
import Banner from "../Shared/Banner/Banner";
import Clients from "./Clients/Clients";
import Owner from "./Owner/Owner";
import Service from "./Service/Service";

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
