import { Card, CardContent } from "@/components/ui/card";
import { Award, Stethoscope, Clock, TrendingUp } from "lucide-react";

const WhyChooseRoberta = () => {
  const benefits = [
    {
      icon: Award,
      title: "13 Anos de Experiência em Barretos",
      description: "Mais de uma década cuidando de pacientes com dedicação e profissionalismo na região."
    },
    {
      icon: Stethoscope,
      title: "Equipamentos Profissionais Inclusos",
      description: "Levo todos os equipamentos necessários para um atendimento completo e eficaz."
    },
    {
      icon: Clock,
      title: "Atendimento Humanizado de 60 Minutos",
      description: "Sessões completas com tempo adequado para cuidado personalizado e atencioso."
    },
    {
      icon: TrendingUp,
      title: "98% de Satisfação dos Pacientes",
      description: "Resultados comprovados e reconhecimento de pacientes e familiares."
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Por Que Escolher Roberta?
          </h2>
          <p className="text-lg text-muted-foreground">
            Cuidado profissional que faz a diferença na sua recuperação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-elegant transition-smooth hover:-translate-y-1 text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseRoberta;
