import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { LiaPaperPlaneSolid } from "react-icons/lia";
import { BsFacebook,BsTwitter ,BsLinkedin,BsInstagram,BsWhatsapp} from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div
        className="flex flex-col m-12 gap-3"
        style={{ backgroundColor: "rgba(229, 231, 231, 0.353" }}
      >
        <div className="flex justify-between my-0 mx-[120px] mt-20 ">
          <span className="text-black font-bold font-lg ">Get in touch</span>
          <div className="text-sm text-gray-500">Enter your email address</div>
        </div>
        <div className="  flex justify-between my-0 mx-[120px]">
          <span className="text-xs text-gray-500 items-center">
            Be the first to know when new products drop andstay tuned.
          </span>
          <div className="flex w-[200px] p-2 gap-1">
            <span className="mt-[1px]">
              <BiSolidUser />
            </span>
            <input type="text" placeholder="user@email.com" />
            <span className="text-white bg-blue-600 ">
              <LiaPaperPlaneSolid />
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-between my-0 mx-20 gap-5 ">
            <div className="text-lg font-light">Follow Us:</div>
            <div className="flex gap-3">
              <BsFacebook className="w-6 h-6  text-blue-600" />
              <BsTwitter className="w-6 h-6  text-blue-600" />
              <AiFillLinkedin className="w-6 h-6  bg-blue-600 text-white" />
              <BsInstagram className="w-6 h-6  bg-blue-600 text-white" />
              <BsWhatsapp className="w-6 h-6  bg-blue-600 text-white"/>
            </div>
         
          </div>
          <div className="flex items-center">We Accept: &nbsp; &nbsp;
          <img src="payment.png" />
          </div>
        </div>
        <div className="flex gap-4">
          <ul className="text-lg font-normal">Categories
          
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
