import Services from "@/components/Services";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";

const Servicos = () => {
  return (
    <>
      <SEO 
        title="Serviços de Fisioterapia Domiciliar Barretos-SP"
        description="Serviços de fisioterapia domiciliar em Barretos-SP: geriátrica, neurológica, pós-operatória e respiratória. Atendimento personalizado. Agende sua avaliação!"
        keywords="fisioterapia geriátrica barretos, fisioterapia neurológica barretos, reabilitação pós-operatória barretos, fisioterapia ortopédica domiciliar"
        canonicalUrl="https://fisiorobertadomiciliar.com/servicos"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Serviços" }
        ]}
      />
      <div className="min-h-screen pt-20 animate-fade-in">
        <Breadcrumb items={[{ label: "Serviços" }]} />
        <Services />
      </div>
    </>
  );
};

export default Servicos;
