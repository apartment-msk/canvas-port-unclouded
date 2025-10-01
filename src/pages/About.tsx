import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Award, Shield, Star, Users, Home } from 'lucide-react';
import guestsChoiceAward from '@/assets/guests-choice-award.png';
import superhostYandex from '@/assets/superhost-yandex-travel.png';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, value: '1000+', label: t('about.stats.guests') },
    { icon: Home, value: '50+', label: t('about.stats.apartments') },
    { icon: Star, value: '4.9', label: t('about.stats.rating') },
    { icon: Award, value: '10+', label: t('about.stats.awards') }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-floating transition-all animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-luxury mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-16 animate-slide-up">
            <p className="leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="leading-relaxed">
              {t('about.paragraph2')}
            </p>
            <p className="leading-relaxed">
              {t('about.paragraph3')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up animation-delay-200">
            <div className="bg-card rounded-lg p-8 shadow-card text-center">
              <img src={guestsChoiceAward} alt="Guests' Choice Award" className="h-32 w-auto mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                {t('awards.guestsChoice')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('about.award1Description')}
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-card text-center">
              <img src={superhostYandex} alt="Superhost Yandex Travel" className="h-32 w-auto mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                {t('awards.superhostYandex')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('about.award2Description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
