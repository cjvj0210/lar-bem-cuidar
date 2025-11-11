import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Activity, Shield, TrendingUp, Heart, CheckCircle2, Phone, Quote, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
const posOperatorioImage = "/images/paciente-pos-cirurgia-andador.jpg";

const ReabilitacaoPosOperatoria = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["Service", "MedicalProcedure"],
    "serviceType": "Reabilitação Pós-Operatória Domiciliar",
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
        title="Reabilitação Pós-Operatória Domiciliar em Barretos | Fisioterapia Pós-Cirurgia"
        description="Fisioterapia pós-operatória em casa em Barretos-SP. Próteses, fraturas, cirurgias ortopédicas. Recuperação segura. Agende: (17) 98212-3269"
        keywords="fisioterapia pós-operatória barretos, reabilitação pós-cirurgia barretos, fisioterapia prótese quadril barretos, fisioterapia prótese joelho barretos"
        canonicalUrl="https://fisiorobertadomiciliar.com.br/servicos/reabilitacao-pos-operatoria"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Serviços", url: "/servicos" },
          { name: "Reabilitação Pós-Operatória" }
        ]}
        schema={serviceSchema}
      />

      <main className="min-h-screen bg-background">
        <div className="container-custom pt-24 pb-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Serviços", href: "/servicos" },
              { label: "Reabilitação Pós-Operatória" }
            ]}
          />
        </div>

        {/* Hero */}
        <section className="section-padding pt-8">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Recuperação Segura e Eficiente</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Reabilitação Pós-Operatória Domiciliar em Barretos-SP
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  Fisioterapia especializada após cirurgias ortopédicas. Recuperação no conforto de casa com segurança e resultados comprovados.
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
                    onClick={() => window.open("https://wa.me/5517982123269?text=Olá! Gostaria de saber mais sobre reabilitação pós-operatória domiciliar em Barretos.", "_blank")}
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    WhatsApp
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src={posOperatorioImage}
                  alt="Reabilitação pós-operatória domiciliar em Barretos - Paciente com andador"
                  className="rounded-3xl shadow-elegant w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introdução */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-6">Importância da Fisioterapia Pós-Cirúrgica</h2>
            <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                A reabilitação pós-operatória é fundamental para o sucesso de qualquer cirurgia ortopédica. A fisioterapia acelera a recuperação, previne complicações, reduz dores e permite o retorno mais rápido às atividades diárias.
              </p>
              <p>
                Após procedimentos como próteses de quadril ou joelho, cirurgias de ligamentos, fraturas ou coluna, o corpo precisa de estímulos adequados para cicatrizar corretamente e recuperar a funcionalidade. A fisioterapia domiciliar oferece a vantagem de iniciar o tratamento precocemente, sem o estresse do deslocamento.
              </p>
              <p>
                Em Barretos-SP, realizo atendimento domiciliar especializado seguindo protocolos médicos e respeitando cada fase da recuperação. O tratamento em casa proporciona mais conforto, segurança e permite adaptações do ambiente conforme necessário para a reabilitação.
              </p>
              <p>
                Com 13 anos de experiência, desenvolvi protocolos específicos para cada tipo de cirurgia, sempre focando em recuperação segura, prevenção de complicações e retorno funcional completo.
              </p>
            </div>
          </div>
        </section>

        {/* Cirurgias Atendidas */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Cirurgias Ortopédicas Atendidas</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Prótese de Quadril (Artroplastia)", desc: "Reabilitação completa com ganho de amplitude e força" },
                { title: "Prótese de Joelho (Artroplastia)", desc: "Protocolo específico para flexão e extensão seguras" },
                { title: "Fraturas (Fêmur, Tíbia, Úmero)", desc: "Recuperação de mobilidade e fortalecimento" },
                { title: "Ligamentos (LCA, LCM, Menisco)", desc: "Ganho de estabilidade e propriocepção" },
                { title: "Cirurgias de Coluna", desc: "Fortalecimento da musculatura paravertebral" },
                { title: "Cirurgias de Ombro (Manguito Rotador)", desc: "Recuperação de movimentos e força do ombro" }
              ].map((cirurgia, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{cirurgia.title}</h3>
                        <p className="text-sm text-muted-foreground">{cirurgia.desc}</p>
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
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Benefícios da Reabilitação Pós-Operatória</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: TrendingUp, title: "Recuperação Mais Rápida", desc: "Retorno acelerado às atividades" },
                { icon: Shield, title: "Redução de Dor", desc: "Analgesia através do movimento" },
                { icon: Heart, title: "Prevenção de Complicações", desc: "Evita rigidez e contraturas" },
                { icon: Activity, title: "Retorno Funcional", desc: "Volta às atividades diárias" }
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

        {/* Fases da Reabilitação */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Fases da Reabilitação Pós-Cirúrgica</h2>
            
            <div className="space-y-8">
              {[
                { fase: "Fase Aguda", periodo: "Primeiros dias pós-cirurgia", desc: "Controle de dor e edema, mobilização precoce, exercícios passivos e ativos assistidos, prevenção de trombose." },
                { fase: "Fase Subaguda", periodo: "Semanas 2-6", desc: "Ganho de amplitude de movimento, início do fortalecimento leve, treino de marcha com auxílio, exercícios proprioceptivos." },
                { fase: "Fase de Fortalecimento", periodo: "Meses 2-6", desc: "Fortalecimento muscular progressivo, ganho de resistência, exercícios funcionais avançados, retorno gradual às atividades." },
                { fase: "Retorno às Atividades", periodo: "Após 6 meses", desc: "Manutenção da força e mobilidade, exercícios específicos para atividades desejadas, prevenção de novas lesões." }
              ].map((fase, index) => (
                <Card key={index} className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-1">{fase.fase}</h3>
                        <p className="text-sm text-primary mb-2">{fase.periodo}</p>
                        <p className="text-muted-foreground">{fase.desc}</p>
                      </div>
                    </div>
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
                { step: "1", title: "Avaliação Pós-Operatória", desc: "Análise da cirurgia realizada, amplitude de movimento, força muscular, dor e edema. Alinhamento com protocolo médico. Valor: R$ 150" },
                { step: "2", title: "Protocolo Personalizado", desc: "Criação de plano específico respeitando cada fase da recuperação e recomendações médicas, com progressão segura." },
                { step: "3", title: "Sessões Domiciliares", desc: "Atendimento de 60 minutos com exercícios terapêuticos, mobilizações, fortalecimento e treino funcional progressivo." },
                { step: "4", title: "Acompanhamento Contínuo", desc: "Reavaliações frequentes com ajustes no protocolo conforme evolução, sempre em comunicação com equipe médica." }
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

        {/* Preços */}
        <section className="section-padding">
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
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Perguntas Frequentes</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Quando devo iniciar a fisioterapia após a cirurgia?</AccordionTrigger>
                <AccordionContent>
                  O ideal é iniciar nas primeiras 24-48 horas após a cirurgia, conforme liberação médica. Quanto mais cedo iniciar, melhor a recuperação e menores os riscos de complicações.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>A fisioterapia pós-cirúrgica dói?</AccordionTrigger>
                <AccordionContent>
                  O desconforto é esperado no início, mas o tratamento é realizado dentro dos limites toleráveis. A fisioterapia, na verdade, ajuda a reduzir a dor através da mobilização adequada.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Quanto tempo dura a reabilitação completa?</AccordionTrigger>
                <AccordionContent>
                  Varia conforme o tipo de cirurgia: próteses levam 3-6 meses, ligamentos 6-9 meses, fraturas 2-4 meses. O tempo depende da evolução individual e adesão ao tratamento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Posso fazer fisioterapia em casa logo após a cirurgia?</AccordionTrigger>
                <AccordionContent>
                  Sim! A fisioterapia domiciliar é ideal no pós-operatório, pois evita deslocamento, reduz riscos de infecção hospitalar e permite iniciar precocemente em ambiente confortável e seguro.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger>Você se comunica com meu médico ortopedista?</AccordionTrigger>
                <AccordionContent>
                  Sim! Mantenho comunicação com a equipe médica, sigo o protocolo cirúrgico específico e envio relatórios de evolução quando necessário, garantindo tratamento integrado e seguro.
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
                  "Fiz cirurgia de prótese de quadril e não conseguia sair de casa. A Roberta veio até mim e conduziu minha recuperação com muito profissionalismo. Hoje estou totalmente recuperada e sem dores!"
                </blockquote>
                <p className="font-semibold text-foreground">Ana Costa</p>
                <p className="text-sm text-muted-foreground">Paciente pós-cirurgia • 71 anos • Barretos, SP</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Recupere-se com Segurança e Rapidez
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Inicie sua reabilitação pós-operatória com especialista. Agende sua avaliação agora.
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
                onClick={() => window.open("https://wa.me/5517982123269?text=Olá! Gostaria de agendar uma avaliação de reabilitação pós-operatória em Barretos.", "_blank")}
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

export default ReabilitacaoPosOperatoria;
