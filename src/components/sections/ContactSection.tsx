import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { LuMessageSquareHeart, LuDownload } from "react-icons/lu";
import ContactForm from "@/components/sections/ContactForm";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const socialMediaLinks = [
  {
    href: SOCIAL_LINKS.github,
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: SOCIAL_LINKS.linkedin,
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: SOCIAL_LINKS.twitter,
    label: "Twitter",
    icon: BsTwitterX,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl flex items-center justify-center gap-3">
            <LuMessageSquareHeart
              className="h-10 w-10 text-primary flex-shrink-0"
              aria-hidden="true"
            />
            <span>Get In Touch</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? Feel free to reach
            out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:items-stretch">
          {/* Contact Form Card */}
          <Card className="shadow-xl flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ContactForm />
            </CardContent>
          </Card>

          {/* Contact Information & Resume */}
          <div className="flex flex-col gap-8">
            {/* Contact Information Card */}
            <Card className="shadow-xl flex-1">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Email
                  </h3>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="text-primary hover:underline flex items-center gap-2 transition-colors"
                  >
                    <IoMdMail
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{SOCIAL_LINKS.email}</span>
                  </a>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Social Media
                  </h3>
                  <div className="flex gap-3">
                    {socialMediaLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={social.label}
                          variant="outline"
                          size="icon"
                          asChild
                        >
                          <Link
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit my ${social.label} profile`}
                          >
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </Link>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resume Card */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Interested in a more detailed overview of my experience?
                  Download my resume.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow"
                >
                  <a
                    href="/resume.pdf"
                    download="Aditya-Ranjan_Resume.pdf"
                    aria-label="Download resume as PDF"
                  >
                    <LuDownload className="mr-2 h-5 w-5" aria-hidden="true" />
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