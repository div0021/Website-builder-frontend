import React from "react";
import ComponentWrapper from "./ComponentWrapper";
import { CiCircleCheck } from "react-icons/ci";
import { IoInformation, IoInformationCircleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

interface HeadingContentProps {
  // Define your component props here
}

type FieldType = {
  field: string;
};

const Field: FieldType[] = [
  { field: "Tools" },
  { field: "AWS Builder" },
  { field: "Start Build" },
  { field: "Build Supplies" },
  { field: "Tooling" },
  { field: "BlueHosting" },
];

const HeadingContent = ({}: HeadingContentProps) => {
  return (
    <div className="w-full pt-32">
      <ComponentWrapper>
        <div className="w-full">
          <h1 className="text-5xl text-heading">
            Best Website builders in the US
          </h1>
        </div>
        <div className="h-[1.33px] w-full mt-4 mb-3 bg-separator" />

        <div className="flex text-sm justify-between items-center">
          <div className=" flex gap-x-2 text-text justify-start items-center">
            <CiCircleCheck className="w-5 h-5" />
            <span>Last Updated</span>
            <span>-</span>
            <span>February 22,2020</span>
            <div className="flex gap-x-0.5 justify-center items-center">
              <IoInformationCircleOutline className="w-5 h-5" />
              <span>Advertising Disclosure</span>
            </div>
          </div>

          <div className="flex gap-x-2 items-center justify-center text-relevant cursor-pointer">
            <span>Top Relevant</span>
            <MdKeyboardArrowDown className="w-5 h-5" />
          </div>
        </div>

        <div className="h-[1.33px] w-full mt-3 mb-4 bg-separator" />

        <div className="flex justify-start items-center text-[13px] text-text gap-x-12">
          {Field.map((el) => (
            <button
              key={el.field}
              type="button"
              className="px-1 lg:px-3 py-1 bg-white rounded-xl"
            >
              <span className="lg:pr-4">{el.field}</span>
            </button>
          ))}
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default HeadingContent;
