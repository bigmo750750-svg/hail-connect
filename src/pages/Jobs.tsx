import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import JobCard from '@/components/JobCard';
import { jobs } from '@/data/jobs';
import { Search } from 'lucide-react';

const Jobs = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch = searchQuery === '' || 
        (language === 'ar' 
          ? job.titleAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.departmentAr.toLowerCase().includes(searchQuery.toLowerCase())
          : job.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.departmentEn.toLowerCase().includes(searchQuery.toLowerCase())
        );
      
      const matchesType = typeFilter === 'all' || job.type === typeFilter;
      
      return matchesSearch && matchesType;
    });
  }, [searchQuery, typeFilter, language]);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t('jobs')}</h1>
          <p className="text-muted-foreground">
            {filteredJobs.length} {t('jobsAvailable')}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="gov-card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 rtl:pr-4 rtl:pl-10"
              />
            </div>
            
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder={t('filterByType')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('allTypes')}</SelectItem>
                <SelectItem value="fullTime">{t('fullTime')}</SelectItem>
                <SelectItem value="partTime">{t('partTime')}</SelectItem>
                <SelectItem value="contract">{t('contract')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <div className="gov-card text-center py-12">
              <p className="text-muted-foreground text-lg">{t('noJobs')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
