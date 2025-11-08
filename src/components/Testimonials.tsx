import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Heart, MapPin } from "lucide-react";

const Testimonials = () => {
  const whatsappLink = "https://wa.me/5517991527125?text=Olá! Gostaria de agendar uma avaliação.";

  const testimonials = [
    {
      name: "Marina",
      relation: "filha da Dona Tereza",
      age: "82 anos",
      location: "Barretos-SP",
      text: "A Roberta ajudou minha mãe a voltar a andar com segurança. O cuidado foi além do físico — foi humano mesmo.",
    },
    {
      name: "Seu Alfredo",
      relation: "paciente pós-AVC",
      age: "74 anos",
      location: "Barretos-SP",
      text: "Depois do AVC, achei que não voltaria a caminhar. Com paciência e técnica, ela me mostrou que sim.",
    },
    {
      name: "João Pedro",
      relation: "neto da Dona Alzira",
      age: "88 anos",
      location: "Barretos-SP",
      text: "Fisioterapia em casa nos trouxe paz. Saber que minha avó está bem cuidada faz toda a diferença.",
    },
    {
      name: "Carlos Santos",
      relation: "filho de paciente",
      age: "52 anos",
      location: "Barretos-SP",
      text: "Minha mãe tem Parkinson e estava muito debilitada. A fisioterapia em casa trouxe mais segurança para ela e paz para toda a família. A Roberta é excepcional, muito profissional e humana.",
    },
    {
      name: "Ana Costa",
      relation: "paciente pós-cirurgia",
      age: "71 anos",
      location: "Barretos-SP",
      text: "Fiz cirurgia no quadril e precisava de reabilitação. Não conseguia sair de casa, então a fisioterapia domiciliar foi perfeita. Hoje estou totalmente recuperada graças ao tratamento da Roberta.",
    },
    {
      name: "Dona Cecília",
      relation: "paciente geriátrica",
      age: "85 anos",
      location: "Barretos-SP",
      text: "Achei que minha idade não permitia mais melhorias, mas a Roberta me provou o contrário. Hoje me sinto mais forte e independente.",
    },
  ];

  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <h1 className="text-primary mb-6">Histórias que movem o coração.</h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Conheça relatos de pacientes e familiares que encontraram mais movimento, 
            autonomia e esperança com o cuidado em casa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-soft transition-smooth animate-scale-in border-border/50 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-6 px-6 space-y-5">
                <Quote className="w-12 h-12 text-primary/20" strokeWidth={1.5} />
                
                <p className="text-foreground/90 text-lg leading-relaxed italic min-h-[120px]">
                  "{testimonial.text}"
                </p>

                <div className="pt-5 border-t border-border space-y-2">
                  <p className="font-semibold text-foreground text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.relation}, {testimonial.age}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-primary/70">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-muted/30 rounded-2xl p-10 md:p-16 text-center mb-20 animate-fade-in border border-border/50">
          <div className="max-w-3xl mx-auto space-y-6">
            <Heart className="w-16 h-16 text-primary mx-auto" strokeWidth={1.5} />
            <h3 className="text-primary text-2xl md:text-3xl">
              Mais de 250 pacientes atendidos com carinho e técnica ao longo de 13 anos.
            </h3>
            <p className="text-lg text-muted-foreground italic">
              "Cada atendimento é único — e cada história importa."
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto animate-fade-in bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-10 md:p-12 border border-primary/10">
          <h3 className="text-2xl md:text-3xl text-foreground mb-4">
            Pronto para escrever sua própria história?
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Será um prazer cuidar de você ou de quem você ama.
          </p>
          <Button 
            asChild
            size="lg"
            className="text-base px-8 py-6 h-auto shadow-soft hover:shadow-lg transition-all"
          >
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar avaliação
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
