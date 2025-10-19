"use client";

import { useCallback } from "react";
import Link from "next/link";
import { LuArrowDown, LuBriefcaseBusiness, LuSend } from "react-icons/lu";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  // Smooth scroll handler for navigation links
  const handleNavLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      event.preventDefault();
      const id = targetId.startsWith("#") ? targetId.substring(1) : targetId;
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    []
  );

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-background via-secondary to-background py-12 md:py-24"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Hello, I&apos;m</span>
          <span className="block text-primary mt-2">Aditya Ranjan</span>
        </h1>

        {/* Hero Description */}
        <p className="mt-6 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-8 md:max-w-3xl leading-relaxed">
          Aspiring Software Engineer | Building innovative solutions to
          real-world problems. Passionate about technology and eager to learn
          more.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row sm:justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <Link
              href="#projects"
              onClick={(e) => handleNavLinkClick(e, "#projects")}
              aria-label="View my projects"
            >
              <LuBriefcaseBusiness
                className="mr-2 h-5 w-5"
                aria-hidden="true"
              />
              View Projects
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <Link
              href="#contact"
              onClick={(e) => handleNavLinkClick(e, "#contact")}
              aria-label="Contact me"
            >
              <LuSend className="mr-2 h-5 w-5" aria-hidden="true" />
              Contact Me
            </Link>
          </Button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 animate-bounce">
          <Link
            href="#about"
            onClick={(e) => handleNavLinkClick(e, "#about")}
            aria-label="Scroll down to about section"
          >
            <LuArrowDown
              className="h-8 w-8 mx-auto text-muted-foreground hover:text-primary transition-colors"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;