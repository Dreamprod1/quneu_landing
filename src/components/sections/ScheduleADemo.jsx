import * as React from "react";

import Gradient6 from "../../assets/GRADIENTS-6-1.png";

const ScheduleADemo = () => {
  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="schedule-a-demo"
      className="lg:h-dvh h-full w-full relative lg:py-0 py-[2rem]"
      style={{
        backgroundImage: `url(${Gradient6})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col lg:px-40 px-[36px] h-full justify-center">
        <h2 className="hidden-animate text-[#51AABE] lg:text-center text-left anta font-normal not-italic lg:text-[64px] text-[1.5rem] lg:leading-[100%] leading-[110%] tracking-normal">
          Ready To Transform Your Enterprise? <br />
          Ready To Transform Your Material Discovery?
        </h2>
        <p
          className="hidden-animate lg:pt-[40px] pt-[1.275rem]
        text-white noto lg:text-center font-light lg:text-[2rem] text-[0.9rem] lg:leading-[130%] leading-[130%]
        tracking-normal"
        >
          Join the Cognitive Graph Journey. <br />
          Discover how QUNEU can accelerate your innovation cycles and unlock
          new possibilities.
        </p>
        <div className="hidden-animate justify-center flex lg:pt-[86px] pt-[2.5rem]">
          <button
            onClick={() => handleScroll("contact")}
            type="button"
            className="
            cursor-pointer
            lg:py-[30px] py-[15px] lg:px-[70px] px-[30px]
            anta font-normal lg:text-[36px] text-[16px]
            leading-[100%] tracking-normal
            text-center

            lg:bg-white
            lg:text-black
            bg-[#51AABE]
            text-white
            border-white
            border

            rounded-[55px]
            flex justify-center items-center
            hover:bg-[#51AABE]
             hover:text-white


            "
          >
            SCHEDULE A DEMO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleADemo;
