import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WhatsAppFloating = () => {
  const whatsappNumber = "5517982123269";
  const message = "Olá! Gostaria de agendar uma avaliação de fisioterapia domiciliar em Barretos.";
  
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        location: window.location.pathname
      });
    }
    
    window.open(url, "_blank");
  };

  return (
    <TooltipProvider delayDuration={1000}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleClick}
            size="lg"
            className="fixed bottom-[15px] right-[15px] md:bottom-5 md:right-5 z-[9999] h-[55px] w-[55px] md:h-[70px] md:w-[70px] rounded-full bg-[#25D366] hover:bg-[#20BA5A] hover:scale-110 p-0 flex items-center justify-center animate-pulse transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
            aria-label="Falar conosco no WhatsApp"
          >
            <MessageCircle className="w-7 h-7 md:w-9 md:h-9 text-white" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-foreground text-background">
          <p>Fale conosco no WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppFloating;
