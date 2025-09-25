import { noto } from "@/lib/fonts";
const MatDesignSection = () => {
  return (
    <div className={`relative ${noto.className} bg-[url(/images/mat-design.jpg)] h-full text-justify flex flex-col px-24 py-20`}>
      <div className="container mx-auto gap-10">
        <h3 className="text-8xl mb-10">Q0’s Intelligent Material Design</h3>
        <p className="text-4xl">
          We have developed a groundbreaking AI platform that designs novel, high-performance materials from the ground up. Imagine an AI artist that can create a perfect, intricate
          design starting from a blank canvas. Our software does this for chemistry. It begins with a set of target properties—like high conductivity or extreme durability—and
          intelligently generates a complete, physically-viable crystal structure that meets those exact specifications.
        </p>
      </div>
    </div>
  );
};
export default MatDesignSection;
