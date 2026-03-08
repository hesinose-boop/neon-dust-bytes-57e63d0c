import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Shield, Skull, Wrench, Home, Users } from "lucide-react";

const features = [
  { icon: Globe, title: "Open World Exploration", desc: "Explore a massive contaminated world filled with secrets.", color: "primary" },
  { icon: Shield, title: "Survival System", desc: "Manage resources, hunger, and danger.", color: "secondary" },
  { icon: Skull, title: "Mutated Creatures", desc: "Fight terrifying supernatural enemies.", color: "secondary" },
  { icon: Wrench, title: "Crafting System", desc: "Build powerful weapons and tools.", color: "primary" },
  { icon: Home, title: "Base Building", desc: "Create and defend your own settlement.", color: "primary" },
  { icon: Users, title: "Co-op Multiplayer", desc: "Survive together with your squad.", color: "secondary" },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-3">Core Features</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase">
            <span className="text-glow-cyan text-primary">Fight.</span>{" "}
            <span className="text-foreground">Build.</span>{" "}
            <span className="text-glow-crimson text-secondary">Survive.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative bg-gradient-card border border-border p-8 hover:border-${f.color}/40 transition-all duration-300 hover:scale-[1.02] cursor-default`}
            >
              <div className={`w-12 h-12 flex items-center justify-center mb-5 border border-${f.color}/30 bg-${f.color}/10`}>
                <f.icon className={`w-6 h-6 text-${f.color}`} />
              </div>
              <h3 className="font-display text-lg font-bold uppercase mb-2 text-foreground">{f.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{f.desc}</p>
              {/* Hover glow line */}
              <div className={`absolute bottom-0 left-0 w-0 h-[2px] bg-${f.color} group-hover:w-full transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
