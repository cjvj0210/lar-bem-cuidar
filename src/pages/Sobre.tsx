import About from "@/components/About";
import SEO from "@/components/SEO";

const Sobre = () => {
  return (
    <>
      <SEO 
        title="Sobre Roberta Rocha - Fisioterapeuta em Barretos-SP"
        description="Conheça Roberta Rocha, fisioterapeuta com 13 anos de experiência em atendimento domiciliar em Barretos-SP. Especialista em reabilitação geriátrica e neurológica."
        keywords="fisioterapeuta Barretos, Roberta Rocha fisioterapeuta, especialista em idosos Barretos-SP"
      />
      <div className="min-h-screen pt-20 animate-fade-in">
        <About />
      </div>
    </>
  );
};

export default Sobre;
