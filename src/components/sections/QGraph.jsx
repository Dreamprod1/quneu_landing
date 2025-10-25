import * as React from "react";
import QGraphImg from "../../../static/QGraphImg.svg";
import QGraphImgMobile from "../../../static/QGRAPH_mobile.svg";

const QGraph = () => {
  return (
    <div
      id="qgraph"
      className="h-full w-full
      2xl:px-[187px]
      xl:px-[103px]
      lg:px-[75px]
      px-[36px] relative bg-[#D9D9D9] lg:py-[100px] pt-[1rem] pb-[6rem]
      "
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #D9D9D9 50%, #AAA99B 90%, #0D1B1D 100%)",
      }}
    >
      <div
        className="flex
          lg:flex-row
          flex-col
          2xl:gap-20
          lg:gap-10
          h-full
          justify-center
          items-center"
      >
        <aside className="hidden-animate relative w-full flex justify-center mb-[20px] mt-[45px]">
          <img
            src={QGraphImg}
            alt="qgraph"
            className="
              h-full
              lg:flex
              hidden
              object-contain
            "
          />
          <img
            src={QGraphImgMobile}
            alt="qgraph"
            className="
              max-w-[500px]
              w-full
              lg:hidden

            "
          />
        </aside>
        <div className="text-black">
          <h2
            className="hidden-animate anta
          2xl:text-[6rem]
          lg:text-[5rem]
          text-[2.43rem] leading-none font-normal"
          >
            QGRAPH
          </h2>
          <h2
            className="hidden-animate
            noto
            2xl:text-[4rem]
            lg:text-[3rem]
            text-[2rem]
            font-bold
            xl:mt-[43px]
            mt-[14px]
            text-[#D9D9D9]
            text-outline
            2xl:leading-[75px]
            lg:leading-[120%]
            leading-[40px]
            tracking-normal
          "
          >
            FROM DISCONNECTED DATA TO CONNECTED UNDERSTANDING
          </h2>
          <p
            className="hidden-animate
              xl:text-[1.5rem]
              lg:text-[1.25rem]
              text-[0.875rem]
              noto
              font-normal
              xl:mt-[77px]
              lg:mt-[36px]
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
