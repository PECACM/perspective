import React from "react";
import useWindowDimensions from "./windowHook";
import SimpleImageSlider from "react-simple-image-slider";


//image imports
import image1 from "./assets/one.png";
import image2 from './assets/two.png'
import image3 from './assets/three.jpg'

function Carousel() {
  const images = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
  ];
  
  const { height, width } = useWindowDimensions();
  
  return (
    <div>
      <SimpleImageSlider
        height={height/1.5}
        width={width}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default Carousel;