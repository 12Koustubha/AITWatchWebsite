import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { LiaPaperPlaneSolid } from "react-icons/lia";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col mt-12 gap-10 bg-gray-200 p-10">
        <div className="flex flex-col md:flex-row md:gap-10 justify-between">
          <div className="mt-5">
            <p className="text-black font-bold font-lg ">
              Get in touch
            </p>
            <p className="text-xs text-gray-500 items-center">
              Be the first to know when new products drop andstay tuned.
            </p>
          </div>
          <div className="mt-5">
            <p className="text-sm text-gray-500 mb-2">
              Enter your email address
            </p>
            <div className="flex gap-1 bg-white" >
              <BiSolidUser className="mt-1 w-7 h-7" />
              <input type="text" placeholder="user@email.com" className="focus:outline-none w-[95%]" />
              <LiaPaperPlaneSolid className="text-white w-10 h-10 bg-blue-600" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-y-6 md:gap-0">
          <div className="flex my-0 gap-5">
            <div className="text-lg font-light">Follow Us:</div>
            <div className="flex gap-3">
              <BsFacebook className="w-6 h-6  text-blue-600" />
              <BsTwitter className="w-6 h-6  text-blue-600" />
              <AiFillLinkedin className="w-6 h-6  bg-blue-600 text-white" />
              <BsInstagram className="w-6 h-6  bg-blue-600 text-white" />
              <BsWhatsapp className="w-6 h-6  bg-blue-600 text-white" />
            </div>

          </div>
          <div className="flex items-center">We Accept: &nbsp; &nbsp;
            <img src="payment.png" />
          </div>
        </div>
        <div className="flex gap-3 justify-center md:justify-around my-[3%] text-2xl">
          <div className="flex flex-col">
            <h1 className="text-gray-400 text-base  md:text-3xl">Categories</h1>
            <ul className="text-sm  md:text-2xl text-black font-semibold  my-3">
              <li>Outfit</li>
              <li>sunglasses</li>
              <li>Watches</li>
              <li>Bags</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-400 text-base">Information</h1>
            <ul className="text-sm md:text-2xl text-black font-semibold  my-3">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Sitemap</li>
              <li>FAQ's Page</li>
              <li>Coming Soon</li>
              <li>404 Page</li>
            </ul>

          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-400 text-base">My Account</h1>
            <ul className="text-sm text-black font-semibold  my-3">
              <li>Orders</li>
              <li>Downloads</li>
              <li>Addresses</li>
              <li>Account Details</li>
              <li>LogOut</li>

            </ul>

          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-400 text-base">Commuity</h1>
            <ul className="text-sm text-black font-semibold  my-3">
              <li>VR for Good</li>
              <li>Launch Pad</li>
              <li>Creator's lab</li>
              <li>Account Details</li>
              <li>LogOut</li>

            </ul>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
