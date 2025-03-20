"use client";
import React from "react";
import Image from "next/image";
import { FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { TbCategoryFilled } from "react-icons/tb";
import { useState } from "react";

import OrderList from "./OrderList";
import Product from "./Product";
import Categories from "./Categories";
import Footer from "./Footer";

function AdminProfile() {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="w-full sm:h-[80vh] flex flex-col sm:flex-row items-stretch justify-center bg-gray-100 p-2 sm:p-6">
      {/* Profile Info Section */}
      <div className="flex flex-col w-full   sm:w-1/3 bg-white rounded-lg shadow-md p-3 sm:p-6 mb-6 sm:mb-0">
        <div className="flex flex-col items-center">
          <Image
            src="/images/admin.png"
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold mt-4">Admin </h1>
        </div>
        <ul className="mt-6 w-full space-y-3">
          <li
            className={`group flex items-center gap-2 border-b border-gray-300 pb-2 rounded-md cursor-pointer text-gray-700 pl-4 transition-colors duration-200 ${
              tabs === 0
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <IoFastFoodSharp className="transition-colors duration-200 text-gray-600 group-hover:text-white" />
            <span>Products</span>
          </li>
          <li
            className={`group flex items-center gap-2 border-b border-gray-300 pb-2 rounded-md cursor-pointer text-gray-700 pl-4 transition-colors duration-200 ${
              tabs === 1
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <FaClipboardList className="transition-colors duration-200 text-gray-600 group-hover:text-white" />
            <span>Orders</span>
          </li>
          <li
            className={`group flex items-center gap-2 border-b border-gray-300 pb-2 rounded-md cursor-pointer text-gray-700 pl-4 transition-colors duration-200 ${
              tabs === 2
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <TbCategoryFilled className="transition-colors duration-200 text-gray-600 group-hover:text-white" />
            <span>Categories</span>
          </li>
          <li
            className={`group flex items-center gap-2 border-b border-gray-300 pb-2 rounded-md cursor-pointer text-gray-700 pl-4 transition-colors duration-200 ${
              tabs === 3
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <FaClipboardList className="transition-colors duration-200 text-gray-600 group-hover:text-white" />
            <span>Footer</span>
          </li>
          <li
            className={`group flex items-center gap-2 border-b border-gray-300 pb-2 rounded-md cursor-pointer text-gray-700 pl-4 transition-colors duration-200 ${
              tabs === 4
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
            onClick={() => setTabs(4)}
          >
            <FaSignOutAlt className="transition-colors duration-200 text-gray-600 group-hover:text-white" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col w-full sm:w-2/3 bg-white rounded-lg shadow-md p-3 sm:p-6">
        {tabs === 0 && <Product />}
        {tabs === 1 && <OrderList />}
        {tabs === 2 && <Categories />}
        {tabs === 3 && <Footer />}
      </div>
    </div>
  );
}

export default AdminProfile;
