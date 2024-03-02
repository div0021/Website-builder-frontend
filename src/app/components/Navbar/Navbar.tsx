import React from "react";
import ComponentWrapper from "../ComponentWrapper";
import NavSearch from "./NavSearch";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="bg-navbg w-full text-navtxt text-sm fixed top-0 z-30">
      <ComponentWrapper>
        <div className="w-full flex py-6 items-center justify-between  lg:justify-end md:gap-x-14 lg:gap-x-20 pl-14 md:pl-10 pr-5 lg:mr-0 lg:pl-24">
          <NavSearch />
          <NavItems />
        </div>
      </ComponentWrapper>
    </nav>
  );
};

export default Navbar;
