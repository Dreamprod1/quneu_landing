import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { anta } from "@/lib/fonts";
const UseCasesSection = () => {
  return (
    <div className="relative bg-[#0E0E0E] h-full flex flex-col pt-12 py-6">
      <div className="flex justify-end items-end">
        <h2 className={`${anta.className} text-[188px]`} style={{ lineHeight: "132px" }}>USE CASES</h2>
        <div className="min-w-1/3 w-max flex flex-col gap-2 justify-end">
          <div className="flex-grow h-1 bg-white "></div>
          <div className="flex-grow h-1 bg-white "></div>
        </div>
      </div>
      <div className="container mx-auto my-14">
        <Carousel>
          <CarouselContent className="px-12">
            <CarouselItem className="basis-[calc(100%/3)] min-h-[400px]">
              <div className="border rounded-2xl flex h-100 flex-col items-center justify-center p-6 bg-[url('/images/case-box-bg-1.png')] bg-no-repeat bg-center bg-cover">
                <span className="text-4xl font-semibold text-stroke-light">CASE 01</span>
                <span className="text-2xl font-normal">Short description</span>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[calc(100%/3)] min-h-[400px]">
              <div className="border rounded-2xl flex h-100 flex-col items-center justify-center p-6 bg-[url('/images/case-box-bg-2.png')] bg-no-repeat bg-center bg-cover">
                <span className="text-4xl font-semibold text-stroke-light">CASE 02</span>
                <span className="text-2xl font-normal">Short description</span>
              </div>

            </CarouselItem>
            <CarouselItem className="basis-[calc(100%/3)] min-h-[400px]">
              <div className="border rounded-2xl flex h-100 flex-col items-center justify-center p-6 bg-[url('/images/case-box-bg-3.png')] bg-no-repeat bg-center bg-cover">
                <span className="text-4xl font-semibold text-stroke-light">CASE 03</span>
                <span className="text-2xl font-normal">Short description</span>
              </div>

            </CarouselItem>
            <CarouselItem className="basis-[calc(100%/3)] min-h-[400px]">
              <div className="border rounded-2xl flex h-100 flex-col items-center justify-center p-6 bg-[url('/images/case-box-bg-4.png')] bg-no-repeat bg-center bg-cover">
                <span className="text-4xl font-semibold text-stroke-light">CASE 04</span>
                <span className="text-2xl font-normal">Short description</span>
              </div>

            </CarouselItem>
            <CarouselItem className="basis-[calc(100%/3)] min-h-[400px]">
              <div className="border rounded-2xl flex h-100 flex-col items-center justify-center p-6 bg-[url('/images/case-box-bg-5.png')] bg-no-repeat bg-center bg-cover">
                <span className="text-4xl font-semibold text-stroke-light">CASE 05</span>
                <span className="text-2xl font-normal">Short description</span>
              </div>

            </CarouselItem>
          </CarouselContent>
          <CarouselDots className="mt-12"/>
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
