import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const WISHES = [
  {
    text: "Precious Chinoso — you carry sunshine in your name and warmth in everything you do. Days of us gisting were filled with laughter and joy. May this new year of your life be every bit as radiant as you are.",
    emoji: "☀️",
  },
  {
    text: "To my paddy Precious — the life of every room, the laugh that makes every moment better and the joy of talking with you at any time. Wishing you a birthday as unforgettable as your spirit.",
    emoji: "🎉",
  },
  {
    text: "May this year open doors you didn't even know to knock on — filled with joy, favour, peace, and all the beautiful things your heart deserves.",
    emoji: "🚪✨",
  },
  {
    text: "Precious, you are one of a kind. Not just in name, but in heart. Here's to you — may every single day of this new year treat you like the royalty you truly are.",
    emoji: "👑",
  },
  {
    text: "Wishing you overflowing love, belly laughs, answered prayers, and a year so good, you'll look back and say — 'that was my best one yet.'",
    emoji: "🙏💖",
  },
];

const INTERVAL_MS = 6000;

export default function WishesCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((prev) => (prev + 1) % WISHES.length), []);
  const prev = useCallback(() => setIndex((prev) => (prev - 1 + WISHES.length) % WISHES.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      className="py-24 px-6 max-w-5xl mx-auto text-center relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background watermark quote */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-0 opacity-[0.04] pointer-events-none select-none">
        <Quote size={180} className="text-burgundy-900" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Section label */}
        <h3 className="text-burgundy-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-12 flex items-center justify-center gap-4">
          <span className="w-10 h-px bg-burgundy-300 block" />
          Words From the Heart
          <span className="w-10 h-px bg-burgundy-300 block" />
        </h3>

        {/* Carousel window */}
        <div className="relative w-full min-h-[200px] md:min-h-[160px] flex items-center justify-center mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute w-full px-2 md:px-8"
            >
              <div className="text-4xl mb-4">{WISHES[index].emoji}</div>
              <p className="text-2xl md:text-4xl font-handwriting text-burgundy-900 leading-snug">
                "{WISHES[index].text}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-5 mt-2">
          <button
            onClick={prev}
            aria-label="Previous wish"
            className="w-9 h-9 rounded-full border border-burgundy-200 flex items-center justify-center text-burgundy-500 hover:bg-burgundy-100 hover:text-burgundy-700 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2.5">
            {WISHES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to wish ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${
                  i === index
                    ? "bg-burgundy-600 w-8"
                    : "bg-burgundy-200 hover:bg-burgundy-400 w-2.5"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next wish"
            className="w-9 h-9 rounded-full border border-burgundy-200 flex items-center justify-center text-burgundy-500 hover:bg-burgundy-100 hover:text-burgundy-700 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Progress bar */}
        {!paused && (
          <div className="mt-6 w-48 h-0.5 bg-burgundy-100 rounded-full overflow-hidden">
            <motion.div
              key={index}
              className="h-full bg-burgundy-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
            />
          </div>
        )}
      </div>
    </section>
  );
}