import { useLanguage } from '@/contexts/LanguageContext';
import StatCard from '@/components/StatCard';
import StatusBadge from '@/components/StatusBadge';
import { Button } from '@/components/ui/button';
import { FileText, Clock, CheckCircle, XCircle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Dashboard = () => {
  const { t } = useLanguage();

  const stats = [
    { title: t('totalApplications'), value: '1,234', icon: FileText, color: 'text-primary' },
    { title: t('pendingReview'), value: '156', icon: Clock, color: 'text-warning' },
    { title: t('acceptedApps'), value: '892', icon: CheckCircle, color: 'text-success' },
    { title: t('rejectedApps'), value: '186', icon: XCircle, color: 'text-destructive' },
  ];

  const recentApplications = [
    {
      id: 'APP12345678',
      name: 'أحمد محمد السعيد',
      job: 'مدير موارد بشرية',
      date: '2025-01-15',
      status: 'underReview' as const,
    },
    {
      id: 'APP12345679',
      name: 'فاطمة علي الأحمد',
      job: 'محلل بيانات',
      date: '2025-01-14',
      status: 'underReview' as const,
    },
    {
      id: 'APP12345680',
      name: 'خالد عبدالله النجار',
      job: 'أخصائي دعم فني',
      date: '2025-01-13',
      status: 'accepted' as const,
    },
    {
      id: 'APP12345681',
      name: 'نورة سعد القحطاني',
      job: 'منسق تدريب',
      date: '2025-01-12',
      status: 'underReview' as const,
    },
    {
      id: 'APP12345682',
      name: 'عمر فهد السليمان',
      job: 'محاسب',
      date: '2025-01-11',
      status: 'rejected' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{t('dashboard')}</h1>
          <Link to="/employee/reports">
            <Button variant="outline">{t('reports')}</Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

        {/* Recent Applications Table */}
        <div className="gov-card">
          <h2 className="text-xl font-bold text-foreground mb-6">{t('recentApplications')}</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('applicationId')}</TableHead>
                  <TableHead>{t('applicantName')}</TableHead>
                  <TableHead>{t('jobTitle')}</TableHead>
                  <TableHead>{t('submittedDate')}</TableHead>
                  <TableHead>{t('status')}</TableHead>
                  <TableHead>{t('actions')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentApplications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-mono text-sm">{app.id}</TableCell>
                    <TableCell className="font-medium">{app.name}</TableCell>
                    <TableCell>{app.job}</TableCell>
                    <TableCell>{app.date}</TableCell>
                    <TableCell>
                      <StatusBadge status={app.status} />
                    </TableCell>
                    <TableCell>
                      <Link to={`/employee/application/${app.id}`}>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                          {t('view')}
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
