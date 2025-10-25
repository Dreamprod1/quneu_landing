import * as React from "react";

import QlangModelSection from "../../../static/images/QlangModelSection.svg";
import MicIcon from "../../../static/mic-icon.svg";

const QLanguageModel = () => {
  return (
    <div
      className="2xl:h-dvh h-full w-full relative bg-[#D9D9D9] pt-[5rem] pb-[5rem] 2xl:px-[187px] xl:px-[103px] lg:px-[75px] px-[36px]"
      style={{
        backgroundImage:
          "linear-gradient(to top, #D9D9D9 50%, #AAA99B 90%, #0D1B1D 100%)",
      }}
    >
      <section className="flex lg:gap-8 items-center h-full  lg:flex-row flex-col">
        <article className="2xl:mr-[140px] xl:mr-[100px] lg:mr-[40px] lg:order-1 order-2">
          <h2 className="hidden-animate font-['Anta'] font-normal 2xl:text-[6rem] xl:text-[5rem] lg:tet-[4rem] text-[2rem] leading-[100%] tracking-normal pb-5 lg:text-left text-justify">
            Q LANGUAGE MODEL
          </h2>
          <h3 className="hidden-animate noto font-bold 2xl:text-[4rem] xl:text-[3rem] lg:text-[2rem] text-[31px] leading-[100%] lg:tracking-normal tracking-tight text-transparent text-outline">
            GROWTH & HYPOTHESIS CREATION
          </h3>

          <p className="hidden-animate noto font-normal 2xl:text-[1.5rem] xl:text-[1.25rem] lg:text-[1rem] text-[13px] text-justify mt-6">
            QLM automatically generates and evaluates unlimited hypotheses about
            possible causes and solutions. It systematically tests each one
            against your organization's evidence - eliminating mismatches in
            partnership with human experts - until it identifies the root cause
            and recommends precise actions. What once took weeks of manual
            investigation now happens in minutes.
          </p>

          <div
            className="hidden-animate lg:mt-[50px] mt-[20px] inline-flex items-center noto font-bold
            2xl:text-[1.5rem]
            xl:text-[1.25rem]
            lg:text-[1rem]
            text-[0.775rem]

            text-justify border-[1.5px] lg:rounded-[52px] rounded-[1rem] py-[10px] px-[26px]"
            aria-label="Example hypothesis question with microphone"
          >
            <span className="mr-[29px]">
              What factors are slowing down our new product launch timeline?
            </span>
            <img
              src={MicIcon}
              alt={"mic-icon"}
              className="lg:h-full h-[30px]"
            />
          </div>
        </article>
        <aside className="flex items-center justify-center lg:order-2 order-1 w-full lg:h-full h-[200px] relative z-10">
          <img
            src={QlangModelSection}
            alt="Illustration of Q language model"
            className="
            {/*max-w-full lg:h-auto h-[365px] rotate-90 lg:rotate-0 z-10*/}

                         h-full
              lg:flex
              hidden
              object-contain

            "
          />
        </aside>
      </section>
    </div>
  );
};

export default QLanguageModel;
