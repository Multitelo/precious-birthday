import { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import WishesCarousel from "./components/WishesCarousel";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Countdown from "./components/Countdown";
import { motion } from "motion/react";

// CONFIGURATION: Precious Chinoso's birthday — June 3, 2026
const BIRTHDAY_DATE = new Date("2026-06-01T00:00:00").getTime();
// const BIRTHDAY_DATE = Date.now() + 5000; // Un-comment for 5-second countdown testing

export default function App() {
  const [now, setNow] = useState(Date.now());
  const [entered, setEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const isUnlocked = now >= BIRTHDAY_DATE;

  const handleEnter = () => {
    setEntered(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
      audioRef.current.volume = 0.4;
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // 1. Show Countdown if not yet midnight on June 3
  if (!isUnlocked) {
    return <Countdown targetDate={BIRTHDAY_DATE} now={now} />;
  }

  // 2. Entry gate — bypasses browser autoplay policy
  if (!entered) {
    return (
      <div className="min-h-screen bg-burgundy-50 flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/40 p-10 md:p-16 rounded-[3rem] backdrop-blur-md border border-white/60 shadow-2xl max-w-2xl w-full"
        >
          {/* Gift bow graphic */}
          <div className="w-24 h-24 mx-auto mb-8 relative flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl select-none"
            >
              🎁
            </motion.div>
          </div>
          <h1 className="font-handwriting text-5xl md:text-6xl text-burgundy-700 mb-4">
            It's Finally Here!
          </h1>
          <p className="text-lg md:text-xl text-burgundy-800 font-medium mb-2">
            A little something was made just for you, Precious.
          </p>
          <p className="text-burgundy-600/70 text-base mb-10">
            Tap below to unwrap it 🎀
          </p>
          <button
            onClick={handleEnter}
            className="bg-burgundy-600 text-white px-10 py-5 rounded-full font-bold text-xl md:text-2xl shadow-xl shadow-burgundy-600/30 hover:bg-burgundy-700 hover:scale-[1.02] active:scale-[0.98] transition-all w-full md:w-auto"
          >
            Open Your Gift 🎉
          </button>
        </motion.div>
      </div>
    );
  }

  // 3. Full website
  return (
    <div className="min-h-screen bg-burgundy-50 text-burgundy-950 font-sans selection:bg-burgundy-300 selection:text-burgundy-950 overflow-x-hidden relative">

      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=happy-birthday-114072.mp3"
      />

      {/* Fancy Floating Music Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        onClick={toggleMusic}
        title={isPlaying ? "Pause music" : "Play music"}
        className="fixed top-5 right-5 z-50 group flex items-center gap-2.5 bg-white/90 backdrop-blur-md pl-3 pr-4 py-2.5 rounded-full shadow-xl border border-burgundy-100/60 hover:border-burgundy-300/60 hover:shadow-burgundy-200/60 transition-all duration-300"
      >
        {/* Animated sound bars */}
        <div className="flex items-end gap-[3px] h-5 w-5">
          {[0, 0.15, 0.3, 0.1].map((delay, i) => (
            <motion.span
              key={i}
              className="w-[3px] rounded-full bg-burgundy-500"
              animate={isPlaying ? {
                height: ["40%", "100%", "60%", "85%", "40%"],
              } : { height: "25%" }}
              transition={isPlaying ? {
                duration: 0.8,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              } : { duration: 0.3 }}
              style={{ display: "inline-block" }}
            />
          ))}
        </div>

        {/* Label */}
        <span className="text-xs font-bold text-burgundy-700 tracking-wide">
          {isPlaying ? "Playing" : "Tap to Play"}
        </span>

        {/* Pulse ring when playing */}
        {isPlaying && (
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-burgundy-400/40"
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </motion.button>

      <Hero />
      <WishesCarousel />
      <Gallery />
      <CTA />

      <footer className="py-10 text-center text-burgundy-800/50 text-sm font-medium">
        Made with ♥ for Brandy's special day · June 3, 2026
      </footer>
    </div>
  );
}