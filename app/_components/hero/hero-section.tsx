import { anta } from "@/lib/fonts";
import { ArrowDown } from "lucide-react";
const HeroSection = () => {
  return (
    <div className="bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat  h-screen flex flex-col items-center justify-end px-24 py-20 text-6xl text-white">
      <div className="container mx-auto">
        <h1 className={` ${anta.className}  text-8xl`}>COGNITIVE INTELLIGENCE FOR YOUR BUSINESS</h1>
        <div className="flex items-center justify-center flex-col mt-24">
          <span className="text-xs font-bold">Scroll to explore</span>
          <ArrowDown className="ml-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
