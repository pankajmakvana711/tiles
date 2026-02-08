import { carouselimage1, carouselimage2, carouselimage3 } from "../assets";
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const showThumbs = isMobile ? false : true;

  return (
    <div className={isMobile ? "pt-12" : ""}>
      <Carousel
        infiniteLoop
        autoPlay
        interval={4000}
        stopOnHover={false}
        transitionTime={2000}
        showArrows={false}
        showThumbs={showThumbs}
        showIndicators={false}
        dynamicHeight={true}
        thumbWidth={75}
        showStatus={false}
      >
        <div>
          <img src={carouselimage1} />
        </div>
        <div>
          <img src={carouselimage2} />
        </div>
        <div>
          <img src={carouselimage3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
