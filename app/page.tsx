import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <ProcessSection />
      <AboutSection />
    </main>
  );
}
