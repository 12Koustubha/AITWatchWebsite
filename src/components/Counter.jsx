import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex mt-3">
      {/* <h1>Counter: {count}</h1> */}
      <button
        onClick={handleDecrement}
        className="py-1 px-3 border border-1 border-gray-400 text-gray-400"
      >
        -
      </button>
      <p className="py-1 px-3 border border-1 border-gray-400 text-black">{count} </p>
      <button
        onClick={handleIncrement}
        className="py-1 px-3 border border-1 border-gray-400 text-gray-400"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
