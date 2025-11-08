import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";

const Depoimentos = () => {
  return (
    <>
      <SEO 
        title="Depoimentos - Fisioterapia Domiciliar em Barretos-SP"
        description="Leia depoimentos reais de pacientes e familiares sobre a fisioterapia domiciliar em Barretos-SP. Histórias de recuperação e qualidade de vida."
        keywords="depoimentos fisioterapia Barretos, avaliações fisioterapeuta domiciliar, testemunhos pacientes Barretos-SP"
      />
      <div className="min-h-screen pt-20 animate-fade-in">
        <Testimonials />
      </div>
    </>
  );
};

export default Depoimentos;
