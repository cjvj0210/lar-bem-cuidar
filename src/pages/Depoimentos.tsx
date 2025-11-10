import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";

const Depoimentos = () => {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Maria Silva"
        },
        "reviewBody": "Minha mãe de 82 anos recuperou a mobilidade após o AVC graças ao trabalho da Roberta. Profissional atenciosa, técnica e muito humana."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Carlos Santos"
        },
        "reviewBody": "Minha mãe com Parkinson melhorou muito com os exercícios. A Roberta trata com carinho e respeito."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Ana Paula Mendes"
        },
        "reviewBody": "Excelente profissional! Meu pai se recuperou muito bem da cirurgia de quadril. Recomendo!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "João Pereira"
        },
        "reviewBody": "Atendimento humanizado e eficaz. Minha esposa voltou a caminhar com segurança."
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Depoimentos - Fisioterapia Domiciliar Barretos-SP"
        description="Leia depoimentos reais de pacientes e familiares sobre a fisioterapia domiciliar em Barretos-SP. Histórias de recuperação e qualidade de vida."
        keywords="depoimentos fisioterapia barretos, avaliações fisioterapeuta domiciliar, testemunhos pacientes barretos"
        canonicalUrl="https://fisiorobertadomiciliar.com.br/depoimentos"
        schema={reviewsSchema}
      />
      <div className="min-h-screen pt-20 animate-fade-in">
        <Breadcrumb items={[{ label: "Depoimentos" }]} />
        <Testimonials />
      </div>
    </>
  );
};

export default Depoimentos;
