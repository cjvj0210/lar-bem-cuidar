import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative pt-24 min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Cuidado especializado no conforto do seu lar
              </span>
            </div>

            <h1 className="text-foreground">
              Fisioterapia domiciliar para{" "}
              <span className="text-primary">recuperar movimento</span> e{" "}
              <span className="text-primary">autonomia</span>
            </h1>

            <p className="text-lg text-muted-foreground">
              Atendimento personalizado para idosos e pacientes em reabilitação. 
              Com técnica, empatia e dedicação, ajudo você ou seu familiar a 
              reconquistar qualidade de vida em casa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={scrollToContact}
              >
                Agendar Avaliação
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10"
                onClick={() => {
                  const element = document.getElementById("sobre");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Conhecer Roberta
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Pacientes Atendidos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="Fisioterapeuta Roberta atendendo paciente idosa em casa"
              className="relative rounded-3xl shadow-soft w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
