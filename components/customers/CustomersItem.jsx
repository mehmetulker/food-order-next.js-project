import React from "react";
import Image from "next/image";

const CustomersItem = ({ imgSrc }) => {
  return (
    <div className="flex flex-col items-start basis-[40%] rounded-xl px-5 py-5 gap-4">
      <div className="bg-secondary rounded-lg p-5 text-white text-start ">
        <p className="text-xs mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut officiis
          deserunt tempore, libero facere voluptas molestiae neque commodi vero
          possimus. Impedit commodi neque quam dolore saepe aperiam voluptatem
          at iure?
        </p>
        <h1>Mice hamel</h1>
        <p className="text-xs mt-2">Magna aligua</p>
      </div>
      <div className="relative w-32 h-32">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rotate-45 bg-primary "></div>

        <div className="relative w-32 h-32 rounded-full border-4 border-primary overflow-hidden">
          <Image
            className="rounded-full"
            src={imgSrc}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CustomersItem;
