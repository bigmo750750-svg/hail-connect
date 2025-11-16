import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const Navbar = () => {
  const { language, toggleLanguage, t, direction } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/jobs', label: t('jobs') },
    { to: '/track', label: t('trackApplication') },
    { to: '/contact', label: t('contact') },
  ];

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      {/* Top bar with ministry info */}
      <div className="bg-primary/90 border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold">{t('ministry')}</span>
              <span className="hidden md:inline">|</span>
              <span className="text-accent">{t('office')}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language === 'ar' ? 'English' : 'العربية'}
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-accent-foreground">ح</span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="font-bold text-lg leading-tight">{t('portalName')}</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/employee/login">
              <Button variant="secondary" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                {t('employeeLogin')}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/10">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-primary-foreground hover:text-accent transition-colors py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/employee/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="secondary" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('employeeLogin')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
