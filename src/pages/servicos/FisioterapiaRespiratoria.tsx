import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Wind, Heart, Activity, TrendingUp, CheckCircle2, Phone, Quote, Star, ArrowRight, Check, Calendar, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import respiratorioImage from "@/assets/treatment-home-exercise.webp";

const FisioterapiaRespiratoria = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["Service", "MedicalProcedure"],
    "serviceType": "Fisioterapia Respiratória Domiciliar",
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
        title="Fisioterapia Respiratória Domiciliar em Barretos | Reabilitação Pulmonar"
        description="Fisioterapia respiratória em casa em Barretos-SP. DPOC, asma, doenças pulmonares. Melhore sua respiração. WhatsApp: (17) 98212-3269"
        keywords="fisioterapia respiratória barretos, reabilitação pulmonar barretos, fisioterapia dpoc barretos, fisioterapia asma barretos"
        canonicalUrl="https://fisiorobertadomiciliar.com/servicos/fisioterapia-respiratoria"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Serviços", url: "/servicos" },
          { name: "Fisioterapia Respiratória" }
        ]}
        schema={serviceSchema}
      />

      <main className="min-h-screen bg-background">
        <div className="container-custom pt-24 pb-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Serviços", href: "/servicos" },
              { label: "Fisioterapia Respiratória" }
            ]}
          />
        </div>

        {/* Hero */}
        <section className="section-padding pt-8">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Wind className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Respire Melhor, Viva Melhor</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Fisioterapia Respiratória Domiciliar em Barretos-SP
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  Tratamento especializado para doenças pulmonares no conforto de casa. Melhore sua capacidade respiratória e qualidade de vida.
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
                    onClick={() => window.open("https://wa.me/5517982123269?text=Olá! Gostaria de saber mais sobre fisioterapia respiratória domiciliar em Barretos.", "_blank")}
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    WhatsApp
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src={respiratorioImage}
                  alt="Fisioterapia respiratória domiciliar em Barretos - Exercícios respiratórios"
                  className="rounded-3xl shadow-elegant w-full h-auto object-cover"
                  loading="lazy"
                  width={640}
                  height={360}
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introdução */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-6">O que é Fisioterapia Respiratória?</h2>
            <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                A fisioterapia respiratória é uma especialidade focada na prevenção e tratamento de disfunções do sistema respiratório. Utiliza técnicas e exercícios específicos para melhorar a ventilação pulmonar, facilitar a eliminação de secreções, fortalecer a musculatura respiratória e aumentar a capacidade pulmonar.
              </p>
              <p>
                É indicada para pacientes com doenças pulmonares crônicas (como DPOC, asma, bronquite), pós-COVID-19, doenças neuromusculares que afetam a respiração, pacientes acamados ou em pós-operatório de cirurgias torácicas ou abdominais.
              </p>
              <p>
                Em Barretos-SP, realizo atendimento domiciliar especializado com protocolos modernos e individualizados. O tratamento em casa oferece maior conforto ao paciente respiratório, evitando exposição a agentes infecciosos e permitindo trabalhar em ambiente controlado e familiar.
              </p>
              <p>
                Com técnicas de higiene brônquica, exercícios respiratórios, drenagem postural e fortalecimento da musculatura respiratória, promovo melhora significativa na capacidade pulmonar e qualidade de vida dos pacientes.
              </p>
            </div>
          </div>
        </section>

        {/* Condições Tratadas */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Condições Respiratórias Tratadas</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "DPOC (Doença Pulmonar Obstrutiva Crônica)", desc: "Melhora da ventilação e redução de dispneia" },
                { title: "Asma", desc: "Controle de crises e fortalecimento respiratório" },
                { title: "Bronquite Crônica", desc: "Eliminação de secreções e higiene brônquica" },
                { title: "Enfisema Pulmonar", desc: "Melhora da troca gasosa e capacidade pulmonar" },
                { title: "Fibrose Pulmonar", desc: "Manutenção da função respiratória" },
                { title: "Sequelas Pós-COVID", desc: "Recuperação da capacidade pulmonar" }
              ].map((condicao, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{condicao.title}</h3>
                        <p className="text-sm text-muted-foreground">{condicao.desc}</p>
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
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Benefícios da Fisioterapia Respiratória</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Wind, title: "Melhora da Capacidade", desc: "Aumento da capacidade respiratória" },
                { icon: Activity, title: "Redução de Falta de Ar", desc: "Menos dispneia nas atividades" },
                { icon: Heart, title: "Eliminação de Secreções", desc: "Higiene brônquica eficaz" },
                { icon: TrendingUp, title: "Fortalecimento Muscular", desc: "Músculos respiratórios mais fortes" }
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

            <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Melhora da Qualidade de Vida</h3>
                  <p className="text-sm text-muted-foreground">
                    Maior disposição para atividades diárias, sono de qualidade e sensação geral de bem-estar.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Prevenção de Internações</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduz o risco de infecções respiratórias e necessidade de internações hospitalares.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Técnicas Utilizadas */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Técnicas de Fisioterapia Respiratória</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Exercícios Respiratórios", desc: "Padrões ventilatórios, respiração diafragmática, freno-labial e expansão pulmonar" },
                { title: "Drenagem Postural", desc: "Posicionamento específico para facilitar eliminação de secreções por gravidade" },
                { title: "Higiene Brônquica", desc: "Técnicas manuais e dispositivos para remoção de secreções das vias aéreas" },
                { title: "Reexpansão Pulmonar", desc: "Exercícios para abertura de áreas colapsadas e melhora da ventilação" }
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
                { step: "1", title: "Avaliação Respiratória Completa", desc: "Análise de padrão respiratório, ausculta pulmonar, saturação, dispneia e capacidade funcional. Valor: R$ 150" },
                { step: "2", title: "Protocolo Respiratório Personalizado", desc: "Criação de plano específico conforme doença de base, limitações e objetivos respiratórios do paciente." },
                { step: "3", title: "Sessões Terapêuticas", desc: "Atendimento de 50 minutos com técnicas de higiene brônquica, exercícios respiratórios e fortalecimento muscular." },
                { step: "4", title: "Monitoramento Contínuo", desc: "Acompanhamento com oximetria, reavaliações e ajustes conforme evolução respiratória e tolerância ao exercício." }
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
                      <span>Avaliação respiratória</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Protocolo personalizado</span>
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
                      <span>Frequência adaptável</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Valores diferenciados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Tratamento contínuo</span>
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
                      <span>Condições acessíveis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Nota Fiscal Paulista</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Sem taxas ocultas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-8">
              *Entre em contato via WhatsApp para informações sobre investimento e condições de pagamento disponíveis.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Perguntas Frequentes</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>A fisioterapia respiratória funciona para DPOC?</AccordionTrigger>
                <AccordionContent>
                  Sim! É comprovadamente eficaz para DPOC. Melhora a ventilação, reduz dispneia, fortalece músculos respiratórios e aumenta a tolerância ao exercício, melhorando significativamente a qualidade de vida.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Ajuda na recuperação pós-COVID?</AccordionTrigger>
                <AccordionContent>
                  Sim, muito! A fisioterapia respiratória é fundamental na recuperação pós-COVID, ajudando a restaurar a capacidade pulmonar, reduzir falta de ar e melhorar a resistência física.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Quantas sessões por semana são necessárias?</AccordionTrigger>
                <AccordionContent>
                  Para casos crônicos, recomendo 2 a 3 sessões semanais. Em exacerbações ou casos agudos, pode ser necessário diariamente. A frequência é ajustada conforme evolução e necessidade.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Preciso ter algum equipamento em casa?</AccordionTrigger>
                <AccordionContent>
                  Não! Levo todos os equipamentos necessários: incentivadores respiratórios, dispositivos de higiene brônquica, oxímetro e tudo mais que precisar para o tratamento completo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Pode fazer em pacientes com oxigênio?</AccordionTrigger>
                <AccordionContent>
                  Sim! Atendo pacientes oxigênio-dependentes com protocolos específicos, monitoramento constante da saturação e ajustes conforme necessário, sempre em segurança.
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
                  "Tenho DPOC e vivia com falta de ar. Após iniciar a fisioterapia respiratória com a Roberta, consigo fazer minhas atividades sem cansaço excessivo. Minha qualidade de vida melhorou muito!"
                </blockquote>
                <p className="font-semibold text-foreground">Carlos Alberto</p>
                <p className="text-sm text-muted-foreground">Paciente DPOC • 68 anos • Barretos, SP</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Respire Melhor, Viva com Mais Qualidade
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Inicie seu tratamento respiratório hoje. Agende sua avaliação especializada.
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
                onClick={() => window.open("https://wa.me/5517982123269?text=Olá! Gostaria de agendar uma avaliação de fisioterapia respiratória em Barretos.", "_blank")}
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

export default FisioterapiaRespiratoria;
