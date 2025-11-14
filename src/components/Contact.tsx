import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { trackFormSubmit, trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone muito longo"),
  subject: z.string().min(1, "Selecione um assunto"),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(1000, "Mensagem muito longa"),
  acceptWhatsapp: z.boolean()
});

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    acceptWhatsapp: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    
    try {
      const validatedData = contactSchema.parse(formData);

      // Salvar mensagem no banco de dados
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: validatedData.name,
          phone: validatedData.phone,
          email: validatedData.email,
          message: `Assunto: ${validatedData.subject}\n\n${validatedData.message}`,
          accept_whatsapp: validatedData.acceptWhatsapp
        });

      if (error) throw error;

      trackFormSubmit('contact_form');

      // Redirecionar para WhatsApp com dados validados
      const whatsappMessage = `Olá! Vim através do site.%0A%0ANome: ${encodeURIComponent(validatedData.name)}%0ATelefone: ${encodeURIComponent(validatedData.phone)}%0AEmail: ${encodeURIComponent(validatedData.email)}%0AAssunto: ${encodeURIComponent(validatedData.subject)}%0AMensagem: ${encodeURIComponent(validatedData.message)}`;
      trackWhatsAppClick('contact_form');
      window.open(`https://wa.me/5517982123269?text=${whatsappMessage}`, "_blank");
      
      toast.success("Mensagem enviada! Redirecionando...");
      
      // Redirecionar para página de obrigado
      setTimeout(() => {
        navigate("/obrigado");
      }, 1500);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Por favor, corrija os erros no formulário.");
      } else {
        toast.error("Erro ao enviar mensagem. Por favor, tente novamente.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink = "https://wa.me/5517982123269";

  return (
    <section id="contato" className="section-padding" aria-labelledby="contact-heading">
      <div className="container-custom">
        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em Contato - Fisioterapia Domiciliar em Barretos
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Estamos prontos para ajudar você. <strong className="text-primary">Resposta em até 3 horas.</strong>
          </p>
          
          {/* Botão Cartão Virtual */}
          <Link to="/cartao-virtual">
            <Button 
              size="lg"
              variant="outline"
              className="gap-2 bg-gradient-to-r from-primary/10 to-cyan-500/10 border-2 border-primary/30 hover:border-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base font-semibold"
            >
              <CreditCard className="h-5 w-5" />
              Ver Cartão Virtual Profissional
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-3">
            💼 Salve meus contatos para facilitar futuras consultas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* FORMULÁRIO DE CONTATO */}
          <Card className="animate-fade-in border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Envie sua mensagem</CardTitle>
              <p className="text-sm text-muted-foreground">Preencha o formulário abaixo e entraremos em contato</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <Label htmlFor="name">Nome completo <span className="text-destructive">*</span></Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? "border-destructive" : ""}
                    maxLength={100}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1" role="alert">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={errors.email ? "border-destructive" : ""}
                    maxLength={255}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1" role="alert">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Telefone/WhatsApp <span className="text-destructive">*</span></Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(17) 99123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={errors.phone ? "border-destructive" : ""}
                    maxLength={20}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive mt-1" role="alert">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="subject">Assunto <span className="text-destructive">*</span></Label>
                  <Select 
                    value={formData.subject} 
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    required
                  >
                    <SelectTrigger id="subject" className={errors.subject ? "border-destructive" : ""}>
                      <SelectValue placeholder="Selecione o assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="agendar-avaliacao">Agendar avaliação</SelectItem>
                      <SelectItem value="duvidas-servicos">Dúvidas sobre serviços</SelectItem>
                      <SelectItem value="solicitar-orcamento">Solicitar orçamento</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.subject && (
                    <p className="text-xs text-destructive mt-1" role="alert">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Mensagem <span className="text-destructive">*</span></Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-nos como podemos ajudar você..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={errors.message ? "border-destructive" : ""}
                    rows={5}
                    maxLength={1000}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive mt-1" role="alert">{errors.message}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.message.length}/1000 caracteres
                  </p>
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox
                    id="acceptWhatsapp"
                    checked={formData.acceptWhatsapp}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, acceptWhatsapp: checked === true })
                    }
                  />
                  <Label 
                    htmlFor="acceptWhatsapp" 
                    className="text-sm font-normal leading-relaxed cursor-pointer"
                  >
                    Aceito receber contato por WhatsApp
                  </Label>
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full h-14 text-base bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-primary/50"
                  disabled={isSubmitting}
                  aria-label="Enviar mensagem"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  ✓ Resposta em até 3 horas • Sem compromisso
                </p>
              </form>
            </CardContent>
          </Card>

          {/* INFORMAÇÕES DE CONTATO */}
          <div className="space-y-6 animate-fade-in">
            {/* CTA ALTERNATIVO - WhatsApp Direto */}
            <Card className="border-2 bg-primary/5">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Prefere falar pelo WhatsApp?
                </h3>
                <p className="text-muted-foreground">
                  Clique no botão abaixo e converse comigo agora mesmo.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-primary/50"
                  onClick={() => {
                    trackWhatsAppClick('contact_cta_card');
                    window.open(whatsappLink, "_blank");
                  }}
                  aria-label="Abrir conversa no WhatsApp"
                >
                  Falar no WhatsApp Agora
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefone / WhatsApp</h4>
                  <p className="text-muted-foreground mb-2">
                    <a href="tel:+5517982123269" className="text-foreground hover:text-primary transition-colors">(17) 98212-3269</a>
                  </p>
                  <div className="space-y-1">
                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary"
                      onClick={() => {
                        trackWhatsAppClick('contact_phone_link');
                        window.open(whatsappLink, "_blank");
                      }}
                    >
                      Chamar no WhatsApp
                    </Button>
                    <a 
                      href="tel:+5517982123269" 
                      className="block text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                      onClick={() => trackPhoneClick()}
                      aria-label="Ligar para (17) 98212-3269"
                    >
                      Ligar agora
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a 
                    href="mailto:fisiorobertarochadomiciliar@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    fisiorobertarochadomiciliar@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    <span className="text-sm">Tempo de resposta: Até 3 horas (horário comercial)</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-4 text-center">Siga nas Redes Sociais</h4>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://www.instagram.com/fisiorobertadomiciliar/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background hover:bg-primary/5 transition-all group focus:outline-none focus:ring-4 focus:ring-primary/50"
                    aria-label="Visitar perfil no Instagram"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      @fisiorobertadomiciliar
                    </span>
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61553900038660" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background hover:bg-primary/5 transition-all group focus:outline-none focus:ring-4 focus:ring-primary/50"
                    aria-label="Visitar perfil no Facebook"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Facebook className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      Facebook
                    </span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ÁREA DE ATENDIMENTO - MAPA */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Área de Atendimento</h2>
            <p className="text-muted-foreground">
              Atendimento domiciliar em Barretos-SP e região
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.8989736283866!2d-48.56828792394958!3d-20.55749558096988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94be1f4c5e5e5e5f%3A0x5e5e5e5e5e5e5e5e!2sBarretos%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa da área de atendimento em Barretos-SP"
                  className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Área de Atendimento</h4>
                    <p className="text-sm text-muted-foreground">
                      Centro de Barretos-SP<br />
                      <span className="text-primary">Raio de atendimento: 6km</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Bairros Atendidos</h4>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-primary mb-2">Bairros Prioritários:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>• Primavera</div>
                    <div>• City Barretos</div>
                    <div>• Jardim Botânico</div>
                    <div>• Tamboré</div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground mb-2">Outros Bairros:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>• Centro</div>
                    <div>• Jardim Eldorado</div>
                    <div>• Vila Planalto</div>
                    <div>• Jardim Progresso</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 p-3 bg-muted/30 rounded">
                  <strong>Atendimento em raio de 6km a partir do centro de Barretos.</strong><br />
                  Não encontrou seu bairro? Consulte disponibilidade pelo WhatsApp.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ RÁPIDO */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-muted-foreground">
              Respostas rápidas para as perguntas mais comuns
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-foreground">
                    Quanto tempo demora para receber resposta?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Respondo em até 3 horas durante horário comercial (segunda a sexta, 8h às 18h). 
                    Mensagens fora desse horário serão respondidas no próximo dia útil.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-foreground">
                    Atende aos finais de semana?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No momento, atendo apenas de segunda a sexta-feira. Porém, casos específicos podem 
                    ser avaliados individualmente. Entre em contato para conversarmos sobre sua necessidade.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-foreground">
                    Faz atendimento online?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Não, trabalho exclusivamente com atendimento domiciliar presencial em Barretos-SP. 
                    Acredito que a fisioterapia em casa, com equipamentos adequados e avaliação presencial, 
                    traz melhores resultados para os pacientes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-foreground">
                    Quanto custa o atendimento?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Os valores variam de acordo com o tipo de tratamento, frequência das sessões e localização. 
                    Entre em contato para solicitar um orçamento personalizado. Trabalho com valores acessíveis
                    e acessíveis para atendimento domiciliar de qualidade.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-foreground">
                    Atende convênio?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    O atendimento é particular. Emito recibos que podem ser utilizados para reembolso junto 
                    ao seu convênio, dependendo da cobertura do seu plano de saúde.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
