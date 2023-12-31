'use client';
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <Splide aria-label="My Favorite Images">
      <SplideSlide>
      </SplideSlide>
      <SplideSlide>
      </SplideSlide>
    </Splide>
  );
};

export default SliderComponent;