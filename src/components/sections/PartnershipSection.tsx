import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wand2, Palette, Users, MessageSquare, Settings, Package, Headphones, Globe } from "lucide-react";

const creatorDuties = [
  { icon: Wand2, text: "Create magical content" },
  { icon: Palette, text: "Provide branding assets" },
  { icon: Users, text: "Engage your community" },
  { icon: MessageSquare, text: "Share your vision" },
];

const cosmiqDuties = [
  { icon: Globe, text: "Full store setup & tech" },
  { icon: Package, text: "Inventory & sourcing" },
  { icon: Settings, text: "Order fulfillment" },
  { icon: Headphones, text: "Customer support" },
];

export const PartnershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cosmic-amethyst/5 blur-[100px] rounded-full" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="text-foreground">The Partnership </span>
            <span className="text-gradient-mystic">Ritual</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A true operational partnership. You focus on your gift, we handle everything else.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Creator Role */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-mystical p-8 border-cosmic-amethyst/30"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-cosmic-amethyst/20">
                <Wand2 className="w-8 h-8 text-cosmic-amethyst-light" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground">Your Role</h3>
                <p className="text-cosmic-amethyst-light">The Visionary</p>
              </div>
            </div>

            <div className="space-y-4">
              {creatorDuties.map((duty, index) => (
                <motion.div
                  key={duty.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors"
                >
                  <duty.icon className="w-5 h-5 text-cosmic-amethyst-light" />
                  <span className="text-foreground">{duty.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cosmiq Role */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="card-mystical p-8 border-cosmic-gold/30"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-cosmic-gold/20">
                <Settings className="w-8 h-8 text-cosmic-gold" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground">Our Role</h3>
                <p className="text-cosmic-gold">The Engine</p>
              </div>
            </div>

            <div className="space-y-4">
              {cosmiqDuties.map((duty, index) => (
                <motion.div
                  key={duty.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors"
                >
                  <duty.icon className="w-5 h-5 text-cosmic-gold" />
                  <span className="text-foreground">{duty.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
