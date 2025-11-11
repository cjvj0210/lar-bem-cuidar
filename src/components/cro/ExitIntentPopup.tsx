import { useState, useEffect } from "react";
import { X, Gift, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { trackCTAClick, trackWhatsAppClick } from "@/lib/analytics";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const popupShown = sessionStorage.getItem("exitPopupShown");
    if (popupShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of page and hasn't been shown yet
      if (e.clientY <= 0 && !hasShown && !isOpen) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown, isOpen]);

  const handleWhatsAppClick = () => {
    const message = "Olá! Vi a oferta especial de 10% de desconto na primeira avaliação. Gostaria de agendar!";
    const url = `https://wa.me/5517982123269?text=${encodeURIComponent(message)}`;
    trackWhatsAppClick("exit_intent_popup");
    trackCTAClick("Aproveitar Desconto 10%", "exit_intent_popup");
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Gift className="w-6 h-6 text-primary" />
              <DialogTitle className="text-2xl">Aguarde!</DialogTitle>
            </div>
          </div>
          <DialogDescription className="text-base space-y-4 pt-4">
            <div className="bg-primary/10 border-2 border-primary rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-primary mb-2">10% OFF</p>
              <p className="text-lg font-semibold text-foreground">
                Na Primeira Avaliação
              </p>
            </div>

            <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 justify-center">
              <Clock className="w-4 h-4 animate-pulse" />
              <p className="text-sm font-medium">
                Oferta válida apenas hoje!
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-foreground font-medium text-center">
                Não perca esta oportunidade!
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Avaliação completa de 60 minutos</li>
                <li>✓ Plano personalizado de tratamento</li>
                <li>✓ Sem compromisso, sem burocracia</li>
              </ul>
            </div>

            <Button 
              onClick={handleWhatsAppClick}
              className="w-full h-12 text-base bg-[#25D366] hover:bg-[#20BA5A]"
              data-event="cta_click"
              data-cta-text="Aproveitar Desconto 10%"
              data-cta-location="exit_intent_popup"
            >
              Aproveitar Desconto de 10%
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              * Válido apenas para novos pacientes. Oferta limitada.
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
