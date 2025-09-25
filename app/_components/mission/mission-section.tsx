/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
import { anta, noto } from "@/lib/fonts";
import Image from "next/image";
const MissionSection = () => {
  return (
    <div className="bg-[#0E0E0E] h-full px-24 flex flex-col py-36">
      <div className="container mx-auto">
        <div className="flex items-stretch gap-20">
          {/* ----- box item bg img is static ------ */}
          <div className="flex flex-col justify-between items-center flex-1">
            <div className="text-center"><Image src="/images/misson-top-shap.png" alt="mission shap" width={150} height={150} /></div>
            <h3 className={`${anta.className} text-3xl text-white`}>OUR VISION</h3>
            <div className="mt-5 border rounded-2xl p-9 pb-14 flex-1 flex items-center bg-[url('/images/mission-box-bg-1.png')] bg-right-bottom bg-no-repeat">
              <p className={`${noto.className} text-lg text-white`}>To create a world where every organization has autonomous intelligence that grows smarter every day—transforming business complexity into competitive advantage, accelerating human discovery across all industries, and establishing the foundation for truly intelligent enterprises that think, learn, and innovate at the speed of possibility</p>
            </div>
          </div>
          {/* ----------- */}
          <div className="flex flex-col justify-between items-center flex-1">
            <div className="text-center"><Image src="/images/misson-top-shap.png" alt="mission shap" width={150} height={150} /></div>
            <h3 className={`${anta.className} text-3xl text-white`}>OUR MISSION</h3>
            <div className="mt-5 border rounded-2xl p-9 pb-14 flex-1 flex items-center bg-[url('/images/mission-box-bg-2.png')] bg-right-bottom bg-no-repeat">
              <p className={`${noto.className} text-lg text-white`}>QUNEU transforms enterprise complexity into intelligence by creating dynamic knowledge graphs that turn vast, disparate data into actionable insights—empowering organizations to make faster decisions, unlock hidden opportunities, and build resilient futures through secure, cost-efficient AI platforms</p>
            </div>
          </div>
          {/* ----------- */}
          <div className="flex flex-col justify-between items-center flex-1">
            <div className="text-center"><Image src="/images/misson-top-shap.png" alt="mission shap" width={150} height={150} /></div>
            <h3 className={`${anta.className} text-3xl text-white`}>OUR VALUES</h3>
            <div className="mt-5 border rounded-2xl p-9 pb-14 flex-1 flex items-center">
              <p className={`${noto.className} text-lg text-white`}>QUNEU is guided by principles that keep our work practical and responsible. We design intelligence that serves people first, built on transparency and trust. Sustainability drives our decisions, ensuring long-term impact. We believe collaboration strengthens outcomes, and we innovate with purpose—delivering solutions that create real value and scale responsibly.</p>
            </div>
          </div>
          {/* ----------- */}
        </div>
      </div>
    </div>
  );
};
export default MissionSection;
