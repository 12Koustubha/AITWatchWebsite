import React from "react";
import Checkbox from "./Checkbox";

const ExploreCollection = () => {
  return (
    <>
      <div className="relative font-bold tracking-wider">
        <img
          src="watchface.jpg"
          alt="watch face"
          className="m-[60px] w-[95%] "
        />
        <div>
          <div
            className="w-[26%] p-10  absolute bg-black opacity-40 top-[314px] right-[700px] text-white text-2xl  text-center
        "
          >
            {" "}
            THE PRIME <br />
            AMBASSADOR
            <p className="text-sm mt-[25px]" style={{ color: "aqua" }}>
              EXPLORE COLLECTION
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-6">
      <div className="flex flex-col gap-6  w-[20%]  py-10  px-5 rounded-md" style={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <div className="flex justify-between">
            <p className="text-xl font-normal text-gray-400">Starter plan</p>
            <div className="flex flex-col">
            <p className="font-extrabold text-2xl text-black">$ 10</p>
            <p className="text-gray-600 text-md font-medium">/ Weekly</p>
            </div>
            
           
        </div>
        <img src = "pricing-5.png" alt = "picture" className="h-24 w-24 self-center"/>
        <Checkbox />
      </div>
      <div className="flex flex-col gap-6  w-[20%]  py-10  px-5  rounded-md" style={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}} >
        <div className="flex justify-between">
            <p className="text-xl font-normal text-gray-400">Starter plan</p>
            <div className="flex flex-col">
            <p className="font-extrabold text-2xl text-black">$ 10</p>
            <p className="text-gray-600 text-md font-medium">/ Weekly</p>
            </div>
            
           
        </div>
        <img src = "pricing-5.png" alt = "picture" className="h-24 w-24 self-center"/>
        <Checkbox />
      </div>
      <div className="flex flex-col gap-6 w-[20%]  py-10  px-5  rounded-md" style={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}} >
        <div className="flex justify-between">
            <p className="text-xl font-normal text-gray-400">Starter plan</p>
            <div className="flex flex-col">
            <p className="font-extrabold text-2xl text-black">$ 10</p>
            <p className="text-gray-600 text-md font-medium">/ Weekly</p>
            </div>
            
           
        </div>
        <img src = "pricing-5.png" alt = "picture" className="h-24 w-24 self-center"/>
        <Checkbox />
      </div>
      </div>
    
    </>
  );
};

export default ExploreCollection;
