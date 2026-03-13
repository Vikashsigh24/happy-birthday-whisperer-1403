import { motion } from "framer-motion";
import { Lightbulb, Zap, Globe, Star, Music, Flame } from "lucide-react";

const facts = [
  { icon: Lightbulb, title: "Mind-blowing!", fact: "Honey never spoils. Archaeologists found 3,000-year-old honey in Egyptian tombs that was still edible! 🍯", color: "text-gold" },
  { icon: Zap, title: "Wait, what?!", fact: "A group of flamingos is called a 'flamboyance.' Just like you — fabulous & impossible to ignore! 💃", color: "text-primary" },
  { icon: Globe, title: "World Record!", fact: "The longest birthday cake ever made was 5,000 feet long. But it still wouldn't be sweet enough for you! 🎂", color: "text-accent" },
  { icon: Star, title: "Fun Birthday Fact", fact: "You share your birthday with approximately 20 million other people. But none of them are as special as you! ⭐", color: "text-gold" },
  { icon: Music, title: "Did you know?", fact: "'Happy Birthday' was the first song ever performed in outer space — sung by the Gemini astronauts in 1969! 🚀", color: "text-sunset" },
  { icon: Flame, title: "Tricky fact!", fact: "Bananas are berries, but strawberries aren't. Your whole life has been a lie... but my love for you isn't! 🍓", color: "text-primary" },
];

const FunFactsSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display text-center text-gradient mb-4"
        >
          Tricky & Interesting Facts 🧠
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-body mb-12"
        >
          Because your brain deserves a birthday treat too!
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-card rounded-lg p-6 shadow-[var(--shadow-card)] border border-border/50"
            >
              <f.icon className={`w-8 h-8 ${f.color} mb-3`} />
              <h3 className="font-body font-bold text-foreground text-lg mb-2">{f.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{f.fact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
