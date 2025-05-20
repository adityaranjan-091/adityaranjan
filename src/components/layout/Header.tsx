
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code2 } from 'lucide-react';
import {NAV_LINKS} from '@/lib/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import React from 'react';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

const Header = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = React.useState(false);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const id = targetId.startsWith('#') ? targetId.substring(1) : targetId;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsSheetOpen(false); // Close sheet after navigation
  };

  if (!mounted) {
    // Avoid rendering mobile/desktop specific UI until client has mounted
    // to prevent hydration mismatch, or render a common placeholder.
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-foreground">CodeCanvas</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex gap-1">
              {NAV_LINKS.map((link) => (
                <Button key={link.href} variant="ghost" asChild>
                  <a href={`#${link.href}`}>{link.label}</a>
                </Button>
              ))}
            </div>
            <ThemeToggleButton /> 
            <div className="md:hidden">
               <Button variant="ghost" size="icon" disabled>
                <Menu className="h-6 w-6" />
               </Button>
            </div>
          </div>
        </div>
      </header>
    );
  }


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold" onClick={(e) => {
          if (window.location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          // Allow default behavior if not on the homepage (e.g. navigating from /blog to /)
        }}>
          <Code2 className="h-6 w-6 text-primary" />
          <span className="text-foreground">Portfolio</span>
        </Link>
        <div className="flex items-center gap-2">
          {!isMobile && (
            <nav className="hidden md:flex gap-1">
              {NAV_LINKS.map((link) => (
                <Button key={link.href} variant="ghost" asChild>
                  <Link href={`#${link.href}`} onClick={(e) => handleNavLinkClick(e, `#${link.href}`)}>
                    {link.label}
                  </Link>
                </Button>
              ))}
            </nav>
          )}
          <ThemeToggleButton />
          {isMobile && (
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSheetOpen(true)}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-6">
                <nav className="flex flex-col space-y-4">
                  {NAV_LINKS.map((link) => (
                    <Button key={link.href} variant="ghost" className="justify-start text-lg" asChild>
                       <Link href={`#${link.href}`} onClick={(e) => handleNavLinkClick(e, `#${link.href}`)}>
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
