import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";

const Contato = () => {
  return (
    <>
      <SEO 
        title="Contato - Agende sua Avaliação Barretos-SP"
        description="Entre em contato e agende sua avaliação de fisioterapia domiciliar em Barretos-SP. Atendimento personalizado no conforto do seu lar."
        keywords="contato fisioterapeuta barretos, agendar fisioterapia domiciliar, whatsapp fisioterapeuta barretos"
        canonicalUrl="https://fisiorobertadomiciliar.com.br/contato"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contato" }
        ]}
      />
      <div className="min-h-screen pt-20 animate-fade-in">
        <Breadcrumb items={[{ label: "Contato" }]} />
        <Contact />
      </div>
    </>
  );
};

export default Contato;
