import { ArrowDown } from "lucide-react";
import { Anta } from "next/font/google";

const anta = Anta({ weight: "400", subsets: ["latin"] });

const HeroSection = () => {
  return (
    <div className="bg-[url('/images/hero.png')] bg-bottom  h-screen flex flex-col items-center justify-center px-24 py-20 text-6xl text-white">
      <div className="flex-grow"></div>
      <h1 className={` ${anta.className}  text-8xl`}>COGNITIVE INTELLIGENCE FOR YOUR BUSINESS</h1>
      <div className="flex items-center justify-center flex-col mt-24">
        <span className="text-xs font-bold">Scroll to explore</span>
        <ArrowDown className="ml-2 animate-bounce" />
      </div>
    </div>
  );
};

export default HeroSection;
