import { Clock, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const UrgencyBanner = () => {
  return (
    <div className="container-custom py-4">
      <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-900">
        <AlertCircle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
        <AlertDescription className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-sm font-medium text-orange-800 dark:text-orange-200">
              <strong>Vagas limitadas!</strong> Apenas 3 horários disponíveis esta semana
            </span>
          </div>
          <span className="text-xs text-orange-600 dark:text-orange-400 animate-pulse">
            🔥 12 pessoas visualizaram esta página hoje
          </span>
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default UrgencyBanner;
