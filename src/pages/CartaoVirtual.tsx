import { Phone, Mail, MapPin, Award, Clock, Share2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import profileImage from "@/assets/roberta-professional.jpg";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { trackEvent } from "@/lib/analytics";

const CartaoVirtual = () => {
  const handleWhatsAppClick = () => {
    trackEvent('cartao_virtual_whatsapp_click');
    window.open('https://wa.me/5517982123269?text=Olá, vim através do cartão virtual!', '_blank');
  };

  const handleShare = async () => {
    trackEvent('cartao_virtual_share_click');
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Roberta Rocha - Fisioterapeuta',
          text: 'Conheça a fisioterapeuta Roberta Rocha, especialista em atendimento domiciliar em Barretos-SP',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Erro ao compartilhar:', err);
      }
    } else {
      // Fallback: copiar link
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <>
      <SEO 
        title="Cartão Virtual - Roberta Rocha Fisioterapeuta"
        description="Cartão virtual de Roberta Rocha, fisioterapeuta especializada em atendimento domiciliar em Barretos-SP. 13 anos de experiência."
        canonicalUrl="https://fisiorobertadomiciliar.com.br/cartao-virtual"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4 pt-24 pb-8">
        <Card className="max-w-2xl w-full shadow-elegant overflow-hidden">
          <CardContent className="p-0">
            {/* Header com foto */}
            <div className="bg-gradient-to-r from-primary to-primary/80 p-8 text-center relative">
              <div className="absolute top-4 right-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleShare}
                  className="bg-background/10 border-background/20 hover:bg-background/20 text-primary-foreground"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <img
                    src={profileImage}
                    alt="Roberta Rocha"
                    className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-2 shadow-md">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-primary-foreground mb-2">
                Roberta Rocha
              </h1>
              <p className="text-lg text-primary-foreground/90 mb-1">
                Fisioterapeuta CREFITO-3 / 123456-F
              </p>
              <p className="text-sm text-primary-foreground/80">
                13 anos de experiência em atendimento domiciliar
              </p>
            </div>

            {/* Especialidades */}
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Especialidades
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Fisioterapia Geriátrica
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Fisioterapia Neurológica
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Reabilitação Pós-Operatória
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Fisioterapia Respiratória
                </span>
              </div>
            </div>

            {/* Informações de Contato */}
            <div className="p-6 border-b space-y-3">
              <h2 className="text-lg font-semibold mb-3">Contato</h2>
              
              <a
                href="https://wa.me/5517982123269"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <FaWhatsapp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp / Telefone</p>
                  <p className="font-medium">(17) 98212-3269</p>
                </div>
              </a>

              <a
                href="mailto:fisiorobertarochadomiciliar@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-medium break-all">fisiorobertarochadomiciliar@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-foreground">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Atendimento</p>
                  <p className="font-medium">Barretos-SP</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-foreground">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Horário</p>
                  <p className="font-medium">Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold mb-3">Redes Sociais</h2>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/fisiorobertadomiciliar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                >
                  <FaInstagram className="h-5 w-5" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61553900038660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                >
                  <FaFacebook className="h-5 w-5" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="p-6 space-y-3">
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                Agendar Avaliação pelo WhatsApp
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                Atendimento domiciliar com todo conforto e segurança
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CartaoVirtual;
