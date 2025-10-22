import * as React from "react";
import TopMenu from "../common/TopMenu";
import HeroBackgroundImg from "../../../static/hero-background.png";
import ArrowIcon from "../../../static/Arrow.svg";

const Header = () => {
  return (
    <div
      className="lg:h-dvh h-[440px] w-full bg-[#D9D9D9] relative lg:pt-[54px] lg:px-[81px]"
      style={{
        backgroundImage: `url(${HeroBackgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <TopMenu />
      <div className="text-left absolute lg:bottom-40 md:bottom-5 bottom-0">
        <h2
          className="
        font-['Anta']
        font-normal
        lg:leading-[100%]
        leading-[130%]
        tracking-normal
        lg:text-[4rem]
        text-[1.75rem]
        lg:px-[103px]
        px-[2rem]
        xl:w-[1400px]
        lg:w-[1000px]
        hidden-animate
        "
        >
          ADVANCE YOUR BUSINESS TO NEW DIMENSIONS WITH COGNITIVE AI
        </h2>
      </div>
      <div className="hidden lg:block absolute left-0 bottom-[60px] text-center w-full">
        <p className="font-['Anta'] font-normal text-[1rem] leading-[100%] tracking-normal ease-in-out">
          Scroll to explore
        </p>
        <aside className="flex justify-center mt-4 animate-bounce">
          <img src={ArrowIcon} alt={"iarrow icon "} className="h-[16px] " />
        </aside>
      </div>
    </div>
  );
};

export default Header;
