import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Clock, Award, Heart, Stethoscope, Brain, Activity, Wind, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import robertaProfile from "@/assets/roberta-profile.webp";
import { trackPhoneClick } from "@/lib/analytics";

const formSchema = z.object({
  name: z.string().trim().min(3, "Nome deve ter pelo menos 3 caracteres").max(100, "Nome muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone inválido"),
  serviceType: z.string().min(1, "Selecione o tipo de atendimento"),
  time: z.string().min(1, "Selecione o melhor horário"),
  message: z.string().trim().max(500, "Mensagem muito longa").optional(),
});

const Agendar = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      serviceType: "",
      time: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    // GA4 tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        form_name: 'agendamento',
        page_path: '/agendar'
      });
    }

    // Format WhatsApp message
    const message = `Olá! Gostaria de agendar uma avaliação de fisioterapia domiciliar em Barretos.\n\n*Nome:* ${values.name}\n*Telefone:* ${values.phone}\n*Tipo de atendimento:* ${values.serviceType}\n*Melhor horário:* ${values.time}${values.message ? `\n*Observações:* ${values.message}` : ''}`;
    
    const whatsappNumber = "5517982123269";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para o WhatsApp para confirmar o agendamento.",
    });

    form.reset();
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        location: 'cta_final',
        page_path: '/agendar'
      });
    }

    const message = "Olá! Gostaria de agendar uma avaliação de fisioterapia domiciliar em Barretos.";
    const whatsappNumber = "5517982123269";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const phoneFormat = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Fisioterapia Domiciliar",
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
    "offers": {
      "@type": "Offer",
      "price": "150",
      "priceCurrency": "BRL",
      "description": "Avaliação de fisioterapia domiciliar com duração de 50 minutos"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "4"
    }
  };

  return (
    <>
      <SEO
        title="Agendar Avaliação de Fisioterapia Domiciliar em Barretos | Roberta Rocha"
        description="Agende sua avaliação de fisioterapia domiciliar em Barretos-SP com Roberta Rocha. Avaliação de 50 minutos. Resposta em até 3 horas. WhatsApp: (17) 98212-3269"
        keywords="agendar fisioterapia barretos, avaliação fisioterapia domiciliar, fisioterapeuta barretos preço"
        canonicalUrl="https://www.fisiorobertadomiciliar.com/agendar"
        schema={serviceSchema}
      />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left: Image and Badge */}
              <div className="space-y-6">
                <div className="relative">
                  <img
                    src={robertaProfile}
                    alt="Fisioterapeuta Roberta Rocha atendendo paciente em Barretos"
                    className="rounded-lg shadow-elegant w-full object-cover aspect-[4/3]"
                    loading="lazy"
                    width={640}
                    height={480}
                    decoding="async"
                  />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background border border-border rounded-full px-6 py-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Avaliação 5.0</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">(4 reviews Google)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:sticky lg:top-8">
                <div className="space-y-4 mb-6">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Agende Sua Avaliação de Fisioterapia Domiciliar em Barretos
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Preencha o formulário abaixo ou chame no WhatsApp. <span className="text-primary font-semibold">Resposta em até 3 horas.</span>
                  </p>
                </div>

                <Card className="shadow-elegant">
                  <CardContent className="p-6">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome completo *</FormLabel>
                              <FormControl>
                                <Input placeholder="Seu nome completo" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefone/WhatsApp *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="(17) 98212-3269"
                                  {...field}
                                  onChange={(e) => {
                                    const formatted = phoneFormat(e.target.value);
                                    field.onChange(formatted);
                                  }}
                                  maxLength={15}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="serviceType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tipo de Atendimento *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione o tipo de atendimento" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="geriatrica">Fisioterapia Geriátrica</SelectItem>
                                  <SelectItem value="neurologica">Fisioterapia Neurológica</SelectItem>
                                  <SelectItem value="pos-operatoria">Reabilitação Pós-Operatória</SelectItem>
                                  <SelectItem value="respiratoria">Fisioterapia Respiratória</SelectItem>
                                  <SelectItem value="outro">Outro</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Melhor dia e horário *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione o melhor horário" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="manha">Manhã (8h - 12h)</SelectItem>
                                  <SelectItem value="tarde">Tarde (12h - 18h)</SelectItem>
                                  <SelectItem value="qualquer">Qualquer horário</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Observações (opcional)</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Conte brevemente sobre sua necessidade..."
                                  className="resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full h-12 text-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Enviando..." : "Solicitar Agendamento"}
                        </Button>
                      </form>
                    </Form>

                    {/* CTA Alternativo WhatsApp */}
                    <div className="mt-6 pt-6 border-t">
                      <p className="text-center text-sm text-muted-foreground mb-3">
                        Prefere agendar pelo WhatsApp?
                      </p>
                      <Button
                        onClick={handleWhatsAppClick}
                        className="w-full h-12 text-lg bg-[#25D366] hover:bg-[#20BA5A]"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Chamar no WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios Visuais */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Resposta em até 3 horas</h3>
                  <p className="text-sm text-muted-foreground">
                    Atendimento rápido durante horário comercial
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Primeira avaliação sem compromisso</h3>
                  <p className="text-sm text-muted-foreground">
                    Conheça o serviço antes de fechar pacote
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Cancelamento gratuito até 24h antes</h3>
                  <p className="text-sm text-muted-foreground">
                    Flexibilidade total para reagendar
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Atendimento em Barretos</h3>
                  <p className="text-sm text-muted-foreground">
                    Raio de 6km a partir do centro
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits (antiga seção mantida) */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">
              Por Que Escolher Nosso Atendimento
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">13 Anos de Experiência</h3>
                <p className="text-muted-foreground">
                  Profissional qualificada e experiente em fisioterapia domiciliar
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Equipamentos Profissionais Inclusos</h3>
                <p className="text-muted-foreground">
                  Todos os equipamentos necessários levados até você
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Atendimento Humanizado de 50 Minutos</h3>
                <p className="text-muted-foreground">
                  Cuidado personalizado e dedicado para sua recuperação
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">
              O que dizem nossos pacientes
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground italic">
                    "Excelente profissional! Muito atenciosa e dedicada. Minha mãe melhorou muito!"
                  </p>
                  <div>
                    <p className="font-semibold">Edna Aparecida</p>
                    <p className="text-sm text-muted-foreground">Filha de paciente</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground italic">
                    "Tratamento humanizado e eficiente. Minha recuperação foi muito mais rápida!"
                  </p>
                  <div>
                    <p className="font-semibold">Tania Maria</p>
                    <p className="text-sm text-muted-foreground">Paciente</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground italic">
                    "Profissional competente e carinhosa. Fez toda diferença na recuperação do meu pai."
                  </p>
                  <div>
                    <p className="font-semibold">Gabriela Ramos</p>
                    <p className="text-sm text-muted-foreground">Filha de paciente</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">
              Serviços de Fisioterapia
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Fisioterapia Geriátrica</h3>
                  <p className="text-sm text-muted-foreground">Cuidados especializados para idosos</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Reabilitação Pós-Operatória</h3>
                  <p className="text-sm text-muted-foreground">Recuperação após cirurgias</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Fisioterapia Neurológica</h3>
                  <p className="text-sm text-muted-foreground">Tratamento de AVC, Parkinson e mais</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Wind className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Fisioterapia Respiratória</h3>
                  <p className="text-sm text-muted-foreground">Melhora da capacidade pulmonar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">
              Perguntas Frequentes
            </h2>
            
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>Quanto custa a avaliação?</AccordionTrigger>
                <AccordionContent>
                  A avaliação inicial tem duração de 50 minutos e inclui anamnese completa, avaliação física e orientações personalizadas. Entre em contato via WhatsApp para informações sobre investimento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Quais bairros você atende?</AccordionTrigger>
                <AccordionContent>
                  Atendo diversos bairros de Barretos-SP, incluindo Primavera, City Barretos, Centro, Jardim Eldorado e Vila Planalto. Entre em contato para confirmar se atendo seu bairro.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Qual a duração do atendimento?</AccordionTrigger>
                <AccordionContent>
                  Cada sessão tem duração de 50 minutos, tempo ideal para um atendimento completo e personalizado, focado nas suas necessidades específicas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Você leva os equipamentos?</AccordionTrigger>
                <AccordionContent>
                  Sim! Levo todos os equipamentos necessários para o atendimento. Você não precisa se preocupar com nada, apenas com sua recuperação.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Como faço para agendar?</AccordionTrigger>
                <AccordionContent>
                  Você pode agendar pelo formulário acima ou direto pelo WhatsApp <a href="tel:+5517982123269" className="text-primary hover:underline" onClick={() => trackPhoneClick()}>(17) 98212-3269</a>. Respondo rapidamente e agendamos um horário conveniente para você.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pronto para Recuperar Sua Mobilidade?
              </h2>
              <p className="text-xl text-muted-foreground">
                Agende sua avaliação agora e dê o primeiro passo para uma vida mais ativa e saudável
              </p>
              <div className="space-y-4">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="h-14 px-8 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Agendar pelo WhatsApp
                </Button>
                <p className="text-sm text-muted-foreground">
                  Ou preencha o formulário acima
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Agendar;
