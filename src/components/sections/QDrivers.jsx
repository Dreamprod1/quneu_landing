import React from "react";
import GradientBackground from "../../../static/gradient-7.webp";
import QDriversImage from "../../../static/QDriversImage.svg";
import QDriversImageMobile from "../../../static/qdrivers_mobile.svg";

const CONTENT = {
  title: "QDRIVERS",
  subtitle: "ENERGY SAVER BREAKTHROUGH",
  kicker: "SLASH YOUR AI COSTS BY 90%",
  description: (
    <>
      <b>QDRIVERS</b> is revolutionary kernel-level technology that compresses
      LLM tokens by up to 95%, delivering 10-20× faster inference and 90% energy
      savings without sacrificing accuracy. No code changes. No retraining. No
      complexity. Simply install <b>QDRIVERS</b> and watch your GPU costs
      plummet while your models run faster than ever. Compatible with PyTorch,
      TensorFlow, JAX, and every major AI framework. Deploy in minutes. Save
      millions annually. The future of sustainable, affordable AI is here.
    </>
  ),
};

const QDrivers = () => {
  return (
    <section
      id="qdrivers"
      className="h-full w-full

      2xl:px-[170px]
      xl:px-[103px]
      lg:px-[75px]
      2xl:py-[260px]
      xl:py-[160px]
      lg:py-[100px]
      py-[54px]
      px-[36px]
      relative
      lg:bg-center bg-top-right"
      style={{
        backgroundImage: `url(${GradientBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-full items-center lg:flex-row flex-col">
        <article className="lg:w-4/6 flex flex-col">
          <h2
            className="hidden-animate font-['Anta'] font-normal
          2xl:text-[6rem]
          xl:text-[5rem]
          lg:text-[4rem]
          text-[39px] leading-[100%] tracking-[0%] lg:pb-0 pb-27"
          >
            {CONTENT.title}
          </h2>
          <h3
            className="hidden-animate noto font-bold
          2xl:text-[4rem]
          xl:text-[3rem]
          lg:text-[2.5rem]
          text-[32px] text-outline leading-[100%] mt-4 text-transparent"
          >
            {CONTENT.subtitle}
          </h3>
          <h4
            className="hidden-animate lg:pt-[64px] pt-[30px] noto font-semibold
          xl:text-[2rem]
          lg:text-[1.5rem]
          text-[1rem] leading-[100%] tracking-[0%] text-justify"
          >
            {CONTENT.kicker}
          </h4>
          <div
            className="hidden-animate lg:pt-6 pt-4 noto font-normal
          2xl:text-[1.5rem]
          lg:text-[1.25rem]
          text-[13px] text-justify"
          >
            {CONTENT.description}
          </div>
        </article>

        <aside
          className="

          absolute
          lg:right-20
          lg:flex
          hidden
          lg:items-center
          lg:justify-center
          h-[100px]
          lg:pt-0
          pt-40"
        >
          <img
            src={QDriversImage}
            alt="QDrivers illustration"
            className="max-w-full 2xl:h-auto xl:h-[600px] lg:h-[500px] h-[400px] "
          />
        </aside>
        <aside
          className="lg:hidden
        absolute
       left-10
       top-0
       items-end

        "
        >
          <img
            src={QDriversImageMobile}
            alt="QDrivers illustration"
            className="   h-[370px]
       w-[270px]"
          />
        </aside>
      </div>
    </section>
  );
};

export default QDrivers;
