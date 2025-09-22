import { Anta, Noto_Sans } from "next/font/google";

const anta = Anta({ 
  weight: "400",
  subsets: ["latin"]
});
const noto = Noto_Sans({ 
  weight: "400",
  subsets: ["latin"]
});

const Q0PlatformSection = () => {
  return (
    <div className="bg-[#EAEAEA] px-24 py-16 text-[#060405]">
      <h3 className={`${anta.className} text-[200px] `}>Q0 Platform</h3>
      <p className={`${noto.className} text-4xl  max-w-7xl text-justify`}>
        Q0’s enterprise intelligence platform delivers what knowledge graphs were meant to achieve: autonomous, real-time understanding of your entire organization. Unlike
        traditional approaches that require months of manual ontology design and constant maintenance, Q0 automatically extracts and continuously evolves business knowledge from
        all data sources. The platform's Dynamic Knowledge Graph actively
      </p>
      <div className={`${anta.className} text-4xl font-bold leading-tight mt-10`}>
        <span className="relative">
          <span className="relative z-20">discovers hidden connections, predicts emerging patterns, and generates hypotheses your teams haven't thought to explore.</span>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#51aabe] -z-10"></div>
        </span>
      </div>
    </div>
  );
};

export default Q0PlatformSection;
