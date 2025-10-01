import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import newLogo from '@/assets/new-logo.png';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'ru', name: 'РУ' },
    { code: 'en', name: 'EN' },
    { code: 'zh', name: '中文' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/apartments', label: t('nav.apartments') },
    { path: '/about', label: t('nav.about') },
    { path: '/offers', label: t('nav.offers') },
    { path: '/owners', label: t('nav.owners') },
    { path: '/contacts', label: t('nav.contacts') }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 hover-scale">
            <img src={newLogo} alt="Home Reserve Rentals" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-foreground/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="hidden lg:flex items-center space-x-2">
            {languages.map((lang) => (
              <Button
                key={lang.code}
                variant={i18n.language === lang.code ? 'default' : 'ghost'}
                size="sm"
                onClick={() => changeLanguage(lang.code)}
                className="h-8 px-3"
              >
                {lang.name}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-2 px-4 pt-2 border-t border-border">
                <Globe size={16} className="text-muted-foreground" />
                <div className="flex space-x-2">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={i18n.language === lang.code ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => changeLanguage(lang.code)}
                    >
                      {lang.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;