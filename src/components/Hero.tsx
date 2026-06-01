import { useState, useEffect } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { Sparkles, Heart, PartyPopper, Star } from "lucide-react";

// Playful custom Balloon Graphic
const Balloon = ({ color, size = 64 }: { color: string; size?: number }) => (
  <svg width={size} height={size * 1.5} viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 0C14.3269 0 0 13.9179 0 31.0854C0 50.4101 22.8571 67.2472 32 72C41.1429 67.2472 64 50.4101 64 31.0854C64 13.9179 49.6731 0 32 0Z" fill={color} />
    <path d="M32 72L28 80H36L32 72Z" fill={color} />
    <path d="M32 80C32 80 28 88 34 96" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M14 24C17.5 16 26 10 32 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5" fill="none" />
  </svg>
);

export default function Hero() {
  const [confettiDone, setConfettiDone] = useState(false);

  // Auto-trigger confetti once on load
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerConfetti();
      setConfettiDone(true);
    }, 1200);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#8d1834', '#e34368', '#f5a6b8', '#facdd6', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#8d1834', '#e34368', '#f5a6b8', '#facdd6', '#ffffff']
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center pt-20 pb-10">

      {/* Decorative floating balloons */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-6 md:left-28 opacity-80 pointer-events-none"
      >
        <Balloon color="var(--color-burgundy-400)" size={80} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -40, 0], rotate: [5, -5, 5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-36 right-6 md:right-44 opacity-60 z-0 pointer-events-none"
      >
        <Balloon color="var(--color-burgundy-600)" size={100} />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-28 left-8 md:left-36 text-burgundy-500 opacity-25 pointer-events-none"
      >
        <Star size={72} strokeWidth={1.5} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-8 md:right-20 text-burgundy-300 opacity-60 pointer-events-none"
      >
        <Heart size={48} fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-16 right-14 md:right-48 text-burgundy-400 opacity-50 pointer-events-none"
      >
        <PartyPopper size={64} strokeWidth={1} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-16 md:left-60 text-burgundy-300 opacity-40 pointer-events-none"
      >
        <Sparkles size={56} strokeWidth={1.5} />
      </motion.div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 relative bg-white/30 p-8 md:p-14 rounded-[3rem] backdrop-blur-sm border border-white/50 shadow-2xl shadow-burgundy-900/5 max-w-4xl w-full"
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-handwriting text-3xl md:text-4xl text-burgundy-600 mb-3 transform -rotate-1"
        >
          Wishing the absolute best to...
        </motion.p>

        {/* Full name */}
        <motion.h1
          className="font-sans text-5xl md:text-[5.5rem] lg:text-[6.5rem] font-black text-burgundy-950 tracking-tight leading-[1.05] mb-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Happy Birthday,{" "}
          <span className="relative inline-block mt-2 text-burgundy-600">
            Precious!
            <svg
              className="absolute w-full h-4 -bottom-2 left-0 text-burgundy-300"
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0 10 Q 50 20 100 10 T 200 10"
                stroke="currentColor"
                strokeWidth="6"
                fill="transparent"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        {/* Nickname tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="inline-flex items-center gap-2 bg-burgundy-100 border border-burgundy-200 text-burgundy-700 px-5 py-2 rounded-full text-base md:text-lg font-semibold mb-8 mt-4"
        >
          <span className="text-burgundy-400">✨</span>
          aka <span className="font-handwriting text-xl md:text-2xl text-burgundy-600">Brandy</span>
          <span className="text-burgundy-400">✨</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-lg md:text-2xl font-medium text-burgundy-800 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Today is entirely and completely yours, Precious! 🎀 <br className="hidden md:block" />
          Here's to your beautiful spirit, your infectious laughter, and the most perfect day ever.
        </motion.p>

        <motion.button
          onClick={() => { triggerConfetti(); setConfettiDone(false); }}
          whileHover={{ scale: 1.05, translateY: -2 }}
          whileTap={{ scale: 0.95 }}
          className="bg-burgundy-600 text-white px-10 py-5 rounded-full font-bold text-xl md:text-2xl shadow-[0_10px_30px_-10px_rgba(204,37,77,0.6)] hover:shadow-[0_15px_35px_-10px_rgba(204,37,77,0.8)] hover:bg-burgundy-700 transition-all flex items-center gap-3 mx-auto"
        >
          <Sparkles className="w-6 h-6" />
          {confettiDone ? "Celebrate Again! 🎉" : "Click to Celebrate 🎉"}
          <Sparkles className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}