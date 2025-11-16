import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import StatusBadge from '@/components/StatusBadge';
import { toast } from 'sonner';
import { ArrowLeft, FileText, User, Mail, Phone, Briefcase, GraduationCap } from 'lucide-react';

const ApplicationDetails = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  
  const [status, setStatus] = useState<'submitted' | 'underReview' | 'accepted' | 'rejected'>('underReview');

  // Mock application data
  const application = {
    id: id || 'APP12345678',
    nameAr: 'أحمد محمد السعيد',
    nameEn: 'Ahmed Mohammed Al-Saeed',
    nationalId: '1234567890',
    email: 'ahmed.saeed@example.com',
    phone: '+966501234567',
    jobTitle: 'مدير موارد بشرية',
    education: 'بكالوريوس في إدارة الموارد البشرية',
    experience: '5 سنوات',
    submittedDate: '2025-01-15',
  };

  const handleSave = () => {
    toast.success(language === 'ar' ? 'تم تحديث الحالة بنجاح' : 'Status updated successfully');
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/employee/dashboard')}
          >
            <ArrowLeft className="h-5 w-5 rtl:rotate-180" />
          </Button>
          <h1 className="text-3xl font-bold text-foreground">{t('applicantDetails')}</h1>
        </div>

        <div className="space-y-6">
          {/* Status Control */}
          <div className="gov-card">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t('applicationId')}</p>
                <p className="text-xl font-bold text-foreground font-mono">{application.id}</p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Select value={status} onValueChange={(value: any) => setStatus(value)}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="submitted">{t('submitted')}</SelectItem>
                    <SelectItem value="underReview">{t('underReview')}</SelectItem>
                    <SelectItem value="accepted">{t('accepted')}</SelectItem>
                    <SelectItem value="rejected">{t('rejected')}</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                  {t('save')}
                </Button>
              </div>
            </div>
          </div>

          {/* Applicant Information */}
          <div className="gov-card">
            <h2 className="text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
              {t('personalInfo')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('fullNameAr')}</p>
                  <p className="font-medium">{application.nameAr}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('fullNameEn')}</p>
                  <p className="font-medium">{application.nameEn}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <FileText className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('nationalId')}</p>
                  <p className="font-medium" dir="ltr">{application.nationalId}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Mail className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('email')}</p>
                  <p className="font-medium" dir="ltr">{application.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <Phone className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('phone')}</p>
                  <p className="font-medium" dir="ltr">{application.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('jobTitle')}</p>
                  <p className="font-medium">{application.jobTitle}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('educationLevel')}</p>
                  <p className="font-medium">{application.education}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Briefcase className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('yearsExperience')}</p>
                  <p className="font-medium">{application.experience}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Status */}
          <div className="gov-card">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t('status')}</p>
                <StatusBadge status={status} />
              </div>
              <div className="text-right rtl:text-left">
                <p className="text-sm text-muted-foreground mb-1">{t('submittedDate')}</p>
                <p className="font-medium">{application.submittedDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
