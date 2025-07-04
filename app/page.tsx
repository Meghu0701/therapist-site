import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="space-y-32 md:space-y-40">
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
