import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CosmicButton } from "@/components/ui/CosmicButton";
import { Sparkles, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cosmic-gold to-cosmic-gold-glow flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl text-gradient-gold">COSMIQ</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#journey">The Journey</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <CosmicButton variant="primary" size="default">
              <Sparkles className="w-4 h-4" />
              Get Started
            </CosmicButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-6 border-t border-border/50"
          >
            <div className="flex flex-col gap-4">
              <NavLink href="#how-it-works" mobile>How It Works</NavLink>
              <NavLink href="#journey" mobile>The Journey</NavLink>
              <NavLink href="#testimonials" mobile>Testimonials</NavLink>
              <div className="pt-4">
                <CosmicButton variant="primary" size="lg" className="w-full">
                  <Sparkles className="w-4 h-4" />
                  Get Started
                </CosmicButton>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) => (
  <a
    href={href}
    className={`text-muted-foreground hover:text-foreground transition-colors ${
      mobile ? "text-lg py-2" : "text-sm"
    }`}
  >
    {children}
  </a>
);
