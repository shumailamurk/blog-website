'use client';

import React from "react";
import dynamic from "next/dynamic";


const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";


type ArrowProps = {
  onClick?: () => void;
};


const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 cursor-pointer z-10"
    onClick={onClick}
  >
    &gt;
  </div>
);


const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 cursor-pointer z-10"
    onClick={onClick}
  >
    &lt;
  </div>
);

const Main: React.FC = () => {
 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="flex justify-center items-center w-full bg-gray-100 py-10">
      <div className="w-[90%] max-w-[1400px]">
        <Slider {...settings}>

          {/* Slide 1 */}
          <div className="relative">
            <img
              src="/banner2.jpg"
              alt="Image 1"
              className="w-full h-[500px] object-cover rounded-xl opacity-80"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-5xl text-white bg-opacity-50 px-8 py-6 rounded-lg font-bold">
              <h1>Your Mood Depends <br /> on The Food</h1>
              <Link href='/blog'>
              <button
                className="mt-4 text-white hover:bg-yellow-500 bg-black px-6 py-2 rounded-md text-lg"
              >
                Read More
              </button>
              </Link>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative">
            <img
              src="/banner3.webp"
              alt="Image 2"
              className="w-full h-[500px] object-cover rounded-lg opacity-70"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-5xl text-white bg-opacity-50 px-8 py-6 rounded-lg font-bold">
              <h1>Eat Better<br /> Feel Better</h1>
              <Link href='/blog'>
              <button
                className="mt-4 text-white hover:bg-yellow-500 bg-black px-6 py-2 rounded-md text-lg"
              >
                Read More
              </button>
              </Link>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative">
            <img
              src="/banner4.jpg"
              alt="Image 3"
              className="w-full h-[500px] object-cover rounded-xl opacity-80"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-5xl text-white bg-opacity-50 px-8 py-6 rounded-lg font-bold">
              <h1>Be Strong<br /> & Consistent</h1>
              <Link href='/blog'>
              <button
                className="mt-4 text-white hover:bg-yellow-500 bg-black px-6 py-2 rounded-md text-lg"
              >
                Read More
              </button>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Main;
