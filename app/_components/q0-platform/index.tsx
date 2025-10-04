"use client";
import { HighlightedTextCyan } from "@/components/ui/HighlightedText";
import { anta } from "@/lib/fonts";
import Image from "next/image";
const Q0PlatformSection = () => {
  return (
    <div id="Q0_platform_section" className="relative bg-[#EAEAEA] text-[#060405] overflow-hidden">
      <div className="w-full max-w-[85rem] px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
           <div className="py-9 md:py-2">
              <h3 className={`${anta.className} text-[#95C6D1] text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tight text-stroke-dark-withText`}>
                <HighlightedTextCyan delay={0} text={`Q0 Platform`} />
              </h3>
              <div className="mt-4 md:mt-5 lg:mt-6 
              text-base sm:text-lg md:text-xl lg:text-2xl text-justify">
                <HighlightedTextCyan delay={1} text={` 
                  <span> Q0’s enterprise intelligence platform delivers what knowledge graphs were meant to achieve:</span> 
                  autonomous, real-time understanding of your entire organization. Unlike traditional approaches that require months of manual ontology design
                  and constant maintenance, Q0 automatically extracts and continuously evolves business knowledge from all data sources. The platform's 
                  Dynamic Knowledge Graph 
                  <span> actively discovers hidden connections, predicts emerging patterns, and generates hypotheses your teams haven't thought to explore.</span>`} />
              </div>
           </div>
           <Image src="/images/qaplatform-right-bg.png" alt="qaplatform" className="hidden md:block" width={252} height={513} />
        </div>
      </div>
    </div>
  );
};
export default Q0PlatformSection;