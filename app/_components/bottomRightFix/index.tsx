"use client";
import React from "react";
import { anta } from "@/lib/fonts";
const BottomRightFix = () => {
  return (
    <button type="button"
      className={`${anta.className} z-20 fixed bottom-6 right-6 text-white cursor-pointer flex items-center justify-center bg-black hover:bg-[#51AABE] rounded-full border border-white 
         text-[10px] md:text-base lg:text-lg 
         w-20 md:w-32 lg:w-32  
         h-20 md:h-32 lg:h-32`}
    >
      SCHEDULE A DEMO
    </button>
  );
};
export default BottomRightFix;