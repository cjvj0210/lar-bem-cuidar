import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Brain, UserCircle, Stethoscope, Phone, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import WhyChooseRoberta from "@/components/WhyChooseRoberta";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import heroImage from "@/assets/treatment-elderly-band.jpg";
import robertaPortrait from "@/assets/roberta-profile.jpg";

const Home = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Como funciona o atendimento de fisioterapia domiciliar em Barretos-SP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O atendimento domiciliar é realizado na casa do paciente, em horários flexíveis. Levo todos os equipamentos necessários e realizo avaliação individualizada para criar um plano personalizado de tratamento."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o valor da consulta de fisioterapia domiciliar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Os valores variam entre R$ 150 e R$ 200 por sessão, dependendo da complexidade do tratamento e frequência. Entre em contato para um orçamento personalizado."
        }
      },
      {
        "@type": "Question",
        "name": "Quais condições são tratadas pela fisioterapia domiciliar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Atendo principalmente idosos com dificuldade de locomoção, pacientes em reabilitação pós-operatória, sequelas de AVC, Parkinson, Alzheimer, e condições ortopédicas e respiratórias."
        }
      },
      {
        "@type": "Question",
        "name": "Atende em quais bairros de Barretos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Atendo em toda a cidade de Barretos-SP, incluindo todos os bairros centrais e periféricos da cidade."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <SEO 
        title="Fisioterapia Domiciliar em Barretos-SP | Roberta Rocha - 13 Anos de Experiência"
        description="Fisioterapia domiciliar premium em Barretos-SP. Especializada em idosos, reabilitação pós-operatória e neurológica. Avaliação R$ 150. Agende: (17) 98212-3269"
        keywords="fisioterapia domiciliar barretos, fisioterapeuta para idosos barretos, fisioterapia geriátrica barretos, reabilitação pós-operatória barretos, fisioterapia neurológica barretos"
        canonicalUrl="https://www.fisiorobertadomiciliar.com/"
        schema={faqSchema}
      />
      {/* Hero Section */}
      <section className="relative pt-24 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium text-foreground">
                  ⭐ 5.0 - 4 avaliações Google
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Fisioterapia Domiciliar Premium em Barretos-SP
              </h1>

              <p className="text-xl text-muted-foreground">
                13 anos cuidando de idosos e pacientes neurológicos no conforto da sua casa
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/agendar">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 text-lg bg-primary hover:bg-primary/90"
                  >
                    Agende Sua Avaliação
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 text-lg border-2 border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open("https://wa.me/5517982123269?text=Olá! Gostaria de mais informações sobre fisioterapia domiciliar em Barretos.", "_blank")}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Fale no WhatsApp
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4 border-t border-border">
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
                alt="Fisioterapeuta Roberta Rocha atendendo paciente idosa com exercícios em Barretos-SP"
                className="relative rounded-3xl shadow-elegant w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Escolher Roberta */}
      <WhyChooseRoberta />

      {/* Sobre Roberta */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl"></div>
              <img
                src={robertaPortrait}
                alt="Roberta Rocha - Fisioterapeuta especializada em atendimento domiciliar em Barretos-SP"
                className="relative rounded-3xl shadow-elegant w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Sobre Roberta Rocha
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                Sou Roberta Rocha, fisioterapeuta com 13 anos de experiência em Barretos-SP, 
                especializada em fisioterapia domiciliar para idosos e pacientes neurológicos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Minha missão é devolver movimento, autonomia e qualidade de vida para quem mais precisa, 
                com um atendimento humanizado e baseado em evidências científicas.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">CREFITO:</strong> 123456-F/SP
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Especializações:</strong> Fisioterapia Geriátrica, Neurológica e Respiratória
                </p>
              </div>
              <Link to="/sobre">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10"
                >
                  Conheça Minha História
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serviços de Fisioterapia Domiciliar em Barretos
            </h2>
            <p className="text-lg text-muted-foreground">
              Tratamentos especializados no conforto da sua casa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:shadow-elegant transition-smooth hover:-translate-y-1 group">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <UserCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-center">
                  Fisioterapia Geriátrica
                </h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Prevenção de quedas, fortalecimento e autonomia para idosos
                </p>
                <Link to="/servicos" className="block">
                  <Button 
                    variant="ghost" 
                    className="w-full text-primary hover:bg-primary/10"
                  >
                    Saiba Mais
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-elegant transition-smooth hover:-translate-y-1 group">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-center">
                  Reabilitação Pós-Operatória
                </h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Recuperação após cirurgias ortopédicas e próteses
                </p>
                <Link to="/servicos" className="block">
                  <Button 
                    variant="ghost" 
                    className="w-full text-primary hover:bg-primary/10"
                  >
                    Saiba Mais
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-elegant transition-smooth hover:-translate-y-1 group">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-center">
                  Fisioterapia Neurológica
                </h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Tratamento de AVC, Parkinson, Alzheimer e mais
                </p>
                <Link to="/servicos" className="block">
                  <Button 
                    variant="ghost" 
                    className="w-full text-primary hover:bg-primary/10"
                  >
                    Saiba Mais
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-elegant transition-smooth hover:-translate-y-1 group">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-center">
                  Fisioterapia Respiratória
                </h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Melhora da capacidade pulmonar e respiração
                </p>
                <Link to="/servicos" className="block">
                  <Button 
                    variant="ghost" 
                    className="w-full text-primary hover:bg-primary/10"
                  >
                    Saiba Mais
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              O que Nossos Pacientes Dizem
            </h2>
            <p className="text-lg text-muted-foreground">
              Histórias reais de recuperação e cuidado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="flex gap-1 justify-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mx-auto" />
                <p className="text-foreground italic text-center min-h-[100px]">
                  "Excelente profissional! Minha mãe melhorou muito após as sessões. Recomendo!"
                </p>
                <div className="text-center pt-4 border-t">
                  <p className="font-semibold text-foreground">Edna Aparecida</p>
                  <p className="text-sm text-muted-foreground">Filha de paciente</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="flex gap-1 justify-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mx-auto" />
                <p className="text-foreground italic text-center min-h-[100px]">
                  "Tratamento humanizado e eficiente. Minha recuperação foi muito mais rápida!"
                </p>
                <div className="text-center pt-4 border-t">
                  <p className="font-semibold text-foreground">Tania Maria</p>
                  <p className="text-sm text-muted-foreground">Paciente</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="flex gap-1 justify-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mx-auto" />
                <p className="text-foreground italic text-center min-h-[100px]">
                  "Profissional competente e carinhosa. Fez toda diferença na recuperação do meu pai."
                </p>
                <div className="text-center pt-4 border-t">
                  <p className="font-semibold text-foreground">Gabriela Ramos</p>
                  <p className="text-sm text-muted-foreground">Filha de paciente</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/depoimentos">
              <Button 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10"
              >
                Ver mais no Google
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Roberta */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl"></div>
              <img
                src={robertaPortrait}
                alt="Roberta Rocha - Fisioterapeuta especializada em atendimento domiciliar em Barretos-SP"
                className="relative rounded-3xl shadow-elegant w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Sobre Roberta Rocha
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                Sou Roberta Rocha, fisioterapeuta com 13 anos de experiência em Barretos-SP, 
                especializada em fisioterapia domiciliar para idosos e pacientes neurológicos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Minha missão é devolver movimento, autonomia e qualidade de vida para quem mais precisa, 
                com um atendimento humanizado e baseado em evidências científicas.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">CREFITO:</strong> 123456-F/SP
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Especializações:</strong> Fisioterapia Geriátrica, Neurológica e Respiratória
                </p>
              </div>
              <Link to="/sobre">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10"
                >
                  Conheça Minha História
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Área de Atendimento */}
      <ServiceArea />

      {/* FAQ */}
      <FAQ />

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Pronto para Melhorar Sua Qualidade de Vida?
            </h2>
            <p className="text-xl text-muted-foreground">
              Agende sua avaliação de fisioterapia domiciliar hoje mesmo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agendar">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-lg bg-primary hover:bg-primary/90"
                >
                  Agendar Agora
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 text-lg border-2 border-primary text-primary hover:bg-primary/10"
                onClick={() => window.open("https://wa.me/5517982123269?text=Olá! Gostaria de mais informações sobre fisioterapia domiciliar em Barretos.", "_blank")}
              >
                <Phone className="mr-2 w-5 h-5" />
                WhatsApp
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Atendimento domiciliar premium em Barretos-SP • (17) 98212-3269
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
