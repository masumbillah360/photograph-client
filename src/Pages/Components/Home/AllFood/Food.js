import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardImg from "../../../../assets/banner-img.jpg";

const Food = () => {
  return (
    <Card>
      <Card.Img variant="top" src={cardImg} />
      <Card.Body>
        <Card.Title className="bg-dark py-2 text-center rounded-2">
          <span className="text-white">Name : Delecius Berger</span>
        </Card.Title>
        <Card.Text>
          A is but hear or scarce wished or startled sorrow the. I meaninglittle
          my and followed token visiter. This then wandering then that the the,
          darkness doubting of sitting thy this, a door the of me the, utters of
          i nights with, late was i on door a more, of when by and enchanted,
          nothing velvet tempest that uttered bust, long nothing sorrow clasp
          more never above said the so, these gently or lenore burning said
          heaven bird here, and nothing for still my thee me, least for word
          darkness he myself sainted within whose unbrokenquit. Clasp gently
          blessed the...
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="fw-bold bg-warning px-3 rounded-1">Price : $15</h5>
          <Button variant="primary">Details</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Food;
