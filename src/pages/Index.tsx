import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchWidget } from '@/components/SearchWidget';
import { StructuredData, generateOrganizationData, generateWebSiteData, generateLocalBusinessData } from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Shield, Star, TrendingUp, ChevronLeft, ChevronRight, Phone, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
      <StructuredData data={generateOrganizationData()} />
      <StructuredData data={generateWebSiteData()} />
      <StructuredData data={generateLocalBusinessData()} />
      <Header />

      {/* Hero Section with Booking */}
      <motion.section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              className="text-white mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                {t('hero.title')}
                <span className="block text-luxury">{t('hero.subtitle')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {t('hero.description')}
              </p>
            </motion.div>

            {/* Integrated Search Widget */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <SearchWidget className="bg-transparent rounded-2xl p-8 max-w-4xl mx-auto" />
            </motion.div>

            {/* Quick Contact Section */}
            <motion.div
              className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-luxury" />
                <a
                  href="tel:+79955085808"
                  className="text-lg font-medium hover:text-luxury transition-colors"
                >
                  +7 995 508 58 08
                </a>
              </div>

              <div className="hidden sm:block w-px h-8 bg-white/30"></div>

              <div className="flex items-center space-x-4">
                <a
                  href="https://wa.me/79955085808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-luxury transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-green-400" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://t.me/Volshebno_tyt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-luxury transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-blue-400" />
                  <span>Telegram</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Services Section */}
      <motion.section
        className="py-20 bg-background"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 bg-gradient-warm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('features.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg bg-background shadow-card hover:shadow-floating transition-all duration-300 hover-scale"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Awards Section with Carousel */}
      <motion.section
        className="py-20 bg-surface"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('awards.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('awards.subtitle')}
            </p>
          </motion.div>

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
      </motion.section>

      {/* Contact Info Section */}
      <motion.section
        className="py-20 bg-background"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-card rounded-lg shadow-card">
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                  {t('contact.phone')}
                </h3>
                <a href="tel:+79955085808" className="text-primary text-xl hover:underline">
                  +7 995 508 58 08
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
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-luxury"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-white/90 text-lg mb-8">
              {t('cta.subtitle')}
            </p>
            <Link to="/contacts">
              <Button size="lg" variant="secondary" className="px-8 text-lg shadow-floating">
                {t('cta.button')}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;
