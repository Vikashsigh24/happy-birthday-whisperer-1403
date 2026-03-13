import { motion } from "framer-motion";
import { Feather, Heart } from "lucide-react";

const paragraphs = [
  "My Dearest Wife,",
  "From the very first moment I saw you, I knew my life would never be the same. Your smile lit up the room, and your laughter became my favorite melody. 🎶",
  "Every day with you feels like a gift I never expected but always hoped for. You make the ordinary extraordinary and the simple moments magical. ✨",
  "I love the way you scrunch your nose when you laugh. I love how you always know exactly what to say to make everything better. I love how your eyes sparkle when you talk about the things you're passionate about. 💫",
  "You are my best friend, my greatest adventure, and the love of my life. With you, I've found a home — not a place, but a feeling. 🏡💕",
  "On this birthday, I want you to know: there is no version of my life where I don't love you completely. You are my forever and always. 💖",
  "With all my heart and soul,\nYour Loving Husband 💌",
];

const LoveLetterSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-sunset)]" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <Feather className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-4xl sm:text-5xl font-display text-gradient">
            A Love Letter for You 💌
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card/90 backdrop-blur-sm rounded-lg p-8 sm:p-10 shadow-[var(--shadow-glow)] border border-primary/20 relative"
        >
          {/* Decorative corners */}
          <Heart className="absolute top-4 left-4 w-4 h-4 text-primary/30" />
          <Heart className="absolute top-4 right-4 w-4 h-4 text-primary/30" />
          <Heart className="absolute bottom-4 left-4 w-4 h-4 text-primary/30" />
          <Heart className="absolute bottom-4 right-4 w-4 h-4 text-primary/30" />

          <div className="space-y-6">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`font-body leading-relaxed whitespace-pre-line ${
                  i === 0
                    ? "text-2xl font-display text-primary font-bold"
                    : i === paragraphs.length - 1
                    ? "text-lg font-display text-primary font-semibold pt-4 border-t border-primary/20"
                    : "text-foreground/85 text-base sm:text-lg"
                }`}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
