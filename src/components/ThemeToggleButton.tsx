
"use client";

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider'; 
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function ThemeToggleButton() {
  const { toggleTheme, appliedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null until mounted to avoid hydration mismatch
    // Placeholder shows Sun icon, as light is the typical default non-JS fallback.
    return <Button variant="outline" size="icon" disabled className="h-9 w-9 md:h-10 md:w-10"><Sun className="h-[1.2rem] w-[1.2rem]" /></Button>;
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="h-9 w-9 md:h-10 md:w-10" aria-label="Toggle theme">
      {appliedTheme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
