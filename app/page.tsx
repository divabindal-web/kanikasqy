import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PressMarquee from "@/components/PressMarquee";
import Awards from "@/components/Awards";
import News from "@/components/News";
import BeyondWork from "@/components/BeyondWork";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <PressMarquee />
        <Awards />
        <News />
        <BeyondWork />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
