import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { generateLocalBusinessData, generateBreadcrumbData } from '@/components/StructuredData';

const Contacts = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Phone,
      title: t('contacts.phone'),
      content: '+7 (926) 547-55-57',
      link: 'tel:+79265475557'
    },
    {
      icon: Mail,
      title: t('contacts.email'),
      content: 'info@homereserve.ru',
      link: 'mailto:info@homereserve.ru'
    },
    {
      icon: MapPin,
      title: t('contacts.address'),
      content: t('footer.address'),
      link: null
    },
    {
      icon: Clock,
      title: t('contacts.hours'),
      content: t('contacts.hoursContent'),
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Контакты - Связь с Home Reserve Rentals"
        description="Свяжитесь с нами по телефону +7 (926) 547-55-57 или email info@homereserve.ru. Работаем ежедневно 9:00-21:00. Быстрая поддержка 24/7."
        keywords="контакты, телефон аренда квартир, связаться с нами, поддержка клиентов"
        structuredData={[
          generateLocalBusinessData(),
          generateBreadcrumbData([
            { name: "Главная", url: "https://homereserve.ru/" },
            { name: "Контакты", url: "https://homereserve.ru/contacts" }
          ])
        ]}
      />
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: t('navigation.contacts') }]} />
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('navigation.contacts')}
            </h1>
            <p className="text-muted-foreground text-lg">
              {t('contacts.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-floating transition-all animate-slide-up hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-foreground">
                    <div className="w-10 h-10 rounded-full bg-gradient-luxury flex items-center justify-center">
                      <method.icon className="text-white" size={20} />
                    </div>
                    <span>{method.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {method.link ? (
                    <a
                      href={method.link}
                      className="text-lg text-primary hover:underline"
                    >
                      {method.content}
                    </a>
                  ) : (
                    <p className="text-lg text-muted-foreground">{method.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-floating animate-scale-in">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-foreground">
                {t('contacts.formTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                {t('contacts.formDescription')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
