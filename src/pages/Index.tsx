import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrailerSection from "@/components/TrailerSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import SettlementSection from "@/components/SettlementSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import GameFooter from "@/components/GameFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrailerSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <SettlementSection />
      <ReviewsSection />
      <CTASection />
      <GameFooter />
    </div>
  );
};

export default Index;
