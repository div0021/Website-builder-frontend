import React from "react";
import ComponentWrapper from "./ComponentWrapper";
import Image from "next/image";
import { IoInformationCircleOutline, IoTrophyOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

interface WebsiteBuilderCardProps {
  // Define your component props here
}

const WebsiteBuilderCard = () => {
  return (
    <div className="w-full mt-5" id="websitebuilder">
      <ComponentWrapper>
        <div className="w-full space-y-14 sm:space-y-10 mt-10">
          {/* first component */}
          <div className="relative w-full grid grid-cols-11 items-center justify-between rounded-xl group bg-white">
            <div className="absolute -top-4 -left-3.5 w-36 h-9 rounded-r-lg bg-tag text-center flex justify-center items-center text-white gap-x-2">
              <IoTrophyOutline className="w-5 h-5" />
              <span>Best Choice</span>
            </div>

            <div className="absolute top-9 -left-6 flex justify-center items-center border border-separator rounded-full text-counttxt text-xl bg-white hover:border-transparent group-hover:border-transparent h-11 w-11">
              1
            </div>

            <div className="col-span-4 sm:col-span-2 flex flex-col text-text gap-y-5 sm:gap-y-2 items-center justify-center">
              <Image
                src="/computer.png"
                width={164}
                height={144}
                alt="computer"
                className="scale-125 sm:scale-100"
              />
              <p>Builder</p>
            </div>
            <div className="text-text col-span-7 sm:col-span-6 pl-5">
              <div className="pt-5 gap-y-2 flex flex-col justify-center items-start">
                <p className="text-base sm:w-11/12">
                  <span className="font-bold">
                    WixPro 72-inch Responsive Website Builder-
                  </span>{" "}
                  Comprehensive Digital Platform Creation Tool, Streamlined
                  Design interface for Professional Website and Online Stores
                  (Black/Blue)
                </p>
                <p className="font-bold">Main highlights</p>
                <p className="ml-5 sm:w-11/12">
                  [What You Get]: Receive the WixPro website builder suite,
                  access to premium design templates, an extensive library of
                  wedgets and apps, and detailed step-by-step guides.
                </p>
                <p className="text-link my-2 sm:mt-5 flex items-center justify-center cursor-pointer">
                  <span>Show more</span>
                  <MdKeyboardArrowDown className="w-5 h-5" />
                </p>
              </div>
            </div>
            <div className="col-span-11 sm:col-span-3 flex flex-row sm:flex-col justify-between items-center sm:h-full">
              <div className="bg-ratingbox px-8 text-center p-5 space-y-2 rounded-b-xl flex gap-x-5 items-center justify-center sm:block">
                <span className="text-cardtag text-3xl relative">
                  9.8
                  <IoInformationCircleOutline className="w-[10px] h-[10px] absolute -top-2 text-gray-500/50 -right-3" />
                </span>
                <p className="text-sm text-cardtag">Exceptional</p>
                <div className="flex justify-center items-center gap-x-0.5">
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                </div>
              </div>

              <button
                className="w-5/12 sm:w-11/12 sm:mb-5 h-12 rounded-xl text-center text-white bg-link"
                type="button"
              >
                View
              </button>
            </div>
          </div>

          {/* second component */}

          <div className="relative w-full grid grid-cols-11 items-center justify-between rounded-xl group bg-white">
            <div className="absolute -top-4 -left-3.5 w-36 h-9 rounded-r-lg bg-tag text-center flex justify-center items-center text-white gap-x-2">
              <IoTrophyOutline className="w-5 h-5" />
              <span>Best Value</span>
            </div>

            <div className="absolute top-9 -left-6 flex justify-center items-center border border-separator rounded-full text-counttxt text-xl bg-white hover:border-transparent group-hover:border-transparent h-11 w-11">
              2
            </div>

            <div className="col-span-4  sm:col-span-2 flex flex-col text-text gap-y-5 sm:gap-y-2 items-center justify-center">
              <Image
                src="/computer.png"
                width={164}
                height={144}
                alt="computer"
                className="scale-125 sm:scale-100"
              />
              <p>Biulder1</p>
            </div>
            <div className="text-text col-span-7 sm:col-span-6 pl-5">
              <div className="pt-5 gap-y-2 flex flex-col justify-center items-start">
                <p className="text-base sm:w-11/12">
                  <span className="font-bold">
                    SiteCraft 68-Inch Ultimate Web Design Studio-
                  </span>{" "}
                  Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor
                  for Dynamic Websites and E-commerce Platforms (Green/White)
                </p>
                <p className="font-bold">Main highlights</p>
                <p className="ml-5 sm:w-11/12">
                  [What You Get]: Gain access to the SiteCraft design studio,
                  featuring a robust selection of design elements, SEO
                  optimization tools, and e-commerce integrations.
                </p>
                <p className="text-link my-2 sm:mt-5 flex items-center justify-center cursor-pointer">
                  <span>Show more</span>
                  <MdKeyboardArrowDown className="w-5 h-5" />
                </p>
              </div>
            </div>
            <div className="col-span-11 sm:col-span-3 flex flex-row sm:flex-col justify-between items-center sm:h-full">
              <div className="bg-ratingbox px-8 text-center p-5 space-y-2 rounded-b-xl flex items-center justify-center gap-x-5 sm:block">
                <span className="text-cardtag text-3xl relative">
                  9.5
                  <IoInformationCircleOutline className="w-[10px] h-[10px] absolute -top-2 text-gray-500/50 -right-3" />
                </span>
                <p className="text-sm text-cardtag">Excellent</p>
                <div className="flex justify-center items-center gap-x-0.5">
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarHalfFill className="w-3 h-3 text-ratingstar" />
                </div>
              </div>

              <button
                className="w-5/12 sm:w-11/12 sm:mb-5 h-12 rounded-xl text-center text-white bg-link"
                type="button"
              >
                View
              </button>
            </div>
          </div>

          {/* third component */}

          <div className="relative w-full grid grid-cols-11 items-center justify-between rounded-xl group bg-white">
            <div className="absolute top-9 -left-6 flex justify-center items-center border border-separator rounded-full text-counttxt text-xl bg-white hover:border-transparent group-hover:border-transparent h-11 w-11">
              3
            </div>

            <div className="col-span-4 sm:col-span-2 flex flex-col text-text gap-y-5 sm:gap-y-2 items-center justify-center">
              <Image
                src="/computer.png"
                width={164}
                height={144}
                alt="computer"
                className="scale-125 sm:scale-100"
              />
              <p>Biulder1</p>
            </div>
            <div className="text-text col-span-7 sm:col-span-6 pl-5">
              <div className="pt-5 gap-y-2 flex flex-col justify-center items-start">
                <p className="text-base sm:w-11/12">
                  <span className="font-bold">
                    WixPro 72-inch Responsive Website Builder-
                  </span>{" "}
                  Comprehensive Digital Platform Creation Tool, Streamlined
                  Design interface for Professional Website and Online Stores
                  (Black/Blue)
                </p>
                <p className="font-bold">Main highlights</p>
                <p className="ml-5 sm:w-11/12">
                  [What You Get]: Receive the WixPro website builder suite,
                  access to premium design templates, an extensive library of
                  wedgets and apps, and detailed step-by-step guides.
                </p>
                <p className="text-link my-2 sm:mt-5 flex items-center justify-center cursor-pointer">
                  <span>Show more</span>
                  <MdKeyboardArrowDown className="w-5 h-5" />
                </p>
              </div>
            </div>
            <div className="col-span-11 sm:col-span-3 flex flex-row sm:flex-col justify-between items-center sm:h-full">
              <div className="bg-ratingbox px-8 text-center p-5 space-y-2 rounded-b-xl flex items-center justify-center gap-x-5 sm:block">
                <span className="text-cardtag text-3xl relative">9.3</span>
                <p className="text-sm text-cardtag">Exceptional</p>
                <div className="flex justify-center items-center gap-x-0.5">
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                </div>
              </div>

              <button
                className="w-5/12 sm:w-11/12 sm:mb-5 h-12 rounded-xl text-center text-white bg-link"
                type="button"
              >
                View
              </button>
            </div>
          </div>

          {/* fourth */}

          <div className="relative w-full grid grid-cols-11 items-center justify-between rounded-xl group bg-white">
            <div className="absolute top-9 -left-6 flex justify-center items-center border border-separator rounded-full text-counttxt text-xl bg-white hover:border-transparent group-hover:border-transparent h-11 w-11">
              4
            </div>

            <div className="col-span-4 sm:col-span-2 flex flex-col text-text gap-y-5 sm:gap-y-2 items-center justify-center">
              <Image
                src="/computer.png"
                width={164}
                height={144}
                alt="computer"
                className="scale-125 sm:scale-100"
              />
              <p>CDK</p>
            </div>
            <div className="text-text col-span-7 sm:col-span-6 pl-5">
              <div className="pt-5 gap-y-2 flex flex-col justify-center items-start">
                <p className="text-base sm:w-11/12">
                  <span className="font-bold">CDK Resposive Builder:</span> An
                  extensive library of widgets and apps, and detailed
                  step-by-step guides
                </p>
                <span className="bg-ratingbox text-sm px-1 py-0.5 text-cardtag">
                  26% Off
                </span>
                <p className="font-bold">Main highlights</p>
                <div className="w-full">
                  <div className="ml-5 sm:w-11/12 rounded-xl p-2 pl-3 bg-[#FFF4ED] space-y-2">
                    <p className="flex justify-start items-center gap-x-2">
                      <span className="text-link rounded-sm bg-white px-1 py-0.5">
                        9.9
                      </span>
                      <span>Building Responsive</span>
                    </p>
                    <p className="flex justify-start items-center gap-x-2">
                      <span className="text-link rounded-sm bg-white px-1 py-0.5">
                        8.9
                      </span>
                      <span>Cool</span>
                    </p>
                    <p className="flex justify-start items-center gap-x-2">
                      <span className="text-link rounded-sm bg-white px-1 py-0.5">
                        8.9
                      </span>
                      <span>Docs</span>
                    </p>
                  </div>

                  <div className="space-y-2 mt-3 ">
                    <p>Why we love it</p>
                    <div className="flex justify-start items-center gap-x-2">
                      <div className="h-6 w-6 rounded-xl flex items-center justify-center bg-ratingbox text-cardtag">
                        <FaCheck className="w-3 h-3" />
                      </div>
                      <span className="text-text">Documentation</span>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                      <div className="h-6 w-6 rounded-xl flex items-center justify-center bg-ratingbox text-cardtag">
                        <FaCheck className="w-3 h-3" />
                      </div>
                      <span className="text-text">Easy Use</span>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                      <div className="h-6 w-6 rounded-xl flex items-center justify-center bg-ratingbox text-cardtag">
                        <FaCheck className="w-3 h-3" />
                      </div>
                      <span className="text-text">Out Of Box</span>
                    </div>
                  </div>
                </div>
                <p className="text-link my-1  sm:mt-1 flex items-center justify-center cursor-pointer">
                  <span>Show more</span>
                  <MdKeyboardArrowDown className="w-5 h-5" />
                </p>
              </div>
            </div>
            <div className="col-span-11 sm:col-span-3 flex sm:flex-col justify-between items-center sm:h-full">
              <div className="bg-ratingbox px-8 text-center p-5 space-y-2 rounded-b-xl flex items-center justify-center gap-x-5 sm:block">
                <span className="text-cardtag text-3xl relative">
                  9.1
                  <IoInformationCircleOutline className="w-[10px] h-[10px] absolute -top-2 text-gray-500/50 -right-3" />
                </span>
                <p className="text-sm text-cardtag">Very Good</p>
                <div className="flex justify-center items-center gap-x-0.5">
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarFill className="w-3 h-3 text-ratingstar" />
                  <RiStarLine className="w-3 h-3 text-ratingstar" />
                </div>
              </div>

              <button
                className="w-5/12 sm:w-11/12 sm:mb-5 h-12 rounded-xl text-center text-white bg-link"
                type="button"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default WebsiteBuilderCard;
