import { Shield, Clock, XCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Guarantees = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Primeira Avaliação Sem Compromisso",
      description: "Conheça meu trabalho antes de se comprometer"
    },
    {
      icon: Clock,
      title: "Resposta em até 3 Horas",
      description: "Atendimento rápido pelo WhatsApp"
    },
    {
      icon: XCircle,
      title: "Cancelamento Gratuito",
      description: "Cancele até 24h antes sem custo"
    },
    {
      icon: CheckCircle2,
      title: "100% Satisfação Garantida",
      description: "Seu bem-estar é minha prioridade"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Garantias que Você Pode Confiar
          </h2>
          <p className="text-lg text-muted-foreground">
            Sem burocracia, sem filas. Agendamento simples em 2 cliques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="border-2 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-6 text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">
                  {guarantee.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {guarantee.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
