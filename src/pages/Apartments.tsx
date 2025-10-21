import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { generateBreadcrumbData } from '@/components/StructuredData';
import { ListWidget } from '@/components/ListWidget';

const Apartments = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Каталог апартаментов для аренды в Москве"
        description="Выберите идеальные апартаменты из нашего каталога. Квартиры от 5500₽ в сутки в центре Москвы с современным ремонтом, WiFi и полным оснащением."
        keywords="каталог квартир, аренда жилья москва, апартаменты в центре, снять квартиру недорого"
        structuredData={[
          generateBreadcrumbData([
            { name: "Главная", url: "https://homereserve.ru/" },
            { name: "Апартаменты", url: "https://homereserve.ru/apartments" }
          ])
        ]}
      />
      <Header />

      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={[{ label: t('navigation.apartments') }]} />
        <div className="mb-12 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('navigation.apartments')}
          </h1>
        </div>

        <ListWidget className="w-full" />
      </div>

      <Footer />
    </div>
  );
};

export default Apartments;
