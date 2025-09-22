import { Anta, Noto_Sans } from "next/font/google";
import Image from "next/image";

const anta = Anta({ 
  weight: "400",
  subsets: ["latin"]
});
const noto = Noto_Sans({ 
  weight: "400",
  subsets: ["latin"]
});

const founders = [
  {
    name: "Frank Lisitano",
    title: "Director of Cognitive Intelligence | Co-founder",
  },
  {
    name: "Charles Siebenberg",
    title: "Director of Cognitive Business | Co-founder",
  },
];

const FoundersSection = () => {
  return (
    <div className="bg-[#0E0E0E] px-40 py-24 text-white flex flex-col gap-10">
      <h2 className={`${anta.className} text-[188px]`}>FOUNDERS</h2>
      <p className={`${noto.className} flex-none text-4xl text-justify`}>
        Our team unites experts in neuroscience, ontology, AI, manufacturing, software development, business processes, and data security to address the critical challenge of
        turning vast, complex data into actionable insight that drives efficiency and innovation for your business. We pair this with deep business and operational acumen, ensuring
        that our solutions scale responsibly within enterprise ecosystems.
      </p>
      <p className={`${noto.className} flex-none text-4xl text-justify`}>
        Headquartered in the United States and the Netherlands, we operate at the intersection of global innovation hubs, giving us both a transatlantic presence and strong ties to
        advanced technology markets.
      </p>
      <p className={`${noto.className} flex-none text-4xl text-justify`}>
        Rather than replicate industry-specific expertise, we bring a complementary perspective that transforms organizational complexity into living, actionable intelligence —
        helping enterprises preserve critical know-how, accelerate decision-making, and build resilience for the future.
      </p>
      <div className="flex-none flex gap-10 items-center justify-center mt-20">
        {founders.map((founder) => (
          <div
            key={founder.name}
            className="bg-[url(/images/founder-name-bg.png)] bg-blend-darken bg-top flex flex-col px-12 items-center justify-center border border-white rounded-2xl w-[529px] h-[302px]"
          >
            <p className={`${anta.className} text-4xl text-[#51AABE]`}>{founder.name}</p>
            <p className={`${noto.className} text-2xl text-center`}>{founder.title}</p>
          </div>
        ))}
      </div>
      <div className="flex-grow flex justify-center items-center">
        <Image src="/images/founder-section-1.png" alt="Company logo" width={790} height={81} />
      </div>
    </div>
  );
};

export default FoundersSection;
