import React from "react";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

const slides = [
  {
    img: slider1,
    text: (
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Aakash Labs
        </h2>
        <p className="text-sm md:text-base font-normal">
          Aakash Labs combines technology with business intelligence to catalyze change 
          and deliver data driven results. We're a dynamic team of passionate people with 
          technical, creative & digital expertise. Where technology meets marketing.
        </p>
      </div>
    ),
  },
  {
    img: slider2,
    text: (
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
         We Build Digital Solutions
        </h2>
         <p className="text-sm md:text-base font-normal">
          Aakash Labs combines technology with business intelligence to catalyze change 
          and deliver data driven results. We're a dynamic team of passionate people with 
          technical, creative & digital expertise. Where technology meets marketing.
        </p>
      </div>
    ),
  },
  {
    img: slider3,
    text: (
      <h2 className="text-3xl md:text-5xl font-bold">
        Join Our Team Today
      </h2>
    ),
  },
];

const Slider = () => (
  <div className="overflow-hidden">
    {slides.map((slide, i) => (
      <div key={i} className="relative h-64 md:h-96">
        <img src={slide.img} alt="" className="w-full h-full object-cover brightness-75" />
        <p className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-5xl font-bold bg-black bg-opacity-30">
          {slide.text}
        </p>
      </div>
    ))}
  </div>
);

export default Slider;
