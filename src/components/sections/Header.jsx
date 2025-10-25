import * as React from "react";
import TopMenu from "../common/TopMenu";
import HeroBackgroundImg from "../../../static/hero-background.webp";
import HeroBackgroundImgMobile from "../../../static/header_mobile.svg";
import ArrowIcon from "../../../static/Arrow.svg";

const SectionTitle = ({ children }) => (
  <h2
    className="
      font-['Anta']
      font-normal
      lg:leading-[100%]
      leading-[130%]
      tracking-normal
      2xl:text-[4rem]
      xl:text-[3rem]
      lg:text-[2.5rem]
      text-[24px]
      lg:px-[75px]
      xl:px-[103px]
      2xl:px-[182px]
      px-[2rem]
      hidden-animate
      whitespace-break-spaces
    "
    aria-hidden="false"
  >
    {children}
  </h2>
);

const Header = () => {
  return (
    <div
      className="
      lg:h-dvh
      md:h-[500px]
      w-full
      lg:bg-[#D9D9D9]
      bg-gradient-to-b from-[#C6BEB1] to-[#D9D9D9]
      relative
      lg:pt-[54px]
      lg:px-[81px]
      "
    >
      <div
        className="md:flex hidden w-full absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${HeroBackgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
      <TopMenu />
      <div className="md:hidden w-full pt-[32px] pb-[13px] px-[24px] mx-auto">
        <img
          src={HeroBackgroundImgMobile}
          alt="HeroBackgroundImgMobile"
          className="object-cover w-full"
        />
      </div>
      <div className="md:top-[inherit] top-0 text-left md:absolute relative left-0 lg:bottom-40 md:bottom-5 bottom-0 w-full">
        <SectionTitle>
          ADVANCE YOUR BUSINESS TO NEW DIMENSIONS WITH COGNITIVE AI
        </SectionTitle>
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
