import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CosmicButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
}

export const CosmicButton = ({
  children,
  variant = "primary",
  size = "default",
  className,
  onClick,
}: CosmicButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-cosmic-gold to-cosmic-gold-glow text-primary-foreground hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] border border-cosmic-gold/30",
    secondary: "bg-secondary/20 text-foreground border border-cosmic-amethyst/40 hover:bg-secondary/30 hover:border-cosmic-amethyst/60 backdrop-blur-sm",
    ghost: "bg-transparent text-foreground hover:bg-muted/20 border border-transparent hover:border-border/50",
  };

  const sizes = {
    default: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2",
    xl: "px-10 py-5 text-lg gap-3",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cosmic-gold-glow to-cosmic-gold opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
};
