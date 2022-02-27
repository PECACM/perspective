import React from "react";
import useWindowDimensions from "./windowHook";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { Button } from "@mui/material";

//image imports
import image1 from "./assets/one.jpg";
import image2 from "./assets/one.jpg";
import image3 from "./assets/one.jpg";
import logo from "./assets/logo.jpg";

function CarouselBar() {
  const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

  const { height, width } = useWindowDimensions();

  return (
    <div>
      <Carousel
        autoPlay={true}
        dynamicHeight={true}
        interval={1000}
        animation={"slide"}
        navButtonsAlwaysVisible={true}
      >
        <div>
          <img src={image1} />
          <p className="legend">
            <img height={50} width={50} src={logo} alt="PEC"></img>
            International Conference on Futuristic Computing and Communication
            Department of Computer Science & Engineering Punjab Engineering
            College
          </p>
        </div>
        <div>
          <img src={image2} />

          <p className="legend">
            <img height={50} width={50} src={logo} alt="PEC"></img>
            International Conference on Futuristic Computing and Communication
            Department of Computer Science & Engineering Punjab Engineering
            College
          </p>
        </div>
        <div>
          <img src={image3} />
          <p className="legend">
            <img height={50} width={50} src={logo} alt="PEC"></img>
            International Conference on Futuristic Computing and Communication
            Department of Computer Science & Engineering Punjab Engineering
            College
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselBar;
