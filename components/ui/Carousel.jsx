"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import Title from "./Title";

// React-Slick dinamik yükleme
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-0 "></div>
    ),
  };
  return (
    <div className="h-[calc(100vh-88px)] relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-48 text-left">
        {/* Content Container */}
        <div className="text-white max-w-full">
          <Slider {...settings}>
            <div>
              <Title addClass="text-6xl ">Fast Food Restaurant</Title>
              <p className="text-white  text-sm my-4 max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                enim, voluptate aperiam unde ex velit similique magni
                exercitationem aliquid soluta. Veniam nemo delectus deleniti vel
                ducimus ullam magni sequi nihil!
              </p>
              <button className="btn-primary hidden sm:block">
                Order Online
              </button>
            </div>
            <div>
              <Title addClass="text-6xl">Fast Food Restaurant</Title>
              <p className="text-white  text-sm my-4 max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                enim, voluptate aperiam unde ex velit similique magni
                exercitationem aliquid soluta. Veniam nemo delectus deleniti vel
                ducimus ullam magni sequi nihil!
              </p>
              <button className="btn-primary hidden sm:block">
                Order Online
              </button>
            </div>
            <div>
              <Title addClass="text-6xl">Fast Food Restaurant</Title>
              <p className="text-white  text-sm my-4 max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                enim, voluptate aperiam unde ex velit similique magni
                exercitationem aliquid soluta. Veniam nemo delectus deleniti vel
                ducimus ullam magni sequi nihil!
              </p>
              <button className="btn-primary hidden sm:block">
                Order Online
              </button>
            </div>{" "}
            <div>
              <Title addClass="text-6xl">Fast Food Restaurant</Title>
              <p className="text-white  text-sm my-4 max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                enim, voluptate aperiam unde ex velit similique magni
                exercitationem aliquid soluta. Veniam nemo delectus deleniti vel
                ducimus ullam magni sequi nihil!
              </p>
              <button className="btn-primary hidden sm:block">
                Order Online
              </button>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
