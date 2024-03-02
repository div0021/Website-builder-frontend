import React from "react";
import { FiSearch } from "react-icons/fi";

interface NavSearchProps {
  // Define your component props here
}

const NavSearch = ({}: NavSearchProps) => {
  return (
    <div className="min-w-64 h-9 flex flex-row-reverse gap-x-2 bg-white rounded-lg p-1 border border-transparent group transition-all duration-200 ease-in-out">
      <input
        type="text"
        className="w-full outline-none hover:outline-none focus-within:outline-none peer tracking-wide group-hover:text-heading group-focus-within:text-heading text-zinc-500/70 transition-all duration-300 ease-in-out"
      />

      <FiSearch className="w-6 h-6 ml-1 group-hover:text-zinc-700 group-focus-within:text-zinc-700  transition-all duration-300 ease-in-out text-zinc-500/70" />
    </div>
  );
};

export default NavSearch;
