import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ApartmentCard from '@/components/ApartmentCard';
import apartment1 from '@/assets/apartment-1.jpg';
import apartment2 from '@/assets/apartment-2.jpg';
import apartment3 from '@/assets/apartment-3.jpg';

const Apartments = () => {
  const { t } = useTranslation();

  const apartments = [
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('nav.apartments')}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {t('featuredApartments.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apartment, index) => (
            <div
              key={apartment.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ApartmentCard {...apartment} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Apartments;
