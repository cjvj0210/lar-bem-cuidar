import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Instagram, Home } from "lucide-react";

const Obrigado = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Mensagem Enviada - Fisioterapia Domiciliar Barretos"
        description="Obrigada pelo contato! Responderemos em até 10 minutos durante horário comercial."
        canonicalUrl="https://fisiorobertadomiciliar.com.br/obrigado"
      />
      <div className="min-h-screen pt-32 pb-20 animate-fade-in">
        <div className="container-custom max-w-2xl">
          <Card className="border-2 text-center">
            <CardContent className="pt-12 pb-12 space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto animate-scale-in">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Mensagem Enviada com Sucesso!
              </h1>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Obrigada pelo contato! Responderemos em até <strong className="text-foreground">10 minutos</strong> durante horário comercial.
                </p>
                <p className="text-base">
                  Já recebi sua mensagem e em breve entrarei em contato para conversarmos sobre como posso ajudar você ou seu familiar.
                </p>
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Link to="/">
                      <Home className="w-5 h-5 mr-2" />
                      Voltar para Home
                    </Link>
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <a 
                      href="https://www.instagram.com/fisiorobertadomiciliar/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-5 h-5 mr-2" />
                      Seguir no Instagram
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground italic pt-4">
                  Enquanto aguarda, que tal conhecer mais sobre meu trabalho no Instagram?
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Obrigado;
