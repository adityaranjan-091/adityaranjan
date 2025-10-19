import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LuDownload, LuCircleUser } from "react-icons/lu";

const AboutMeSection = () => {
  const profileInfo = {
    name: "Aditya Ranjan",
    image: "/Profile-Pic.jpeg",
    resumePath: "/resume.pdf",
    resumeFileName: "Aditya_Ranjan_Resume.pdf",
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A little bit about my journey and passion for technology.
          </p>
        </div>

        {/* Main Card */}
        <Card className="overflow-hidden shadow-xl">
          <div className="md:flex">
            {/* Profile Image Section */}
            <div className="md:w-1/3 flex items-center justify-center p-8 bg-muted">
              <div className="relative">
                <Image
                  src={profileInfo.image}
                  alt={`${profileInfo.name} - Profile Picture`}
                  width={300}
                  height={300}
                  className="rounded-full shadow-lg object-cover aspect-square border-4 border-primary"
                  data-ai-hint="professional portrait"
                  priority
                  sizes="(max-width: 768px) 300px, 300px"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <LuCircleUser
                    className="h-8 w-8 text-primary flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>My Background</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Hi! I'm a Computer Science and Engineering student at the
                  National Institute of Technology Patna, passionate about
                  building impactful technology. My interests lie at the
                  intersection of web development and machine learning, where I
                  enjoy creating intuitive web applications and exploring
                  intelligent systems that learn from data.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always eager to learn new technologies, solve real-world
                  problems, and collaborate on innovative projects. Whether it's
                  developing dynamic front-end interfaces or training models to
                  uncover insights, I love turning ideas into working solutions.
                </p>

                <div className="pt-2">
                  <Button
                    size="lg"
                    asChild
                    className="shadow-md hover:shadow-lg transition-shadow"
                  >
                    <a
                      href={profileInfo.resumePath}
                      download={profileInfo.resumeFileName}
                      aria-label="Download resume as PDF"
                    >
                      <LuDownload className="mr-2 h-5 w-5" aria-hidden="true" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutMeSection;