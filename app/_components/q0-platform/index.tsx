import { HighlightedTextCyan } from "@/components/ui/HighlightedText";
import { anta } from "@/lib/fonts";
import Image from "next/image";

//---
const Q0PlatformSection = () => {

  return (
    <div className="relative bg-[#EAEAEA] px-8 sm:px-12 md:px-16 lg:px-24 pt-12 md:pt-16 pb-24 md:pb-32  text-[#060405] overflow-hidden ">
      <Image src="/images/topleft-corner-linegroup.png" alt="shap" width={257} height={156} className="hidden md:block absolute -top-5 -left-5 pointer-events-none" />
      <Image src="/images/topright-corner-linegroups.png" alt="shap" width={492} height={359} className="hidden md:block absolute -top-5 -right-5 pointer-events-none" />
      <div className="container mx-auto">
        <h3 className={`${anta.className} text-5xl md:text-7xl lg:text-9xl `}>Q0 Platform</h3>
        <div className="text-lg md:text-xl lg:text-2xl max-w-7xl">
          <HighlightedTextCyan delay={0} text="Q0’s enterprise intelligence platform delivers what knowledge graphs were meant to achieve:" />
          autonomous, real-time understanding of your entire organization. Unlike
          traditional approaches that require months of manual ontology design and constant maintenance,
          <HighlightedTextCyan delay={0} text="Q0 automatically extracts and continuously evolves business knowledge from  all data sources." />
          The platform's Dynamic Knowledge Graph actively
        </div>
        <div className={`${anta.className} relative text-4xl md:text-5xl lg:text-6xl font-bold mt-6 md:mt-8 lg:mt-10`}>
          <HighlightedTextCyan delay={1} text="discovers hidden connections, predicts emerging" />
          <HighlightedTextCyan delay={1} text="patterns, and generates hypotheses your teams" />
          <HighlightedTextCyan delay={2} text="haven't thought to explore." />
        </div>
      </div>
    </div>
  );
};
export default Q0PlatformSection;
