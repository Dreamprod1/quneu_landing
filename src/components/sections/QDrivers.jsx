import React from "react";
import GradientBackground from "../../../static/gradient-7.png";
import QDriversImage from "../../../static/QDriversImage.svg";

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
      className="xl:h-dvh h-full w-full lg:px-[170px] px-[36px] relative xl:py-0 py-[54px] lg:bg-center bg-top-right"
      style={{
        backgroundImage: `url(${GradientBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-full items-center lg:flex-row flex-col">
        <article className="lg:w-4/6 flex flex-col">
          <h2 className="hidden-animate font-['Anta'] font-normal lg:text-[96px] text-[39px] leading-[100%] tracking-[0%] lg:pb-0 pb-27">
            {CONTENT.title}
          </h2>
          <h3 className="hidden-animate noto font-bold lg:text-[64px] text-[32px] text-outline leading-[100%] mt-4 text-transparent">
            {CONTENT.subtitle}
          </h3>
          <h4 className="hidden-animate lg:pt-[64px] pt-[30px] noto font-semibold lg:text-[36px] text-[16px] leading-[100%] tracking-[0%] text-justify">
            {CONTENT.kicker}
          </h4>
          <div className="hidden-animate lg:pt-6 pt-4 noto font-normal lg:text-[1.5rem] text-[13px] text-justify">
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
            className="max-w-full xl:h-auto lg:h-[600px] h-[400px] lg:rotate-0 rotate-90 lg:scale-x-[1] scale-x-[-1]"
          />
        </aside>
        <aside className="lg:hidden absolute lg:right-20 left-20 top-3 flex lg:items-center lg:mt-0 mt-10 items-end justify-center lg:h-[100px] h-[300px] lg:pt-0 pt-40">
          <img
            src={QDriversImage}
            alt="QDrivers illustration"
            className="max-w-full lg:h-auto h-[400px] lg:rotate-0 rotate-90 lg:scale-x-[1] scale-x-[-1]"
          />
        </aside>
      </div>
    </section>
  );
};

export default QDrivers;
