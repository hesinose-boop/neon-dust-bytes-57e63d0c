import logo from "@/assets/logo.png";

const links = [
  { label: "Discord", url: "https://discord.gg/oncehuman" },
  { label: "Twitter", url: "https://twitter.com/OnceHuman_" },
  { label: "Steam", url: "https://store.steampowered.com/app/2139460/Once_Human/" },
  { label: "Official Site", url: "https://www.oncehuman.game/" },
];

const GameFooter = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <img src={logo} alt="Once Human" className="h-8 opacity-70" />
        <nav className="flex flex-wrap items-center gap-6 font-mono text-xs text-muted-foreground tracking-wider uppercase">
          {links.map((l) => (
            <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-8 text-center font-mono text-[10px] text-muted-foreground/50 tracking-wider">
        © 2026 Starry Studio. All rights reserved. Once Human is a trademark of NetEase.
      </div>
    </div>
  </footer>
);

export default GameFooter;
