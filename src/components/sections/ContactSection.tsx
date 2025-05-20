import ContactForm from "@/components/sections/ContactForm";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { LuMessageSquareHeart, LuDownload } from "react-icons/lu";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl flex items-center justify-center gap-3">
            <LuMessageSquareHeart className="h-10 w-10 text-primary" />
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? Feel free to reach
            out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-stretch">
          <Card className="shadow-xl flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ContactForm />
            </CardContent>
          </Card>

          <div className="flex flex-col space-y-8 h-full">
            <Card className="shadow-xl flex-grow">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <IoMdMail className="h-5 w-5" /> {SOCIAL_LINKS.email}
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Social Media
                  </h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <FaGithub className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link
                        href={SOCIAL_LINKS.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <BsTwitterX className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Interested in a more detailed overview of my experience?
                  Download my resume.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="shadow-md hover:shadow-lg transition-shadow"
                >
                  <a href="/resume.pdf" download="Aditya-Ranjan_Resume.pdf">
                    <LuDownload className="mr-2 h-5 w-5" />
                    Download My Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
