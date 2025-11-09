import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEO = ({ title, description, keywords, canonicalUrl, ogImage }: SEOProps) => {
  const siteName = "Físio Roberta Domiciliar";
  const fullTitle = `${title} | ${siteName}`;
  const defaultImage = "/logo.png";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage || defaultImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Físio Roberta Domiciliar",
          "image": defaultImage,
          "description": "Fisioterapia domiciliar especializada em Barretos-SP. Atendimento personalizado e exclusivo para idosos, reabilitação neurológica, ortopédica e respiratória no conforto do seu lar.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Barretos",
            "addressRegion": "SP",
            "addressCountry": "BR"
          },
          "areaServed": {
            "@type": "City",
            "name": "Barretos",
            "containedIn": {
              "@type": "State",
              "name": "São Paulo"
            }
          },
          "telephone": "+5517982123269",
          "priceRange": "$$",
          "openingHours": "Mo-Fr 07:00-19:00, Sa 08:00-12:00",
          "sameAs": [
            "https://www.instagram.com/fisiorobertadomiciliar/",
            "https://www.facebook.com/profile.php?id=61553900038660"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
