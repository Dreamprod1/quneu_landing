import { anta, noto } from "@/lib/fonts";
import Image from "next/image";
const GraphInfoSection = () => {
  return (
    <div className={`relative bg-[#78BAC9] px-24 py-20 text-black`}>
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex flex-col">
            <h3 className={`${anta.className} text-[200px]`} style={{ lineHeight: "202px" }}>QGRAPH</h3>
            <p className={`${noto.className} text-6xl font-bold text-stroke-dark`}>THE POWER OF QGRAPH</p>
          </div>
          <div>
            <Image src="/images/QGRAPH-patters.png" alt="graph" width={779} height={308} />
          </div>
        </div>
        <p className={`${noto.className} text-4xl   mt-10`}>
          Q0 demystifies the process of knowledge graph creation by automatically providing a dynamic representation of data processing events and contextual reasoning,  and allows
          your business to intelligently  grow, eliminating uncertainties in a secure and cost-efficient way. With Q0, your organization gains more than insights — it builds a neural
          network system that not only prepares you for what’s ahead, but also establishes a framework that prevents the same issues from recurring. As your organization changes and
          new employees join, your domain remains intact, ensuring continuity and knowledge acquisition as your organization grows.
        </p>
      </div>
    </div>
  );
};
export default GraphInfoSection;
