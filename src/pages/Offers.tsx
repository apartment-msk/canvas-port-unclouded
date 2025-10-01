import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Percent, Calendar, Users, Gift } from 'lucide-react';

const Offers = () => {
  const { t } = useTranslation();

  const offers = [
    {
      icon: Percent,
      badge: t('offers.popular'),
      title: t('offers.longStay.title'),
      description: t('offers.longStay.description'),
      discount: '15%',
      color: 'bg-gradient-luxury'
    },
    {
      icon: Calendar,
      badge: t('offers.seasonal'),
      title: t('offers.earlyBooking.title'),
      description: t('offers.earlyBooking.description'),
      discount: '10%',
      color: 'bg-gradient-warm'
    },
    {
      icon: Users,
      badge: t('offers.new'),
      title: t('offers.groupBooking.title'),
      description: t('offers.groupBooking.description'),
      discount: '20%',
      color: 'bg-gradient-luxury'
    },
    {
      icon: Gift,
      badge: t('offers.limited'),
      title: t('offers.firstBooking.title'),
      description: t('offers.firstBooking.description'),
      discount: '500₽',
      color: 'bg-gradient-warm'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('nav.offers')}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('offers.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-floating transition-all animate-slide-up hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full ${offer.color} flex items-center justify-center`}>
                    <offer.icon className="text-white" size={24} />
                  </div>
                  <Badge variant="default">{offer.badge}</Badge>
                </div>
                <CardTitle className="font-heading text-2xl text-foreground">
                  {offer.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {offer.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-4xl font-bold text-primary">{offer.discount}</span>
                  <span className="text-muted-foreground">{t('offers.discount')}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/apartments" className="w-full">
                  <Button className="w-full" size="lg">
                    {t('offers.viewApartments')}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-luxury rounded-lg p-12 animate-scale-in">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            {t('offers.ctaTitle')}
          </h2>
          <p className="text-white/90 text-lg mb-6">
            {t('offers.ctaSubtitle')}
          </p>
          <Link to="/contacts">
            <Button size="lg" variant="secondary" className="px-8">
              {t('cta.button')}
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Offers;
