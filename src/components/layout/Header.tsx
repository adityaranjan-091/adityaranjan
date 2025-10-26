"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, Code2 } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";

const Header = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

      setIsSheetOpen(false);
    },
    []
  );

  // Smooth scroll to top when logo is clicked on home page
  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (window.location.pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    []
  );

  // Prevent hydration mismatch by rendering placeholder until mounted
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
            aria-label="Portfolio home"
          >
            <Code2
              className="h-6 w-6 text-primary flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-foreground">Portfolio</span>
          </Link>

          {/* Navigation and Controls */}
          <div className="flex items-center gap-2">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Button key={link.href} variant="ghost" asChild>
                  <a href={`#${link.href}`}>{link.label}</a>
                </Button>
              ))}
            </nav>

            <ThemeToggleButton />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              disabled
              className="md:hidden"
              aria-label="Menu loading"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold transition-opacity hover:opacity-80"
          onClick={handleLogoClick}
          aria-label="Portfolio home"
        >
          <Code2
            className="h-6 w-6 text-primary flex-shrink-0"
            aria-hidden="true"
          />
          <span className="text-foreground">Portfolio</span>
        </Link>

        {/* Navigation and Controls */}
        <div className="flex items-center gap-2">
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Button key={link.href} variant="ghost" asChild>
                  <Link
                    href={`#${link.href}`}
                    onClick={(e) => handleNavLinkClick(e, `#${link.href}`)}
                  >
                    {link.label}
                  </Link>
                </Button>
              ))}
            </nav>
          )}

          <ThemeToggleButton />

          {/* Mobile Navigation */}
          {isMobile && (
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-6">
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
                </SheetHeader>
                <nav
                  className="flex flex-col gap-4"
                  aria-label="Mobile navigation"
                >
                  {NAV_LINKS.map((link) => (
                    <Button
                      key={link.href}
                      variant="ghost"
                      className="justify-start text-lg"
                      asChild
                    >
                      <Link
                        href={`#${link.href}`}
                        onClick={(e) => handleNavLinkClick(e, `#${link.href}`)}
                      >
                        {link.label}
                      </Link>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
