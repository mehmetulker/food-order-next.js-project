import React from "react";
import Image from "next/image";
import { FaCreditCard, FaClock, FaTruck, FaCheckCircle } from "react-icons/fa";

const ProfileOrder = () => {
  return (
    <div className="h-[80vh]  w-full flex flex-col items-center justify-start py-8 ">
      <div className="w-full max-w-screen-xl px-4">
        <h1 className="text-4xl font-bold font-dancing text-center mb-8">
          Order Details
        </h1>

        <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
          <table className="min-w-full text-center  bg-gray-800 text-white">
            <thead>
              <tr className="bg-gray-900 text-gray-300 uppercase text-sm text-center">
                <th className="px-6 py-3 ">ORDER ID</th>
                <th className="px-6 py-3 ">ADRESS</th>
                <th className="px-6 py-3 ">DATE</th>
                <th className="px-6 py-3 ">TOTAL</th>
                <th className="px-6 py-3 ">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700 hover:bg-primary">
                <td className="px-6 py-4  space-x-3">21255966....</td>
                <td className="px-6 py-4">İstanbul</td>
                <td className="px-6 py-4">18.03.2025</td>
                <td className="px-6 py-4">$18</td>
                <td className="px-6 py-4">Preparing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfileOrder;
