import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ApartmentCard from '@/components/ApartmentCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Shield, Star, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import heroImage from '@/assets/apartment-1.jpg';
import guestsChoiceAward from '@/assets/guests-choice-award.png';
import superhostYandex from '@/assets/superhost-yandex-travel.png';
import certificateSilver from '@/assets/certificate-silver-2024.jpg';
import certificate202296 from '@/assets/certificate-2022-96.jpg';
import certificate202297 from '@/assets/certificate-2022-97.jpg';
import certificate202310 from '@/assets/certificate-2023-10.jpg';
import certificate2023972 from '@/assets/certificate-2023-97-2.jpg';
import certificate2023981 from '@/assets/certificate-2023-98-1.jpg';
import certificate202399a from '@/assets/certificate-2023-99a.jpg';
import certificate202399b from '@/assets/certificate-2023-99b.jpg';
import certificate2024981 from '@/assets/certificate-2024-98-1.jpg';
import certificate2024982 from '@/assets/certificate-2024-98-2.jpg';
import certificate2024983 from '@/assets/certificate-2024-98-3.jpg';
import certificate2024984 from '@/assets/certificate-2024-98-4.jpg';
import certificate2024985 from '@/assets/certificate-2024-98-5.jpg';
import certificate202499 from '@/assets/certificate-2024-99.jpg';

const Index = () => {
  const { t } = useTranslation();
  const [currentCertificate, setCurrentCertificate] = useState(0);

  const certificates = [
    { image: guestsChoiceAward, title: t('awards.guestsChoice') },
    { image: superhostYandex, title: t('awards.superhostYandex') },
    { image: certificateSilver, title: t('awards.silverCertificate') },
    { image: certificate202296, title: 'Сертификат 2022-96' },
    { image: certificate202297, title: 'Сертификат 2022-97' },
    { image: certificate202310, title: 'Сертификат 2023-10' },
    { image: certificate2023972, title: 'Сертификат 2023-97-2' },
    { image: certificate2023981, title: 'Сертификат 2023-98-1' },
    { image: certificate202399a, title: 'Сертификат 2023-99a' },
    { image: certificate202399b, title: 'Сертификат 2023-99b' },
    { image: certificate2024981, title: 'Сертификат 2024-98-1' },
    { image: certificate2024982, title: 'Сертификат 2024-98-2' },
    { image: certificate2024983, title: 'Сертификат 2024-98-3' },
    { image: certificate2024984, title: 'Сертификат 2024-98-4' },
    { image: certificate2024985, title: 'Сертификат 2024-98-5' },
    { image: certificate202499, title: 'Сертификат 2024-99' }
  ];

  const nextCertificate = () => {
    setCurrentCertificate((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const features = [
    {
      icon: Shield,
      title: t('features.verified.title'),
      description: t('features.verified.description')
    },
    {
      icon: Star,
      title: t('features.quality.title'),
      description: t('features.quality.description')
    },
    {
      icon: Award,
      title: t('features.awards.title'),
      description: t('features.awards.description')
    },
    {
      icon: TrendingUp,
      title: t('features.support.title'),
      description: t('features.support.description')
    },
    {
      icon: Shield,
      title: t('features.security.title'),
      description: t('features.security.description')
    },
    {
      icon: Star,
      title: t('features.cleanliness.title'),
      description: t('features.cleanliness.description')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apartments">
                <Button size="lg" className="text-lg px-8 shadow-luxury">
                  {t('hero.cta')}
                </Button>
              </Link>
              <Link to="/contacts">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  {t('hero.contact')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('features.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-background shadow-card hover:shadow-floating transition-all duration-300 hover-scale animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-luxury mb-4">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section with Carousel */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('awards.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('awards.subtitle')}
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-8 bg-background rounded-lg shadow-floating">
              <img 
                src={certificates[currentCertificate].image} 
                alt={certificates[currentCertificate].title} 
                className="h-64 w-auto mb-6 object-contain"
              />
              <h3 className="font-heading text-xl font-semibold text-center text-foreground mb-2">
                {certificates[currentCertificate].title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {currentCertificate + 1} / {certificates.length}
              </p>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/95 backdrop-blur-sm"
              onClick={prevCertificate}
            >
              <ChevronLeft size={24} />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/95 backdrop-blur-sm"
              onClick={nextCertificate}
            >
              <ChevronRight size={24} />
            </Button>

            <div className="flex justify-center gap-2 mt-6">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCertificate(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentCertificate 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 animate-fade-in">
              {t('contact.organizationName')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-card rounded-lg shadow-card">
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                  {t('contact.phone')}
                </h3>
                <a href="tel:+79265475557" className="text-primary text-xl hover:underline">
                  +7 (926) 547-55-57
                </a>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-card">
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                  {t('contact.email')}
                </h3>
                <a href="mailto:info@homereserve.ru" className="text-primary text-xl hover:underline">
                  info@homereserve.ru
                </a>
              </div>
            </div>
            <p className="text-muted-foreground text-lg mb-8">
              {t('contact.workingHours')}
            </p>
            <Link to="/contacts">
              <Button size="lg" className="px-8 text-lg">
                {t('cta.button')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-scale-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-white/90 text-lg mb-8">
              {t('cta.subtitle')}
            </p>
            <Link to="/contacts">
              <Button size="lg" variant="secondary" className="px-8 text-lg shadow-floating">
                {t('cta.button')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;