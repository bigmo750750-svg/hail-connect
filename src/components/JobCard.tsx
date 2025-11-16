import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Job } from '@/data/jobs';
import { Link } from 'react-router-dom';

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const { language, t } = useLanguage();
  
  const title = language === 'ar' ? job.titleAr : job.titleEn;
  const department = language === 'ar' ? job.departmentAr : job.departmentEn;
  const description = language === 'ar' ? job.descriptionAr : job.descriptionEn;
  
  const typeLabel = t(job.type);

  return (
    <div className="gov-card">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{department}</p>
            </div>
          </div>
          
          <p className="text-sm text-foreground/80 mb-4 line-clamp-2">{description}</p>
          
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{job.posted}</span>
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
              {typeLabel}
            </span>
          </div>
        </div>
        
        <Link to={`/apply?job=${job.id}`}>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
            {t('apply')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
