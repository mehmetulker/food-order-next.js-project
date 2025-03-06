import React from "react";
import Image from "next/image";
import Title from "../../components/ui/Title";

function Item() {
  return (
    <div className="flex bg-white py-14 mt-16 mb-16 ">
      <div className="container mx-auto flex  items-center justify-center flex-wrap md:flex-nowrap">
        <div className="flex justify-center flex-1">
          <div className="relative w-[400px]  h-[400px] sm:w-[600px] sm:h-[600px]">
            <Image
              src="/images/f1.png"
              layout="fill"
              alt=""
              objectFit="contain"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col md:items-start  items-center justify-center px-6 mt-8 gap-4">
          <Title addClass="font-dancing text-4xl mb-6">We Are Feane</Title>
          <span className="text-2xl text-primary font-semibold underline underline-offset-2">
            $10
          </span>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere
            tenetur minima eos reprehenderit praesentium corporis, et sapiente
            dolor laudantium, hic animi molestiae harum magni voluptatum saepe.
            Eligendi, exercitationem sequi?
          </p>
          <div>
            <h1 className="text-xl font-bold mb-3">Choose the Size</h1>
            <div className="flex gap-6 items-center ">
              <div className="relative w-10  h-10 ">
                <Image src="/images/size.png" layout="fill" alt="" />
                <span className="absolute top-0 -right-4 text-xs bg-primary rounded-full px[5px] font-medium">
                  Small
                </span>
              </div>
              <div className="relative w-12  h-12 ">
                <Image src="/images/size.png" layout="fill" alt="" />
                <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px[5px] font-medium">
                  Medium
                </span>
              </div>
              <div className="relative w-16  h-16 ">
                <Image src="/images/size.png" layout="fill" alt="" />
                <span className="absolute top-0 -right-4 text-xs bg-primary rounded-full px[5px] font-medium">
                  Large
                </span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-3">Choose the Size</h1>
            <div className="flex gap-6 items-center ">
              <label className="flex items-center gap-1">
                <input type="checkbox" className=" w-4 h-4 accent-primary" />{" "}
                <span className="text-sm font-semibold">Ketchup</span>
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" className=" w-4 h-4 accent-primary" />{" "}
                <span className="text-sm font-semibold">Moynes</span>
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" className=" w-4 h-4 accent-primary" />{" "}
                <span className="text-sm font-semibold">Hot Sause</span>
              </label>
            </div>
          </div>
          <div>
            <button className="btn-primary mt-3">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
