"use client";
import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CustomersItem from "./CustomersItem";

const Customers = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto  max-w-screen-xl py-16 ">
      <h1 className="font-dancing text-4xl mb-5 font-extrabold">
        What Says Our Customers
      </h1>
      <Slider ref={sliderRef} {...settings}>
        <CustomersItem imgSrc="/images/client1.jpg" />
        <CustomersItem imgSrc="/images/client2.jpg" />
        <CustomersItem imgSrc="/images/client3.jpg" />
        <CustomersItem imgSrc="/images/client4.jpg" />
        <CustomersItem imgSrc="/images/client5.jpg" />
        <CustomersItem imgSrc="/images/client6.png" />
      </Slider>
      <div className="flex justify-center gap-4 mt-4">
        <button></button>
        <button
          className="flex items-center justify-center  bg-primary  w-10 h-10 rounded-full  p-2 text-white"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          className="flex items-center justify-center  bg-primary  w-10 h-10 rounded-full  p-2 text-white"
          onClick={() => sliderRef.current.slickNext()}
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default Customers;
