import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/layout/hero";
import { JourneySection } from "@/components/layout/journey";
import { FeatureBento } from "@/components/layout/features";
import { ReviewsSection } from "@/components/layout/reviews";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <JourneySection />
      <FeatureBento />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
