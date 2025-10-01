import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import logo from "@/assets/new-logo.png";

export function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Home Reserve" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              {t('navigation.home')}
            </Link>
            <Link to="/apartments" className="text-foreground hover:text-primary transition-colors">
              {t('navigation.apartments')}
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              {t('navigation.about')}
            </Link>
            <Link to="/offers" className="text-foreground hover:text-primary transition-colors">
              {t('navigation.offers')}
            </Link>
            <Link to="/owners" className="text-foreground hover:text-primary transition-colors">
              {t('navigation.owners')}
            </Link>
            <Link to="/contacts" className="text-foreground hover:text-primary transition-colors">
              {t('navigation.contacts')}
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => changeLanguage('ru')}
                className={`text-sm font-medium transition-colors ${
                  currentLanguage === 'ru' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                RU
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => changeLanguage('en')}
                className={`text-sm font-medium transition-colors ${
                  currentLanguage === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => changeLanguage('zh')}
                className={`text-sm font-medium transition-colors ${
                  currentLanguage === 'zh' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                中文
              </button>
            </div>

            <a href="tel:+79955085808" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+7 995 508 58 08</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                {t('navigation.home')}
              </Link>
              <Link
                to="/apartments"
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                {t('navigation.apartments')}
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                {t('navigation.about')}
              </Link>
              <Link
                to="/offers"
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                {t('navigation.offers')}
              </Link>
              <Link
                to="/owners"
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                {t('navigation.owners')}
              </Link>
              <Link
                to="/contacts"
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                {t('navigation.contacts')}
              </Link>

              <div className="flex items-center space-x-4 px-4 pt-4 border-t border-border mt-4">
                <button
                  onClick={() => {
                    changeLanguage('ru');
                    toggleMenu();
                  }}
                  className={`text-sm font-medium ${
                    currentLanguage === 'ru' ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  RU
                </button>
                <button
                  onClick={() => {
                    changeLanguage('en');
                    toggleMenu();
                  }}
                  className={`text-sm font-medium ${
                    currentLanguage === 'en' ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    changeLanguage('zh');
                    toggleMenu();
                  }}
                  className={`text-sm font-medium ${
                    currentLanguage === 'zh' ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  中文
                </button>
              </div>

              <a
                href="tel:+79955085808"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors px-4 pt-4"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+7 995 508 58 08</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
