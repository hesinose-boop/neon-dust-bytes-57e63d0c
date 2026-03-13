import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Monitor } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroBg}
          className="w-full h-full object-cover scale-110">
          
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlay gradients */}
      <div className="absolute inset-0 z-10 bg-gradient-hero" />
      <div className="absolute inset-0 z-10 bg-background/40" />

      {/* Floating particles */}
      <div className="particle-container z-10">
        {Array.from({ length: 30 }).map((_, i) =>
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -100 - Math.random() * 200],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 6 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }} />

        )}
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 container mx-auto px-6 pt-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-mono text-sm md:text-base text-primary tracking-[0.3em] uppercase mb-4">
            
            Open World Survival Game
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] mb-6">
            
            <span className="text-foreground">Survive the</span>
            <br />
            <span className="text-glow-cyan text-primary">Contamination.</span>
            <br />
            <span className="text-foreground">Rebuild</span>{" "}
            <span className="text-glow-crimson text-secondary">Humanity.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            
            Enter a corrupted world where survival means adapting, fighting, and building a future among chaos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-start">
            
            <a
              href="https://to.wendiro.com/u?k=24c3cf9a5dde4dd896352d1314e9aacd&via=16281"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-cta font-display text-sm md:text-base font-bold uppercase tracking-wider px-8 py-4 text-primary-foreground animate-pulse-glow hover:scale-105 transition-transform flex items-center gap-3">
              
              <Monitor className="w-5 h-5" />
              Download Now — Free to Play
            </a>
          </motion.div>

          











          
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted-foreground">
        
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 scroll-indicator" />
      </motion.div>
    </section>);

};

export default HeroSection;