import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heart, Shield, TrendingUp, Activity, CheckCircle2, Phone, Quote, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import idosoImage from "@/assets/treatment-elderly-band.jpg";

const FisioterapiaGeriatrica = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Fisioterapia Geriátrica Domiciliar",
    "provider": {
      "@type": "Person",
      "name": "Roberta Rocha",
      "jobTitle": "Fisioterapeuta",
      "telephone": "+55-17-98212-3269"
    },
    "areaServed": {
      "@type": "City",
      "name": "Barretos",
      "state": "SP"
    },
    "offers": [
      {
        "@type": "Offer",
        "price": "150",
        "priceCurrency": "BRL",
        "description": "Avaliação inicial completa"
      },
      {
        "@type": "Offer",
        "price": "180",
        "priceCurrency": "BRL",
        "description": "Sessão avulsa"
      },
      {
        "@type": "Offer",
        "price": "150",
        "priceCurrency": "BRL",
        "description": "Pacote 8 sessões/mês"
      }
    ]
  };

  const benefits = [
    { icon: Shield, title: "Prevenção de Quedas", description: "Exercícios específicos para melhorar equilíbrio e coordenação" },
    { icon: Activity, title: "Melhora da Mobilidade", description: "Recuperação e manutenção da capacidade de locomoção" },
    { icon: TrendingUp, title: "Fortalecimento Muscular", description: "Ganho de força e resistência muscular" },
    { icon: Heart, title: "Alívio de Dores", description: "Redução de dores articulares e musculares crônicas" }
  ];

  return (
    <>
      <SEO
        title="Fisioterapia Geriátrica Domiciliar em Barretos-SP | Roberta Rocha"
        description="Fisioterapia para idosos em casa em Barretos. Prevenção de quedas, fortalecimento muscular, mobilidade. 13 anos de experiência. Agende: (17) 98212-3269"
        keywords="fisioterapia geriátrica barretos, fisioterapia para idosos barretos, prevenção de quedas barretos, fisioterapeuta domiciliar idosos"
        canonicalUrl="https://fisiorobertadomiciliar.com.br/servicos/fisioterapia-geriatrica"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Serviços", url: "/servicos" },
          { name: "Fisioterapia Geriátrica" }
        ]}
        schema={serviceSchema}
      />

      <main className="min-h-screen bg-background">
        {/* Breadcrumbs */}
        <div className="container-custom pt-24 pb-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Serviços", href: "/servicos" },
              { label: "Fisioterapia Geriátrica" }
            ]}
          />
        </div>

        {/* Hero */}
        <section className="section-padding pt-8">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Especialista em Idosos</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Fisioterapia Geriátrica Domiciliar em Barretos-SP
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  Cuidado especializado para idosos no conforto de casa. Prevenção de quedas, fortalecimento e autonomia com 13 anos de experiência.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/agendar">
                    <Button size="lg" className="w-full sm:w-auto">
                      Agendar Avaliação
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2"
                    onClick={() => window.open("https://wa.me/5517982123269?text=Olá! Gostaria de saber mais sobre fisioterapia geriátrica domiciliar em Barretos.", "_blank")}
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    WhatsApp
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src={idosoImage}
                  alt="Fisioterapia geriátrica domiciliar em Barretos - Idosa realizando exercícios"
                  className="rounded-3xl shadow-elegant w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introdução */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-6">O que é Fisioterapia Geriátrica?</h2>
            <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                A fisioterapia geriátrica é uma especialidade voltada para o cuidado de pessoas idosas, com foco na manutenção e recuperação da funcionalidade, prevenção de quedas e promoção da independência nas atividades diárias.
              </p>
              <p>
                Com o envelhecimento, é natural que ocorram mudanças no corpo: perda de massa muscular, diminuição do equilíbrio, rigidez articular e maior risco de quedas. A fisioterapia geriátrica atua justamente nesses aspectos, proporcionando exercícios e técnicas específicas para cada necessidade.
              </p>
              <p>
                Em Barretos-SP, oferecemos atendimento domiciliar personalizado, permitindo que o idoso seja tratado em seu ambiente familiar, onde se sente mais seguro e confortável. Isso aumenta significativamente a adesão ao tratamento e os resultados obtidos.
              </p>
              <p>
                Com 13 anos de experiência, desenvolvi protocolos específicos que respeitam as limitações de cada paciente, sempre buscando promover a máxima autonomia possível dentro das capacidades individuais.
              </p>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">Benefícios da Fisioterapia Geriátrica</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Tratamento especializado que promove qualidade de vida e independência
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:shadow-elegant transition-smooth">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Manutenção da Independência</h3>
                  <p className="text-sm text-muted-foreground">
                    Exercícios funcionais que permitem ao idoso realizar suas atividades diárias com segurança e autonomia.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Melhora da Qualidade de Vida</h3>
                  <p className="text-sm text-muted-foreground">
                    Redução de dores, melhora do sono, aumento da disposição e bem-estar geral.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Condições Tratadas */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Condições Tratadas</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Osteoporose e osteopenia",
                "Artrose e artrite",
                "Dificuldade de locomoção",
                "Perda de equilíbrio e coordenação",
                "Fraqueza muscular generalizada",
                "Dores crônicas articulares",
                "Rigidez e limitação de movimentos",
                "Sequelas de quedas anteriores"
              ].map((condition, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Como Funciona o Tratamento</h2>
            
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Avaliação Inicial Completa",
                  description: "Primeira consulta de 60 minutos com anamnese detalhada, avaliação física completa, testes de equilíbrio e força muscular. Valor: R$ 150"
                },
                {
                  step: "2",
                  title: "Plano de Tratamento Personalizado",
                  description: "Criação de protocolo específico baseado nas necessidades, limitações e objetivos do paciente. Definição de frequência e número de sessões."
                },
                {
                  step: "3",
                  title: "Sessões de 60 Minutos em Casa",
                  description: "Atendimento domiciliar com todos os equipamentos necessários. Exercícios terapêuticos, alongamentos, fortalecimento e treino de equilíbrio."
                },
                {
                  step: "4",
                  title: "Reavaliação Mensal",
                  description: "Acompanhamento da evolução com ajustes no plano de tratamento conforme progresso e novas necessidades identificadas."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preços */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Preços Transparentes</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2">
                <CardContent className="pt-8 pb-8 text-center">
                  <p className="text-sm text-muted-foreground mb-2">Avaliação</p>
                  <p className="text-4xl font-bold text-primary mb-2">R$ 150</p>
                  <p className="text-sm text-muted-foreground">60 minutos</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-8 pb-8 text-center">
                  <p className="text-sm text-muted-foreground mb-2">Sessão Avulsa</p>
                  <p className="text-4xl font-bold text-primary mb-2">R$ 180</p>
                  <p className="text-sm text-muted-foreground">60 minutos</p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-primary/5">
                <CardContent className="pt-8 pb-8 text-center">
                  <p className="text-sm text-muted-foreground mb-2">8 Sessões/Mês</p>
                  <p className="text-4xl font-bold text-primary mb-2">R$ 150</p>
                  <p className="text-sm text-muted-foreground">por sessão</p>
                  <p className="text-xs text-primary mt-2 font-semibold">Recomendado</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-8 pb-8 text-center">
                  <p className="text-sm text-muted-foreground mb-2">12 Sessões/Mês</p>
                  <p className="text-4xl font-bold text-primary mb-2">R$ 140</p>
                  <p className="text-sm text-muted-foreground">por sessão</p>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              * Todos os equipamentos estão inclusos no valor da sessão
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Perguntas Frequentes</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Meu pai/mãe está acamado, você atende?</AccordionTrigger>
                <AccordionContent>
                  Sim! Atendo pacientes acamados com protocolo específico de prevenção de úlceras de pressão, mobilização passiva, exercícios respiratórios e posicionamento adequado no leito.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Quantas sessões por semana são necessárias?</AccordionTrigger>
                <AccordionContent>
                  O ideal é de 2 a 3 sessões semanais para manutenção e prevenção, ou 3 a 5 sessões para reabilitação mais intensiva. A frequência é definida na avaliação inicial conforme necessidade individual.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Você leva os equipamentos necessários?</AccordionTrigger>
                <AccordionContent>
                  Sim! Levo todos os equipamentos profissionais: faixas elásticas, pesos, bolas terapêuticas, apoios e tudo que for necessário para o tratamento completo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Atende em qual região de Barretos?</AccordionTrigger>
                <AccordionContent>
                  Atendo em diversos bairros de Barretos-SP, incluindo Primavera, City Barretos, Centro, Jardim Eldorado, Vila Planalto e região. O raio de atendimento é de 6km a partir do centro.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Aceita convênio?</AccordionTrigger>
                <AccordionContent>
                  Trabalho com atendimento particular. Forneço recibos detalhados que podem ser utilizados para reembolso junto ao seu convênio, conforme cobertura do plano.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Depoimento */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <Card className="border-2">
              <CardContent className="pt-12 pb-12 px-8 text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 italic">
                  "A Roberta é uma excelente profissional! Minha mãe de 82 anos melhorou muito a mobilidade e o equilíbrio. Hoje ela anda com mais segurança e não tem mais medo de cair. Recomendo!"
                </blockquote>
                <p className="font-semibold text-foreground">Edna Aparecida</p>
                <p className="text-sm text-muted-foreground">Filha de paciente • Barretos, SP</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para Melhorar a Qualidade de Vida do Seu Familiar?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agende uma avaliação e descubra como a fisioterapia geriátrica pode fazer a diferença
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agendar">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg">
                  Agendar Avaliação
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 text-lg border-2"
                onClick={() => window.open("https://wa.me/5517982123269?text=Olá! Gostaria de agendar uma avaliação de fisioterapia geriátrica em Barretos.", "_blank")}
              >
                <Phone className="mr-2 w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FisioterapiaGeriatrica;
