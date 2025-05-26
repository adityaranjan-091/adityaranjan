import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LuDownload, LuCircleUser } from "react-icons/lu";

const AboutMeSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A little bit about my journey and passion for technology.
          </p>
        </div>

        <Card className="overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3 flex items-center justify-center p-8 bg-muted">
              <Image
                src="/Profile-Pic.jpeg"
                alt="Aditya Ranjan - Profile Picture"
                width={300}
                height={300}
                className="rounded-full shadow-lg object-cover aspect-square border-4 border-primary"
                data-ai-hint="professional portrait"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-semibold text-foreground flex items-center">
                  <LuCircleUser className="mr-3 h-8 w-8 text-primary" />
                  My Background
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-4 text-justify">
                  Hi! I’m a Computer Science and Engineering student at the
                  National Institute of Technology Patna, passionate about
                  building impactful technology. My interests lie at the
                  intersection of web development and machine learning, where I
                  enjoy creating intuitive web applications and exploring
                  intelligent systems that learn from data.
                </p>
                <p className="text-muted-foreground mb-6 text-justify">
                  I'm always eager to learn new technologies, solve real-world
                  problems, and collaborate on innovative projects. Whether it's
                  developing dynamic front-end interfaces or training models to
                  uncover insights, I love turning ideas into working solutions.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="shadow-md hover:shadow-lg transition-shadow"
                >
                  <a href="/resume.pdf" download="Aditya_Ranjan_Resume.pdf">
                    <LuDownload className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutMeSection;
