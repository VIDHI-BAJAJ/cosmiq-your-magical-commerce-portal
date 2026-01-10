import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Rocket, Crown } from "lucide-react";

const journeySteps = [
  {
    phase: "New Moon",
    title: "Onboard",
    subtitle: "Month 1",
    description: "Share your logos, photos, and vision. This is the only prerequisite to begin your journey.",
    icon: Upload,
    highlight: "Simply provide your branding assets",
  },
  {
    phase: "Waxing Moon",
    title: "Pilot Launch",
    subtitle: "Month 2-3",
    description: "Your store launches with Cosmiq-sourced products to test the sales funnel. First 2 months completely FREE.",
    icon: Rocket,
    highlight: "Risk-free launch period",
  },
  {
    phase: "Full Moon",
    title: "Expand",
    subtitle: "Month 3+",
    description: "Scale with your own sacred products. Flat ₹5,000/month covers all ongoing tech and platform costs.",
    icon: Crown,
    highlight: "Your thriving spiritual shop",
  },
];

export const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background to-muted/5" />

      {/* Moon phases decoration */}
      <div className="absolute top-20 left-10 opacity-10">
        <svg width="60" height="60" viewBox="0 0 100 100" className="text-cosmic-gold">
          <circle cx="50" cy="50" r="45" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-40 right-20 opacity-10">
        <svg width="40" height="40" viewBox="0 0 100 100" className="text-cosmic-amethyst">
          <circle cx="50" cy="50" r="45" fill="currentColor" />
          <circle cx="35" cy="50" r="40" fill="hsl(var(--background))" />
        </svg>
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="text-foreground">The Sacred </span>
            <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your path to launch follows the phases of the moon — clear, phased, and destined for fullness.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line - Mobile/Tablet: left side, Desktop: center */}
          <div className="absolute left-4 sm:left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cosmic-amethyst/50 via-cosmic-gold/50 to-cosmic-portal/50" />

          <div className="space-y-8 lg:space-y-0">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className="relative pl-12 sm:pl-16 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-12"
              >
                {/* Timeline Node - Mobile/Tablet: left side */}
                <motion.div
                  className="lg:hidden absolute left-2 sm:left-4 top-8 flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  <div className="w-4 h-4 rounded-full bg-cosmic-gold glow-gold" />
                </motion.div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12 lg:col-start-2"}`}>
                  <div className={`card-mystical p-5 sm:p-6 lg:p-8 ${index % 2 === 0 ? "lg:ml-auto" : ""} max-w-md border-cosmic-gold/20`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-cosmic-gold/10">
                        <step.icon className="w-5 h-5 text-cosmic-gold" />
                      </div>
                      <span className="text-xs text-cosmic-amethyst-light uppercase tracking-wider">{step.phase}</span>
                    </div>
                    
                    <h3 className="font-display text-xl sm:text-2xl text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-cosmic-gold mb-3 sm:mb-4">{step.subtitle}</p>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{step.description}</p>
                    
                    <div className="inline-block px-3 py-1.5 rounded-full bg-cosmic-gold/10 border border-cosmic-gold/20">
                      <span className="text-xs sm:text-sm text-cosmic-gold">{step.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Node - Desktop: center */}
                <motion.div
                  className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center"
                  style={{ top: index === 0 ? "2rem" : index === 1 ? "50%" : "calc(100% - 2rem)" }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  <div className="w-4 h-4 rounded-full bg-cosmic-gold glow-gold" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
