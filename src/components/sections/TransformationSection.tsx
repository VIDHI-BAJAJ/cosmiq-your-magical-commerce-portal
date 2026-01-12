import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Sparkles, CloudLightning, Heart } from "lucide-react";

const beforeCards = [
  { icon: CloudLightning, title: "Overwhelmed", description: "Drowning in tech setup, domains, and payment gateways" },
  { icon: Flame, title: "Burned Out", description: "Creative energy drained by logistics and operations" },
];

const afterCards = [
  { icon: Heart, title: "Empowered", description: "Focus purely on your craft and community" },
  { icon: Sparkles, title: "Thriving", description: "Your store runs beautifully while you create" },
];

export const TransformationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="text-foreground">The </span>
            <span className="text-gradient-gold">Transformation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From chaos to clarity. From burnout to breakthrough.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-destructive/10 text-destructive border border-destructive/20 text-sm font-medium">
                Before Cosmiq
              </span>
            </div>
            
            <div className="space-y-6">
              {beforeCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="card-mystical p-6 border-destructive/20 hover:border-destructive/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-destructive/10">
                      <card.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-foreground mb-2">{card.title}</h3>
                      <p className="text-muted-foreground">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-cosmic-gold/10 text-cosmic-gold border border-cosmic-gold/30 text-sm font-medium glow-gold">
                After Cosmiq
              </span>
            </div>
            
            <div className="space-y-6">
              {afterCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="card-mystical p-6 border-cosmic-gold/20 hover:border-cosmic-gold/40 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-cosmic-gold/10 group-hover:bg-cosmic-gold/20 transition-colors">
                      <card.icon className="w-6 h-6 text-cosmic-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-foreground mb-2">{card.title}</h3>
                      <p className="text-muted-foreground">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


        {/* Decorative Arrow */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cosmic-amethyst/20 to-cosmic-gold/20 border border-cosmic-gold/30 flex items-center justify-center backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-cosmic-gold" />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};
