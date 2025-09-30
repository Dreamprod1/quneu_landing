import { noto } from "@/lib/fonts";
//___
import Navbar from "./_components/navbar";
import HeroSection from "./_components/hero";
import AboutSection from "./_components/about";
import Q0PlatformSection from "./_components/q0-platform";
import GraphInfoSection from "./_components/graph-info";
import QLMSection from "./_components/qlm";
import QunueProcess from "./_components/qunueProcess";
import CognitiveLayers from "./_components/cognitiveLayers";
import QMATSection from "./_components/Qmat";
import MatDesignSection from "./_components/mat-design";
import UseCasesSection from "./_components/use-cases";
import MissionSection from "./_components/mission";
import FoundersSection from "./_components/founders";
import ContactSection from "./_components/contact";
//___
export default function Home() {
  return (
    <div className={`font-sans grid grid-cols-1  ${noto.className}`}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Q0PlatformSection />
      <GraphInfoSection />

      <QunueProcess />
      <QLMSection />
      <CognitiveLayers />

      <QMATSection />
      <MatDesignSection />
      <UseCasesSection />
      <MissionSection />
      <FoundersSection />
      <ContactSection />
    </div>
  );
}
