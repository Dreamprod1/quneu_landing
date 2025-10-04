"use client";
import React from "react";
import { anta } from "@/lib/fonts";
import { HighlightedText } from "@/components/ui/HighlightedText";
const ContactSection = () => {

  return (
    <div id="contact_section"
      className="relative bg-[#0E0E0E] pt-5 pb-28 text-center text-white overflow-hidden"
    >
      <div className="w-full max-w-[78rem] px-6 mx-auto">
        <div>
          <h1 className={`${anta.className} text-[#51AABE] text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight`}>
            <HighlightedText delay={0} text={`Ready To Transform Your Enterprise and Your Material Discovery?`} /> 
          </h1>
          <p className="font-light text-lg md:text-xl lg:text-2xl pt-6 md:pt-9">
             <HighlightedText delay={1} text={`Join the Cognitive Graph Journey.  <br /> Discover how QUNEU can accelerate your innovation cycles and unlock new possibilities.`} /> 
          </p>
          <div>
            <button type="button"
              className={`${anta.className} border-2 border-white hover:border-black bg-[#0E0E0E] text-white cursor-pointer hover:bg-[#51AABE] transition-colors
            text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl rounded-xl 
            px-6 lg:px-9 xl:px-11 
            py-2 lg:py-3 xl:py-4 
            mt-9 md:mt-11 lg:mt-16 `}
            >  Schedule a demo  </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;