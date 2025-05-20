
import { EDUCATION_DATA } from '@/lib/constants';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { LuGraduationCap } from "react-icons/lu";import { cn } from '@/lib/utils';

const EducationSection = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"> {/* Increased bottom margin for better spacing */}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl flex items-start justify-center gap-3">
            <LuGraduationCap className="h-10 w-10 text-primary" />
            Education & Certifications
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My academic qualifications and professional certifications.
          </p>
        </div>

        <div className="relative">
          {/* The Vertical Timeline Line */}
          {/* Positioned 1.25rem (w-10 / 2) from left, so icon node center aligns with it */}
          <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-border rounded-full -translate-x-1/2"></div>

          <div className="space-y-10"> {/* Spacing between timeline items */}
            {EDUCATION_DATA.map((edu, index) => (
              <div key={index} className="relative pl-[calc(theme(spacing.5)_/_2_+_theme(spacing.5)_/_2_+_theme(spacing.10))]"> {/* pl-[calc(icon_radius + icon_radius + gap)] = pl-[1.25rem + 1.25rem + 1rem] = pl-[3.5rem] = pl-14 */}
                
                {/* Timeline Node (Icon in a Circle) */}
                <div className={cn(
                  "absolute top-1 flex items-center justify-center w-10 h-10 rounded-full bg-background border-2 border-primary shadow-lg",
                  "left-5 -translate-x-1/2", // Center of this node is at 1.25rem (left-5)
                )}>
                  <edu.icon className="h-5 w-5 text-primary" />
                </div>

                {/* Timeline Content Card */}
                <Card className={cn(
                  "transition-all duration-300 ease-in-out", // Base for transitions
                  "hover:shadow-xl hover:shadow-primary/20 dark:hover:shadow-primary/10 hover:border-primary/50 hover:-translate-y-1" // Glow, border, and lift effect
                )}>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground">{edu.degree}</CardTitle>
                    <p className="text-md text-muted-foreground mt-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">{edu.period}</p>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
