import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import StatusBadge from '@/components/StatusBadge';
import { Search, CheckCircle, Clock, FileText } from 'lucide-react';

const TrackApplication = () => {
  const { t } = useLanguage();
  const [applicationId, setApplicationId] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [searched, setSearched] = useState(false);
  
  // Mock application data
  const mockApplication = {
    id: 'APP12345678',
    status: 'underReview' as const,
    applicantName: 'أحمد محمد السعيد',
    jobTitle: 'مدير موارد بشرية',
    submittedDate: '2025-01-10',
    timeline: [
      { status: 'submitted', date: '2025-01-10', completed: true },
      { status: 'underReview', date: '2025-01-12', completed: true },
      { status: 'accepted', date: '-', completed: false },
    ],
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{t('trackYourApplication')}</h1>
        
        {/* Search Form */}
        <form onSubmit={handleSearch} className="gov-card mb-8">
          <div className="space-y-4">
            <div>
              <Label htmlFor="appId">{t('enterAppId')}</Label>
              <Input
                id="appId"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value)}
                placeholder="APP12345678"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="identifier">{t('enterIdOrEmail')}</Label>
              <Input
                id="identifier"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              <Search className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
              {t('checkStatus')}
            </Button>
          </div>
        </form>

        {/* Results */}
        {searched && (
          <div className="space-y-6">
            {/* Application Info */}
            <div className="gov-card">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-1">{mockApplication.jobTitle}</h2>
                  <p className="text-sm text-muted-foreground">{t('applicationId')}: {mockApplication.id}</p>
                </div>
                <StatusBadge status={mockApplication.status} />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('applicantName')}</p>
                  <p className="font-medium">{mockApplication.applicantName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('submittedDate')}</p>
                  <p className="font-medium">{mockApplication.submittedDate}</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="gov-card">
              <h3 className="text-lg font-bold text-foreground mb-6">{t('applicationStatus')}</h3>
              
              <div className="space-y-4">
                {mockApplication.timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.completed ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.completed ? <CheckCircle className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                      </div>
                      {index < mockApplication.timeline.length - 1 && (
                        <div className={`w-0.5 h-12 ${item.completed ? 'bg-success' : 'bg-border'}`} />
                      )}
                    </div>
                    
                    <div className="flex-1 pb-4">
                      <p className="font-medium text-foreground mb-1">
                        {t(item.status)}
                      </p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackApplication;
