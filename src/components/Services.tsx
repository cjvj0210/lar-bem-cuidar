import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Stethoscope, UserCircle, Scissors, Target, Calendar, Users, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { trackCTAClick, trackWhatsAppClick } from "@/lib/analytics";

const Services = () => {
  const whatsappLink = "https://wa.me/5517982123269?text=Olá! Gostaria de saber mais sobre os serviços de fisioterapia domiciliar.";
  
  const services = [
    {
      icon: UserCircle,
      title: "Fisioterapia Geriátrica",
      description: "Prevenção de quedas, fortalecimento muscular e manutenção da autonomia em idosos.",
      emoji: "🧓",
      link: "/servicos/fisioterapia-geriatrica"
    },
    {
      icon: Brain,
      title: "Fisioterapia Neurológica",
      description: "Tratamento para AVC, Parkinson, Alzheimer e outras condições que afetam o sistema nervoso.",
      emoji: "🧠",
      link: "/servicos/fisioterapia-neurologica"
    },
    {
      icon: Stethoscope,
      title: "Reabilitação Pós-Operatória",
      description: "Reabilitação de lesões e cirurgias ortopédicas (joelho, quadril, coluna).",
      emoji: "🦴",
      link: "/servicos/reabilitacao-pos-operatoria"
    },
    {
      icon: Heart,
      title: "Fisioterapia Respiratória",
      description: "Auxílio em doenças pulmonares crônicas ou pós-Covid, com foco em qualidade da respiração.",
      emoji: "🫁",
      link: "/servicos/fisioterapia-respiratoria"
    }
  ];

  const diferenciais = [
    {
      icon: Target,
      title: "Avaliação individual e plano personalizado",
      description: "Cada atendimento é único e planejado para suas necessidades"
    },
    {
      icon: Calendar,
      title: "Horários flexíveis conforme a rotina do paciente",
      description: "Atendo no horário que melhor se adapta à sua vida"
    },
    {
      icon: Users,
      title: "Comunicação clara com familiares",
      description: "Familiares sempre informados sobre evolução e cuidados"
    },
    {
      icon: Briefcase,
      title: "Equipamentos próprios e técnicas atualizadas",
      description: "Levo tudo o que preciso para um atendimento completo"
    }
  ];

  return (
    <div className="bg-cream">
      {/* Cabeçalho Introdutório */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-cream">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight animate-fade-in">
            Fisioterapia Domiciliar Barretos-SP: Atendimento Individualizado para Cada Necessidade
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
            Especialista em fisioterapia neurológica e geriátrica em Barretos-SP. Conheça os tipos de tratamento que ofereço no conforto da sua casa — sempre com foco em segurança, autonomia e qualidade de vida.
          </p>
        </div>
      </section>

      {/* Cards de Serviços */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-white animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-3xl">{service.emoji}</span>
                  </div>
                  <CardTitle className="text-2xl text-primary mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base text-foreground/70 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to={service.link}>
                    <Button 
                      variant="default" 
                      className="w-full"
                      onClick={() => trackCTAClick('Entenda Melhor', `services_${service.title}`)}
                      data-event="cta_click"
                      data-cta-text="Entenda Melhor"
                      data-cta-location={`services_${service.title}`}
                    >
                      Entenda Melhor
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => {
                      trackWhatsAppClick(`services_${service.title}`);
                      trackCTAClick('Agendar Avaliação', `services_${service.title}`);
                    }}
                    data-event="cta_click"
                    data-cta-text="Agendar Avaliação"
                    data-cta-location={`services_${service.title}`}
                    asChild
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      Agendar Avaliação
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center animate-fade-in">
            O que torna o atendimento único?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((item, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-cream animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2 text-sm leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-6 animate-fade-in">
            Tem dúvidas sobre qual serviço é o ideal?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Estou aqui para te orientar com carinho e responsabilidade.
          </p>
          <Button 
            size="lg" 
            className="min-w-[250px] animate-fade-in"
            style={{ animationDelay: "200ms" }}
            onClick={() => {
              trackWhatsAppClick('services_bottom_cta');
              trackCTAClick('Fale diretamente comigo', 'services_bottom');
            }}
            data-event="cta_click"
            data-cta-text="Fale diretamente comigo"
            data-cta-location="services_bottom"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Fale diretamente comigo
            </a>
          </Button>
          <p className="text-sm text-foreground/60 mt-4">
            Cada pessoa tem um ritmo. Meu papel é respeitá-lo com técnica e cuidado.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
