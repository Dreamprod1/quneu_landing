import * as React from "react";
import GradientBottomDark from "../../assets/GRADIENTS-4-1.png";
import QGraphImg from "../../assets/QGraphImg.svg";

const QGraph = () => {
  return (
    <div
      id="qgraph"
      className="h-full w-full lg:px-[187px] px-[36px] relative bg-[#D9D9D9] pt-[1rem] pb-[3rem]"
      style={{
        backgroundImage: `url(${GradientBottomDark})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div
        className="flex
          lg:flex-row
          flex-col
          lg:gap-20
          h-full
          justify-center
          items-center"
      >
        <aside className="hidden-animate relative lg:flex-1/5 lg:h-full h-[200px] flex items-center">
          <img
            src={QGraphImg}
            alt="qgraph"
            className="
              lg:h-full
              h-[360px]
              lg:object-contain
              object-scale-down
              rotate-270
              lg:rotate-0
        
            "
          />
        </aside>
        <div className="lg:flex-4/5 text-black">
          <h2 className="hidden-animate anta lg:text-[6rem] text-[2.43rem] leading-none font-normal">
            QGRAPH
          </h2>
          <h2
            className="hidden-animate
            noto
            lg:text-[4rem]
            text-[2rem]
            font-bold
            lg:mt-[43px]
            mt-[14px]
            text-[#D9D9D9]
            text-outline
            lg:leading-[75px]
            leading-[40px]
            tracking-normal
          "
          >
            FROM DISCONNECTED DATA TO CONNECTED UNDERSTANDING
          </h2>
          <p
            className="hidden-animate
              lg:text-[1.5rem]
              text-[0.875rem]
              noto
              font-normal
              lg:mt-[77px]
              mt-[0.5rem]
              text-justify
            "
          >
            Unlike static databases,{" "}
            <strong>Q0’s Dynamic Knowledge Graph</strong> connects everything
            your business knows — people, processes, and data — revealing how
            they relate, why they matter, and where new opportunities emerge.{" "}
            <br />
            <br />
            <strong>Q0 automates graph creation</strong> — transforming data,
            context, and reasoning into a continuously adaptive system that
            eliminates uncertainty, reduces the cost of knowledge maintenance
            and discovery, and drives intelligent growth across your enterprise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QGraph;
