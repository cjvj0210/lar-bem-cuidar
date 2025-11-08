import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Brain, Target, Award, UserCircle, Stethoscope, Phone, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import heroImage from "@/assets/treatment-elderly-band.jpg";
import robertaPortrait from "@/assets/roberta-profile.jpg";
import treatmentImage1 from "@/assets/treatment-balance-outdoor.jpg";
import treatmentImage2 from "@/assets/treatment-home-exercise.jpg";

const Home = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      <SEO 
        title="Fisioterapia Domiciliar em Barretos-SP"
        description="Fisioterapeuta especializada em atendimento domiciliar para idosos em Barretos-SP. 13 anos de experiência em reabilitação neurológica, geriátrica e ortopédica."
        keywords="fisioterapia domiciliar Barretos, fisioterapeuta para idosos Barretos, fisioterapia em casa Barretos-SP, reabilitação domiciliar"
      />
      {/* Hero Section */}
      <section className="relative pt-24 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Aqui o cuidado vai além do tratamento
                </span>
              </div>

              <h1 className="text-foreground">
                Fisioterapia domiciliar em Barretos-SP:{" "}
                <span className="text-primary">cuidado profissional no conforto do seu lar</span>
              </h1>

              <p className="text-lg text-muted-foreground">
                Atendimento especializado para quem você ama, em Barretos-SP. 
                Cada passo respeita o seu ritmo, com técnica e carinho.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
                  onClick={() => window.open("https://wa.me/5517982123269", "_blank")}
                >
                  Agende uma Avaliação
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link to="/sobre">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary/10"
                  >
                    Conhecer Roberta
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-primary">13</p>
                  <p className="text-sm text-muted-foreground">Anos de Experiência</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">250+</p>
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
                alt="Fisioterapeuta Roberta Rocha atendendo paciente idosa com exercícios de fortalecimento em domicílio em Barretos-SP"
                className="relative rounded-3xl shadow-soft w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Valores */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary mb-4">Mais que um atendimento, um cuidado humano</h2>
            <p className="text-lg text-muted-foreground">
              Vamos caminhar juntos nessa jornada, com respeito, dedicação e técnica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-soft transition-smooth text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Empatia no centro do processo
                </h3>
                <p className="text-muted-foreground">
                  Cada pessoa é única, e o atendimento também precisa ser.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-soft transition-smooth text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Técnica e atualização constante
                </h3>
                <p className="text-muted-foreground">
                  Conhecimento científico aliado à experiência prática.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-soft transition-smooth text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Atendimento individualizado em casa
                </h3>
                <p className="text-muted-foreground">
                  No ambiente familiar, onde você se sente seguro e acolhido.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mini-bio com Foto */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl"></div>
              <img
                src={robertaPortrait}
                alt="Roberta Rocha - Fisioterapeuta especializada em atendimento domiciliar em Barretos-SP com 13 anos de experiência"
                className="relative rounded-3xl shadow-soft w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-6 animate-fade-in order-1 lg:order-2">
              <h2 className="text-primary">Olá, sou a Roberta</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou fisioterapeuta apaixonada por devolver movimento e autonomia às 
                pessoas que cuidaram de tudo por uma vida inteira.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com 13 anos de experiência, levo tratamento especializado para dentro das 
                casas em Barretos-SP. Acredito que o cuidado verdadeiro acontece 
                quando unimos técnica, empatia e respeito pelo tempo de cada pessoa.
              </p>
              <Link to="/sobre">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10"
                >
                  Conheça minha história
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco de Serviços Resumido */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary mb-4">Como posso te ajudar?</h2>
            <p className="text-lg text-muted-foreground">
              Tratamentos especializados que respeitam suas necessidades e limitações.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:shadow-soft transition-smooth hover:-translate-y-1 text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <UserCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Fisioterapia Geriátrica
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Mobilidade e equilíbrio para uma vida mais ativa
                </p>
                <Link to="/servicos">
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary hover:bg-primary/10"
                  >
                    Ver detalhes
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-soft transition-smooth hover:-translate-y-1 text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Fisioterapia Neurológica
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Reabilitação após AVC, Parkinson e Alzheimer
                </p>
                <Link to="/servicos">
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary hover:bg-primary/10"
                  >
                    Ver detalhes
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-soft transition-smooth hover:-translate-y-1 text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Fisioterapia Respiratória
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Tratamento para doenças respiratórias crônicas
                </p>
                <Link to="/servicos">
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary hover:bg-primary/10"
                  >
                    Ver detalhes
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-soft transition-smooth hover:-translate-y-1 text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Fisioterapia Ortopédica
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Reabilitação pós-operatória e fraturas
                </p>
                <Link to="/servicos">
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary hover:bg-primary/10"
                  >
                    Ver detalhes
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimento em Destaque */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 bg-gradient-to-br from-accent/5 to-primary/5 shadow-soft">
              <CardContent className="pt-12 pb-12 px-8 md:px-16 text-center">
                <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
                <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
                  "A Roberta devolveu não apenas o movimento da minha mãe, mas a alegria 
                  de viver. O carinho e a dedicação dela fazem toda a diferença."
                </blockquote>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Maria Helena Silva</p>
                  <p className="text-sm text-muted-foreground">Filha de paciente • Barretos, SP</p>
                </div>
                <Link to="/depoimentos">
                  <Button 
                    variant="outline"
                    className="mt-8 border-primary text-primary hover:bg-primary/10"
                  >
                    Ler mais histórias
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-primary">Vamos agendar uma avaliação inicial?</h2>
            <p className="text-lg text-muted-foreground">
              Entre em contato pelo WhatsApp e descubra como a fisioterapia domiciliar 
              pode transformar a qualidade de vida de quem você ama.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
              onClick={() => window.open("https://wa.me/5517982123269", "_blank")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar com Roberta
            </Button>
            <p className="text-sm text-muted-foreground">
              Atendimento domiciliar exclusivo em Barretos-SP • (17) 98212-3269
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
