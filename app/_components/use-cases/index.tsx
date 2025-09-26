import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { anta } from "@/lib/fonts";
const UseCasesSection = () => {
  return (
    <div className="relative bg-[#0E0E0E] h-full flex flex-col pt-16 md:pt-24 pb-10">
      <div className="flex justify-end items-end">
        <h2 className={`${anta.className} text-white text-5xl md:text-7xl lg:text-9xl`}>USE CASES</h2>
        <div className="w-full md:w-1/2 flex flex-col gap-2 justify-end">
          <div className="flex-grow h-1 bg-white "></div>
          <div className="flex-grow h-1 bg-white "></div>
        </div>
      </div>
      <div className="container mx-auto my-10 md:my-14">
        <Carousel>
          <CarouselContent className="px-6 md:px-12">
            <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 min-h-[300px] md:min-h-[400px]">
              <div className="border rounded-2xl flex h-full text-white flex-col items-center justify-center p-4 md:p-6 bg-[url('/images/case-box-bg-1.png')] bg-no-repeat bg-center bg-cover">
                <span className="text-3xl md:text-4xl font-semibold text-stroke-light">CASE 01</span>
                <span className="text-xl md:text-2xl font-normal">Short description</span>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 min-h-[300px] md:min-h-[400px]">
              <div className="border rounded-2xl flex h-full text-white flex-col items-center justify-center p-4 md:p-6 bg-[url('/images/case-box-bg-2.png')] bg-no-repeat bg-center bg-cover">
                <span className="text-3xl md:text-4xl font-semibold text-stroke-light">CASE 02</span>
                <span className="text-xl md:text-2xl font-normal">Short description</span>
              </div>

            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 min-h-[300px] md:min-h-[400px]">
              <div className="border rounded-2xl flex h-full text-white flex-col items-center justify-center p-4 md:p-6 bg-[url('/images/case-box-bg-3.png')] bg-no-repeat bg-center bg-cover">
                <span className="text-3xl md:text-4xl font-semibold text-stroke-light">CASE 03</span>
                <span className="text-xl md:text-2xl font-normal">Short description</span>
              </div>

            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 min-h-[300px] md:min-h-[400px]">
              <div className="border rounded-2xl flex h-full text-white flex-col items-center justify-center p-4 md:p-6 bg-[url('/images/case-box-bg-4.png')] bg-no-repeat bg-center bg-cover">
                <span className="text-3xl md:text-4xl font-semibold text-stroke-light">CASE 04</span>
                <span className="text-xl md:text-2xl font-normal">Short description</span>
              </div>

            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 min-h-[300px] md:min-h-[400px]">
              <div className="border rounded-2xl flex h-full text-white flex-col items-center justify-center p-4 md:p-6 bg-[url('/images/case-box-bg-5.png')] bg-no-repeat bg-center bg-cover">
                <span className="text-3xl md:text-4xl font-semibold text-stroke-light">CASE 05</span>
                <span className="text-xl md:text-2xl font-normal">Short description</span>
              </div>

            </CarouselItem>
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
