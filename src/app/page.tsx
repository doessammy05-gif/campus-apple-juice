import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/layout/hero";
import { JourneySection } from "@/components/layout/journey";
import { FlavorPicker } from "@/components/ui/flavor-picker";
import { FeatureBento } from "@/components/layout/features";
import { ReviewsSection } from "@/components/layout/reviews";
import { OrderSection } from "@/components/layout/order-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <JourneySection />
      <FlavorPicker />
      <FeatureBento />
      <ReviewsSection />
      <OrderSection />
      <Footer />
    </main>
  );
}
