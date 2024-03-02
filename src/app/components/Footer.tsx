import React from "react";
import ComponentWrapper from "./ComponentWrapper";
import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 bg-navbg w-full">
      <ComponentWrapper>
        <div className="w-full mt-5 pt-10 pb-20 lg:pb-32 xl:px-0 px-5">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex flex-col justify-start items-start gap-y-3">
              <h6 className="text-white">CATEGORIES</h6>
              <ul className="text-footertxt space-y-4">
                <li className="hover:scale-105 text-[13px] cursor-pointer transition-all duration-300 ease-in-out">
                  Web Builder
                </li>
                <li className="hover:scale-105 text-[13px] cursor-pointer transition-all duration-300 ease-in-out">
                  Hosting
                </li>
                <li className="hover:scale-105 text-[13px] cursor-pointer transition-all duration-300 ease-in-out">
                  Data Center
                </li>
                <li className="hover:scale-105 text-[13px] cursor-pointer transition-all duration-300 ease-in-out">
                  Robotic-Automation
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-start items-start gap-y-3 w-full">
              <h6 className="text-white">CONTACT</h6>
              <ul className="text-footertxt space-y-4">
                <li className="hover:scale-105 text-[13px] cursor-pointer transition-all duration-300 ease-in-out">
                  Contact
                </li>
                <li className="hover:scale-105 text-[13px] cursor-pointer transition-all duration-300 ease-in-out">
                  Privacy Policy
                </li>
                <li className="hover:scale-105 text-[13px] cursor-pointer transition-all duration-300 ease-in-out">
                  Terms Of Service
                </li>
                <li className="hover:scale-105 text-[13px] cursor-pointer transition-all duration-300 ease-in-out">
                  Categories
                </li>
                <li className="hover:scale-105 text-[13px] cursor-pointer transition-all duration-300 ease-in-out">
                  About
                </li>
              </ul>
            </div>

            <div className="flex justify-start items-center w-full text-navtxt">
              <div className="flex items-center justify-start gap-x-2 cursor-pointer">
                <span>United States</span>
                <FaChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Footer;
