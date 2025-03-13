import React from "react";
import Image from "next/image";
function About() {
  return (
    <div className="flex bg-secondary py-14 ">
      <div className="container mx-auto flex h-full  items-center justify-center w-1/2 sm:w-4/6 flex-wrap md:flex-nowrap">
        <div className="flex justify-center flex-1">
          <div className="relative w-[350px]  h-[375px] sm:w-[450px] sm:h-[610px]">
            <Image src="/images/about-img-min.png" layout="fill" alt="" />
          </div>
        </div>

        <div className="flex flex-1 flex-col text-white justify-center items-start sm:px-6 mt-8">
          <div className="font-dancing text-4xl mb-6">We Are Feane</div>
          <p className="text-base line-clamp-5 text-start">
            We Are Feane There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which dont look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isnt anything embarrassing hidden
            in the middle of text. All
          </p>
          <div>
            <button className="btn-primary mt-3">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
