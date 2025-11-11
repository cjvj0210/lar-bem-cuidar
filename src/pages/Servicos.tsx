import Services from "@/components/Services";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";

const Servicos = () => {
  return (
    <>
      <SEO 
        title="Serviços de Fisioterapia Domiciliar Barretos-SP"
        description="Fisioterapia geriátrica, neurológica, ortopédica e respiratória em domicílio em Barretos-SP. Atendimento personalizado com equipamentos próprios."
        keywords="fisioterapia geriátrica barretos, fisioterapia neurológica barretos, reabilitação pós-operatória barretos, fisioterapia ortopédica domiciliar"
        canonicalUrl="https://fisiorobertadomiciliar.com.br/servicos"
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
