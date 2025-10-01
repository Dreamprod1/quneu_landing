"use client";
import React from "react";
import { anta } from "@/lib/fonts";
const BottomRightFix = () => {
  return (
    <button type="button"
      className={`${anta.className} fixed bottom-6 right-6 text-white cursor-pointer flex items-center justify-center bg-black rounded-full border border-white 
         text-[10px] md:text-base lg:text-lg xl:text-xl 2xl:text-2xl  
         w-20 md:w-32 lg:w-32 xl:w-40 2xl:w-44 
         h-20 md:h-32 lg:h-32 xl:h-40 2xl:h-44`}
    >
      SCHEDULE A DEMO
    </button>
  );
};
export default BottomRightFix;