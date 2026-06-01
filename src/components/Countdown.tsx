import { motion } from "motion/react";
import { Lock } from "lucide-react";

export default function Countdown({ targetDate, now }: { targetDate: number; now: number }) {
  const diff = Math.max(0, targetDate - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const format = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="min-h-screen bg-burgundy-50 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden z-0">
      {/* Ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 h-96 bg-burgundy-200 rounded-full blur-[100px] -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/40 p-10 md:p-16 rounded-[3rem] backdrop-blur-md border border-white/60 shadow-2xl max-w-2xl w-full relative z-10"
      >
        <motion.div
          animate={{ rotate: [0, -8, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Lock className="w-16 h-16 text-burgundy-400 mx-auto mb-6" />
        </motion.div>

        <h1 className="font-handwriting text-5xl md:text-6xl text-burgundy-700 mb-3">
          Not just yet! 🎀
        </h1>
        <p className="font-sans text-base md:text-lg text-burgundy-900/70 mb-2 font-medium">
          Something special is being prepared for Precious Chinoso.
        </p>
        <p className="font-sans text-sm text-burgundy-500/80 mb-10">
          This surprise unlocks at midnight on June 3rd 🎂
        </p>

        {/* Countdown tiles */}
        <div className="flex justify-center gap-2 md:gap-5 font-sans font-black text-3xl sm:text-5xl md:text-6xl text-burgundy-950">
          {[
            { value: format(days), label: "Days" },
            { value: format(hours), label: "Hours" },
            { value: format(minutes), label: "Mins" },
            { value: format(seconds), label: "Secs" },
          ].map((unit, i) => (
            <div key={unit.label} className="flex items-center gap-2 md:gap-5">
              {i > 0 && (
                <span className="self-start mt-3 sm:mt-5 text-burgundy-200 font-normal text-2xl md:text-4xl">
                  :
                </span>
              )}
              <div className="flex flex-col items-center">
                <motion.span
                  key={unit.value}
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white px-3 sm:px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm min-w-[64px] sm:min-w-[88px] md:min-w-[108px] inline-block"
                >
                  {unit.value}
                </motion.span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-burgundy-500 mt-3 opacity-80">
                  {unit.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}