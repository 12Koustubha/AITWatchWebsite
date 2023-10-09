import React from "react";
import { AiOutlineRight } from "react-icons/ai";
// import {IoPeopleCircle} from "react-icons/io5"

import { IoMdPeople } from "react-icons/io";
import { BsCheckCircleFill,BsCupHot } from "react-icons/bs";
import { BiHourglass } from "react-icons/bi";

const Achievements = () => {
  return (
    <>
      <div className="flex justify-center gap-10">
        <div
          className="relative  w-[16%] h-[380px] flex flex-col  text-center pt-2"
          style={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
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
        <div
          className="relative  w-[16%] h-[380px] flex flex-col  text-center pt-2"
          style={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
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
        <div
          className="relative w-[16%] h-[380px] flex flex-col  text-center pt-2"
          style={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
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
      <div className="flex justify-center gap-5 mt-[50px]">
        <div
          className="w-[16%] h-[218px]   mt-[50px] flex flex-col items-center justify-center gap-[10px] font-bold "
          style={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          {/* <IoPeopleCircle /> */}
          <IoMdPeople
            color=""
            className="text-white  bg-blue-600 rounded-full w-14 h-14"
          />
          <p className="text-3xl">300</p>
          <p className="text-lg">Happy Clients</p>
        </div>
        <div
          className="w-[16%] h-[218px]   mt-[50px] flex flex-col items-center justify-center gap-[10px] font-bold "
          style={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          {/* <IoPeopleCircle /> */}
          <BsCheckCircleFill
            color=""
            className="text-white  bg-blue-600 rounded-full w-14 h-14"
          />
          <p className="text-3xl">30</p>
          <p className="text-lg">Complete Projects</p>
        </div>
        <div
          className="w-[16%] h-[218px]  mt-[50px] flex flex-col items-center justify-center gap-[10px] font-bold "
          style={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          {/* <IoPeopleCircle /> */}
          <BiHourglass
            color=""
            className="text-white  bg-blue-600 rounded-full w-14 h-14"
          />
          <p className="text-3xl">12</p>
          <p className="text-lg">Pending Projects</p>
        </div>
        <div
          className="w-[16%] h-[218px]  mt-[50px] flex flex-col items-center justify-center gap-[10px] font-bold "
          style={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          {/* <IoPeopleCircle /> */}
          <BiHourglass
            color=""
            className="text-white  bg-blue-600 rounded-full w-14 h-14"
          />
          <p className="text-3xl">960</p>
          <p className="text-lg">Cup Of Tea</p>
        </div>
      </div>
    </>
  );
};

export default Achievements;
