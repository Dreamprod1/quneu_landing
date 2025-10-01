"use client";
import React from "react";
import { anta } from "@/lib/fonts";
const BottomRightFix = () => {
  return (
    <button type="button"
      className={`${anta.className} hidden md:block fixed bottom-6 right-6 text-white cursor-pointer flex items-center justify-center bg-black rounded-full border border-white 
         text-base lg:text-lg xl:text-xl 2xl:text-2xl  
         w-36 xl:w-40 2xl:w-44 
         h-36 xl:h-40 2xl:h-44`}
    >
      SCHEDULE A DEMO
    </button>
  );
};
export default BottomRightFix;