import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex  flex-col text-white items-center justify-center bg-secondary w-full h-[410] gap-4">
      <div className="flex container mx-auto  pt-20 pb-10 justify-center flex-col sm:flex-row gap-8">
        <div className="flex flex-col flex-1 items-center text-center">
          <h4 className="font-dancing text-4xl mb-4">Contact Us</h4>
          <p className="flex flex-row items-center gap-2">
            <span>
              <MdLocationOn />
            </span>
            <span>Location</span>
          </p>
          <p className="flex flex-row items-center gap-2">
            <span>
              <FaPhone />
            </span>
            <span>Call +01 123456789</span>
          </p>
          <p className="flex flex-row items-center gap-2">
            <span>
              <MdEmail />
            </span>
            <span>demo@gmail.com</span>
          </p>
        </div>

        <div className="flex flex-col flex-1 items-center text-center">
          <h4 className="font-dancing text-4xl mb-4">Feane</h4>
          <p className="mb-2">
            Necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <button className="flex items-center justify-center bg-white text-secondary hover:text-primary w-8 h-8 rounded-full  p-2">
              <FaFacebookF />
            </button>
            <button className="flex items-center justify-center bg-white text-secondary hover:text-primary w-8 h-8 rounded-full  p-2">
              <FaXTwitter />
            </button>
            <button className="flex items-center justify-center bg-white text-secondary hover:text-primary w-8 h-8 rounded-full  p-2">
              <FaLinkedinIn />
            </button>
            <button className="flex items-center justify-center bg-white text-secondary hover:text-primary w-8 h-8 rounded-full  p-2">
              <FaInstagram />
            </button>
            <button className="flex items-center justify-center bg-white text-secondary hover:text-primary w-8 h-8 rounded-full  p-2">
              <FaPinterest />
            </button>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center text-center">
          <h4 className="font-dancing text-4xl mb-4">Opening Hours</h4>
          <p>Everyday</p>
          <p>10.00 AM - 10.00 PM</p>
        </div>
      </div>
      <h2 className="pb-5">
        © 2024 All Rights Reserved By Free Html Templates
      </h2>
    </div>
  );
};

export default Footer;
