import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloating = () => {
  const whatsappNumber = "5517991527125";
  const message = "Olá! Gostaria de saber mais sobre os atendimentos de fisioterapia domiciliar.";
  
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-elegant p-0 flex items-center justify-center animate-fade-in"
      aria-label="Falar com Roberta pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </Button>
  );
};

export default WhatsAppFloating;
