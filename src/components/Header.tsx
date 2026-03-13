import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <img src={logo} alt="Once Human" className="h-10 md:h-12 object-contain" />
        <nav className="hidden md:flex items-center gap-8 font-body text-sm uppercase tracking-widest text-muted-foreground">
          <a href="#trailer" className="hover:text-primary transition-colors">Trailer</a>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#community" className="hover:text-primary transition-colors">Community</a>
        </nav>
        <a
          href="https://to.wendiro.com/u?k=24c3cf9a5dde4dd896352d1314e9aacd&via=16281"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-cta font-display text-xs md:text-sm font-bold uppercase tracking-wider px-6 py-2.5 text-primary-foreground animate-pulse-glow hover:scale-105 transition-transform"
        >
          Download Now
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
