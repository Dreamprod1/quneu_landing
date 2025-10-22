import * as React from "react";
import Header from "../components/sections/Header";
import WhoIsQuneu from "../components/sections/WhoIsQuneu";
import CognitiveLayers from "../components/sections/CognitiveLayers";
import QGraph from "../components/sections/QGraph";
import TheQGraphProcess from "../components/sections/TheQgraphProcess";
import QLanguageModel from "../components/sections/QLanguageModel";
import Q0MaterialDesignModel from "../components/sections/Q0MaterialDesignModel";
import QMatUseCases from "../components/sections/QMatUseCases";
import QDrivers from "../components/sections/QDrivers";
import Founders from "../components/sections/Founders";
import ScheduleADemo from "../components/sections/ScheduleADemo";
import ContactForm from "../components/sections/ContactForm";
import VisionsSection from "../components/sections/VisonsSection";
import FloatingButton from "../components/common/FloatingButton";

export default function Home() {
  React.useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window))
      return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          // entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden-animate");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="relative">
      <FloatingButton />
      <Header />
      <WhoIsQuneu />
      <CognitiveLayers />
      <QGraph />
      <TheQGraphProcess />
      <QLanguageModel />
      <Q0MaterialDesignModel />
      <QMatUseCases />
      <QDrivers />
      <VisionsSection />
      <Founders />
      <div id="no-button-section">
        <ScheduleADemo />
        <ContactForm />
      </div>
    </div>
  );
}
