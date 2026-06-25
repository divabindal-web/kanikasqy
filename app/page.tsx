import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import PressMarquee from "@/components/PressMarquee";
import Awards from "@/components/Awards";
import News from "@/components/News";
import Articles from "@/components/Articles";
import BeyondWork from "@/components/BeyondWork";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <PressMarquee />
        <Awards />
        <News />
        <Articles />
        <BeyondWork />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
