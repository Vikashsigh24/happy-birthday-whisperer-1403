import { motion } from "framer-motion";
import { Heart, Laugh, Mountain, Compass } from "lucide-react";

const cards = [
  {
    icon: Laugh,
    title: "Funny 😂",
    items: [
      "I love you more than pizza... and that's saying A LOT 🍕",
      "You're the reason I check my phone every 2 seconds 📱",
      "If you were a vegetable, you'd be a CUTEcumber 🥒",
      "Are you a magician? Because every time I look at you, everyone else disappears ✨",
    ],
    gradient: "from-gold/20 to-sunset/10",
    borderColor: "border-gold/30",
  },
  {
    icon: Heart,
    title: "Romantic 💕",
    items: [
      "In a room full of art, I'd still stare at you 🖼️",
      "Every love song makes sense because of you 🎵",
      "You're not just my wife, you're my favorite notification 📩",
      "If I had a flower for every time you made me smile, I'd have an endless garden 🌸",
    ],
    gradient: "from-primary/15 to-rose-glow/10",
    borderColor: "border-primary/30",
  },
  {
    icon: Mountain,
    title: "Adventure 🏔️",
    items: [
      "Let's get lost together in mountains & sunsets 🌄",
      "Road trips with you > any 5-star vacation 🚗",
      "One day we'll watch the Northern Lights together ✨",
      "Our love story is the greatest adventure of all 🗺️",
    ],
    gradient: "from-accent/15 to-lavender/10",
    borderColor: "border-accent/30",
  },
  {
    icon: Compass,
    title: "Bucket List 🌍",
    items: [
      "Dance in the rain together 🌧️💃",
      "Write our names on a lock bridge 🔐",
      "Watch sunrise from a hot air balloon 🎈",
      "Stargaze on a beach at midnight 🌊⭐",
    ],
    gradient: "from-sunset/15 to-gold/10",
    borderColor: "border-sunset/30",
  },
];

const FunnyRomanticSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display text-center text-gradient mb-12"
        >
          For You, With Love 💝
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-gradient-to-br ${card.gradient} rounded-lg p-6 border ${card.borderColor} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3 mb-4">
                <card.icon className="w-7 h-7 text-primary" />
                <h3 className="text-2xl font-display text-foreground">{card.title}</h3>
              </div>
              <ul className="space-y-3">
                {card.items.map((item, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.08 }}
                    className="font-body text-foreground/80 text-sm leading-relaxed pl-2 border-l-2 border-primary/30"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunnyRomanticSection;
