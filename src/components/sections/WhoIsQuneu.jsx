import React, { useMemo } from "react";

import Mozaic from "../../../static/mosaic.png";
import MozaicMobile from "../../../static/mobile-mosaic.svg";
import GradientBottom from "../../../static/gradient-2-1.webp";

const SectionTitle = ({ children, className = "" }) => (
  <h2
    className={`
    hidden-animate
    anta font-normal 
    lg:text-[5rem]
    text-[2rem] 
    text-[#D9D9D9] 
    text-outline flex 
    items-center 
    custom-text ${className}`}
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
    lg:text-[1.5rem]
    leading-[16px]
     text-[0.875rem]
     text-black text-justify ${className}`}
  >
    {children}
  </p>
);

const ContentSection = ({
  title,
  children,
  titleClass = "",
  contentClass = "",
}) => (
  <section className="mb-[50px] xl:mb-[200px]">
    <SectionTitle className={`${titleClass}`}>{title}</SectionTitle>
    <SectionContent className={`${contentClass}`}>{children}</SectionContent>
  </section>
);

const WhoIsQuneu = () => {
  return (
    <div
      id="platform"
      className="h-full w-full lg:px-[187px] px-[36px] relative bg-[#D9D9D9]"
      style={{
        backgroundImage: `url(${GradientBottom})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100%",
        backgroundSize: "cover",
      }}
    >
      <div
        className="flex h-full
        lg:gap-40
      flex-col
      lg:flex-row"
      >
        <div
          className="
        lg:order-1
        order-2
        lg:flex-3/5
        flex-1
        flex
        flex-col
        lg:justify-center"
        >
          <ContentSection
            title="WHO IS QUNEU"
            titleClass="lg:mt-[151px] md:mt-[25px]"
            contentClass="mt-[20px] lg:mt-[61px] tracking-normal"
          >
            Quneu is a pioneering AI company which uses proprietary cutting-edge
            AI technology in its Q0 cognitive platform to automatically extract
            and transform knowledge from all your enterprise data sources.
            <br />
            <br />
            Use our brains to optimize the efficiency and profitability of your
            business, and be the first to explore new market opportunities as
            they arise.
          </ContentSection>

          <ContentSection
            title="Q0 PLATFORM"
            contentClass="mt-[20px] lg:mt-[61px] custom-text"
          >
            Q0 unites your organization's internal and external data into one
            dynamic view revealing hidden connections, predicting what's next,
            and turning insight into action.
          </ContentSection>
        </div>

        <aside
          className="
          hidden-animate
          flex items-center justify-center
          lg:flex-2/5
          lg:order-2
          order-1
             lg:h-full
            h-[150px]
            "
        >
          <img
            src={Mozaic}
            alt="Decorative mosaic pattern"
            className="
            lg:block
            hidden
            w-full
            object-scale-down
            h-full
            py-[56px]
            mx-auto"
          />
          <img
            src={MozaicMobile}
            alt="Decorative mosaic pattern"
            className="lg:hidden block
            object-scale-down
            h-full
            mx-auto
            "
          />
        </aside>
        <div className="lg:hidden order-3 w-[247px] border-b-1 mx-auto mb-10" />
      </div>
    </div>
  );
};

export default React.memo(WhoIsQuneu);
