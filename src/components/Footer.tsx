import { Link } from "react-router-dom";
import { Building2, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/new-logo.png";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-surface border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Волшебно тут - Апартаменты Москвы"
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-bold text-foreground">Волшебно тут</span>
                <span className="text-xs text-muted-foreground">апартаменты Москвы</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Современные апартаменты Москвы
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/apartments" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('navigation.apartments')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('navigation.contacts')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.contactInfo')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-luxury" />
                <a href="tel:+79955085808" className="text-muted-foreground hover:text-luxury transition-colors">
                  +7 995 508 58 08
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-luxury" />
                <a href="mailto:info@volshebno-tut.ru" className="text-muted-foreground hover:text-luxury transition-colors">
                  info@volshebno-tut.ru
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-blue-400" />
                <a href="https://t.me/Volshebno_tyt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-luxury transition-colors">
                  @Volshebno_tyt
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-green-400" />
                <a
                  href="https://wa.me/+79955085808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-luxury transition-colors"
                  title="Открыть WhatsApp с номером +7 995 508 58 08"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Волшебно тут. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
