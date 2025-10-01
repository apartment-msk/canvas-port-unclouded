import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
              {t('footer.company')}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/apartments" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.apartments')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.offers')}
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.contacts')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
              {t('footer.contact')}
            </h3>
            <div className="space-y-3">
              <a href="tel:+79265475557" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone size={16} />
                <span>+7 (926) 547-55-57</span>
              </a>
              <a href="mailto:info@homereserve.ru" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail size={16} />
                <span>info@homereserve.ru</span>
              </a>
              <div className="flex items-start space-x-2 text-muted-foreground text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{t('footer.address')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Home Reserve Rentals. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;