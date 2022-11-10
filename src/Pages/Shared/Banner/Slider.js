import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import bannerImg from "../../../assets/banner-img.jpg";
import bannerImg2 from "../../../assets/banner-img1.jpg";
import bannerImg3 from "../../../assets/banner-img2.jpg";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const sliderImg = [
    { img: bannerImg },
    { img: bannerImg2 },
    { img: bannerImg3 },
  ];
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {sliderImg.map((slid) => (
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-3"
            src={slid?.img}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
