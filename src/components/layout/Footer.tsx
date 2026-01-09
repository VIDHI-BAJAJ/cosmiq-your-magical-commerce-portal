import { Sparkles, Mail, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/30">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cosmic-gold to-cosmic-gold-glow flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-xl text-gradient-gold">COSMIQ</span>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:cosmiq.official@gmail.com" className="flex items-center gap-2 hover:text-cosmic-gold transition-colors">
              <Mail className="w-4 h-4" />
              cosmiq.official@gmail.com
            </a>
            <a href="https://cosmiqonline.com" className="flex items-center gap-2 hover:text-cosmic-gold transition-colors">
              <Globe className="w-4 h-4" />
              Cosmiqonline.com
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 Cosmiq. All rights reserved.
          </p>
        </div>

        {/* Tagline */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            "Provide the Spark. We Provide the Launchpad."
          </p>
        </div>
      </div>
    </footer>
  );
};
