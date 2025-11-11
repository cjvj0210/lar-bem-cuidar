import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";

const Contato = () => {
  return (
    <>
      <SEO 
        title="Contato - Fisioterapia Domiciliar em Barretos | Roberta Rocha"
        description="Entre em contato com Roberta Rocha Fisioterapia Domiciliar em Barretos-SP. Resposta em até 3 horas. WhatsApp: (17) 98212-3269. Agende sua avaliação!"
        keywords="contato fisioterapeuta barretos, agendar fisioterapia domiciliar, whatsapp fisioterapeuta barretos, orçamento fisioterapia barretos"
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
