"use client";
import React from "react";
import { anta } from "@/lib/fonts";
import { ArrowDown } from "lucide-react";
import { HighlightedText } from "@/components/ui/HighlightedText";
const HeroSection = () => {
  return (
    <div id="hero_section" className="h-[95dvh] flex flex-col items-center justify-end  pt-2 pb-1 text-white overflow-hidden
    bg-[url('/images/hero.png')] bg-cover bg-top bg-no-repeat " >
      <div className="w-full max-w-[78rem] px-6 mx-auto text-center">
        <h1 className={`${anta.className} text-left text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}>
          <HighlightedText delay={0} text={` COGNITIVE INTELLIGENCE  <br /> FOR YOUR BUSINESS`} />
        </h1>
        <div className="flex items-center justify-center flex-col mt-8 sm:mt-12 md:mt-11 lg:mt-16">
          <span className="text-xs sm:text-sm font-bold">
            Scroll to explore
          </span>
          <ArrowDown className="mt-2 sm:mt-4 text-white animate-bounce" />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;