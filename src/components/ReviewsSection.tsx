import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  { quote: "One of the most immersive survival games ever. The contaminated world feels alive and terrifying.", author: "GameSpot", rating: 5 },
  { quote: "Dark, intense, and incredibly addictive. Once Human redefines open-world survival.", author: "IGN", rating: 4 },
  { quote: "The base building and co-op mechanics are best in class. A must-play for survival fans.", author: "PC Gamer", rating: 5 },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-3">Player Reviews</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground">
            What <span className="text-glow-cyan text-primary">Players</span> Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={r.author}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-gradient-card border border-border p-8 relative group hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-foreground text-lg leading-relaxed mb-6 italic">"{r.quote}"</p>
              <p className="font-mono text-xs text-primary tracking-wider">— {r.author}</p>
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
