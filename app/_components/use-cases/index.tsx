"use client";
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from "@/components/ui/carousel";
import { anta } from "@/lib/fonts";
const useCases = [
  { id: 1, caseNumber: "CASE 01", description: "Short description", bgImage: "/images/case-box-bg-1.png" },
  { id: 2, caseNumber: "CASE 02", description: "Short description", bgImage: "/images/case-box-bg-2.png" },
  { id: 3, caseNumber: "CASE 03", description: "Short description", bgImage: "/images/case-box-bg-3.png" },
  { id: 4, caseNumber: "CASE 04", description: "Short description", bgImage: "/images/case-box-bg-4.png" },
  { id: 5, caseNumber: "CASE 05", description: "Short description", bgImage: "/images/case-box-bg-5.png" },
];
const UseCasesSection = () => {
  return (
    <div id="use_cases_section" className="use_cases_section relative bg-[#0E0E0E] h-full flex flex-col pt-16 md:pt-24 lg:pt-32 pb-10 overflow-hidden">
      <div className="relative">
        <div className="w-full max-w-[84rem] px-6 mx-auto">
          <h2 className={`${anta.className} text-white inline-block relative z-[2] tracking-wide
          text-3xl md:text-7xl lg:text-9xl bg-[#0E0E0E]`}>USE CASES</h2>
        </div>
          <div className="title_line flex flex-col gap-2 justify-end mb-4 absolute right-0 w-1/2 bottom-0 lg:bottom-1 xl:bottom-2">
            <div className="flex-grow h-[2px] bg-white "></div>
            <div className="flex-grow h-[2px] bg-white "></div>
          </div>
      </div>
      <div className="w-full max-w-[84rem] px-6 mx-auto my-10 md:my-14 lg:my-[3.6rem]">
        <Carousel>
          <CarouselContent className="px-4 md:px-8 lg:px-12 justify-center">
            {useCases.map((item) => (
              <CarouselItem
                key={item.id}
                className="p-2 md:p-4
                max-w-[400px] md:max-w-[420px] lg:max-w-[427px]
                min-h-[300px] md:min-h-[370px] lg:min-h-[398px]"
              >
                <div
                  className="border rounded-2xl flex h-full text-white flex-col items-center justify-center bg-no-repeat bg-left-top bg-cover
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