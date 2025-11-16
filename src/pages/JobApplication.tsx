import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { jobs } from '@/data/jobs';
import { CheckCircle, Upload } from 'lucide-react';

const JobApplication = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get('job');
  
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  const [fileName, setFileName] = useState('');
  
  const [formData, setFormData] = useState({
    nameAr: '',
    nameEn: '',
    nationalId: '',
    email: '',
    phone: '',
    selectedJob: jobId || '',
    education: '',
    experience: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nameAr || !formData.nameEn || !formData.nationalId || !formData.email || !formData.phone || !formData.selectedJob) {
      toast.error(language === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
      return;
    }
    
    // Generate mock application ID
    const mockId = `APP${Date.now().toString().slice(-8)}`;
    setApplicationId(mockId);
    setSubmitted(true);
    
    toast.success(t('applicationSuccess'));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="gov-card text-center py-12">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-success" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">{t('applicationSuccess')}</h1>
            <div className="bg-secondary/50 rounded-lg p-6 mb-6">
              <p className="text-sm text-muted-foreground mb-2">{t('applicationId')}</p>
              <p className="text-2xl font-bold text-primary">{applicationId}</p>
            </div>
            <p className="text-muted-foreground mb-8">{t('saveThisId')}</p>
            <Button onClick={() => navigate('/jobs')} className="bg-primary hover:bg-primary/90">
              {t('backToJobs')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{t('applicationForm')}</h1>
        
        <form onSubmit={handleSubmit} className="gov-card">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
                {t('personalInfo')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nameAr">{t('fullNameAr')} *</Label>
                <Input
                  id="nameAr"
                  value={formData.nameAr}
                  onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="nameEn">{t('fullNameEn')} *</Label>
                <Input
                  id="nameEn"
                  value={formData.nameEn}
                  onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nationalId">{t('nationalId')} *</Label>
                <Input
                  id="nationalId"
                  value={formData.nationalId}
                  onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">{t('phone')} *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">{t('email')} *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="job">{t('selectJob')} *</Label>
              <Select value={formData.selectedJob} onValueChange={(value) => setFormData({ ...formData, selectedJob: value })}>
                <SelectTrigger>
                  <SelectValue placeholder={t('selectJob')} />
                </SelectTrigger>
                <SelectContent>
                  {jobs.map((job) => (
                    <SelectItem key={job.id} value={job.id}>
                      {language === 'ar' ? job.titleAr : job.titleEn}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="education">{t('educationLevel')}</Label>
                <Input
                  id="education"
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="experience">{t('yearsExperience')}</Label>
                <Input
                  id="experience"
                  type="number"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="cv">{t('uploadCV')}</Label>
              <div className="mt-2">
                <label htmlFor="cv" className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors">
                  <Upload className="h-5 w-5 text-muted-foreground mr-2 rtl:mr-0 rtl:ml-2" />
                  <span className="text-sm text-muted-foreground">
                    {fileName || t('chooseFile')}
                  </span>
                  <input
                    id="cv"
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                {t('submitApplication')}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplication;
