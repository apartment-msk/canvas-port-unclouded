import { useEffect, useRef } from "react";

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    scriptRef.current = script;
    document.head.appendChild(script);

    return () => {
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, [data]);

  return null;
}

export function generateOrganizationData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Home Reserve Rentals",
    "url": "https://homereserve.ru",
    "logo": "https://homereserve.ru/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-995-508-58-08",
      "contactType": "customer service",
      "availableLanguage": ["Russian", "English", "Chinese"]
    },
    "sameAs": [
      "https://wa.me/79955085808",
      "https://t.me/Volshebno_tyt"
    ]
  };
}

export function generateWebSiteData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Home Reserve Rentals",
    "url": "https://homereserve.ru",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://homereserve.ru/apartments?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateLocalBusinessData() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Home Reserve Rentals",
    "image": "https://homereserve.ru/hero-image.jpg",
    "@id": "https://homereserve.ru",
    "url": "https://homereserve.ru",
    "telephone": "+7-995-508-58-08",
    "priceRange": "5500₽ - 12000₽",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Moscow",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "55.7558",
      "longitude": "37.6176"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2500"
    }
  };
}

export function generateApartmentData(apartment: {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  guests: number;
  rating: number;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": apartment.title,
    "image": apartment.image,
    "description": apartment.description,
    "offers": {
      "@type": "Offer",
      "price": apartment.price,
      "priceCurrency": "RUB",
      "availability": "https://schema.org/InStock",
      "url": `https://homereserve.ru/apartments/${apartment.id}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": apartment.rating,
      "reviewCount": "150"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Moscow",
      "streetAddress": apartment.location,
      "addressCountry": "RU"
    }
  };
}

export function generateBreadcrumbData(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateArticleData(article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "author": {
      "@type": "Organization",
      "name": "Home Reserve Rentals"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Home Reserve Rentals",
      "logo": {
        "@type": "ImageObject",
        "url": "https://homereserve.ru/logo.png"
      }
    }
  };
}
