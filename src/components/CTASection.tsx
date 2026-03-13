import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Particles */}
      <div className="particle-container z-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -150], opacity: [0, 0.6, 0] }}
            transition={{ duration: 8 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 4 }}
          />
        ))}
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-6">
            <span className="text-foreground">Ready to </span>
            <span className="text-glow-cyan text-primary">Survive</span>
            <span className="text-foreground">?</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Download Once Human now and enter a world where humanity fights for survival.
          </p>
          <a
            href="https://to.wendiro.com/u?k=24c3cf9a5dde4dd896352d1314e9aacd&via=16281"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-cta font-display text-sm md:text-base font-bold uppercase tracking-wider px-10 py-5 text-primary-foreground animate-pulse-glow hover:scale-105 transition-transform"
          >
            <Monitor className="w-5 h-5" />
            Download for PC — Free to Play
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
