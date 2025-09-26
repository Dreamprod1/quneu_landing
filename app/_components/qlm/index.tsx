import { anta } from "@/lib/fonts";
import { Mic } from "lucide-react";
const QLMSection = () => {
  return (
    <div className="relative bg-[#0E0E0E] h-full pt-5 pb-24 md:pb-36">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24">
        <h2 className={`${anta.className} text-gray-100 text-5xl md:text-7xl lg:text-9xl`}>QLM</h2>
      </div>
      <div className="h-1 bg-white my-2 md:my-4"></div>
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24">
        <div className="flex flex-col border rounded-2xl p-6 md:p-9 gap-4 md:gap-6">
          <h3 className={`${anta.className} text-2xl md:text-3xl text-white`}>04 GROWTH & HYPOTHESIS CREATION</h3>
          <p className="text-base md:text-lg text-white">QLM analyzes your business questions by processing all available data and generating unlimited hypotheses about potential causes and solutions. It  systematically tests each possibility against the evidence, eliminating those that don’t match in collaboration with the humans, until it identifies the root cause and recommends specific actions. This automated diagnosis takes minutes instead of the weeks typically required for manual investigation.</p>
        </div>
        <div className="flex justify-end">
          <button type="button" className={`${anta.className} text-black bg-white border-2 rounded-full px-6 md:px-10 py-3 md:py-5 mt-12 md:mt-16 lg:mt-20 cursor-pointer flex items-center justify-center space-x-2`}>
            <span className="text-xl md:text-3xl">+ CHAT WITH YOUR GRAPH</span>
            <Mic className="ml-2" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default QLMSection;
