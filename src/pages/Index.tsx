import Confetti from "@/components/Confetti";
import HeroSection from "@/components/HeroSection";
import FunFactsSection from "@/components/FunFactsSection";
import QuizSection from "@/components/QuizSection";
import GallerySection from "@/components/GallerySection";
import LoveLetterSection from "@/components/LoveLetterSection";
import FunnyRomanticSection from "@/components/FunnyRomanticSection";
import WishesSection from "@/components/WishesSection";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Confetti />
      <MusicPlayer />
      <HeroSection />
      <FunFactsSection />
      <GallerySection />
      <QuizSection />
      <FunnyRomanticSection />
      <LoveLetterSection />
      <WishesSection />
    </div>
  );
};

export default Index;
