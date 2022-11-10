import React from "react";
import useTitle from "../../hooks/useTitle";
import Banner from "../Shared/Banner/Banner";
import Clients from "../Shared/Clients/Clients";
import Owner from "../Shared/Owner/Owner";
import Service from "../Shared/Service/Service";

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
