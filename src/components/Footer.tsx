import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Ministry info */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-accent">{t('ministry')}</h3>
            <p className="text-sm text-primary-foreground/80">{t('office')}</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-accent">{t('contact')}</h3>
            <div className="text-sm space-y-2 text-primary-foreground/80">
              <p>{t('hotline')}: 920000000</p>
              <p>{t('officeEmail')}: hail@hrsd.gov.sa</p>
            </div>
          </div>

          {/* Working hours */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-accent">{t('workingHours')}</h3>
            <p className="text-sm text-primary-foreground/80">{t('sundayThursday')}</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/70">
          <p>
            © {currentYear} {t('ministry')} - {t('saudiArabia')}
          </p>
          <p className="mt-1">{t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
