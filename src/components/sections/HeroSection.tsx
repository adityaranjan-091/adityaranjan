import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuArrowDown, LuBriefcaseBusiness, LuSend } from "react-icons/lu";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-background via-secondary to-background py-12 md:py-24"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Hello, I&apos;m</span>
          <span className="block text-primary">Aditya Ranjan</span>
        </h1>
        <p className="mt-6 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-8 md:max-w-3xl">
          Aspiring Software Engineer | Building innovative solutions to
          real-world problems. Passionate about technology and eager to learn
          more.
        </p>
        <div className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row sm:justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <Link href="#projects">
              <LuBriefcaseBusiness className="mr-2 h-5 w-5" />
              View Projects
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <Link href="#contact">
              <LuSend className="mr-2 h-5 w-5" />
              Contact Me
            </Link>
          </Button>
        </div>
        <div className="mt-16 animate-bounce">
          <Link href="#about" aria-label="Scroll to about section">
            <LuArrowDown className="h-8 w-8 mx-auto text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
