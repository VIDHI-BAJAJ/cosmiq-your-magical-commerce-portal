
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { CosmicButton } from "@/components/ui/CosmicButton";
import { StarField } from "@/components/ui/StarField";
import heroPortal from "@/assets/hero-portal.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-5">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <StarField count={80} />
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cosmic-amethyst/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cosmic-gold/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative z-10 px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cosmic-gold/30 bg-muted/20 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-cosmic-gold" />
              <span className="text-sm text-cosmic-gold font-medium tracking-wide">THE SPIRITUAL COMMERCE ENGINE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6"
            >
              <span className="text-foreground">You Channel</span>
              <br />
              <span className="text-gradient-gold">the Magic.</span>
              <br />
              <span className="text-foreground">We Power</span>
              <br />
              <span className="text-gradient-mystic">the Store.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Cosmiq is your spiritual commerce engine — we build and manage your digital shop so you can focus on guiding souls.
            </motion.p>

            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7, duration: 0.8 }}
  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
>
  <a
    href="https://calendly.com/cosmiq-official/discovery"
    target="_blank"
    rel="noopener noreferrer"
  >
    <CosmicButton variant="primary" size="xl" className="ml-3">
      <Sparkles className="w-5 h-5" />
      Get Started
    </CosmicButton>
  </a>

  {/* 
  <CosmicButton variant="secondary" size="xl">
    Learn the Alchemy
  </CosmicButton> 
  */}
</motion.div>

          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 translate-y-4 blur-2xl opacity-50">
                <div className="w-full h-full bg-gradient-to-b from-cosmic-amethyst/30 via-cosmic-portal/20 to-transparent rounded-3xl" />
              </div>
              
              <motion.img
                src={heroPortal}
                alt="Cosmic Portal to Your Store"
                className="relative w-full rounded-3xl shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 text-cosmic-gold"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <polygon points="50,5 61,40 95,40 68,60 79,95 50,75 21,95 32,60 5,40 39,40" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll to Discover</span>
          <motion.div
            className="w-6 h-10 border-2 border-cosmic-gold/50 rounded-full flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-cosmic-gold rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
