import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Brain, Activity, Target, TrendingUp, CheckCircle2, Phone, Quote, Star, ArrowRight, Check, Calendar, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import avCImage from "@/assets/reabilitacao-avc.jpg";

const FisioterapiaNeurologica = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["Service", "MedicalProcedure"],
    "serviceType": "Fisioterapia Neurológica Domiciliar",
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
    }
  };

  return (
    <>
      <SEO
        title="Fisioterapia Neurológica Domiciliar em Barretos | AVC, Parkinson, Alzheimer"
        description="Reabilitação neurológica em casa em Barretos-SP. Especialista em AVC, Parkinson, Alzheimer. Atendimento humanizado. WhatsApp: (17) 98212-3269"
        keywords="fisioterapia neurologica barretos, reabilitação avc barretos, fisioterapia parkinson barretos, fisioterapia alzheimer barretos"
        canonicalUrl="https://fisiorobertadomiciliar.com.br/servicos/fisioterapia-neurologica"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Serviços", url: "/servicos" },
          { name: "Fisioterapia Neurológica" }
        ]}
        schema={serviceSchema}
      />

      <main className="min-h-screen bg-background">
        <div className="container-custom pt-24 pb-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Serviços", href: "/servicos" },
              { label: "Fisioterapia Neurológica" }
            ]}
          />
        </div>

        {/* Hero */}
        <section className="section-padding pt-8">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Brain className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Especialista em Reabilitação Neurológica</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Fisioterapia Neurológica Domiciliar em Barretos-SP
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  Reabilitação especializada para AVC, Parkinson, Alzheimer e outras condições neurológicas no conforto do seu lar.
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
                    onClick={() => window.open("https://wa.me/5517982123269?text=Olá! Gostaria de saber mais sobre fisioterapia neurológica domiciliar em Barretos.", "_blank")}
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    WhatsApp
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src={avCImage}
                  alt="Fisioterapia neurológica domiciliar em Barretos - Reabilitação de AVC"
                  className="rounded-3xl shadow-elegant w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introdução */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-6">O que é Fisioterapia Neurológica?</h2>
            <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                A fisioterapia neurológica é uma especialidade dedicada ao tratamento de pacientes com disfunções do sistema nervoso central e periférico. Atua na reabilitação de sequelas causadas por doenças ou lesões neurológicas, como AVC, Parkinson, Alzheimer, traumatismos e outras condições que afetam o movimento e a função.
              </p>
              <p>
                O objetivo principal é promover a recuperação máxima da funcionalidade, trabalhando a reaprendizagem motora, coordenação, equilíbrio, força muscular e independência nas atividades diárias. Cada protocolo é personalizado conforme o quadro clínico e as necessidades específicas do paciente.
              </p>
              <p>
                Em Barretos-SP, oferecemos atendimento domiciliar especializado, permitindo que o paciente neurológico seja tratado em ambiente familiar, reduzindo o estresse do deslocamento e aumentando significativamente a adesão ao tratamento e os resultados da reabilitação.
              </p>
              <p>
                Utilizo técnicas modernas e baseadas em evidências científicas, sempre respeitando o tempo e as limitações de cada paciente, com foco na qualidade de vida e máxima independência funcional possível.
              </p>
            </div>
          </div>
        </section>

        {/* Condições Tratadas */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Condições Neurológicas Tratadas</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "AVC (Acidente Vascular Cerebral)", desc: "Reabilitação de sequelas motoras e funcionais" },
                { title: "Doença de Parkinson", desc: "Controle de tremores e melhora da marcha" },
                { title: "Doença de Alzheimer", desc: "Manutenção da funcionalidade e prevenção de quedas" },
                { title: "Esclerose Múltipla", desc: "Controle de sintomas e manutenção da mobilidade" },
                { title: "Traumatismo Craniano", desc: "Recuperação de funções motoras e cognitivas" },
                { title: "Paralisia Cerebral", desc: "Desenvolvimento motor e funcional" }
              ].map((condition, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{condition.title}</h3>
                        <p className="text-sm text-muted-foreground">{condition.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Benefícios da Reabilitação Neurológica</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Activity, title: "Recuperação de Movimentos", desc: "Reaprendizagem motora e coordenação" },
                { icon: Target, title: "Melhora da Coordenação", desc: "Exercícios específicos para precisão" },
                { icon: Brain, title: "Reaprendizagem Motora", desc: "Neuroplasticidade e novos padrões" },
                { icon: TrendingUp, title: "Prevenção de Complicações", desc: "Evita rigidez e contraturas" }
              ].map((benefit, index) => (
                <Card key={index} className="border-2 hover:shadow-elegant transition-smooth">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Técnicas Utilizadas */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Técnicas de Reabilitação Utilizadas</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Facilitação Neuromuscular Proprioceptiva (FNP)", desc: "Técnica que utiliza padrões de movimento em diagonal para facilitar respostas motoras" },
                { title: "Conceito Bobath", desc: "Abordagem para normalizar o tônus muscular e facilitar movimentos funcionais" },
                { title: "Método Kabat", desc: "Exercícios em padrões diagonais e espirais que mimetizam movimentos naturais" },
                { title: "Exercícios Funcionais", desc: "Atividades específicas do dia a dia para recuperar independência" }
              ].map((tecnica, index) => (
                <Card key={index} className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{tecnica.title}</h3>
                    <p className="text-sm text-muted-foreground">{tecnica.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Como Funciona o Tratamento</h2>
            
            <div className="space-y-8">
              {[
                { step: "1", title: "Avaliação Neurológica Completa", desc: "Avaliação detalhada de tônus muscular, força, coordenação, equilíbrio, marcha e funções motoras. Valor: R$ 150" },
                { step: "2", title: "Plano Terapêutico Individualizado", desc: "Criação de protocolo específico baseado no quadro neurológico, sequelas presentes e objetivos funcionais do paciente e família." },
                { step: "3", title: "Sessões Especializadas", desc: "Atendimento de 50 minutos com técnicas específicas de reabilitação neurológica, exercícios terapêuticos e treino funcional." },
                { step: "4", title: "Acompanhamento Evolutivo", desc: "Reavaliações periódicas com ajustes no protocolo conforme progressão e surgimento de novas capacidades motoras." }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investimento */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Investimento e Condições</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Avaliação Inicial</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Duração de 50 minutos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Avaliação neurológica completa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Plano individualizado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Planos Mensais</h3>
                    <p className="text-xs text-primary mt-1 font-semibold">Mais Popular</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Frequência personalizada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Condições diferenciadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Acompanhamento contínuo</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Pagamento Facilitado</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Opções acessíveis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Nota Fiscal Paulista</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Transparência total</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-8">
              *Entre em contato via WhatsApp para informações personalizadas sobre investimento e planos disponíveis.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Perguntas Frequentes</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Quanto tempo leva a recuperação após AVC?</AccordionTrigger>
                <AccordionContent>
                  A recuperação varia conforme extensão da lesão e início da reabilitação. Os primeiros 6 meses são cruciais, mas melhorias podem ocorrer por anos com tratamento adequado e constante.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>A fisioterapia neurológica funciona para Parkinson?</AccordionTrigger>
                <AccordionContent>
                  Sim! A fisioterapia é essencial para controlar sintomas, melhorar marcha, reduzir tremores, manter mobilidade e prevenir quedas. Tratamento contínuo traz resultados significativos na qualidade de vida.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Atende pacientes com sequelas graves?</AccordionTrigger>
                <AccordionContent>
                  Sim, atendo pacientes com diferentes graus de sequelas, desde casos leves até graves com dependência total. O protocolo é adaptado para cada nível funcional.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Quantas sessões por semana são recomendadas?</AccordionTrigger>
                <AccordionContent>
                  Para reabilitação neurológica, recomendo 3 a 5 sessões semanais nas fases iniciais, podendo reduzir para 2 a 3 sessões em fases de manutenção, sempre conforme evolução.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>É possível recuperar movimentos perdidos?</AccordionTrigger>
                <AccordionContent>
                  Sim, através da neuroplasticidade, o cérebro pode criar novas conexões. Com tratamento adequado e constante, muitos pacientes recuperam movimentos significativos, mesmo após meses do evento neurológico.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Depoimento */}
        <section className="section-padding">
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
                  "Depois do AVC, achei que não voltaria a caminhar. Com paciência e técnica, a Roberta me mostrou que era possível. Hoje caminho com segurança e voltei a ter esperança."
                </blockquote>
                <p className="font-semibold text-foreground">Seu Alfredo</p>
                <p className="text-sm text-muted-foreground">Paciente pós-AVC • 74 anos • Barretos, SP</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Inicie Sua Reabilitação Neurológica Hoje
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Cada dia de tratamento faz diferença na recuperação. Agende sua avaliação agora.
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
                onClick={() => window.open("https://wa.me/5517982123269?text=Olá! Gostaria de agendar uma avaliação de fisioterapia neurológica em Barretos.", "_blank")}
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

export default FisioterapiaNeurologica;
