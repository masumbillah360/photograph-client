import React, { useContext } from "react";
import { TitleContext } from "../../context/TitleContext/TitleContext";
import Banner from "../Shared/Banner/Banner";
import Clients from "./Clients/Clients";
import Food from "./Food/Food";
import Owner from "./Owner/Owner";

const Home = () => {
  const { setTitle } = useContext(TitleContext);
  setTitle("Tasty Bite");
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
