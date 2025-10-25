import * as React from "react";
import FoundersImage from "../../../static/founders/founders-backgrand.webp";
import GRADIENTS5 from "../../../static/GRADIENTS-5-1.webp";
import Mission from "../../../static/founders/mission@4x 1.svg";
import Vision from "../../../static/founders/vision@4x 1.svg";
import FounderCircles from "../../../static/founders/founders-circles.webp";

const FOUNDERS_DATA = [
  {
    image: Vision,
    name: "Frank Lisitano",
    description: "Director of Cognitive AI | <br /> Co-founder",
  },
  {
    image: Mission,
    name: "Charles Siebenberg",
    description: "Director of Cognitive Business | <br /> Co-founder",
  },
];

const FoundersInfo = () => (
  <div className="lg:pb-20">
    <h2
      className="hidden-animate pb-[1.5rem] font-['Anta'] font-normal not-italic
    2xl:text-[6rem]
    xl:text-[5rem]
    lg:text-[4rem]

    text-[39px] leading-[100%] tracking-[0%]"
    >
      FOUNDERS
    </h2>
    <div className="space-y-4">
      <p
        className="hidden-animate noto font-light
      xl:text-[1.5rem]
      lg:text-[1.25rem]
      text-[13px] leading-[120%] tracking-[0%] text-justify"
      >
        Our team unites experts in{" "}
        <span className="font-bold">
          neuroscience, ontology, AI, manufacturing, software development,
          business processes, and data security
        </span>
        to address the critical challenge of turning vast, complex data into
        actionable insight that drives efficiency and innovation for your
        business. We pair this with deep business and operational acumen,
        ensuring that our solutions scale responsibly within enterprise
        ecosystems.
      </p>

      <p
        className="hidden-animate noto font-normal
      xl:text-[1.5rem]
      lg:text-[1.25rem]
      text-[13px] leading-[120%] tracking-[0%] text-justify"
      >
        Headquartered in the United States and the Netherlands, we operate at
        the intersection of global innovation hubs, giving us both a
        transatlantic presence and strong ties to advanced technology markets.
      </p>

      <p
        className="hidden-animate noto font-normal
      xl:text-[1.5rem]
      lg:text-[1.25rem]
      text-[13px] leading-[120%] text-justify lg:w-3/4"
      >
        Rather than replicate industry-specific expertise, we bring a
        complementary perspective that transforms organizational complexity into
        living, actionable intelligence — helping enterprises preserve critical
        know-how, accelerate decision-making, and build resilience for the
        future.
      </p>
    </div>
  </div>
);

const FoundersList = () => (
  <div className="flex lg:gap-40 gap-[10px] pt-[1.5rem] justify-center items-stretch">
    {FOUNDERS_DATA.map((founder) => (
      <div
        key={founder.name}
        className="relative
        overflow-hidden text-center
         bg-[#0E0E0E] lg:border-2 border-white
         lg:rounded-[30px] rounded-[5px]
         lg:w-[530px]
         lg:h-[300px]
         h-[220px]
          flex-1 py-[27px] px-[16px] w-[170px] flex flex-col"
        style={{
          backgroundImage: `url(${FoundersImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 w-full bg-black opacity-65" />
        <div className="relative z-10 flex flex-col justify-center h-full">
          <h3 className="hidden-animate text-xl font-semibold mb-2 text-[white] anta lg:text-[2rem] text-[24px]">
            {founder.name}
          </h3>
          <p
            className="hidden-animate text-white noto lg:text-xl text-[14px]"
            dangerouslySetInnerHTML={{ __html: founder.description }}
          />
        </div>
      </div>
    ))}
  </div>
);

const Founders = () => {
  return (
    <section
      id="about"
      className="h-full w-full relative lg:px-[187px] px-[36px] "
      style={{
        backgroundImage: `url(${GRADIENTS5})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="content lg:pt-20">
        <FoundersInfo />
        <FoundersList />
        <div className="lg:pt-[4rem] pt-[1rem] lg:pb-[176px] pb-[60px]">
          <img
            src={FounderCircles}
            alt="Founder Circles"
            className="mx-auto lg:w-[846px] w-[221px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Founders;
