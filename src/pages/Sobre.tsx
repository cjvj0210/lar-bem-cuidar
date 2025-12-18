import About from "@/components/About";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";

const Sobre = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Roberta Rocha",
    "jobTitle": "Fisioterapeuta",
    "worksFor": {
      "@type": "Organization",
      "name": "Roberta Rocha Fisioterapia Domiciliar"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Barretos",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "telephone": "+55-17-98212-3269",
    "url": "https://fisiorobertadomiciliar.com",
    "sameAs": [
      "https://www.instagram.com/fisiorobertadomiciliar/",
      "https://www.facebook.com/profile.php?id=61553900038660"
    ],
    "alumniOf": "Centro Universitário Unifafibe",
    "knowsAbout": ["Fisioterapia Geriátrica", "Fisioterapia Neurológica", "Reabilitação"],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": "CREFITO"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Sobre Roberta Rocha - Fisioterapeuta Barretos-SP"
        description="Conheça Roberta Rocha, fisioterapeuta com 13 anos de experiência em Barretos-SP. Especialista em atendimento domiciliar para idosos e reabilitação. Agende sua avaliação!"
        keywords="fisioterapeuta barretos, roberta rocha fisioterapeuta, especialista em idosos barretos, fisioterapia domiciliar"
        canonicalUrl="https://fisiorobertadomiciliar.com/sobre"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sobre" }
        ]}
        schema={personSchema}
      />
      <div className="min-h-screen pt-20 animate-fade-in">
        <Breadcrumb items={[{ label: "Sobre" }]} />
        <About />
      </div>
    </>
  );
};

export default Sobre;
