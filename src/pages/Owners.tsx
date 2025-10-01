import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Users, Headphones } from 'lucide-react';

const Owners = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: TrendingUp,
      title: t('owners.benefits.income.title'),
      description: t('owners.benefits.income.description')
    },
    {
      icon: Shield,
      title: t('owners.benefits.protection.title'),
      description: t('owners.benefits.protection.description')
    },
    {
      icon: Users,
      title: t('owners.benefits.guests.title'),
      description: t('owners.benefits.guests.description')
    },
    {
      icon: Headphones,
      title: t('owners.benefits.support.title'),
      description: t('owners.benefits.support.description')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('owners.title')}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('owners.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-floating transition-all animate-slide-up hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-luxury flex items-center justify-center mb-4">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <CardTitle className="font-heading text-2xl text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-floating animate-scale-in bg-gradient-luxury">
            <CardContent className="p-12 text-center">
              <h2 className="font-heading text-3xl font-bold text-white mb-4">
                {t('owners.ctaTitle')}
              </h2>
              <p className="text-white/90 text-lg mb-8">
                {t('owners.ctaSubtitle')}
              </p>
              <Link to="/contacts">
                <Button size="lg" variant="secondary" className="px-8">
                  {t('owners.ctaButton')}
                </Button>
              </Link>
            </CardContent>
          </Card>

          <div className="mt-12 bg-card rounded-lg p-8 shadow-card animate-slide-up animation-delay-200">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-foreground text-center">
              {t('owners.howItWorks')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t('owners.step1.title')}</h4>
                  <p className="text-muted-foreground text-sm">{t('owners.step1.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t('owners.step2.title')}</h4>
                  <p className="text-muted-foreground text-sm">{t('owners.step2.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t('owners.step3.title')}</h4>
                  <p className="text-muted-foreground text-sm">{t('owners.step3.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Owners;
