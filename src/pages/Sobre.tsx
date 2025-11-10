import About from "@/components/About";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";

const Sobre = () => {
  return (
    <>
      <SEO 
        title="Sobre Roberta Rocha - Fisioterapeuta Barretos-SP"
        description="Conheça Roberta Rocha, fisioterapeuta com 13 anos de experiência em atendimento domiciliar em Barretos-SP. Especialista em reabilitação geriátrica e neurológica."
        keywords="fisioterapeuta barretos, roberta rocha fisioterapeuta, especialista em idosos barretos, fisioterapia domiciliar"
        canonicalUrl="https://fisiorobertadomiciliar.com.br/sobre"
      />
      <div className="min-h-screen pt-20 animate-fade-in">
        <Breadcrumb items={[{ label: "Sobre" }]} />
        <About />
      </div>
    </>
  );
};

export default Sobre;
