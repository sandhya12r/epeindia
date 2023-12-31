'use client';
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


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
        <div className="bg-banner-2 w-screen h-[700px] bg-center bg-opacity-50 capitalize">
          <div className="text-xl text-white font-medium flex gap-3 flex-col backdrop-brightness-50 w-full h-full justify-center items-center">
            <h2 className="text-6xl font-bold">EPE - Your One-stop Fintech Platform</h2>
            <p className="">One-stop solution for all your Financial Needs!</p>
            <div className="flex items-center flex-col gap-5 mt-5">
              <button className="btn btn-banner">Enquire Now</button>
              <div className="flex gap-7">
                <div className="bg-black bg-opacity-75 h-40 w-52 flex flex-col items-center justify-center gap-3">
                  <p className="text-green-300 text-2xl">21 million</p>
                  <p>transactions</p>
                </div>              
                <div className="bg-black bg-opacity-75 h-40 w-52 flex flex-col items-center justify-center gap-3">
                  <p className="text-green-300 text-2xl">10,500+ Crs</p>
                  <p>AUM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
      <div className="bg-banner-1 w-screen h-[700px] bg-center bg-opacity-50 capitalize">
          <div className="text-xl text-white font-medium flex gap-3 flex-col backdrop-brightness-50 w-full h-full justify-center items-center">
            <h2 className="text-6xl font-bold">Investment in Real Estate & savings</h2>
            <p className="">One-stop solution for all your Financial Needs!</p>
            <div className="flex items-center flex-col gap-5 mt-5">
              <button className="btn btn-banner">Enquire Now</button>
              <div className="flex gap-7">
                <div className="bg-black bg-opacity-75 h-40 w-52 flex flex-col items-center justify-center gap-3">
                  <p className="text-green-300 text-2xl">21 million</p>
                  <p>transactions</p>
                </div>              
                <div className="bg-black bg-opacity-75 h-40 w-52 flex flex-col items-center justify-center gap-3">
                  <p className="text-green-300 text-2xl">10,500+ Crs</p>
                  <p>AUM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default SliderComponent;