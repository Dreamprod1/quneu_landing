"use client";
import { HighlightedTextCyan } from "@/components/ui/HighlightedText";
import { anta } from "@/lib/fonts";
import Image from "next/image";
const Q0PlatformSection = () => {
  return (
    <div id="Q0_platform_section" className="relative bg-[#EAEAEA] text-[#060405] overflow-hidden
    pt-10 md:pt-11 lg:pt-14 
    pb-11 md:pb-16 lg:pb-20">
      <Image
        src="/images/topleft-corner-linegroup.png"
        alt="shap"
        width={257}
        height={156}
        className="hidden md:block absolute  pointer-events-none
        -top-5  -left-4"
      />
      <Image
        src="/images/topright-corner-linegroups.png"
        alt="shap"
        width={492}
        height={359}
        className="hidden md:block absolute pointer-events-none
        -top-5 -right-10"
      />
      <div className="w-full max-w-[85rem] px-6 mx-auto">
        <h3 className={`${anta.className} text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-widest`}>
          Q0 Platform
        </h3>
        <div className="max-w-7xl mt-4 md:mt-5 lg:mt-6 
        text-base sm:text-lg md:text-xl lg:text-2xl ">
          <HighlightedTextCyan delay={0} text="Q0’s enterprise intelligence platform delivers what knowledge graphs were meant to achieve:" />
          autonomous, real-time understanding of your entire organization. Unlike
          traditional approaches that require months of manual ontology design and constant maintenance,
          <HighlightedTextCyan delay={0} text="Q0 automatically extracts and continuously evolves business knowledge from all data sources." />
          The platform's Dynamic Knowledge Graph actively
        </div>
        <div className={`${anta.className} relative font-bold
        text-2xl md:text-3xl lg:text-4xl xl:text-5xl  
        mt-6 md:mt-8 lg:mt-10 
        pl-3`}>
          <HighlightedTextCyan delay={1} text="discovers hidden connections, predicts emerging" />
          <HighlightedTextCyan delay={1} text="patterns, and generates hypotheses your teams" />
          <HighlightedTextCyan delay={2} text="haven't thought to explore." />
        </div>
      </div>
    </div>
  );
};
export default Q0PlatformSection;