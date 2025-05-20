import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          data-ai-hint={project.imageAiHint}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-muted-foreground text-sm">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-start gap-2 pt-4">
        <Button variant="outline" size="sm" asChild>
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Link>
        </Button>
        {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
          <Button variant="default" size="sm" asChild>
            <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
