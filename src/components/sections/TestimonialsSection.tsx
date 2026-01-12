import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Cosmiq turned my vision into reality — I just show up and shine. My followers finally have a sacred space to shop.",
    name: "Dr.MMalvikaa",
    title: "Astrologer & Tarot Reader",
    avatar: "🌙",
  },
  // {
  //   quote: "I was drowning in tech setup and shipping nightmares. Now I create content while Cosmiq handles everything else.",
  //   name: "Sacred Sophia",
  //   title: "Energy Healer",
  //   avatar: "✨",
  // },
  // {
  //   quote: "The partnership feels like true alchemy. They understand spiritual creators in a way no other platform does.",
  //   name: "Cosmic Crystal",
  //   title: "Crystal Guide",
  //   avatar: "💎",
  // },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/5" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cosmic-portal/10 blur-[100px] rounded-full" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="text-foreground">The Oracle's </span>
            <span className="text-gradient-mystic">Voice</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from creators who've transformed their practice with Cosmiq.
          </p>
        </motion.div>

        {/* <div className="grid md:grid-cols-3 gap-6 lg:gap-8"> */}
        <div className="grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="card-mystical p-6 sm:p-8 h-full border-cosmic-amethyst/20 hover:border-cosmic-gold/40 transition-all duration-500">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-cosmic-gold/50" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cosmic-gold text-cosmic-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-lg leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-amethyst/30 to-cosmic-gold/30 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-display text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
