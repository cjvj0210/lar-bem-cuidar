import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Check } from "lucide-react";

const AccessibilityStatement = () => {
  return (
    <section className="section-padding" aria-labelledby="accessibility-heading">
      <div className="container-custom max-w-4xl">
        <Card className="border-2">
          <CardHeader>
            <CardTitle id="accessibility-heading" className="flex items-center gap-2">
              <Check className="w-6 h-6 text-green-600" aria-hidden="true" />
              Compromisso com Acessibilidade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Acessibilidade Digital WCAG 2.1 AA
              </h3>
              <p className="text-muted-foreground">
                Nosso site foi desenvolvido seguindo as diretrizes de acessibilidade WCAG 2.1 nível AA 
                para garantir que todos possam acessar nossos serviços, independentemente de suas 
                habilidades ou tecnologias assistivas utilizadas.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Recursos de Acessibilidade:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Navegação completa por teclado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Contraste adequado entre texto e fundo (mínimo 4.5:1)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Textos alternativos descritivos em todas as imagens</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Formulários com labels e mensagens de erro claras</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Estrutura semântica HTML5</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Suporte a leitores de tela</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Funciona em zoom até 200%</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Suporte a modo de alto contraste</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-900 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Encontrou um problema de acessibilidade?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Estamos comprometidos em melhorar continuamente a acessibilidade do nosso site. 
                    Se você encontrou algum problema ou tem sugestões, entre em contato pelo WhatsApp: 
                    <a href="tel:+5517982123269" className="text-primary hover:underline ml-1">(17) 98212-3269</a> ou email: <a href="mailto:fisiorobertarochadomiciliar@gmail.com" className="text-primary hover:underline">fisiorobertarochadomiciliar@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Última atualização:</strong> Janeiro de 2025
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AccessibilityStatement;
