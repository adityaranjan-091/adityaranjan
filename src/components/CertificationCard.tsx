import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface Certification {
  title: string;
  organization: string;
  date: string;
  skills?: string;
  description?: string;
  credentialUrl?: string;
  imageUrl?: string;
}

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
}) => {
  const {
    title,
    organization,
    date,
    skills,
    description,
    imageUrl,
    credentialUrl,
  } = certification;

  const hasViewAction = imageUrl || credentialUrl;

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl font-semibold text-foreground line-clamp-2 mb-1">
              {title}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {organization} &middot; {date}
            </CardDescription>
          </div>
          <Award
            className="h-8 w-8 flex-shrink-0 text-muted-foreground"
            aria-hidden="true"
          />
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        {skills && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">
              Skills Gained
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {skills}
            </p>
          </div>
        )}
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </CardContent>

      {hasViewAction && (
        <CardFooter className="flex justify-center pt-4 border-t">
          {imageUrl ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  View Certificate
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle className="text-lg font-semibold pr-8">
                    {title}
                  </DialogTitle>
                </DialogHeader>
                <div className="relative w-full h-[60vh] md:h-[70vh] mt-4">
                  <Image
                    src={imageUrl}
                    alt={`${title} certificate`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 896px"
                    priority
                  />
                </div>
              </DialogContent>
            </Dialog>
          ) : credentialUrl ? (
            <Button
              variant="default"
              size="sm"
              className="w-full sm:w-auto"
              asChild
            >
              <Link
                href={credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </Link>
            </Button>
          ) : null}
        </CardFooter>
      )}
    </Card>
  );
};

export default CertificationCard;