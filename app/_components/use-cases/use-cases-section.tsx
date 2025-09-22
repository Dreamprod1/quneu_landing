import { Anta } from "next/font/google";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const anta = Anta({ 
  weight: "400",
  subsets: ["latin"]
});

const UseCasesSection = () => {
  return (
    <div className="bg-[#0E0E0E] h-full  flex-col py-36">
      <div className="flex  justify-end items-end">
        <h2 className={`${anta.className} text-[188px] `}>USE CASES</h2>
        <div className="min-w-1/3 w-max flex flex-col gap-3 justify-end">
          <div className="flex-grow h-1 bg-white "></div>
          <div className="flex-grow h-1 bg-white "></div>
        </div>
      </div>

      <div className="">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem className="basis-1/3" key={index}>
                <div className="p-1">
                  <div>
                    <div className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="w-screen flex flex-col gap-3 justify-end">
        <div className="flex-grow h-1 bg-white "></div>
        <div className="flex-grow h-1 bg-white "></div>
      </div>
    </div>
  );
};

export default UseCasesSection;
