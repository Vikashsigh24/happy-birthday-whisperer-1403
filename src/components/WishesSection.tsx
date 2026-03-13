import { motion } from "framer-motion";
import { Cake, Heart, Sparkles } from "lucide-react";

const WishesSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-primary/5 to-muted/20" />

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring" }}
        >
          <Cake className="w-16 h-16 text-primary mx-auto mb-6" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-display text-gradient mb-8"
        >
          My Birthday Wish for You
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-lg p-8 shadow-[var(--shadow-glow)] border border-primary/20 space-y-4"
        >
          <p className="font-body text-foreground/90 leading-relaxed text-lg">
            On this special day, I wish you all the happiness your heart can hold. 
            May your year be filled with laughter that makes your stomach hurt, 
            adventures that take your breath away, and love that makes you feel 
            like the luckiest wife in the world.
          </p>
          <p className="font-body text-foreground/90 leading-relaxed text-lg">
            You deserve the moon, the stars, and everything in between. 
            Thank you for being the most incredible person I know. 
          </p>
          <div className="flex justify-center gap-2 pt-4">
            <Sparkles className="w-5 h-5 text-gold" />
            <Heart className="w-5 h-5 text-primary" fill="hsl(340, 65%, 55%)" />
            <Sparkles className="w-5 h-5 text-gold" />
          </div>
          <p className="font-display text-2xl text-gradient font-bold">
            Happy Birthday, My Love! 🎂💖
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WishesSection;
