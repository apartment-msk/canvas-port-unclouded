import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogSiteName?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: Record<string, any>[];
  locale?: string;
  localeAlternates?: string[];
  // For product type
  productPrice?: string;
  productCurrency?: string;
  productAvailability?: string;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://amazy-apart.ru/og-image.jpg',
  ogImageAlt,
  ogSiteName = 'Волшебно тут',
  type = 'website',
  structuredData = [],
  locale = 'ru_RU',
  localeAlternates = ['en_US', 'zh_CN'],
  productPrice,
  productCurrency,
  productAvailability
}: SEOProps) {
  const { t } = useTranslation();
  const fullTitle = `${title} | ${t('companyName')}`;
  const currentUrl = canonical || typeof window !== 'undefined' ? window.location.href : '';
  const imageAlt = ogImageAlt || description;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:locale" content={locale} />
      {localeAlternates.map((alt) => (
        <meta key={alt} property="og:locale:alternate" content={alt} />
      ))}

      {/* Product-specific meta tags */}
      {type === 'product' && productPrice && (
        <>
          <meta property="product:price:amount" content={productPrice} />
          <meta property="product:price:currency" content={productCurrency || 'RUB'} />
          {productAvailability && (
            <meta property="product:availability" content={productAvailability} />
          )}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
