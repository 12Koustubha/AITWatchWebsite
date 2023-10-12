import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <>
      <div>
        <div className="relative flex justify-between w-full">
          <div className="flex flex-col gap-4  absolute font-normal text-[2px] top-[25%] text-center tracking-wider border-transparent border-1 bg-white ">
            <div className="text-sm sm:text-base md:text-xl xl:text-4xl p-1 md:p-5">
              <p>
                Effortlessly cool, for <br />
                the traditionalists of <br />
                today
              </p>
              <p className="flex text-blue-600 font-semibold tracking-wide">
                EXPLORE COLLECTION
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <img
              src="Nomos1.jpg"
              alt="watch1"
              className="w-full h-[38vw] self-end bg-blend-normal"
            />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap mt-10 justify-center gap-x-4 gap-y-3 md:gap-y-0">
          <div className="flex flex-col  gap-3 justify-center items-center" >
            <div className="">
              <FontAwesomeIcon
                icon={faTruck}
                style={{ color: "#2a5cb2" }}
                className="w-full h-14"
              />
            </div>
            <p className="text-black font-bold tracking-wider text-xl">
              Two Hour Delivery
            </p>
            <p className="text-gray-700 text-center">
              Available in most metros on selected in-stock Products
            </p>
            <p className="text-blue-600 text-lg font-bold mt-4">
              LEARN MORE
            </p>
          </div>
          <div className="flex flex-col  gap-3 justify-center items-center">
            <div className="">
              <FontAwesomeIcon
                icon={faTruck}
                style={{ color: "#2a5cb2" }}
                className="w-full h-14"
              />
            </div>
            <p className="text-black font-bold tracking-wider text-xl">
              Get Help Buying
            </p>
            <p className="text-gray-700 text-center">
              Have question? Call a specalists or chat online for help
            </p>
            <p className="text-blue-600 text-lg font-bold mt-4">
              CONTACT US
            </p>
          </div>
          <div className="flex flex-col  gap-3 justify-center items-center" >
            <div className="">
              <FontAwesomeIcon
                icon={faTruck}
                style={{ color: "#2a5cb2" }}
                className="w-full h-14"
              />
            </div>
            <p className="text-black font-bold tracking-wider text-xl">
              Find the card for you
            </p>
            <p className="text-gray-700 text-center">
              Get 3% daily cash  with special financing from us.
            </p>
            <p className="text-blue-600 text-lg font-bold mt-4">
              LEARN MORE
            </p>
          </div>
        </div>

      </div>
      <div className="flex gap-10 justify-center  border border-transparent flex-wrap md:flex-nowrap">
        <div className="relative">
          <img src="product-1.jpg" className="mt-14" style={{ background: " rgba(229, 231, 231, 0.760)" }} />
          <div className="w-[50%] absolute bottom-0 left-[140px] flex flex-col gap-2 justify-center items-center p-8 bg-black" >

            <p className="text-white">Metro 38 Date</p>
            <p className="text-gray-500">Reference 1102</p>


            <p className="bg-pink-400 p-2  flex justify-center items-center">
              <FontAwesomeIcon icon={faCartShopping} className="flex justify-center mt-[2px]" />
              &nbsp; $ 399
            </p>
          </div>
          
        </div>
        <div className="flex gap-10 justify-center  border border-transparent">
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
