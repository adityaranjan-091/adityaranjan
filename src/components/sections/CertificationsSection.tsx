
import CertificationCard from '@/components/CertificationCard';
import { certifications } from '@/lib/constants';
import { Award } from 'lucide-react';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl flex items-center justify-center gap-3">
            <Award className="h-10 w-10 text-primary" />
            Certifications
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My credentials and accomplishments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
