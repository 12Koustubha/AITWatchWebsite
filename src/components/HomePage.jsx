import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck,faCartShopping } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <>
    <div>
   <div className="relative flex justify-between w-full">
        <div className="flex flex-col gap-4 w-[32%] p-12  absolute font-normal text-[32px]  bottom-[180px] left-[60px] text-center  tracking-wider border-transparent border-1 bg-white ">
          <p>
            Effortlessly cool, for <br />
            the traditionalists of <br />
            today
          </p>
          <p className="flex text-blue-600 text-sm font-semibold tracking-wide">
            EXPLORE COLLECTION
          </p>
        </div>
        <div className="w-full flex flex-col">
          {" "}
          <img
            src="Nomos1.jpg"
            alt="watch1"
            className="w-[94%] h-[38vw]  mx-12 self-end bg-blend-normal"
          />
        </div>
      </div>
      <div className="flex  mt-10 justify-center  gap-x-11">
        <div className="flex flex-col  gap-3 ">
          <FontAwesomeIcon
            icon={faTruck}
            style={{ color: "#2a5cb2" }}
            className="w-[400px] h-14"
          />
          <p className="text-black font-bold tracking-wider text-xl flex justify-center">
            Two Hour Delivery
          </p>
          <div className="text-gray-700">
            <p className="flex justify-center">
              Available in most metros on selected in-stock{" "}
            </p>
            <p className="flex justify-center">Products</p>
          </div>
          <div className="text-blue-600 text-lg font-bold flex justify-center mt-4">
            LEARN MORE
          </div>
        </div>

        <div className="flex flex-col  gap-3 ">
          <FontAwesomeIcon
            icon={faTruck}
            style={{ color: "#2a5cb2" }}
            className="w-[400px] h-14"
          />
          <p className="text-black font-bold tracking-wider text-xl flex justify-center">
            Two Hour Delivery
          </p>
          <div className="text-gray-700">
            <p className="flex justify-center">
              Available in most metros on selected in-stock{" "}
            </p>
            <p className="flex justify-center">Products</p>
          </div>
          <div className="text-blue-600 text-lg font-bold flex justify-center mt-4">
            CONTACT US
          </div>
        </div>

        <div className="flex flex-col  gap-3 ">
          <FontAwesomeIcon
            icon={faTruck}
            style={{ color: "#2a5cb2" }}
            className="w-[400px] h-14"
          />
          <p className="text-black font-bold tracking-wider text-xl flex justify-center">
            Two Hour Delivery
          </p>
          <div className="text-gray-700">
            <p className="flex justify-center">
              Available in most metros on selected in-stock{" "}
            </p>
            <p className="flex justify-center">Products</p>
          </div>
          <div className="text-blue-600 text-lg font-bold flex justify-center mt-4">
            LEARN MORE
          </div>
        </div>
      </div>
      <div className="flex gap-10 justify-center  border border-transparent mt-9">
        <div className="relative">
        <img src="product-1.jpg" className="mt-14"  style={{background:" rgba(229, 231, 231, 0.760)"}}/>
        <div className="w-[50%] absolute bottom-0 left-[140px] flex flex-col gap-2 justify-center items-center p-8 bg-black" >
       
            <p className="text-white">Metro 38 Date</p>
            <p className="text-gray-500">Reference 1102</p>
        
        
            <p className="bg-pink-400 p-2  flex justify-center items-center">
            <FontAwesomeIcon icon={faCartShopping} className="flex justify-center mt-[2px]"/>
               &nbsp; $ 399
            </p>
        </div>
        </div>
       
        <div className="relative">
        <img src="product-1.jpg" className="mt-14"  style={{background:" rgba(229, 231, 231, 0.760)"}}/>
        <div className="w-[50%] absolute bottom-0 left-[140px] flex flex-col gap-2 justify-center items-center p-8 bg-black" >
       
            <p className="text-white">Metro 38 Date</p>
            <p className="text-gray-500">Reference 1102</p>
        
        
            <p className="bg-pink-400 p-2  flex justify-center items-center">
            <FontAwesomeIcon icon={faCartShopping} className="flex justify-center mt-[2px]"/>
               &nbsp; $ 399
            </p>
        </div>
        </div>
      </div>
    </div>
   
    </>
  );
};

export default HomePage;
