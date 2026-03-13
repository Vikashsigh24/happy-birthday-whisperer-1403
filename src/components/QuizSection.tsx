import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, CheckCircle, XCircle, PartyPopper } from "lucide-react";

interface Question {
  q: string;
  options: string[];
  answer: number;
  funReply: string;
}

const questions: Question[] = [
  {
    q: "What is the most romantic city in the world? 🌹",
    options: ["Venice", "Paris", "Wherever you are", "Tokyo"],
    answer: 2,
    funReply: "Correct! Wherever you are is the most romantic place on earth! 💕",
  },
  {
    q: "How many times does the average person blink per day? 👀",
    options: ["5,000", "15,000-20,000", "50,000", "1,000"],
    answer: 1,
    funReply: "Yes! 15,000-20,000 times! And every blink with you feels like a dream ✨",
  },
  {
    q: "What animal symbolizes love? 💗",
    options: ["Penguin", "Swan", "Dove", "All of them!"],
    answer: 3,
    funReply: "All of them! Just like how every moment with you is filled with love! 🦢🕊️🐧",
  },
  {
    q: "What's the sweetest thing in the world? 🍭",
    options: ["Honey", "Sugar", "Chocolate", "Your smile!"],
    answer: 3,
    funReply: "Obviously your smile! Nothing beats it! 😄💖",
  },
  {
    q: "Which planet is known as the 'Morning Star'? ⭐",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    answer: 2,
    funReply: "Venus! Named after the goddess of love — just like you! 🌟",
  },
];

const QuizSection = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === questions[current].answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display text-center text-gradient mb-4"
        >
          Birthday Quiz Time! 🎯
        </motion.h2>
        <p className="text-center text-muted-foreground font-body mb-12">
          Let's see how smart my beautiful wife is! 😜
        </p>

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)] border border-border/50"
            >
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-body text-muted-foreground">
                  Question {current + 1} of {questions.length}
                </span>
              </div>

              <h3 className="text-xl font-body font-bold text-foreground mb-6">
                {questions[current].q}
              </h3>

              <div className="grid gap-3">
                {questions[current].options.map((opt, i) => {
                  const isCorrect = i === questions[current].answer;
                  const isSelected = i === selected;
                  let btnClass = "w-full text-left p-4 rounded-lg border font-body transition-all ";

                  if (selected === null) {
                    btnClass += "border-border bg-muted/30 hover:bg-primary/10 hover:border-primary cursor-pointer";
                  } else if (isCorrect) {
                    btnClass += "border-green-400 bg-green-50 text-green-800";
                  } else if (isSelected && !isCorrect) {
                    btnClass += "border-destructive bg-red-50 text-destructive";
                  } else {
                    btnClass += "border-border bg-muted/20 opacity-50";
                  }

                  return (
                    <button key={i} className={btnClass} onClick={() => handleAnswer(i)}>
                      <span className="flex items-center gap-2">
                        {selected !== null && isCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
                        {selected !== null && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-destructive" />}
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>

              {selected !== null && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                  <p className="text-sm font-body text-foreground bg-muted/50 p-4 rounded-lg mb-4">
                    {questions[current].funReply}
                  </p>
                  <button
                    onClick={next}
                    className="bg-primary text-primary-foreground font-body font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    {current < questions.length - 1 ? "Next Question →" : "See Results 🎉"}
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)] border border-border/50 text-center"
            >
              <PartyPopper className="w-16 h-16 text-gold mx-auto mb-4" />
              <h3 className="text-3xl font-display text-gradient mb-2">
                You scored {score}/{questions.length}!
              </h3>
              <p className="font-body text-muted-foreground">
                {score === questions.length
                  ? "Perfect score! You're the smartest & cutest wife ever! 🏆💖"
                  : score >= 3
                  ? "Amazing job! Beauty AND brains! 🧠✨"
                  : "Haha, it's okay! You're still the best wife in the world! 😘"}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QuizSection;
