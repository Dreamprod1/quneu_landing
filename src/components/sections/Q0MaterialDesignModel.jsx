import * as React from "react";
import MaterialDesignModelImg from "../../../static/material-design-model.png";
import GradientMaterialDesignModel from "../../../static/gradient-material.png";
import Eclypse1 from "../../../static/eclypses/Ellipse 4.svg";
import Eclypse2 from "../../../static/eclypses/Group 21.svg";
import Eclypse3 from "../../../static/eclypses/Group 22.svg";
import Eclypse4 from "../../../static/eclypses/Group 21.svg";
import Eclypse5 from "../../../static/eclypses/Group 72.svg";

const FEATURES = [
  {
    symbol: Eclypse1,
    id: "accelerate-rd",
    title: "Accelerate R&D:",
    content: "Drastically cut down discovery time from years to weeks.",
  },
  {
    symbol: Eclypse2,
    id: "innovate-beyond-limits",
    title: "Innovate Beyond Limits:",
    content:
      "Design custom materials with precisely targeted properties that don't exist today.",
  },
  {
    symbol: Eclypse3,
    id: "reduce-costs",
    title: "Reduce Costs:",
    content:
      "Minimize expensive and time-consuming laboratory experiments by focusing only on the most promising candidates.",
  },
  {
    symbol: Eclypse4,
    id: "lead-industry-products",
    title: "Lead Your Industry:",
    content:
      "Create next-generation products built from materials no one else has.",
  },
  {
    symbol: Eclypse5,
    id: "lead-industry-deployment",
    title: "Have access to immediate commercial use:",
    content: "Tested, proven, and deployment-ready today.",
  },
];

const FeatureCard = ({ feature, index }) => (
  <div className="hidden-animate relative flex lg:flex-col flex-row w-full items-center gap-[0.5rem]">
    <div
      className={`
      lg:w-[110%]
      lg:h-[1.5px]
      absolute inset-0
      content-[''] w-[1px] h-[110%]
      left-[6px] bg-white
      lg:left-0
      lg:top-[28px]
      z-0
      
      ${index === 0 ? "top-[50%] lg:left-[50%]" : ""}
      ${index === 4 ? "-top-[40px] lg:left-[-60%]" : ""}
      `}
    />
    <img
      src={feature.symbol}
      key={feature.title}
      alt={`Feature symbol ${feature.title + 1}`}
      className="mx-auto lg:h-[56px] h-[14px] lg:w-[56px] w-[14px] relative z-10"
    />

    <div
      className="relative lg:mt-10 border border-white rounded-2xl bg-[#202528] flex flex-col flex-grow z-10
      "
      style={{
        backgroundImage: `url(${GradientMaterialDesignModel})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "100%",
        backgroundSize: "cover",
      }}
    >
      <h3
        className="
      flex items-center
      lg:justify-center
      lg:my-[17px]
      my-[7px]
      lg:h-[72px]
      anta text-[#51AABE] lg:text-center
      lg:text-[1.5rem]
      text-[17px] font-normal  leading-[24px] tracking-[0%]
      px-[0.875rem]
      "
      >
        {feature.title}
      </h3>
      <p className="lg:border-t lg:border-white noto text-white lg:text-[18px] text-[13px] font-normal lg:p-5 px-[0.875rem] pb-[1rem] text-justify">
        {feature.content}
      </p>
    </div>
  </div>
);

const Q0MaterialDesignModel = () => {
  return (
    <section className="h-full w-full relative lg:px-[184px] px-[36px] bg-white xl:py-[130px] py-[1.5rem]">
      <div
        className="absolute inset-0 pointer-events-none bg-no-repeat bg-bottom bg-initial"
        style={{
          backgroundImage: `url(${MaterialDesignModelImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <div className="h-full justify-center flex flex-col relative">
        <div>
          <h3
            id="material-design-title"
            className="hidden-animate font-[Anta] font-normal lg:text-[6rem] leading-[100%] text-[39px] text-white mb-4"
          >
            Q0’S FORMULATION DESIGN MODEL
          </h3>
          <h2 className="hidden-animate noto text-outline-white text-transparent leading-[100%] font-bold lg:text-[4rem] text-[31px] mb-5">
            GROWTH & HYPOTHESIS CREATION
          </h2>
        </div>
        <div className="lg:mb-10 mb-[19px]">
          <p className="hidden-animate noto text-white font-normal lg:text-[1.5rem] text-[13px] lg:leading-[100%] leading-[130%] tracking-normal text-justify mb-4">
            <b>QMAT</b> starts with target properties—like high conductivity or
            extreme durability—and intelligently generates complete, physically
            viable crystal structures that meet those exact specifications.
            Think of it as an AI designer for chemistry, creating materials that
            don't yet exist.
          </p>

          <p className="hidden-animate noto text-white font-normal lg:text-[1.5rem] text-[13px] lg:leading-[100%] leading-[130%] tracking-normal text-justify">
            Partnering with us gives you access to a generative AI tool that
            creates novel materials on-demand based on specified design
            requirements, rather than screening existing candidates and
            constraints.
            <br />
            <b>With QMAT, you can:</b>
          </p>
        </div>
        <div className="flex lg:gap-6 gap-[0.5rem] lg:flex-row flex-col">
          {FEATURES.map((feature, index) => (
            <FeatureCard feature={feature} index={index} key={feature.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Q0MaterialDesignModel;
