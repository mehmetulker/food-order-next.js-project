import React from "react";
import Image from "next/image";

const Product = () => {
  return (
    <div className="h-[80vh]  w-full flex flex-col items-center justify-start py-8 ">
      <div className="w-full max-w-screen-xl px-4">
        <h1 className="text-4xl font-bold font-dancing text-center mb-8">
          Product Details
        </h1>
        <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
          <table className="min-w-full text-center  bg-gray-800 text-white">
            <thead>
              <tr className="bg-gray-900 text-gray-300 uppercase text-sm text-center">
                <th className="px-6 py-3 ">IMAGE</th>
                <th className="px-6 py-3 ">ID</th>
                <th className="px-6 py-3 ">TITLE</th>
                <th className="px-6 py-3 ">PRICE</th>
                <th className="px-6 py-3 ">aCTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700 hover:bg-primary">
                <td className="px-6 py-4  space-x-3 flex justify-center items-center">
                  <Image
                    src="/images/f1.png"
                    alt="Product Image"
                    width={50}
                    height={50}
                  />
                </td>
                <td className="px-6 py-4">21255966....</td>

                <td className="px-6 py-4">Good Pizza</td>
                <td className="px-6 py-4">$18</td>
                <td className="px-6 py-4">
                  <button className="btn-danger">DELETE</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;
