import Contact from "@/components/Contact";
import SEO from "@/components/SEO";

const Contato = () => {
  return (
    <>
      <SEO 
        title="Contato - Fisioterapia Domiciliar em Barretos-SP"
        description="Entre em contato para agendar uma avaliação de fisioterapia domiciliar em Barretos-SP. Atendimento personalizado para idosos e pacientes em reabilitação."
        keywords="agendar fisioterapia Barretos, contato fisioterapeuta domiciliar, avaliação fisioterapia em casa Barretos-SP"
      />
      <div className="min-h-screen pt-20 animate-fade-in">
        <Contact />
      </div>
    </>
  );
};

export default Contato;
