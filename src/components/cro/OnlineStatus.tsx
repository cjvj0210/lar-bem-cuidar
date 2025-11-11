import { MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const OnlineStatus = () => {
  return (
    <div className="fixed bottom-24 left-4 md:left-6 z-[9998] animate-fade-in">
      <Badge 
        variant="default" 
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 shadow-lg flex items-center gap-2"
      >
        <div className="relative">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping"></div>
        </div>
        <MessageCircle className="w-4 h-4" />
        <span className="text-sm font-medium">Online - Respondo em até 3h</span>
      </Badge>
    </div>
  );
};

export default OnlineStatus;
