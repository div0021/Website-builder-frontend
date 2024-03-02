import React from "react";
import ComponentWrapper from "./ComponentWrapper";
import Image from "next/image";

interface RelatedItemsProps {
  // Define your component props here
}

const RelatedItems = ({}: RelatedItemsProps) => {
  return (
    <div className="w-full" id="deals">
      <ComponentWrapper>
        <div className="w-full mt-16 sm:mt-10">
          <div>
            <h4 className="text-heading text-3xl">
              Related deals you might like for
            </h4>

            <div className="mt-10 gap-3 grid  grid-cols-2 lg:grid-cols-3">
              {/* Card 1*/}
              <div className="w-full flex items-center justify-center">
                <div className="lg:max-w-80 w-full flex flex-col justify-start items-center gap-y-2 bg-white  rounded-xl">
                  <div className="w-full flex justify-center items-center px-10 py-14 lg:py-10">
                    <Image
                      src="/computer.png"
                      alt="computer"
                      width={100}
                      height={100}
                      className="scale-150 lg:scale-100"
                    />
                  </div>
                  <div className="w-full p-5  lg:p-3 space-y-4 lg:space-y-2">
                    <div className="space-x-2 w-full">
                      <span className="pl-1.5 pr-3 py-1.5 text-sm text-cardtag bg-cardtagbg rounded-lg">
                        20% Off
                      </span>
                      <span className="pl-1.5 pr-3 py-1.5 text-sm text-cardtag bg-cardtagbg rounded-lg">
                        Limited time
                      </span>
                    </div>

                    <h4 className="text-center text-counttxt font-bold">
                      Webbuilder1
                    </h4>

                    <p className="text-counttxt tracking-wide">
                      Computer Modern clasic with wix support
                    </p>

                    <div className="flex justify-start items-center gap-x-2">
                      <span className="text-xl text-subheading">$39.96</span>
                      <span className="text-sm text-cardoriginalPrice">
                        $49.96
                      </span>
                      <span className="text-carddiscount text-[13px]">
                        (20% Off)
                      </span>
                    </div>

                    <button className="w-full bg-link text-white py-4 text-center rounded-xl">
                      View Deal
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2*/}

              <div className="w-full flex items-center justify-center">
                <div className="lg:max-w-80 w-full flex flex-col justify-start items-center gap-y-2 bg-white  rounded-xl">
                  <div className="w-full flex justify-center items-center px-10 py-14 lg:py-10">
                    <Image
                      src="/computer.png"
                      alt="computer"
                      width={100}
                      height={100}
                      className="scale-150 lg:scale-100"
                    />
                  </div>
                  <div className="w-full p-5 lg:p-3 space-y-4 lg:space-y-2">
                    <div className="space-x-2 w-full">
                      <span className="pl-1.5 pr-3 py-1.5 text-sm text-cardtag bg-cardtagbg rounded-lg">
                        20% Off
                      </span>
                      <span className="pl-1.5 pr-3 py-1.5 text-sm text-cardtag bg-cardtagbg rounded-lg">
                        Limited time
                      </span>
                    </div>

                    <h4 className="text-center text-counttxt font-bold">
                      Webbuilder1
                    </h4>

                    <p className="text-counttxt tracking-wide">
                      Computer Modern clasic with wix support
                    </p>

                    <div className="flex justify-start items-center gap-x-2">
                      <span className="text-xl text-subheading">$39.96</span>
                      <span className="text-sm text-cardoriginalPrice">
                        $49.96
                      </span>
                      <span className="text-carddiscount text-[13px]">
                        (20% Off)
                      </span>
                    </div>

                    <button className="w-full bg-link text-white py-4 text-center rounded-xl">
                      View Deal
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3*/}

              <div className="w-full flex items-center justify-center">
                <div className="lg:max-w-80 w-full flex flex-col justify-start items-center gap-y-2 bg-white  rounded-xl">
                  <div className="w-full flex justify-center items-center px-10 py-14 lg:py-10">
                    <Image
                      src="/computer.png"
                      alt="computer"
                      width={100}
                      height={100}
                      className="scale-150 lg:scale-100"
                    />
                  </div>
                  <div className="w-full p-5 lg:p-3 space-y-4 lg:space-y-2">
                    <div className="space-x-2 w-full">
                      <span className="pl-1.5 pr-3 py-1.5 text-sm text-cardtag bg-cardtagbg rounded-lg">
                        20% Off
                      </span>
                      <span className="pl-1.5 pr-3 py-1.5 text-sm text-cardtag bg-cardtagbg rounded-lg">
                        Limited time
                      </span>
                    </div>

                    <h4 className="text-center text-counttxt font-bold">
                      Webbuilder1
                    </h4>

                    <p className="text-counttxt tracking-wide">
                      Computer Modern clasic with wix support
                    </p>

                    <div className="flex justify-start items-center gap-x-2">
                      <span className="text-xl text-subheading">$39.96</span>
                      <span className="text-sm text-cardoriginalPrice">
                        $49.96
                      </span>
                      <span className="text-carddiscount text-[13px]">
                        (20% Off)
                      </span>
                    </div>

                    <button className="w-full bg-link text-white py-4 text-center rounded-xl">
                      View Deal
                    </button>
                  </div>
                </div>
              </div>

           
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default RelatedItems;
