import { motion } from "motion/react";
import { Heart } from "lucide-react";

// ─────────────────────────────────────────────────────────────
//  CONFIGURATION: Drop Precious's photos into the /assets folder
//  and update the src paths below. e.g. "/assets/precious-1.jpg"
// ─────────────────────────────────────────────────────────────
const IMAGES = [
  {
    id: 1,
    src: "/photo-1.jpeg",   // ← replace with actual filename
    alt: "Precious Chinoso — a beautiful memory",
    caption: "Always radiant ✨",
    rotation: -6,
    zIndex: 10,
  },
  {
    id: 2,
    src: "/photo-2.jpeg",   // ← replace with actual filename
    alt: "Precious Chinoso — another precious moment",
    caption: "Pure joy 🌸",
    rotation: 4,
    zIndex: 20,
  },
  {
    id: 3,
    src: "/photo-3.jpeg",   // ← replace with actual filename
    alt: "Precious Chinoso — one more beautiful memory",
    caption: "Our Precious aka Brandy 💖",
    rotation: -3,
    zIndex: 30,
  },
];

// Balloon graphic
const Balloon = ({ color, size = 48 }: { color: string; size?: number }) => (
  <svg width={size} height={size * 1.5} viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 0C14.3269 0 0 13.9179 0 31.0854C0 50.4101 22.8571 67.2472 32 72C41.1429 67.2472 64 50.4101 64 31.0854C64 13.9179 49.6731 0 32 0Z" fill={color} />
    <path d="M32 72L28 80H36L32 72Z" fill={color} />
    <path d="M32 80C32 80 28 88 34 96" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M14 24C17.5 16 26 10 32 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5" fill="none" />
  </svg>
);

export default function Gallery() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto relative overflow-hidden">
      {/* Decorative balloons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-4 md:top-20 md:right-20 opacity-50 hidden sm:block pointer-events-none"
      >
        <Balloon color="var(--color-burgundy-300)" size={56} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-4 md:bottom-20 md:left-20 opacity-40 hidden sm:block z-0 pointer-events-none"
      >
        <Balloon color="var(--color-burgundy-500)" size={72} />
      </motion.div>

      {/* Section header */}
      <div className="text-center mb-16 relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-handwriting text-5xl md:text-6xl text-burgundy-700 mb-4"
        >
          Moments that make us smile...
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="text-burgundy-900/70 max-w-lg mx-auto text-lg md:text-xl font-medium"
        >
          A little gallery of Precious being exactly herself — gorgeous, joyful, and completely irreplaceable.
        </motion.p>
      </div>

      {/* Polaroid stack */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-6 pt-10 px-4">
        {IMAGES.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: img.rotation }}
            whileHover={{ scale: 1.06, rotate: 0, zIndex: 50 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            style={{ zIndex: img.zIndex }}
            className="group relative bg-white p-4 md:p-5 pb-16 md:pb-20 shadow-xl rounded-sm w-full max-w-xs md:w-72 cursor-pointer origin-bottom flex-shrink-0"
          >
            {/* Photo */}
            <div className="overflow-hidden bg-burgundy-50 rounded-sm aspect-square md:aspect-[4/5]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  // Graceful fallback if image not found yet
                  (e.target as HTMLImageElement).style.display = "none";
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent && !parent.querySelector(".img-fallback")) {
                    const fb = document.createElement("div");
                    fb.className = "img-fallback w-full h-full flex items-center justify-center text-burgundy-300 text-5xl";
                    fb.textContent = "🌸";
                    parent.appendChild(fb);
                  }
                }}
              />
            </div>

            {/* Caption */}
            <div className="absolute bottom-5 left-0 right-0 text-center font-handwriting text-xl text-burgundy-700 opacity-80 px-2">
              {img.caption}
            </div>

            {/* Heart on hover */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Heart className="w-5 h-5 text-burgundy-500 fill-burgundy-500" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note about photos */}
      {/* <p className="text-center text-burgundy-400/70 text-sm mt-12 font-medium">
        📸 Photos loading from <code className="bg-burgundy-100 px-1.5 py-0.5 rounded text-xs">/assets/</code> — add your images to that folder
      </p> */}
    </section>
  );
}