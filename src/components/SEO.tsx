import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schema?: Record<string, any> | Record<string, any>[];
  breadcrumbs?: Array<{ name: string; url?: string }>;
}

const SEO = ({ title, description, keywords, canonicalUrl, ogImage, schema, breadcrumbs }: SEOProps) => {
  const siteName = "Físio Roberta Domiciliar";
  const siteUrl = "https://fisiorobertadomiciliar.com";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const defaultImage = `${siteUrl}/logo.png`;
  const finalCanonicalUrl = canonicalUrl || siteUrl;

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      ...(crumb.url && { "item": `${siteUrl}${crumb.url}` })
    }))
  } : null;

  // Schema LocalBusiness/Physiotherapist principal
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Physiotherapist",
    "name": "Roberta Rocha - Fisioterapia Domiciliar",
    "alternateName": "Físio Roberta Domiciliar",
    "description": "Fisioterapia domiciliar premium em Barretos-SP. Especializada em idosos, reabilitação neurológica, ortopédica e pós-operatória no conforto do seu lar.",
    "image": defaultImage,
    "url": siteUrl,
    "telephone": "+5517982123269",
    
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Barretos",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-20.5577",
      "longitude": "-48.5682"
    },
    "areaServed": {
      "@type": "City",
      "name": "Barretos",
      "containedIn": {
        "@type": "State",
        "name": "São Paulo"
      }
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/fisiorobertadomiciliar/",
      "https://www.facebook.com/profile.php?id=61553900038660"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "13",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Fisioterapia Domiciliar",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fisioterapia Geriátrica",
            "description": "Prevenção de quedas, fortalecimento muscular e manutenção da autonomia em idosos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fisioterapia Neurológica",
            "description": "Tratamento para AVC, Parkinson, Alzheimer e outras condições neurológicas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fisioterapia Ortopédica",
            "description": "Reabilitação de lesões e cirurgias ortopédicas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fisioterapia Respiratória",
            "description": "Auxílio em doenças pulmonares crônicas"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Roberta Rocha" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="BR-SP" />
      <meta name="geo.placename" content="Barretos" />
      <meta name="geo.position" content="-20.5577;-48.5682" />
      <meta name="ICBM" content="-20.5577, -48.5682" />
      
      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {/* Additional Schema(s) if provided */}
      {schema && (
        Array.isArray(schema) ? (
          schema.map((s, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(s)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )
      )}
    </Helmet>
  );
};

export default SEO;
