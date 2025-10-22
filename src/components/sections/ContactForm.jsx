import * as React from "react";
import Gradient6 from "../../../static/GRADIENTS-6-1-2.png";
import gradient104 from "../../../static/gradient-104x5.png";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id="contact"
      className="lg:h-dvh h-full w-full  relative lg:pb-0 pb-[400px] lg:pt-0 pt-[3rem]"
      style={{
        backgroundImage: `url(${Gradient6})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col h-full justify-center relative lg:w-2/3 lg:mx-auto mx-[2rem]">
        <div
          className="hidden-animate border-[1.5px] border-white rounded-[30px] lg:px-10 px-[2rem] lg:py-[4rem] pt-[1.5rem] pb-[3rem]"
          style={{
            backgroundImage: `url(${gradient104})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        >
          <h2 className="lg:mb-14 mb-[1.5rem] text-white text-center font-normal font-['Anta'] lg:text-[4rem] text-[1.5rem] leading-[100%] tracking-[0%]">
            CONTACT US
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:gap-4 lg:px-[100px]"
          >
            <input
              type="text"
              placeholder={"Your Name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
              outline-none
              lg:mb-[3rem] mb-[1rem] w-full  noto lg:text-[22px]  text-[13px] text-white border-b-2 border-white py-2 placeholder-white"
              required
            />

            <input
              type="email"
              value={email}
              placeholder={"Your E-mail"}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none lg:mb-[3rem] mb-[2rem] w-full  noto lg:text-[22px]  text-[13px]  text-white border-b-2 border-white py-2 placeholder-white"
              required
            />

            <input
              value={message}
              placeholder={"Your Message"}
              onChange={(e) => setMessage(e.target.value)}
              className="outline-none w-full noto lg:text-[22px]  text-[13px] text-white border-b-2 py-2 border-white placeholder-white"
              required
            />

            <div className="justify-center flex pt-[4rem]">
              <button
                type="submit"
                className="
                text-white
                lg:border-2
                border-1
                border-white
            py-[1rem] px-[3rem]
            anta font-normal lg:text-[2rem] text-[1rem]
            leading-[100%] tracking-normal
            text-center bg-[#51AABE]
            rounded-[55px]
            flex justify-center items-center"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
