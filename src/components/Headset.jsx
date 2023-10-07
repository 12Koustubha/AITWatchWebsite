import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Headset = () => {
  return (
    <>
      <div className="flex flex-col">
        <div
          className=" flex px-[60px] m-[90px]"
          style={{ background: " rgba(229, 231, 231, 0.760)" }}
        >
          <img src="headset.jpg" alt="Headset" className="w-[80%]" />
          <div className="flex justify-center text-center items-center font-bold text-xl tracking-wider">
            All-in one VR <br />
            Always ready when you are <br />
            Oculus Go is our all in-one VR headset that's <br />
            portable and easy to use.Experience <br />
            entertainment on thr go with no PC, wires or hassles.
          </div>
        </div>
        <div className="flex justify-center gap-x-10">
          <div className="flex flex-col gap-2">
            <img src="product-2.jpg" alt="earphone" />
            <div className=" p-6 bg-li border border-transparent " style={{background: "rgba(229, 231, 231, 0.353)"}}>
              <p className="font-bold text-2xl tracking-wider">
                {" "}
                Oculus Quest
              </p>
              <p className="text-sm text-gray-500">
                All in one gaming headset with lightweight, <br /> flexible design
              </p>
              <div className="flex justify-between mt-3 ">
                <span className="font-bold text-pink-400 text-xl">$ 399</span>
                <button type = "button" onclick ="" className="flex justify-between text-white bg-blue-800 py-2 px-6 font-bold rounded-md">
                  <div className="flex justify-between gap-2">
                  <span className="flex items-center"><AiOutlineShoppingCart  className="w-5 h-5"/> </span> Add to cart 
                    </div> 
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img src="product-2.jpg" alt="earphone" />
            <div className=" p-6 bg-li border border-transparent " style={{background: "rgba(229, 231, 231, 0.353)"}}>
              <p className="font-bold text-2xl tracking-wider">
                {" "}
                Oculus Quest
              </p>
              <p className="text-sm text-gray-500">
                All in one gaming headset with lightweight, <br /> flexible design
              </p>
              <div className="flex justify-between mt-3 ">
                <span className="font-bold text-pink-400 text-xl">$ 399</span>
                <button type = "button" onclick ="" className="flex justify-between text-white bg-blue-800 py-2 px-6 font-bold rounded-md">
                  <div className="flex justify-between gap-2">
                  <span className="flex items-center"><AiOutlineShoppingCart  className="w-5 h-5"/> </span> Add to cart 
                    </div> 
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img src="product-2.jpg" alt="earphone" />
            <div className=" p-6 bg-li border border-transparent " style={{background: "rgba(229, 231, 231, 0.353)"}}>
              <p className="font-bold text-2xl tracking-wider">
                {" "}
                Oculus Quest
              </p>
              <p className="text-sm text-gray-500">
                All in one gaming headset with lightweight, <br /> flexible design
              </p>
              <div className="flex justify-between mt-3 ">
                <span className="font-bold text-pink-400 text-xl">$ 399</span>
                <button type = "button" onclick ="" className="flex justify-between text-white bg-blue-800 py-2 px-6 font-bold rounded-md">
                  <div className="flex justify-between gap-2">
                  <span className="flex items-center"><AiOutlineShoppingCart  className="w-5 h-5"/> </span> Add to cart 
                    </div> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headset;
