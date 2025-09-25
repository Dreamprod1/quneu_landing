import { anta, noto } from "@/lib/fonts";
const ContactSection = () => {
  return (
    <div className="relative bg-[#0E0E0E] h-full  px-24  py-36">
      <div className="container mx-auto">
        <h1 className={`${anta.className} text-center justify-start text-white text-8xl`}>Ready To Transform Your Enterprise and Your Material Discovery?</h1>
        <p className={`${noto.className} font-light text-center justify-start text-white text-3xl pt-9`}>
          Join the Cognitive Graph Journey. <br/> Discover how QUNEU can accelerate your innovation cycles and unlock new possibilities.
        </p>
        <div className="flex justify-center">
          <button type="button" className={`${anta.className} bg-[#51AABE] text-white text-5xl rounded-xl px-16 py-8 mt-24 cursor-pointer hover:bg-[#3b8a9a] transition-colors duration-300`}>
            Schedule a demo
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
