import Chambers from "@/components/pages/home/chambers";
import CTASection from "@/components/pages/home/ctaSection";
import Features from "@/components/pages/home/features";
import Hero from "@/components/pages/home/hero";
import Services from "@/components/pages/home/services";
import Specialize from "@/components/pages/home/specialize";

export default function Home() {
  return (
    <>
      <Hero />
      <Specialize />
      <Services />
      <Features />
      <CTASection />
      <Chambers />
    </>
  )
}
