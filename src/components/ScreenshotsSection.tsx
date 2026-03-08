import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import screenshotCombat from "@/assets/screenshot-combat.jpg";
import screenshotHorror from "@/assets/screenshot-horror.jpg";
import screenshotAberrant from "@/assets/screenshot-aberrant.jpg";
import screenshotLava from "@/assets/screenshot-lava.jpg";
import screenshotBosses from "@/assets/screenshot-bosses.jpg";
import screenshotCreature from "@/assets/screenshot-creature.jpg";

const screenshots = [
  { src: screenshotCombat, label: "Epic Combat" },
  { src: screenshotHorror, label: "Horror Encounters" },
  { src: screenshotAberrant, label: "Aberrant Progeny" },
  { src: screenshotLava, label: "Corrupted Lands" },
  { src: screenshotBosses, label: "Boss Fights" },
  { src: screenshotCreature, label: "Mutated Creatures" },
];

const ScreenshotsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-3">Gallery</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground">
            A World of <span className="text-glow-crimson text-secondary">Chaos</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {screenshots.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group overflow-hidden cursor-pointer aspect-video border border-border"
            >
              <img
                src={s.src}
                alt={s.label}
                loading="lazy"
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hoveredIndex === i ? "scale-110" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-display text-sm uppercase tracking-wider text-primary text-glow-cyan">{s.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
