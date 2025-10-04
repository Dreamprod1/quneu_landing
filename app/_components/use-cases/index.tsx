"use client";
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from "@/components/ui/carousel";
import { HighlightedText } from "@/components/ui/HighlightedText";
import { anta } from "@/lib/fonts";
const useCases = [
  { id: 1, caseNumber: "ENERGY STORAGE", description: "Next-gen batteries & supercapacitors", bgImage: "/images/case-box-bg-1.png" },
  { id: 2, caseNumber: "SEMICONDUCTORS", description: "Next-gen electronics & photonics", bgImage: "/images/case-box-bg-2.png" },
  { id: 3, caseNumber: "ADVANCED MATERIALS", description: "Aerospace & structural applications", bgImage: "/images/case-box-bg-3.png" },
  { id: 4, caseNumber: "CATALYSIS", description: "Green chemistry & sustainability", bgImage: "/images/case-box-bg-4.png" },
  { id: 5, caseNumber: "BIOMEDICAL", description: "Drug delivery & medical devices", bgImage: "/images/case-box-bg-5.png" },
  { id: 6, caseNumber: "SUSTAINABILITY", description: "Carbon capture & environmental", bgImage: "/images/case-box-bg-6.png" },
];
const UseCasesSection = () => {
  return (
    <div id="use_cases_section" className="use_cases_section relative bg-[#0E0E0E] h-full flex flex-col pt-16 md:pt-24 lg:pt-32 pb-10 overflow-hidden">
      <div className="relative">
        <div className="w-full max-w-[84rem] px-6 mx-auto">
          <h2 className={`${anta.className} text-white inline-block relative z-[2] tracking-wide
          text-3xl md:text-6xl lg:text-7xl xl:text-[4.9rem] bg-[#0E0E0E]`}>
            <HighlightedText delay={0} text={`USE CASES`} />
          </h2>
          <p className="mt-2 text-[.6rem] md:text-lg lg:text-[1.4rem] xl:text-2xl">
            <HighlightedText delay={0} text={`HOW TO USE COGNITIVE INTELLIGENCE`} />
          </p>
        </div>
        <div className="hidden md:block title_line justify-end mb-2 absolute right-0 w-2/3 bottom-8 lg:bottom-10">
          <div className="flex-grow h-[2px] bg-white mb-2"></div>
          <div className="flex-grow h-[2px] bg-white "></div>
        </div>
      </div>
      <div className="w-full max-w-[90rem] px-6 mx-auto my-9 md:my-11">
        <Carousel className="pointer-events-none">
          <CarouselContent className="px-4 pointer-events-none">
            {useCases.map((item) => (
              <CarouselItem
                key={item.id}
                className="pointer-events-none p-2 md:p-4
                max-w-[400px] md:max-w-[420px] lg:max-w-[424px]
                min-h-[300px] md:min-h-[370px] lg:min-h-[395px]"
              >
                <div
                  className="border rounded-2xl flex h-full text-white flex-col justify-end bg-no-repeat bg-left-top bg-cover
                  p-4 md:p-6 lg:p-8"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                >
                  <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-stroke-light">{item.caseNumber}</span>
                  <span className="text-lg sm:text-xl md:text-2xl font-normal">{item.description}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots className="mt-7" />
        </Carousel>
      </div>
      <div className="w-screen flex flex-col gap-2 justify-end">
        <div className="flex-grow h-[2px] bg-white "></div>
        <div className="flex-grow h-[2px] bg-white "></div>
      </div>
    </div>
  );
};
export default UseCasesSection;