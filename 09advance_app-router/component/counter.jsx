'use client'
import React from "react";
import { useState } from "react";

const Increment = () => {
  const [counter, setCounter] = useState(0);
  
  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  }

  return (
    <div className="p-6">
      <h2 className="p-2 m-4 font-bold">Counter : {counter}</h2>
      <button onClick={incrementCounter} className="bg-blue-700 rounded-lg p-2 m-4">
        Increment
      </button>
    </div>
  );
};

export default Increment;
