import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { trackWhatsAppClick } from "@/lib/analytics";
import whatsappIcon from "@/assets/whatsapp-icon.webp";

const WhatsAppFloating = () => {
  const whatsappNumber = "5517982123269";
  const message = "Olá! Gostaria de agendar uma avaliação de fisioterapia domiciliar em Barretos.";
  
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    trackWhatsAppClick('floating_button');
    window.open(url, "_blank");
  };

  return (
    <TooltipProvider delayDuration={1000}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleClick}
            size="lg"
            className="fixed bottom-[15px] right-[15px] md:bottom-5 md:right-5 z-[9999] h-[55px] w-[55px] md:h-[70px] md:w-[70px] rounded-full p-0 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-4 focus:ring-green-300 overflow-hidden"
            aria-label="Abrir conversa no WhatsApp para agendar avaliação de fisioterapia"
            data-event="whatsapp_click"
            data-source="floating_button"
          >
            <img 
              src={whatsappIcon} 
              alt="WhatsApp" 
              className="w-full h-full object-cover"
              aria-hidden="true"
              width={60}
              height={60}
              loading="lazy"
              decoding="async"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-foreground text-background">
          <p>Respondo em até 3h</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppFloating;
