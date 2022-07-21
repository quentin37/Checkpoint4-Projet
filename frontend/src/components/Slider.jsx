import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Earth from "../assets/earthkeeper.png";
import Err404 from "../assets/err404.png";
import Werevart from "../assets/werevart.png";

function Slider() {
  return (
    <Carousel
      className="carousel"
      autoPlay
      interval={5000}
      infiniteLoop
      showThumbs={false}
    >
      <div>
        <img alt="page d'acceuil du projet earthkipper" src={Earth} />
      </div>
      <div>
        <img alt="page d'acceuil du projet Err404" src={Err404} />
      </div>
      <div>
        <img alt="page d'acceuil du projet Werevart" src={Werevart} />
      </div>
    </Carousel>
  );
}

export default Slider;
