import { Link } from "react-router-dom";
import { Heart, Brain, Home, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import robertaImage from "@/assets/roberta-profile.jpg";
import { trackWhatsAppClick } from "@/lib/analytics";

const About = () => {
  const whatsappLink = "https://wa.me/5517982123269?text=Olá! Gostaria de saber mais sobre o atendimento de fisioterapia domiciliar.";

  return (
    <div className="bg-cream">
      {/* Header Emocional */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-cream">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Cuidar é o que me move.
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Sou Roberta Rocha, fisioterapeuta especializada em atendimento domiciliar para idosos.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <img
                src={robertaImage}
                alt="Roberta Rocha - Fisioterapeuta especializada em atendimento domiciliar para idosos em Barretos-SP, com 13 anos de experiência em reabilitação geriátrica e neurológica"
                loading="lazy" className="rounded-xl shadow-lg w-full object-cover"
                loading="lazy"
                width="500"
                height="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação Pessoal */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 animate-fade-in">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Desde o início da minha carreira em Barretos-SP, percebi que a fisioterapia vai muito além de exercícios. 
              Trata-se de devolver movimento, autonomia e qualidade de vida a quem dedicou uma vida 
              inteira a cuidar dos outros.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Acredito em um cuidado técnico, mas principalmente humano — feito com escuta, paciência 
              e presença. Cada sessão é planejada pensando nas necessidades únicas de cada pessoa, 
              respeitando seu ritmo e suas histórias.
            </p>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Minha missão
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Ajudar cada paciente a reconquistar sua independência com segurança, empatia e confiança.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-cream animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Empatia e respeito
              </h3>
              <p className="text-foreground/70">
                Cada pessoa tem sua história e seu tempo. Respeito e acolhimento estão no centro do cuidado.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-cream animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Conhecimento técnico atualizado
              </h3>
              <p className="text-foreground/70">
                Formação contínua e prática baseada em evidências para os melhores resultados.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-cream animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Atendimento humanizado no lar
              </h3>
              <p className="text-foreground/70">
                O conforto e segurança da sua casa, com o cuidado profissional que você merece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formação e Experiência */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Formação e experiência
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                Graduada em Fisioterapia, com especialização em reabilitação geriátrica, neurológica e ortopédica. 
                Com 13 anos de experiência, atuo com foco em fisioterapia domiciliar e prevenção de quedas.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                Acredito que envelhecer bem é possível — com movimento, autonomia e cuidado diário. 
                Cada atendimento é uma oportunidade de fazer a diferença na vida de alguém.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-cream">
                <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Neurológica</h4>
                  <p className="text-sm text-foreground/70">AVC, Parkinson, sequelas neurológicas</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-cream">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Geriátrica</h4>
                  <p className="text-sm text-foreground/70">Prevenção de quedas, mobilidade</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-cream">
                <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Ortopédica</h4>
                  <p className="text-sm text-foreground/70">Reabilitação pós-cirúrgica, dores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco Emocional */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto max-w-3xl text-center animate-fade-in">
          <blockquote className="text-2xl md:text-3xl font-medium text-primary leading-relaxed italic">
            "Cuidar é um gesto que transforma.<br />
            Quando o corpo se move, a alma se alegra."
          </blockquote>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-6 animate-fade-in">
            Quer saber mais sobre meu trabalho?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Button asChild size="lg" className="min-w-[200px]">
              <Link to="/servicos">Ver serviços oferecidos</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[200px]">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('about_cta')}
              >
                Falar com Roberta
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
