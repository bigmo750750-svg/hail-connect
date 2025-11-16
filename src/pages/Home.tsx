import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import StatCard from '@/components/StatCard';
import { Briefcase, FileText, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

  const stats = [
    { title: t('totalJobs'), value: '245', icon: Briefcase, color: 'text-primary' },
    { title: t('activeJobs'), value: '68', icon: FileText, color: 'text-success' },
    { title: t('applications'), value: '1,234', icon: Users, color: 'text-warning' },
    { title: t('hiredCandidates'), value: '456', icon: CheckCircle, color: 'text-accent' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t('welcomeTitle')}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              {t('welcomeSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  {t('browseJobs')}
                  <ArrowRight className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180" />
                </Button>
              </Link>
              <Link to="/track">
                <Button size="lg" variant="secondary" className="font-semibold">
                  {t('trackApp')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                iconColor={stat.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="gov-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">{t('jobs')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('language') === 'ar' 
                  ? 'تصفح الوظائف المتاحة وقدم طلبك بسهولة'
                  : 'Browse available jobs and apply easily'}
              </p>
              <Link to="/jobs">
                <Button variant="outline">{t('browseJobs')}</Button>
              </Link>
            </div>

            <div className="gov-card text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-success" />
              </div>
              <h3 className="font-bold text-xl mb-3">{t('trackApplication')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('language') === 'ar'
                  ? 'تابع حالة طلبك في أي وقت'
                  : 'Track your application status anytime'}
              </p>
              <Link to="/track">
                <Button variant="outline">{t('checkStatus')}</Button>
              </Link>
            </div>

            <div className="gov-card text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">{t('contact')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('language') === 'ar'
                  ? 'تواصل معنا للاستفسارات والدعم'
                  : 'Contact us for inquiries and support'}
              </p>
              <Link to="/contact">
                <Button variant="outline">{t('contactUs')}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
