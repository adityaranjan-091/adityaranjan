import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    title,
    imageUrl,
    imageAiHint,
    tags,
    description,
    githubUrl,
    liveDemoUrl,
  } = project;
  const hasLiveDemo = liveDemoUrl && liveDemoUrl !== "#";

  return (
    <Card className="group flex flex-col h-full overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="relative w-full h-48 overflow-hidden sm:h-56">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={imageAiHint}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground line-clamp-2">
          {title}
        </CardTitle>
        {tags.length > 0 && (
          <div
            className="flex flex-wrap gap-2 mt-2"
            role="list"
            aria-label="Project technologies"
          >
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" role="listitem">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="flex-1">
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex justify-between items-center gap-2 pt-4 border-t">
        <Button variant="outline" size="sm" asChild>
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code on GitHub`}
          >
            <Github className="mr-2 h-4 w-4" aria-hidden="true" />
            GitHub
          </Link>
        </Button>
        {hasLiveDemo && (
          <Button variant="default" size="sm" asChild>
            <Link
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;