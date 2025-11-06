import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "78 anos",
      text: "Depois do AVC, achei que nunca mais voltaria a andar sozinha. A Roberta me ajudou com tanta paciência e carinho que hoje consigo caminhar pela casa. Ela é como uma filha para mim.",
      condition: "Recuperação pós-AVC"
    },
    {
      name: "Carlos Santos",
      age: "Filho de paciente, 52 anos",
      text: "Minha mãe tem Parkinson e estava muito debilitada. A fisioterapia em casa trouxe mais segurança para ela e paz para toda a família. A Roberta é excepcional, muito profissional e humana.",
      condition: "Fisioterapia para Parkinson"
    },
    {
      name: "Ana Costa",
      age: "71 anos",
      text: "Fiz cirurgia no quadril e precisava de reabilitação. Não conseguia sair de casa, então a fisioterapia domiciliar foi perfeita. Hoje estou totalmente recuperada graças ao tratamento da Roberta.",
      condition: "Pós-operatório ortopédico"
    }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-primary mb-4">Depoimentos</h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de pacientes e familiares que reconquistaram 
            autonomia e bem-estar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-soft transition-smooth animate-scale-in border-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 space-y-4">
                <Quote className="w-10 h-10 text-primary/30" />
                
                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                  <p className="text-xs text-primary mt-1">{testimonial.condition}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
