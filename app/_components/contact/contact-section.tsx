import { Anta, Noto_Sans } from "next/font/google";

const anta = Anta({
  weight: "400",
});

const noto = Noto_Sans({
  weight: "300",
});

const ContactSection = () => {
  return (
    <div className="bg-[#0E0E0E] h-full  px-24 flex flex-col py-36">
      <h1 className={`${anta.className} text-center justify-start text-white text-8xl`}>Ready To Transform Your Enterprise and Your Material Discovery?</h1>
      <p className={`${noto.className} text-center justify-start text-white text-3xl pt-9`}>
        Join the Cognitive Graph Journey. Discover how QUNEU can accelerate your innovation cycles and unlock new possibilities.
      </p>
      <div className="flex justify-center">
        <button
          type="button"
          className={`${anta.className} bg-[#51AABE] text-white text-5xl rounded-xl px-16 py-8  mt-24 cursor-pointer hover:bg-[#3b8a9a] transition-colors duration-300`}
        >
          Schedule a demo
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
