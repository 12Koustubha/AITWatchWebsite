import React, { useState } from "react";
import Counter from "./COunter";
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ShoppingCart = () => {
  const countries = ["India", "USA", "Canada", "UK"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex justify-center  relative w-[80%]  mt-30 my-[50px] mx-auto py-[360px] px-[100px]"
        style={{ backgroundColor: "rgba(229, 231, 231, 0.353" }}
      >
        <div className="absolute top-[60px] flex  flex-col items-center">
          <p className="text-gray-500 text-base font-semibold">
            All in-one VR{" "}
          </p>
          <p className="text-4xl font-bold tracking-wider">Oculus VR</p>
        </div>

        <div className="absolute top-[170px] left-[224px]">
          <img src="product-3.jpg" alt="earphones" className=" bg-white " />
        </div>
      </div>
      <div
        className="flex flex-col gap-y-10  m-[40px] w-[95%]"
        style={{ backgroundColor: "rgba(229, 231, 231, 0.353" }}
      >
        <div className="flex gap-6 justify-center ">
          <img src="thunb-1.jpg" alt="thumb1" className="mt-10" />
          <img src="thunb-2.jpg" alt="thumb2" className="mt-10" />
          <img src="thunb-3.jpg" alt="thumb3" className="mt-10" />
          <img src="thunb-4.jpg" alt="thumb4" className="mt-10" />
          <img src="thunb-5.jpg" alt="thumb5" className="mt-10" />
        </div>
        <div className="flex my-0 mx-24 gap-32 mt-10 mb-10">
          <div className="  flex flex-col">
            <p className="text-lg text-gray-400 font-medium">All-In-One VR</p>
            <p className="text-5xl text-black font-bold">Oculus VR</p>
            <div className="text-lg text-gray-400 mt-6">Select your Oculus</div>
            <div className="flex gap-5">
              <img
                src="product-items-1.jpg"
                alt="item1"
                className="hover: border border-1 border-blue-600 "
              />
              <img src="product-items-2.jpg" alt="item2" />
              <img src="product-items-3.jpg" alt="item3" />
            </div>
            <div className="mt-8 flex gap-5 text-gray-700 text-sm font-semibold justify-between">
              <div className="flex flex-col">
                Select color:Grey
                <div className="flex gap-2 mt-2">
                  <p className="rounded-full p-5 w-2 h-2 bg-gray-200"></p>
                  <p className="rounded-full p-5 w-2 h-2 bg-pink-200"></p>
                  <p className="rounded-full p-5 w-2 h-2 bg-black"></p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-700 text-sm font-semibold">
                  Memory(GB):
                </p>
                <p>
                  <button
                    onClick=""
                    className=" mt-3 px-2 py-[2px] w-full flex items-center justify-between border border-1 border-gray-300 font-semibold tracking-wider text-base hover:text-blue-600 cursor-pointer"
                  >
                    32gb
                    <AiOutlineCaretDown />
                  </button>
                </p>
              </div>
              <div className="text-gray-700 text-sm font-semibold">
                Select Quantity:
                <Counter />
              </div>
            </div>

            <div className="mt-5 flex text-gray-700 text-sm">
              Select Shipping Country :{" "}
              <span className="text-black text-sm font-semibold">
                {" "}
                + $ 30 USD
              </span>
            </div>

            <div className="  flex flex-col w-[186px] items-center rounded-lg">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="px-2 py-[2px] w-full flex items-center text-gray-600 justify-between border border-1 border-gray-400 font-semibold tracking-wider text-sm hover:text-blue-600 cursor-pointer"
              >
                -- Select Country --
                {!isOpen ? (
                  <AiOutlineCaretDown className="h-8" />
                ) : (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>

              {isOpen && (
                <div className="flex flex-col items-start w-[186px]  border border-1 border-gray-400 p-4">
                  {countries.map((item, i) => (
                    <div className="font-bold">{item}</div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-[20%] gap-[18px] mt-[112px]">
            <p className="text-xs font-medium text-black">Price:</p>
            <div className="flex gap-2">
              <span className="text-2xl font-bold tracking-wider">
                $ 149 USD
              </span>
              <span className="text-gray-500 font-semibold mt-1 line-through">
                $ 179 USD
              </span>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onclick=""
                className="flex justify-between text-white bg-blue-600 py-[7px] px-5 font-bold rounded"
              >
                <div className="flex justify-between gap-2">
                  <span className="flex items-center">
                    <AiOutlineShoppingCart className="w-5 h-5" />{" "}
                  </span>{" "}
                  Add to cart
                </div>
              </button>
              <button
                type="button"
                onclick=""
                className="flex justify-between text-white bg-pink-500 py-[5px] px-3 font-bold rounded"
              >
                <div className="flex justify-between gap-2">
                  <span className="flex items-center">
                    <AiOutlineShoppingCart className="w-5 h-5" />{" "}
                  </span>{" "}
                 Buy Now
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
