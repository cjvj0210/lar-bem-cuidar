import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ComparisonTable = () => {
  const comparisons = [
    { feature: "Deslocamento", clinic: false, home: true, homeText: "Não necessário" },
    { feature: "Tempo de sessão", clinic: "40 min", home: "50 min" },
    { feature: "Equipamentos", clinic: "Compartilhados", home: "Exclusivos" },
    { feature: "Personalização", clinic: "Limitada", home: "100% personalizado" },
    { feature: "Ambiente", clinic: "Clínico", home: "Confortável" },
    { feature: "Horário", clinic: "Fixo", home: "Flexível" },
    { feature: "Privacidade", clinic: false, home: true },
    { feature: "Familiares presentes", clinic: false, home: true }
  ];

  const renderValue = (value: boolean | string, isHome: boolean = false) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-400 mx-auto" />
      );
    }
    return (
      <span className={isHome ? "font-medium text-primary" : "text-muted-foreground"}>
        {value}
      </span>
    );
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Por Que Escolher Atendimento Domiciliar?
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja as vantagens do tratamento no conforto do seu lar
          </p>
        </div>

        {/* Desktop Table View */}
        <Card className="border-2 hidden md:block">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Comparação de Atendimento</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Característica</TableHead>
                  <TableHead className="text-center">Clínica</TableHead>
                  <TableHead className="text-center bg-primary/5">
                    <span className="font-bold text-primary">Atendimento Domiciliar</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisons.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.feature}</TableCell>
                    <TableCell className="text-center">
                      {renderValue(item.clinic)}
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      {renderValue(item.home, true)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <h3 className="text-xl font-bold text-center mb-6">Comparação de Atendimento</h3>
          {comparisons.map((item, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-3 text-center text-primary">
                  {item.feature}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Clínica</p>
                    <div className="flex justify-center">
                      {renderValue(item.clinic)}
                    </div>
                  </div>
                  <div className="text-center bg-primary/5 rounded-lg p-2">
                    <p className="text-sm font-semibold text-primary mb-2">Domiciliar</p>
                    <div className="flex justify-center">
                      {renderValue(item.home, true)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/10 border-2 border-green-200 dark:border-green-900 rounded-lg">
          <div className="flex items-start gap-4">
            <Check className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-foreground mb-2">
                Mais de 10.000 sessões realizadas em 13 anos
              </p>
              <p className="text-sm text-muted-foreground">
                Cada atendimento é único e planejado especialmente para você, no conforto e segurança do seu lar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
