import Services from "@/components/Services";
import SEO from "@/components/SEO";

const Servicos = () => {
  return (
    <>
      <SEO 
        title="Serviços de Fisioterapia Domiciliar em Barretos-SP"
        description="Fisioterapia geriátrica, neurológica, ortopédica e respiratória em domicílio em Barretos-SP. Atendimento personalizado com equipamentos próprios."
        keywords="fisioterapia geriátrica Barretos, fisioterapia neurológica domiciliar, reabilitação pós-cirúrgica Barretos-SP"
      />
      <div className="min-h-screen pt-20 animate-fade-in">
        <Services />
      </div>
    </>
  );
};

export default Servicos;
