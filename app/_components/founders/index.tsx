"use client";
import React from "react";
import { anta } from "@/lib/fonts";
import Image from "next/image";
import { HighlightedText } from "@/components/ui/HighlightedText";
const FounderCard = ({ name, title }: { name: string; title: string }) => (
  <div className="bg-[url(/images/founder-name-bg.png)] bg-blend-darken bg-top flex flex-col px-6 md:px-14 items-center justify-center border border-white rounded-2xl w-full max-w-md md:w-auto min-h-[200px] md:min-h-[221px]">
    <p className={`${anta.className} text-2xl md:text-3xl text-center text-[#51AABE]`}>
      <HighlightedText delay={4} text={name} /></p>
    <p className="text-lg md:text-xl text-center">
      <HighlightedText delay={4} text={title} /></p>
  </div>
);
const FoundersSection = () => {
  return (
    <div id="Founders_section" className="relative bg-[#0E0E0E] py-16 md:py-24 text-white overflow-hidden">
      <div className="w-full max-w-[78rem] px-6 mx-auto" >
        <div className="flex flex-col gap-8 md:gap-10">
          <h2 className={`${anta.className} text-3xl md:text-7xl lg:text-8xl tracking-wider`}>
            <HighlightedText delay={0} text={`FOUNDERS`} />
          </h2>
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
            <p className="text-base md:text-lg lg:text-xl text-justify" >
              <HighlightedText delay={1} text={`Our team unites experts in neuroscience, ontology, AI, manufacturing, software development, business processes, and data security to address the critical challenge of turning vast, complex data into actionable insight that drives efficiency and innovation for your business. We pair this with deep business and operational acumen, ensuring that our solutions scale responsibly within enterprise ecosystems.`} />
            </p>
            <p className="text-base md:text-lg lg:text-xl text-justify">
              <HighlightedText delay={2} text={`Headquartered in the United States and the Netherlands, we operate at the intersection of global innovation hubs, giving us both a transatlantic presence and strong ties to advanced technology markets`} />
            </p>
            <p className="text-base md:text-lg lg:text-xl text-justify">
              <HighlightedText delay={3} text={`Rather than replicate industry-specific expertise, we bring a complementary perspective that transforms organizational complexity into living, actionable intelligence — helping enterprises preserve critical know-how, accelerate decision-making, and build resilience for the future.`} />
            </p>
          </div>
          <div className="flex-none flex flex-col md:flex-row gap-9 md:gap-16 lg:gap-24 items-center justify-center mt-8 md:mt-12 lg:mt-16">
            <div>
              <FounderCard name="Frank Lisitano" title="Director of Cognitive Intelligence |  Co-founder" />
            </div>
            <div>
              <FounderCard name="Charles Siebenberg" title="Director of Cognitive Business |  Co-founder" />
            </div>
          </div>
          <div className="flex-grow flex justify-center items-center mt-3 md:mt-5">
            <Image src="/images/founder-section-1.png" alt="Founders team photo" width={599} height={61} quality={90} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FoundersSection;