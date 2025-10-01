import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ApartmentCard from '@/components/ApartmentCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Shield, Star, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/apartment-1.jpg';
import apartment1 from '@/assets/apartment-1.jpg';
import apartment2 from '@/assets/apartment-2.jpg';
import apartment3 from '@/assets/apartment-3.jpg';
import guestsChoiceAward from '@/assets/guests-choice-award.png';
import superhostYandex from '@/assets/superhost-yandex-travel.png';
import certificateSilver from '@/assets/certificate-silver-2024.jpg';

const Index = () => {
  const { t } = useTranslation();

  const featuredApartments = [
    {
      id: '1',
      image: apartment1,
      title: t('apartments.apt1.title'),
      address: t('apartments.apt1.address'),
      guests: 4,
      rooms: 2,
      price: '8 500 ₽',
      badges: [t('badges.superhost')]
    },
    {
      id: '2',
      image: apartment2,
      title: t('apartments.apt2.title'),
      address: t('apartments.apt2.address'),
      guests: 6,
      rooms: 3,
      price: '12 000 ₽',
      badges: [t('badges.new')]
    },
    {
      id: '3',
      image: apartment3,
      title: t('apartments.apt3.title'),
      address: t('apartments.apt3.address'),
      guests: 3,
      rooms: 1,
      price: '6 500 ₽',
      badges: [t('badges.popular')]
    }
  ];

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Featured Apartments */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('featuredApartments.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('featuredApartments.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredApartments.map((apartment, index) => (
              <div
                key={apartment.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ApartmentCard {...apartment} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/apartments">
              <Button size="lg" variant="outline" className="px-8">
                {t('featuredApartments.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-card hover:shadow-floating transition-all hover-scale">
              <img src={guestsChoiceAward} alt="Guests' Choice Award" className="h-32 w-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold text-center text-foreground">
                {t('awards.guestsChoice')}
              </h3>
            </div>

            <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-card hover:shadow-floating transition-all hover-scale">
              <img src={superhostYandex} alt="Superhost Yandex Travel" className="h-32 w-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold text-center text-foreground">
                {t('awards.superhostYandex')}
              </h3>
            </div>

            <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-card hover:shadow-floating transition-all hover-scale">
              <img src={certificateSilver} alt="Silver Certificate 2024" className="h-32 w-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold text-center text-foreground">
                {t('awards.silverCertificate')}
              </h3>
            </div>
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