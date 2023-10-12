import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const watches = ["Fasttrack", "Samsung", "Titan", "Apple"];
  return (
    <div className="flex flex-col w-28 items-center rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-2 py-[2px] w-full flex items-center justify-between border border-1 border-gray-400 font-semibold tracking-wider text-lg hover:text-blue-600 cursor-pointer"
      >
        All
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-20 flex flex-col items-start w-28  border border-1 border-gray-400 p-4">
          {watches.map((item, i) => (
            <div className="font-bold">{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
