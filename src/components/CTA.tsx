import { motion } from "motion/react";
import { MessageCircleHeart } from "lucide-react";

export default function CTA() {
  // CONFIGURATION: Replace with Precious's WhatsApp number (country code, no + or leading zero)
  // e.g. Nigeria number: "2348012345678"
  const phoneNumber = "2348039214940";
  const defaultMessage =
    "Happy Birthday Precious! 🎉🎂 Wishing you the most amazing, joyful, and blessed year yet! Love and hugs, Brandy 💖";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <section className="py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-white/60 backdrop-blur-md border border-white p-10 md:p-16 rounded-3xl shadow-2xl shadow-burgundy-900/5 relative overflow-hidden"
      >
        {/* Decorative background icons */}
        <div className="absolute -top-10 -left-10 text-burgundy-200 pointer-events-none">
          <MessageCircleHeart
            size={140}
            className="opacity-30 mix-blend-multiply"
          />
        </div>
        <div className="absolute -bottom-16 -right-10 text-burgundy-200 pointer-events-none">
          <MessageCircleHeart
            size={180}
            className="opacity-20 mix-blend-multiply rotate-12"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative z-10"
        >
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-burgundy-950 mb-4">
            Send Brandy Your Love 💌
          </h2>
          <p className="text-lg md:text-xl text-burgundy-700 mb-3 leading-relaxed font-medium">
            She deserves to feel every bit of the love around her today.
          </p>
          <p className="text-base text-burgundy-600/70 mb-10 leading-relaxed">
            Tap below to send Precious Chinoso a warm birthday message straight
            to her WhatsApp — let her know how special she truly is! 🎀
          </p>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-5 rounded-full font-semibold text-lg md:text-xl shadow-xl shadow-green-500/30 transition-all"
          >
            <MessageCircleHeart className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
            Send a Birthday Wish on WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
