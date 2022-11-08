import React from "react";
import Card from "react-bootstrap/Card";
import { FaArrowRight, FaStar, FaStarHalf } from "react-icons/fa";
import cardImg from "../../../assets/banner-img.jpg";

const Food = () => {
  return (
    <Card>
      <Card.Img variant="top" src={cardImg} />
      <Card.Body>
        <Card.Title className="bg-success py-2 text-center rounded-2">
          <span className="text-white fw-bold">Name : Delecius Berger</span>
        </Card.Title>
        <Card.Text>
          <span className="d-block bg-danger text-white fw-bold py-2 text-center rounded-2">
            Price : $15
          </span>

          <span className="d-block text-justify mt-2">
            A is but hear or scarce wished or startled sorrow the. I
            meaninglittle my and followed token visiter. This then wandering
            then that the the, darkness doubting of sitting thy this, a door the
            of me the, utters of i nights with, late was i on door a more, of
            when by and enchanted, nothing velvet tempest that uttered bust,
            long nothing sorrow clasp more never above said the so, these gently
            or lenore burning said heaven bird here, and nothing for still my
            thee me, least for word darkness he myself sainted within whose
            unbrokenquit. Clasp gently blessed the...
          </span>
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-warning bg-secondary px-2 py-2 rounded-2 d-flex justify-content-center align-items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </div>
          <button className="btn btn-outline-danger btn-sm fs-6">
            <FaArrowRight />
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Food;
