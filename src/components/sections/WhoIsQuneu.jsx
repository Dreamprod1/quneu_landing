import React, { useMemo } from "react";

import Mozaic from "../../../static/mosaic.png";
import MozaicMobile from "../../../static/mosaic_mobile.svg";
import GradientBottom from "../../../static/gradient-2-1.webp";

const SectionTitle = ({ children, className = "" }) => (
  <h2
    className={`
    hidden-animate
    anta font-normal 
    2xl:text-[5rem]
    xl:text-[4rem]
    lg:text-[3rem]
    text-[2rem] 
    text-[#D9D9D9] 
    text-outline flex 
    items-center 
    custom-text ${className}
    pb-[12px]
    `}
    aria-hidden="false"
  >
    {children}
  </h2>
);

const SectionContent = ({ children, className = "" }) => (
  <p
    className={`noto font-normal 
    hidden-animate
    lg:leading-[30px]
    xl:text-[1.5rem]
    lg:text-[1rem]
    text-[0.875rem]
    leading-[16px]
     text-black text-justify ${className}`}
  >
    {children}
  </p>
);

const WhoIsQuneu = () => {
  return (
    <div
      id="platform"
      className="xl:py-[56px] pt-[30px] pb-[37px] h-full w-full
      2xl:px-[187px]
      xl:px-[103px]
      lg:px-[75px]
      px-[36px] relative bg-[#D9D9D9]"
    >
      <div className="flex 2xl:gap-[7.75rem] xl:gap-[4rem] lg:gap-[3rem] lg:flex-row flex-col">
        <div className="xl:flex-3/5 lg:flex-2/3 flex flex-col items-center justify-center 2xl:gap-20 lg:gap-1 order-2 lg:order-1">
          <div>
            <SectionTitle>WHO IS QUNEU</SectionTitle>
            <SectionContent>
              Quneu is a pioneering AI company which uses proprietary
              cutting-edge AI technology in its Q0 cognitive platform to
              automatically extract and transform knowledge from all your
              enterprise data sources.
              <br />
              <br />
              Use our brains to optimize the efficiency and profitability of
              your business, and be the first to explore new market
              opportunities as they arise.
            </SectionContent>
          </div>
          <div className="pt-[39px]">
            <SectionTitle>Q0 PLATFORM</SectionTitle>
            <SectionContent>
              Q0 unites your organization's internal and external data into one
              dynamic view revealing hidden connections, predicting what's next,
              and turning insight into action.
            </SectionContent>
          </div>
        </div>
        <div className="order-1 lg:order-2 xl:flex-2/5 lg:flex-1/3 pb-[1rem]">
          <img
            src={Mozaic}
            alt="Decorative mosaic pattern"
            className="lg:block hidden"
          />
          <img
            src={MozaicMobile}
            alt="Decorative mosaic pattern"
            className="lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoIsQuneu;
