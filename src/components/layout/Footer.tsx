import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8 max-w-7xl">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Aditya Ranjan. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Link href="mailto:ranjanaditya091@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
            <LuMail className="h-6 w-6" />
          </Link>
          <Link href="https://github.com/adityaranjan-091" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <LuGithub className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com/in/aditya-ranjan-783739324" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <LuLinkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
