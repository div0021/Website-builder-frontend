"use client"
import React, { useState } from "react";
import { scrollTo } from "../../utils/scollTo";
import { RxHamburgerMenu } from "react-icons/rx";
import { cn } from "@/app/utils/cn";

type NavItemTypes = {
  item: string;
  link: string;
};

const NavItem: NavItemTypes[] = [
  { item: "Categories", link: "websitebuilder" },
  { item: "Website Builders", link: "top" },
  { item: "Today's deals", link: "deals" },
];

const NavItems = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <ul className="hidden md:flex justify-between items-center gap-x-12 lg:gap-x-20">
        {NavItem.map((el) => (
          <li
            key={el.item}
            className="text-navtxt/90 hover:text-navtxt hover:scale-105 text-sm cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => scrollTo(el.link)}
          >
            {el.item}
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      <div
        className="md:hidden cursor-pointer relative hover:"
        onClick={() => setOpen((pre) => !pre)}
      >
        <RxHamburgerMenu className="h-6 w-6" />
        <ul
          className={cn(
            "absolute top-7 -left-44 w-44 shadow-md h-auto bg-white rounded-l-xl rounded-br-xl flex-col items-center justify-start p-2 hidden",
            { flex: open }
          )}
        >
          {NavItem.map((el) => (
            <li
              key={el.item}
              className="text-black p-2 hover:bg-background hover:scale-105 text-sm cursor-pointer transition-all duration-300 ease-in-out w-full"
              onClick={() => {
                scrollTo(el.link);
                setOpen(false);
              }}
            >
              {el.item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavItems;
