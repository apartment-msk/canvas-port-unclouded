import { useEffect } from "react";

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
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
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Moscow",
      "addressCountry": "RU"
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
    }
  };
}
