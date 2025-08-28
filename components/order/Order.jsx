import React from "react";
import Image from "next/image";
import { FaCreditCard, FaClock, FaTruck, FaCheckCircle } from "react-icons/fa";

const Order = () => {
  return (
    <div className="h-[80vh]  w-full flex flex-col items-center justify-start py-8 bg-gray-100">
      <div className="w-full max-w-screen-xl px-4">
        <h1 className="text-3xl font-bold font-dancing text-center mb-8">
          Order Details
        </h1>
        <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white">
            <thead>
              <tr className="bg-gray-900 text-gray-300 uppercase text-sm">
                <th className="px-6 py-3 text-left">ORDER ID</th>
                <th className="px-6 py-3 text-left">CUSTOMER</th>
                <th className="px-6 py-3 text-left">ADRES</th>
                <th className="px-6 py-3 text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700 hover:bg-primary">
                <td className="px-6 py-4 flex items-center space-x-3">
                  21255966....
                </td>
                <td className="px-6 py-4">Mehmet Ülk...</td>
                <td className="px-6 py-4">İstanbul</td>
                <td className="px-6 py-4">$18</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary p-4 animate-pulse">
                <FaCreditCard size={32} className="text-gray-700" />
              </div>
              <span className="mt-2 text-lg font-medium">Payment</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-gray-200 p-4">
                <FaClock size={32} className="text-gray-700" />
              </div>
              <span className="mt-2 text-lg font-medium">Preparing</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-gray-200 p-4">
                <FaTruck size={32} className="text-gray-700" />
              </div>
              <span className="mt-2 text-lg font-medium">On the Way</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-gray-200 p-4">
                <FaCheckCircle size={32} className="text-gray-700" />
              </div>
              <span className="mt-2 text-lg font-medium">Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
