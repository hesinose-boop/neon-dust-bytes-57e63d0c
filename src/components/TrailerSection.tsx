import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TrailerSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trailer" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-3">Official Trailer</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-glow-cyan text-primary">
            See the World of Once Human
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Explore vast contaminated lands, battle mutated horrors, build your sanctuary, and survive with your squad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative aspect-video box-glow-cyan border border-primary/20 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/KtK_cBLCv3Q?si=IMzoMNf0eaNebaQq"
              title="Once Human Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          {/* Decorative corners */}
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary" />
          <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-primary" />
          <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-secondary" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-secondary" />
        </motion.div>
      </div>
    </section>
  );
};

export default TrailerSection;
