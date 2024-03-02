import React from "react";
import { cn } from "../utils/cn";

interface ComponentWrapperProps {
  // Define your component props here
  children: React.ReactNode;
  className?: string;
}

const ComponentWrapper = ({ children, className }: ComponentWrapperProps) => {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className={cn(className, "max-w-5xl w-full px-5 xl:px-0")}>
        {children}
      </div>
    </div>
  );
};

export default ComponentWrapper;
