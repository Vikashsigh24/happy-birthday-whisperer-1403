import { useEffect, useState } from "react";

const COLORS = [
  "hsl(340, 65%, 55%)",
  "hsl(40, 85%, 55%)",
  "hsl(270, 50%, 75%)",
  "hsl(15, 85%, 65%)",
  "hsl(340, 80%, 70%)",
  "hsl(50, 90%, 65%)",
];

const Confetti = () => {
  const [pieces, setPieces] = useState<Array<{ id: number; left: string; delay: string; duration: string; color: string; size: number }>>([]);

  useEffect(() => {
    const items = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 6 + Math.random() * 8,
    }));
    setPieces(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animation: `confetti-fall ${p.duration} ${p.delay} linear infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
