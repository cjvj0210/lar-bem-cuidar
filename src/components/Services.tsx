import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Stethoscope, UserCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: UserCircle,
      title: "Fisioterapia Geriátrica",
      description: "Tratamento especializado para idosos, focado em mobilidade, equilíbrio e prevenção de quedas.",
      benefits: ["Melhora da mobilidade", "Prevenção de quedas", "Independência funcional"]
    },
    {
      icon: Brain,
      title: "Fisioterapia Neurológica",
      description: "Reabilitação após AVC, Parkinson, Alzheimer e outras condições neurológicas.",
      benefits: ["Recuperação motora", "Coordenação", "Qualidade de vida"]
    },
    {
      icon: Heart,
      title: "Fisioterapia Respiratória",
      description: "Tratamento para doenças respiratórias crônicas e pós-operatório cardíaco ou pulmonar.",
      benefits: ["Melhora respiratória", "Redução de secreções", "Conforto respiratório"]
    },
    {
      icon: Stethoscope,
      title: "Fisioterapia Ortopédica",
      description: "Reabilitação pós-operatória de fraturas, próteses e lesões musculoesqueléticas.",
      benefits: ["Redução de dor", "Recuperação funcional", "Fortalecimento"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-primary mb-4">Serviços</h2>
          <p className="text-lg text-muted-foreground">
            Atendimento personalizado para cada necessidade, sempre no conforto 
            do seu lar com segurança e profissionalismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-soft transition-smooth hover:-translate-y-1 animate-scale-in border-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary/10"
                  onClick={scrollToContact}
                >
                  Agendar Avaliação
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
