import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Salvar mensagem no banco de dados
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || null,
          message: formData.message
        });

      if (error) throw error;

      // Redirecionar para WhatsApp
      const whatsappMessage = `Olá! Gostaria de agendar uma avaliação.%0A%0ANome: ${formData.name}%0ATelefone: ${formData.phone}%0AEmail: ${formData.email}%0AMensagem: ${formData.message}`;
      window.open(`https://wa.me/5517982123269?text=${whatsappMessage}`, "_blank");
      
      toast.success("Mensagem enviada! Obrigada pelo contato.");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error('Erro ao salvar mensagem:', error);
      toast.error("Erro ao enviar mensagem. Por favor, tente novamente.");
    }
  };

  const whatsappLink = "https://wa.me/5517982123269";

  return (
    <section id="contato" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-primary mb-4">Vamos conversar com calma?</h2>
          <p className="text-lg text-muted-foreground">
            Estou à disposição para tirar dúvidas, explicar os atendimentos e agendar sua avaliação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="animate-fade-in border-2">
            <CardHeader>
              <CardTitle className="text-foreground">Envie sua mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(17) 99123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Ex: Gostaria de atendimento para minha mãe, que teve um AVC."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Enviar mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="border-2 bg-primary/5 animate-fade-in">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Prefere falar diretamente pelo WhatsApp?
              </h3>
              <p className="text-muted-foreground">
                Clique no botão abaixo e converse comigo agora mesmo.
              </p>
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Falar com Roberta
              </Button>
              <p className="text-sm text-muted-foreground italic">
                Fique à vontade para me enviar uma mensagem — sem compromisso.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-fade-in">
            <Card className="border-2">
              <CardContent className="pt-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Área de Atendimento</h4>
                  <p className="text-muted-foreground">
                    Barretos-SP
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefone / WhatsApp</h4>
                  <p className="text-muted-foreground">
                    (17) 98212-3269
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary"
                    onClick={() => window.open(whatsappLink, "_blank")}
                  >
                    Chamar no WhatsApp
                  </Button>
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
                  <p className="text-muted-foreground">
                    fisiorobertarochadomiciliar@gmail.com
                  </p>
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
                    Segunda a Sexta: 7h às 19h<br />
                    Sábado: 8h às 12h
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
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background hover:bg-primary/5 transition-smooth group"
                    aria-label="Instagram da Físio Roberta Domiciliar"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-smooth">
                      @fisiorobertadomiciliar
                    </span>
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61553900038660" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background hover:bg-primary/5 transition-smooth group"
                    aria-label="Facebook da Físio Roberta Domiciliar"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <Facebook className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-smooth">
                      Facebook
                    </span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Atendimento domiciliar exclusivo em Barretos-SP
            </h3>
            <p className="text-muted-foreground">
              Confira abaixo as dúvidas mais frequentes sobre o atendimento.
            </p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                Dúvidas comuns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-foreground">
                    Atende convênio?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    O atendimento é particular. Emito recibos que podem ser utilizados para reembolso junto ao seu convênio, 
                    dependendo da cobertura do seu plano de saúde.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-foreground">
                    Preciso de encaminhamento médico?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    O encaminhamento médico é recomendado para melhor acompanhamento do quadro clínico, 
                    mas não é obrigatório para iniciar o tratamento. Podemos conversar sobre isso na avaliação inicial.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-foreground">
                    Quanto tempo dura uma sessão?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Cada sessão dura em média 50 minutos, mas o tempo pode variar conforme a necessidade e o plano de tratamento 
                    individual de cada paciente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-foreground">
                    Leva os equipamentos necessários?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim! Levo todos os equipamentos e materiais necessários para o atendimento. 
                    Você não precisa se preocupar com nada — apenas em estar confortável em casa.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-primary/5 rounded-lg text-center animate-fade-in">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-lg text-foreground font-medium mb-2">
              Toda jornada começa com um primeiro passo.
            </p>
            <p className="text-muted-foreground">
              Será um prazer cuidar de você ou de quem você ama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
