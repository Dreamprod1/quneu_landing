import React from "react";
import funnel from "../../../static/THEQGRAPHPROCESS.svg";
import FunnelMobile from "../../../static/FunnelMObile.svg";

const STEPS = [
  {
    id: "01",
    title: "INGESTION",
    description:
      "Bringing data into QUNEU from any source so our platform can connect it, understand it, and turn it into intelligence.",
  },
  {
    id: "02",
    title: "PROCESSING",
    subtitle: "AUTOMATED ONTOLOGY",
    description:
      "Automatically constructs and evolves your enterprise ontology knowledge map without human intervention",
  },
  {
    id: "03",
    title: "OUTPUT",
    subtitle: "GRAPH VISUALIZATION MANAGEMENT",
    description:
      "Think of QUNEU’s proprietary knowledge graph as your business’s image dictionary—mapping all your data and relationships in one place so you can see the full picture and act with clarity.",
  },
];

export default function TheQGraphProcess() {
  return (
    <div className="lg:h-full w-full p-10 relative bg-[#0D1B1D] lg:py-0 pb-[100px] h-[1100px]">
      <div
        className="lg:hidden top-12 h-[950px] absolute inset-0 pointer-events-none bg-no-repeat bg-right-bottom bg-initial mx-auto -left-[35px]"
        style={{
          backgroundImage: `url(${FunnelMobile})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "contain",
        }}
      />
      <div className="flex flex-col">
        <h2 className="hidden-animate font-['Anta'] font-normal lg:text-[6rem] text-[2.4375rem] lg:pt-10 lg:text-center leading-[140%] text-white">
          THE QGRAPH <br />
          PROCESS
        </h2>

        <aside className="hidden-animate lg:flex hidden pb-[108px] justify-center">
          <img src={funnel} alt={"funnel mx-auto"} />
        </aside>

        <div className="flex flex-col lg:hidden mx-0 sm:mx-20">
          <div className="mt-44 lg:w-[460px] sm:w-[400px] w-[300px] bg-[#0d1b1d] z-10 text-white border-white border-2 lg:rounded-3xl rounded-[5px] lg:pt-[1rem] pt-[0.5rem] lg:pb-[26px] pb-[20px] lg:px-[25px] px-[1rem] mb-10">
            <h2 className="anta lg:text-[2.875rem] text-[1.5rem] leading-[100%] pb-1">{`${STEPS[0].id} ${STEPS[0].title}`}</h2>
            {STEPS[0].subtitle && (
              <h4 className="noto font-bold lg:text-[1.375rem] leading-[100%] text-[1rem] pb-2 pt-1">
                {STEPS[0].subtitle}
              </h4>
            )}
            <p className="noto lg:text-[1rem] text-[0.8125rem]">
              {STEPS[0].description}
            </p>
          </div>
          <div className="sm:mt-20 mt-14 lg:w-[460px] sm:w-[400px] w-[300px] bg-[#0d1b1d] z-10 text-white border-white border-2 lg:rounded-3xl rounded-[5px] lg:pt-[1rem] pt-[0.5rem] lg:pb-[26px] pb-[20px] lg:px-[25px] px-[1rem] mb-10">
            <h2 className="anta lg:text-[2.875rem] text-[1.5rem] leading-[100%] pb-1">{`${STEPS[1].id} ${STEPS[1].title}`}</h2>
            {STEPS[1].subtitle && (
              <h4 className="noto font-bold lg:text-[1.375rem] leading-[100%] text-[1rem] pb-2 pt-1">
                {STEPS[1].subtitle}
              </h4>
            )}
            <p className="noto lg:text-[1rem] text-[0.8125rem]">
              {STEPS[1].description}
            </p>
          </div>{" "}
          <div className="sm:mt-45 mt-41 self-end lg:w-[460px] sm:w-[400px] w-[300px] bg-[#0d1b1d] z-10 text-white border-white border-2 lg:rounded-3xl rounded-[5px] lg:pt-[1rem] pt-[0.5rem] lg:pb-[26px] pb-[20px] lg:px-[25px] px-[1rem] mb-10">
            <h2 className="anta lg:text-[2.875rem] text-[1.5rem] leading-[100%] pb-1">{`${STEPS[2].id} ${STEPS[2].title}`}</h2>
            {STEPS[2].subtitle && (
              <h4 className="noto font-bold lg:text-[1.375rem] leading-[100%] text-[13px] pb-2 pt-1">
                {STEPS[2].subtitle}
              </h4>
            )}
            <p className="noto lg:text-[1rem] text-[0.8125rem]">
              {STEPS[2].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
