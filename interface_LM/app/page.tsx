import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SceneFeatures } from "@/components/scene-features"
import { ProductShowcase } from "@/components/product-showcase"
import { FeaturesSection } from "@/components/features-section"
import { ProofSection } from "@/components/proof-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <SceneFeatures />
      <FeaturesSection />
      <ProofSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
