import Nav from "@/components/layout/Nav";
import Scene from "@/components/layout/Scene";
import TunnelIntro from "@/components/sections/Intro/TunnelIntro";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Journey from "@/components/sections/Journey/LightJourney";
import DesignStack from "@/components/sections/Stack/DesignStack";
import Work from "@/components/sections/Work/Work";
import Tenspick from "@/components/sections/Tenspick/Tenspick";
import Experience from "@/components/sections/Experience/Experience";
import Certifications from "@/components/sections/Certifications/Certifications";
import Gallery from "@/components/sections/Gallery/Gallery";
import Philosophy from "@/components/sections/Philosophy/Philosophy";
import Connect from "@/components/sections/Connect/Connect";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Scene order={1} runway={5} id="intro" keepOnMobile>
          <TunnelIntro />
        </Scene>

        <Scene order={2} runway={1.5} id="hero">
          <Hero />
        </Scene>

        <Scene order={3} runway={2.5} id="about">
          <About />
        </Scene>

        <Scene order={4} runway={6} id="journey" keepOnMobile>
          <Journey />
        </Scene>

        <Scene order={5} runway={1.8} id="stack">
          <DesignStack />
        </Scene>

        <Scene order={6} runway={4.5} id="work">
          <Work />
        </Scene>

        <Scene order={7} runway={3.5} id="tenspick">
          <Tenspick />
        </Scene>

        <Scene order={8} runway={4.4} id="experience">
          <Experience />
        </Scene>

        <Scene order={9} runway={3.5} id="credentials">
          <Certifications />
        </Scene>

        <Scene order={10} runway={1.8} id="gallery" keepOnMobile>
          <Gallery />
        </Scene>

        {/* the closing frame rises over the gallery, then flows to the footer */}
        <div className="finalFrame">
          <Philosophy />
          <Connect />
        </div>
      </main>
    </>
  );
}
