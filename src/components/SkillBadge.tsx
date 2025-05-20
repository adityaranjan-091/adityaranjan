
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon: Icon, className }) => {
  return (
    <Card className={cn("md:p-8 p-6 shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1", className)}>
      <CardContent className="flex flex-col items-center justify-center md:gap-4 gap-3 p-0 h-full">
        <Icon className="md:h-16 md:w-16 h-12 w-12 text-primary" aria-hidden="true" />
        <span className="text-sm md:text-base font-medium text-center text-foreground">{name}</span>
      </CardContent>
    </Card>
  );
};

export default SkillBadge;
