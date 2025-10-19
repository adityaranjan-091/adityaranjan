import Link from "next/link";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { SOCIAL_LINKS } from "@/lib/constants";

const socialLinks = [
  {
    href: `mailto:${SOCIAL_LINKS.email}`,
    label: "Email",
    icon: LuMail,
    external: false,
  },
  {
    href: SOCIAL_LINKS.github,
    label: "GitHub",
    icon: LuGithub,
    external: true,
  },
  {
    href: SOCIAL_LINKS.linkedin,
    label: "LinkedIn",
    icon: LuLinkedin,
    external: true,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Aditya Ranjan. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={`Visit my ${social.label}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  {...(social.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;