import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Kanika Gupta Shori",
  description:
    "Co-Founder & COO of Square Yards. Wharton alumna, CFA Level 2 candidate, traveller, diver and mother of two.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </>
  );
}
