import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import bannerImg from "../../../assets/banner-img.jpg";
import bannerImg1 from "../../../assets/banner-img1.jpg";
import bannerImg2 from "../../../assets/banner-img2.jpg";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-3"
          src={bannerImg}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-3"
          src={bannerImg1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-3"
          src={bannerImg2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
