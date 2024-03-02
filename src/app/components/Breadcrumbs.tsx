import React from "react";
import ComponentWrapper from "./ComponentWrapper";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type BreadcrumbsElementType = {
  element: string;
};

interface BreadcrumbsProps {
  // Define your component props here
  element: BreadcrumbsElementType[];
}

const Breadcrumbs = ({ element }: BreadcrumbsProps) => {
  return (
    <div className="w-full mt-5">
      <ComponentWrapper>
        <div className="flex text-text items-center justify-start pl-1 gap-x-3 text-sm">
          {element.map((el, index) => {
            if (index === element.length - 1) {
              return (
                
                  <span key={el.element}>{el.element}</span>
                
              );
            } else {
              return (
                
                  <span key={el.element} className="flex">
                    <span>{el.element}</span>
                  <MdOutlineKeyboardArrowRight className="ml-3 w-5 h-5" />

                  </span>
                
              );
            }
          })}
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Breadcrumbs;
