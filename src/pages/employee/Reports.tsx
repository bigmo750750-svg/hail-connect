import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Reports = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const statusData = [
    { name: t('underReview'), value: 156, color: 'hsl(var(--warning))' },
    { name: t('accepted'), value: 892, color: 'hsl(var(--success))' },
    { name: t('rejected'), value: 186, color: 'hsl(var(--destructive))' },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/employee/dashboard')}
          >
            <ArrowLeft className="h-5 w-5 rtl:rotate-180" />
          </Button>
          <h1 className="text-3xl font-bold text-foreground">{t('reports')}</h1>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <div className="gov-card">
            <h2 className="text-xl font-bold text-foreground mb-6">{t('statusDistribution')}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Summary */}
          <div className="gov-card">
            <h2 className="text-xl font-bold text-foreground mb-6">
              {language === 'ar' ? 'ملخص الإحصائيات' : 'Statistics Summary'}
            </h2>
            <div className="space-y-4">
              {statusData.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-4 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground">{item.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 border-t-2 border-primary">
                <span className="font-bold text-lg">{t('totalApplications')}</span>
                <span className="text-3xl font-bold text-primary">1,234</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
