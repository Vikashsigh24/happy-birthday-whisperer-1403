import { motion } from "framer-motion";
import heroBg from "@/assets/hero-birthday.jpg";
import { Heart, Sparkles, Gift } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-background" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1, delay: 0.3 }}
          className="flex justify-center gap-4 mb-6"
        >
          <Sparkles className="w-8 h-8 text-gold animate-bounce-gentle" />
          <Heart className="w-10 h-10 text-primary animate-float" fill="hsl(340, 65%, 55%)" />
          <Sparkles className="w-8 h-8 text-gold animate-bounce-gentle" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl sm:text-7xl md:text-8xl font-display font-bold text-primary-foreground mb-4 drop-shadow-lg"
        >
          Happy Birthday
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xl sm:text-2xl font-body text-primary-foreground/90 mb-2 drop-shadow"
        >
          To the most amazing wife in the world ✨
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-lg font-body text-primary-foreground/80 drop-shadow"
        >
          Scroll down for surprises, laughs & love 💕
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-10"
        >
          <Gift className="w-8 h-8 text-gold mx-auto animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
