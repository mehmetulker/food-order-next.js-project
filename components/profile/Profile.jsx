"use client";
import React from "react";
import Image from "next/image";
import { FaUser, FaLock, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import Account from "./Acount";
import Password from "./Password";
import ProfileOrder from "./ProfileOrder";

function Profile() {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="w-full sm:h-[80vh] flex flex-col sm:flex-row items-stretch justify-center bg-gray-100 p-2 sm:p-6">
      {/* Profile Info Section */}
      <div className="flex flex-col w-full   sm:w-1/3 bg-white rounded-lg shadow-md p-3 sm:p-6 mb-6 sm:mb-0">
        <div className="flex flex-col items-center">
          <Image
            src="/images/client3.jpg"
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold mt-4">Emin Başlayan</h1>
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
            <FaUser className="transition-colors duration-200 text-gray-600 group-hover:text-white" />
            <span>Account</span>
          </li>
          <li
            className={`group flex items-center gap-2 border-b border-gray-300 pb-2 rounded-md cursor-pointer text-gray-700 pl-4 transition-colors duration-200 ${
              tabs === 1
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <FaLock className="transition-colors duration-200 text-gray-600 group-hover:text-white" />
            <span>Password</span>
          </li>
          <li
            className={`group flex items-center gap-2 border-b border-gray-300 pb-2 rounded-md cursor-pointer text-gray-700 pl-4 transition-colors duration-200 ${
              tabs === 2
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <FaClipboardList className="transition-colors duration-200 text-gray-600 group-hover:text-white" />
            <span>Orders</span>
          </li>
          <li
            className={`group flex items-center gap-2 border-b border-gray-300 pb-2 rounded-md cursor-pointer text-gray-700 pl-4 transition-colors duration-200 ${
              tabs === 3
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <FaSignOutAlt className="transition-colors duration-200 text-gray-600 group-hover:text-white" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col w-full sm:w-2/3 bg-white rounded-lg shadow-md p-3 sm:p-6">
        {tabs === 0 && <Account />}
        {tabs === 1 && <Password />}
        {tabs === 2 && <ProfileOrder />}
      </div>
    </div>
  );
}

export default Profile;
