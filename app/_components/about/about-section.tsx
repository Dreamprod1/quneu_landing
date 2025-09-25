import { noto } from "@/lib/fonts";
import Image from "next/image";
const AboutSection = () => {
  return (
    <div className="bg-[#060405] bg-cover bg-center h-full flex flex-col items-center justify-center px-24 py-20">
      <div className="text-center mb-12"><Image src="/images/about-top-img.png" alt="shap" width={1444} height={19} /></div>
      <div className="container mx-auto">
        <p className={`${noto.className} text-4xl  text-white`}>
          Quneu is a pioneering AI company proudly delivering Q0, the most accurate, most powerful knowledge platform available today. This amazing platform is being developed by a
          team that brings together experts in neuroscience, ontology, AI, manufacturing, software, business processes, and data security, to automatically and dynamically dissect
          and categorize your company’s data.
        </p>
        <p className={`${noto.className} text-4xl  text-white mt-10`}>
          How does it work? Q0 automatically creates proprietary ‘knowledge graphs’ —your business’s living map—by dynamically and semantically mapping all your enterprise data.
          Continuously. Using a single, adaptable AI knowledge platform composed of microservices tailored to your needs, Q0 turns even the most complex data into actionable
          insights.  In this way, Q0 empowers your growing business to make faster decisions, unlock new opportunities, and achieve unprecedented value in a secure and cost-efficient
          way.
        </p>
      </div>
    </div>
  );
};
export default AboutSection;
