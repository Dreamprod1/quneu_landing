import * as React from "react";
import gradient_1 from "../../../static/gradient-founders.webp";
import Vision from "../../../static/founders/vision@4x 1.svg";
import Mission from "../../../static/founders/mission@4x 1.svg";
import Values from "../../../static/founders/values@4x 1.svg";
import VisionBallsMobile from "../../../static/founders/VisionBallsMobile.svg";
import GradientBottom from "../../../static/GRADIENTS-4-1-2.webp";
import VisionLine from "../../../static/VisionLine.svg";

const VISION_CARDS = [
  {
    image: Vision,
    title: "OUR VISION",
    text: "To create a world where every organization has autonomous intelligence that grows smarter every day—transforming business complexity into competitive advantage, accelerating human discovery across all industries, and establishing the foundation for truly intelligent enterprises that think, learn, and innovate at speed.",
    mobile_text:
      "To create a world where every organization has autonomous intelligence that grows smarter every day—transforming business complexity into competitive advantage, accelerating human discovery across all industries, and establishing the foundation for truly intelligent enterprises that think, learn, and innovate at speed.",
  },
  {
    image: Mission,
    title: "OUR MISSION",
    text: "Our mission is to help humanity understand itself through knowledge. Quneu builds technology that transforms enterprise complexity into clarity—integrating human insight and domain expertise to help people and organizations think faster, collaborate better, and create lasting impact.",
    mobile_text: `Our mission is to help humanity understand itself through knowledge. <br /> <br /> Quneu builds technology that transforms enterprise complexity into clarity—integrating human insight and domain expertise to help people and organizations think faster, collaborate better, and create lasting impact.`,
  },
  {
    image: Values,
    title: "OUR VALUES",
    text: "Quneu is guided by principles that keep our work practical and responsible. <br /> We design systems that serve people first, built on transparency and trust. Sustainability drives our decisions, ensuring long-term impact. <br /> We believe collaboration strengthens outcomes, and we innovate with purpose—delivering solutions that create real value and scale responsibly.",
    mobile_text:
      "Quneu is guided by principles that keep our work practical and responsible. <br /><br /> We design systems that serve people first, built on transparency and trust. Sustainability drives our decisions, ensuring long-term impact. <br /> <br /> We believe collaboration strengthens outcomes, and we innovate with purpose—delivering solutions that create real value and scale responsibly.",
  },
];

const VisionCard = ({ image, title, text, index }) => (
  <div className="flex-1 relative hidden-animate">
    <h4 className=" pb-5 pt-5 text-center font-[Anta] font-normal xl:text-[40px] text-[20px] leading-[100%] tracking-[0%]">
      {title}
    </h4>
    <div
      className="border-[1.5px] xl:rounded-[30px] rounded-[5px] xl:h-full"
      style={{
        backgroundImage: `url(${gradient_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="2xl:px-[48px] xl:px-[30px] xl:pt-[30px] p-[20px] noto font-normal xl:text-[20px] text-[13px] xl:leading-[35px] text-justify">
        {text}
      </p>
    </div>
  </div>
);

const VisionCardMobile = ({ image, title, text }) => (
  <div className="flex gap-[14px]">
    <div className="border-[1.5px] xl:rounded-[30px] rounded-[5px] xl:h-[460px] px-[1rem] py-[1rem]">
      <h4 className="hidden-animate pb-[8px] font-[Anta] font-normal xl:text-[40px] text-[20px] leading-[100%] tracking-[0%]">
        {title}
      </h4>
      <p
        className="hidden-animate xl:px-[48px] xl:pt-[30px] noto font-normal xl:text-[20px] text-[13px] xl:leading-[35px] leading-[15px] text-justify"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  </div>
);

const VisionsSection = () => {
  return (
    <div
      className="h-full w-full xl:px-[187px] px-[36px] pt-[80px] relative py-[2rem]"
      style={{
        backgroundImage: `url(${GradientBottom})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="relative xl:flex gap-5 xl:flex-row flex-col justify-center  mb-12 hidden items-stretch">
        <div className="flex-1/9" />
        <div className="flex-1/9 relative">
          <img
            src={VISION_CARDS[0].image}
            alt={VISION_CARDS[0].title}
            className="mx-auto w-[150px] h-[150px] hidden-animate"
          />
        </div>
        <div className="flex-2/9  flex items-center justify-center">
          <img src={VisionLine} />
        </div>
        <div className="flex-1/9 relative">
          <img
            src={VISION_CARDS[1].image}
            alt={VISION_CARDS[1].title}
            className="mx-auto w-[150px] h-[150px] hidden-animate"
          />
        </div>
        <div className="flex-2/9  flex items-center justify-center">
          <img src={VisionLine} />
        </div>
        <div className="flex-1/9 relative">
          <img
            src={VISION_CARDS[2].image}
            alt={VISION_CARDS[2].title}
            className="mx-auto w-[150px] h-[150px] hidden-animate"
          />
        </div>
        <div className="flex-1/9" />
      </div>
      <div className="xl:flex gap-5 xl:flex-row flex-col justify-center items-stretch mb-12 hidden">
        {VISION_CARDS.map((card, index) => (
          <VisionCard
            key={card.title}
            image={card.image}
            title={card.title}
            text={card.text}
            index={index}
          />
        ))}
      </div>
      <div className="xl:hidden flex flex-row gap-[14px]">
        <img
          src={VisionBallsMobile}
          alt={""}
          className="mx-auto flex-1/5 w-[73px] h-[573px]"
        />
        <div className="flex flex-col gap-[2rem]">
          {VISION_CARDS.map((card) => (
            <VisionCardMobile
              key={card.title}
              image={card.image}
              title={card.title}
              text={card.mobile_text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionsSection;
