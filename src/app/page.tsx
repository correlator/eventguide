import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsEventGuide from "@/components/WhatIsEventGuide";
import ShowMe from "@/components/ShowMe";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhatIsEventGuide />
      <ShowMe />
      <Pricing />
      <Footer />
    </main>
  );
}
