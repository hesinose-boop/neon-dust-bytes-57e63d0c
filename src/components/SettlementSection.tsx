import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import screenshotBosses from "@/assets/screenshot-bosses.jpg";

const SettlementSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs text-secondary tracking-[0.3em] uppercase mb-3">Your Territory</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase mb-6 text-foreground">
              Build Your <span className="text-glow-crimson text-secondary">Settlement</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              Construct your base from the ground up. Design defensive fortifications, craft stations, and storage systems.
              Protect your territory from mutated threats and rival survivors.
            </p>
            <ul className="space-y-3 font-body text-muted-foreground">
              {["Full creative building system", "Defensive structures & traps", "Crafting stations & upgrades", "Territory defense mechanics"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <img src={screenshotBosses} alt="Base Building" loading="lazy" className="w-full border border-border" />
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-secondary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SettlementSection;
