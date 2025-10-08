"use client";
import React from "react";
import { anta } from "@/lib/fonts";
import Image from "next/image";
import { HighlightedText } from "@/components/ui/HighlightedText";
const GraphInfoSection = () => {
  return (
    <div id="graph_info_section" className="relative bg-[#78BAC9]  text-black overflow-hidden pt-6 pb-6">
      <div className="w-full max-w-[82rem] px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center pt-5 md:pt-3 md:gap-16">
          <Image src="/images/qgraph-leftimg.png" alt="graph" width={233} height={590} className="hidden md:block" />
          <div>
            <h3 className={`${anta.className} text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-widest`}>
              <HighlightedText delay={0} text={`QGRAPH`} />
            </h3>
            <p className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-stroke-dark">
              <HighlightedText delay={1} text={`THE POWER OF QGRAPH`} />
            </p>
            <p className="mt-8 md:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl text-justify">
              <HighlightedText delay={2} text={` Q0 demystifies the process of knowledge graph creation by automatically providing a dynamic representation of data processing events and
              contextual reasoning,  and allows your business to intelligently  grow, eliminating uncertainties in a secure and cost-efficient way.
              With Q0, your organization gains more than insights — it builds a neural network system that not only prepares you for what’s ahead,
              but also establishes a framework that prevents the same issues from recurring. As your organization changes and new employees join,
              your domain remains intact, ensuring continuity and knowledge acquisition as your organization grows.`} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GraphInfoSection;