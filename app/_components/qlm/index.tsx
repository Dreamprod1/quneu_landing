"use client";
import { anta } from "@/lib/fonts";
import { Mic } from "lucide-react";
import { HighlightedText } from "@/components/ui/HighlightedText";
const QLMSection = () => {
  return (
    <div
      id="qlm_section"
      className="relative bg-[#0E0E0E] py-8 lg:py-16 text-white overflow-hidden"
    >
      <div className="relative w-full max-w-[78rem] px-6 mx-auto">
        <h2 className={`${anta.className} bg-[#0E0E0E] text-gray-100  
              text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl text-stroke-light2 tracking-widest`} >
          <HighlightedText delay={0} text={`QLM`} />
        </h2>
      </div>
      <div className="h-[2px] bg-white -mx-8 my-2 md:my-4 origin-left" />
      <div className="relative w-full max-w-[78rem] px-6 mx-auto">
        <div className="relative mt-9">
          <div className="lg:mr-28">
            <div className="flex flex-col border rounded-2xl p-6 md:p-9 gap-4 md:gap-6">
              <h3 className={`${anta.className} 
                 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl`}>
                <HighlightedText delay={0} text={`04 GROWTH & HYPOTHESIS CREATION`} />
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.45rem] text-justify">
                <HighlightedText delay={0} text={`QLM analyzes your business questions by processing all available data
                  and generating unlimited hypotheses about potential causes and
                  solutions. It systematically tests each possibility against the
                  evidence, eliminating those that don’t match in collaboration with
                  the humans, until it identifies the root cause and recommends
                  specific actions. This automated diagnosis takes minutes instead of
                  the weeks typically required for manual investigation.`} />
              </p>
            </div>
            <div className="flex justify-end">
              <button type="button"
                className={`${anta.className} text-black bg-white border-2 rounded-2xl px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-5 mt-8  cursor-pointer flex items-center justify-center space-x-2`}
              >
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl">+ CHAT WITH YOUR GRAPH</span>
                <Mic className="ml-2" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QLMSection;