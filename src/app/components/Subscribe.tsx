"use client"
import React from "react";
import ComponentWrapper from "./ComponentWrapper";

const Subscribe = () => {
  return (
    <div className="bg-background w-full">
      <ComponentWrapper>
        <div className="mt-5 w-full flex flex-col sm:flex-row gap-y-10 items-center sm:items-center justify-between pl-3 py-10">
          <h4 className="w-full text-center sm:text-start text-text text-3xl sm:w-3/5 md:2/5 gap-x-5">
            Sign up and get exclusive special deals
          </h4>
          <div className="flex justify-center items-center w-2/3 sm:w-2/5 rounded-xl cursor-pointer">
            <input
              type="email"
              className=" hover:outline-none outline-none focus:outline-none px-3 py-2 rounded-l-xl w-full text-counttxt tracking-wide hover:text-black focus-within:text-black transition-all duration-300 ease-in-out border-l border-y border-link sm:border-none"
            />
            <button
              type="submit"
              className="text-white bg-link px-3 py-2 rounded-r-xl shrink-0"
              onClick={(e)=>e.preventDefault()}
            >
              Sign up
            </button>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Subscribe;
