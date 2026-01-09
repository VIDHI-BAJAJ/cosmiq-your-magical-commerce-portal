import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { CosmicButton } from "@/components/ui/CosmicButton";
import { StarField } from "@/components/ui/StarField";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <StarField count={40} />
      
      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-cosmic-portal/20 blur-[80px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-cosmic-gold/10 blur-[60px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cosmic-gold/10 border border-cosmic-gold/30 mb-8"
          >
            <Sparkles className="w-10 h-10 text-cosmic-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6"
          >
            <span className="text-foreground">The Universe is </span>
            <span className="text-gradient-gold text-glow-gold">Ready.</span>
            <br />
            <span className="text-foreground">Are </span>
            <span className="text-gradient-mystic">You?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Join the creators who've transformed their spiritual practice into a thriving, soul-aligned business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CosmicButton variant="primary" size="xl">
              <Sparkles className="w-5 h-5" />
              Summon Your Store
              <ArrowRight className="w-5 h-5" />
            </CosmicButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            First 2 months completely FREE • No tech skills required
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
