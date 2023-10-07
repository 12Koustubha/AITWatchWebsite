
import React from "react";
import { AiOutlineRight  } from "react-icons/ai";
// import {IoPeopleCircle} from "react-icons/io5"
 
import {IoMdPeople} from "react-icons/io"


const Footer = () => {
  return (
    <>
      <div className="flex justify-center gap-10">
      <div className="relative  w-[16%] h-[380px] flex flex-col  text-center pt-2" style={{boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <div className="flex flex-col">
          <p className="font-semibold text-3xl">Haritage 1921</p>
          <p className="text-gray-500 font-medium text-lg">
            Minimalistic and Modren
          </p>
        </div>
        <div className="text-blue-700 flex gap-3 justify-center font-bold text-xl tracking-wider ">
          EXPLORE <AiOutlineRight className="mt-1" />
        </div>
        <img
          src="watch-4.jpg"
          alt="watch4"
          className="absolute top-[140px] mb-4"
        />
      </div>
      <div className="relative  w-[16%] h-[380px] flex flex-col  text-center pt-2"  style={{boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <div className="flex flex-col">
          <p className="font-semibold text-3xl">Haritage 1921</p>
          <p className="text-gray-500 font-medium text-lg">
            Minimalistic and Modren
          </p>
        </div>
        <div className="text-blue-700 flex gap-3 justify-center font-bold text-xl tracking-wider">
          EXPLORE <AiOutlineRight className="mt-1" />
        </div>
        <img
          src="watch-4.jpg"
          alt="watch4"
          className="absolute top-[140px] mb-4"
        />
      </div>
      <div className="relative w-[16%] h-[380px] flex flex-col  text-center pt-2"  style={{boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <div className="flex flex-col">
          <p className="font-semibold text-3xl">Haritage 1921</p>
          <p className="text-gray-500 font-medium text-lg">
            Minimalistic and Modren
          </p>
        </div>
        <div className="text-blue-700 flex gap-3 justify-center font-bold text-xl tracking-wider ">
          EXPLORE <AiOutlineRight className="mt-1" />
        </div>
        <img
          src="watch-4.jpg"
          alt="watch4"
          className="absolute top-[140px] mb-4"
        />
      </div>
      </div>
     <div className="w-[16%] h-[150px] border border-1 border-red-500 m-auto mt-[50px]">
        {/* <IoPeopleCircle /> */}
        <IoMdPeople color="" className="text-blue-600"/>
     </div>
    </>
  );
};

export default Footer;
