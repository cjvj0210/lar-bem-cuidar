import { MapPin, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServiceArea = () => {
  const neighborhoods = [
    "Primavera",
    "City Barretos",
    "Jardim Botânico",
    "Tamboré",
    "Centro",
    "Jardim Eldorado",
    "Vila Planalto",
    "Jardim Progresso"
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Atendemos Você em Barretos-SP
          </h2>
          <p className="text-lg text-muted-foreground">
            Fisioterapia domiciliar em diversos bairros de Barretos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Map Visual Placeholder */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <CardContent className="p-12 text-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Raio de Atendimento
              </h3>
              <p className="text-lg text-muted-foreground mb-2">
                6km a partir do centro de Barretos
              </p>
              <p className="text-sm text-muted-foreground">
                Atendimento em toda a cidade
              </p>
            </CardContent>
          </Card>

          {/* Neighborhoods List */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Principais Bairros Atendidos:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {neighborhoods.map((neighborhood, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{neighborhood}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Não encontrou seu bairro? Entre em contato para confirmarmos o atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
