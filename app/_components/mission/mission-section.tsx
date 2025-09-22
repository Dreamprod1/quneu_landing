/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
import { Anta, Noto_Sans } from "next/font/google";

const anta = Anta({
  weight: "400",
});

const noto = Noto_Sans({
  weight: "400",
});

const values = [
  {
    title: "OUR VISION",
    description:
      "To create a world where every organization has autonomous intelligence that grows smarter every day—transforming business complexity into competitive advantage, accelerating human discovery across all industries, and establishing the foundation for truly intelligent enterprises that think, learn, and innovate at the speed of possibility",
  },
  {
    title: "OUR MISSION",
    description:
      "QUNEU transforms enterprise complexity into intelligence by creating dynamic knowledge graphs that turn vast, disparate data into actionable insights—empowering organizations to make faster decisions, unlock hidden opportunities, and build resilient futures through secure, cost-efficient AI platforms",
  },
  {
    title: "OUR VALUES",
    description:
      "QUNEU is guided by principles that keep our work practical and responsible. We design intelligence that serves people first, built on transparency and trust. Sustainability drives our decisions, ensuring long-term impact. We believe collaboration strengthens outcomes, and we innovate with purpose—delivering solutions that create real value and scale responsibly.",
  },
];

const MissionSection = () => {
  return (
    <div className="bg-[#0E0E0E] h-full px-24 flex flex-col py-36">
      <div className="flex items-stretch gap-20">
        {values.map((value) => (
          <div key={value.title} className="flex flex-col justify-between items-center flex-1">
            <div className="flex flex-col items-center ">
              <svg width="121" height="75" viewBox="0 0 151 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M76.5264 0.00585938C117.332 0.522687 150.252 33.7624 150.252 74.6904H148.252C148.252 34.5449 115.707 2.00024 75.5615 2C35.4158 2 2.87116 34.5447 2.87109 74.6904H0.871094C0.871161 33.4402 34.3112 0 75.5615 0L76.5264 0.00585938Z"
                  fill="white"
                />
                <path
                  d="M75.5615 18.3867C106.658 18.3869 131.867 43.5952 131.867 74.6914H129.867C129.867 44.6998 105.553 20.3869 75.5615 20.3867C45.57 20.3869 21.257 44.6998 21.2568 74.6914H19.2568C19.257 43.5953 44.4654 18.3869 75.5615 18.3867Z"
                  fill="#51AABE"
                />
                <path
                  d="M76.54 36.7842C97.03 37.3034 113.481 54.0764 113.481 74.6914H111.481C111.481 54.8538 95.3991 38.7717 75.5615 38.7715C55.7237 38.7715 39.6417 54.8536 39.6416 74.6914H37.6416C37.6417 53.7491 54.6191 36.7715 75.5615 36.7715L76.54 36.7842Z"
                  fill="#AE2637"
                />
              </svg>
            </div>
            <h3 className={`${anta.className} text-3xl text-white`}>{value.title}</h3>
            <div className="mt-5 border rounded-2xl p-9 flex-1 flex items-center">
              <p className={`${noto.className} text-lg text-gray-400`}>{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionSection;
