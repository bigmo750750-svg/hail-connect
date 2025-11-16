import { useLanguage } from '@/contexts/LanguageContext';

type Status = 'submitted' | 'underReview' | 'accepted' | 'rejected';

interface StatusBadgeProps {
  status: Status;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const { t } = useLanguage();
  
  const statusConfig = {
    submitted: { label: t('submitted'), className: 'status-badge status-pending' },
    underReview: { label: t('underReview'), className: 'status-badge status-pending' },
    accepted: { label: t('accepted'), className: 'status-badge status-accepted' },
    rejected: { label: t('rejected'), className: 'status-badge status-rejected' },
  };

  const config = statusConfig[status];

  return <span className={config.className}>{config.label}</span>;
};

export default StatusBadge;
