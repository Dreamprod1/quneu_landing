"use client";
import React from "react";
import { anta } from "@/lib/fonts";
import { HighlightedText } from "@/components/ui/HighlightedText";
const MatDesignSection = () => {

  return (
    <div
      id="mat_design_section"
      className="relative bg-[url(/images/materialdesign-bg-2.png)] bg-center bg-cover bg-no-repeat bg-fixed  text-justify flex flex-col items-center justify-center py-16 md:py-[4rem] overflow-hidden"
    >
      <div className="w-full max-w-[84rem] px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h3
              className={`md:text-left ${anta.className} text-[#51AABE] tracking-tight
                  text-3xl sm:text-4xl md:text-4xl lg:text-[4.4rem] mb-2`}>
              <HighlightedText delay={0} text={`Q0’S INTELLIGENT MATERIAL DESIGN`} />
            </h3>
          </div>
          <div className="md:w-1/2">
            <p className="text-white text-sm sm:text-base md:text-lg text-center md:text-left" >
              <HighlightedText delay={1} text={`We have developed a groundbreaking AI platform that designs novel, high-performance materials from the ground up. 
            Imagine an AI artist that can create a perfect, intricate design starting from a blank canvas. Our software does this for chemistry.
             It begins with a set of target properties—like high conductivity or extreme durability—and intelligently generates a complete, 
             physically-viable crystal structure that meets those exact specifications.
`} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MatDesignSection;