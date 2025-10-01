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
    <div id="use_cases_section" className="use_cases_section relative bg-[#0E0E0E] h-full flex flex-col px-8 pt-16 md:pt-24 lg:pt-32 pb-10 overflow-hidden">
      <div className="relative">
        <div className="container mx-auto">
          <h2 className={`${anta.className} text-white inline-block relative z-[2]
          text-5xl md:text-7xl lg:text-9xl 2xl:text-[180px] pr-3 bg-[#0E0E0E]`}>USE CASES</h2>
        </div>
          <div className="title_line flex flex-col gap-2 justify-end mb-4 absolute right-0 w-1/2 bottom-0 lg:bottom-1 xl:bottom-2 2xl:bottom-3">
            <div className="flex-grow h-1 bg-white "></div>
            <div className="flex-grow h-1 bg-white "></div>
          </div>
      </div>
      <div className="my-10 md:my-14 lg:my-20">
        <Carousel>
          <CarouselContent className="px-4 md:px-8 lg:px-12 justify-center">
            {useCases.map((item) => (
              <CarouselItem
                key={item.id}
                className="p-2 md:p-4
                max-w-[460px] md:max-w-[500px] lg:max-w-[530px]
                min-h-[300px] md:min-h-[400px] lg:min-h-[450px]"
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
          <CarouselDots className="mt-8 md:mt-12" />
        </Carousel>
      </div>
      <div className="w-screen flex flex-col gap-2 justify-end">
        <div className="flex-grow h-1 bg-white "></div>
        <div className="flex-grow h-1 bg-white "></div>
      </div>
    </div>
  );
};
export default UseCasesSection;