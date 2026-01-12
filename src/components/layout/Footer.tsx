
import { Mail, Globe } from "lucide-react";
import cosmiqLogo from "@/assets/cosmiqbglogo.png";

export const Footer = () => {
  return (

    <footer className="relative py-16 border-t border-border/30">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={cosmiqLogo} alt="Cosmiq Logo" className="h-6 invert" />
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
