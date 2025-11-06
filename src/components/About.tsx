import { Award, Heart, Target } from "lucide-react";
import robertaPortrait from "@/assets/roberta-portrait.jpg";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl"></div>
            <img
              src={robertaPortrait}
              alt="Roberta Rocha - Fisioterapeuta"
              className="relative rounded-3xl shadow-soft w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-primary mb-2">Sobre Mim</h2>
              <h3 className="text-foreground">
                Roberta Rocha
              </h3>
              <p className="text-lg text-muted-foreground mt-2">
                Fisioterapeuta especializada em atendimento domiciliar
              </p>
            </div>

            <p className="text-muted-foreground">
              Há mais de 15 anos dedico minha vida a devolver movimento, autonomia 
              e bem-estar para quem mais precisa. Meu trabalho vai além da técnica: 
              é sobre <strong className="text-foreground">acolhimento, empatia e cuidado humanizado</strong>.
            </p>

            <p className="text-muted-foreground">
              Atendo pacientes em Barretos e região, levando tratamento especializado 
              para dentro do lar — um espaço seguro, familiar e confortável. Cada 
              sessão é planejada individualmente, respeitando limitações e celebrando 
              cada conquista.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Empatia</h4>
                <p className="text-sm text-muted-foreground">
                  Cada paciente é único
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Técnica</h4>
                <p className="text-sm text-muted-foreground">
                  Especialização contínua
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Autonomia</h4>
                <p className="text-sm text-muted-foreground">
                  Foco em resultados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
