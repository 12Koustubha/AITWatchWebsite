import React from "react";
import { AiOutlineRight } from "react-icons/ai";
// import {IoPeopleCircle} from "react-icons/io5"

import { IoMdPeople } from "react-icons/io";
import { BsCheckCircleFill, BsCupHot } from "react-icons/bs";
import { BiHourglass } from "react-icons/bi";

const Achievements = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-20">
        {Array.from({ length: 3 }, () => {
          return (
            <div
              className="w-[95%]  md:w-[20%] flex flex-col items-center pt-2"
              style={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            >
              <p className="font-semibold text-3xl">Haritage 1921</p>
              <p className="text-gray-500 font-medium text-lg">
                Minimalistic and Modren
              </p>
              <div className="text-blue-700 flex gap-3 justify-center font-bold text-base tracking-wider ">
                EXPLORE <AiOutlineRight className="mt-1" />
              </div>
              <div>
                <img
                  src="watch-4.jpg"
                  alt="watch4"
                  className="mb-4 w-full"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-5 mt-[50px]">
        <div className="w-[95%] md:w-[16%] py-10 flex flex-col items-center justify-center gap-[10px] font-bold shadow-2xl shadow-gray-500">
          <IoMdPeople className="text-white  bg-blue-600 rounded-full w-14 h-14"
          />
          <p className="text-3xl">300</p>
          <p className="text-lg">Happy Clients</p>
        </div>
        <div className="w-[95%] md:w-[16%] py-10 flex flex-col items-center justify-center gap-[10px] font-bold shadow-2xl shadow-gray-500">
          <IoMdPeople className="text-white  bg-blue-600 rounded-full w-14 h-14"
          />
          <p className="text-3xl">300</p>
          <p className="text-lg">Happy Clients</p>
        </div>
        <div className="w-[95%] md:w-[16%] py-10 flex flex-col items-center justify-center gap-[10px] font-bold shadow-2xl shadow-gray-500">
          <IoMdPeople className="text-white  bg-blue-600 rounded-full w-14 h-14"
          />
          <p className="text-3xl">300</p>
          <p className="text-lg">Happy Clients</p>
        </div>
        <div className="w-[95%] md:w-[16%] py-10 flex flex-col items-center justify-center gap-[10px] font-bold shadow-2xl shadow-gray-500">
          <IoMdPeople className="text-white  bg-blue-600 rounded-full w-14 h-14"
          />
          <p className="text-3xl">300</p>
          <p className="text-lg">Happy Clients</p>
        </div>
      </div>
    </>
  );
};

export default Achievements;
