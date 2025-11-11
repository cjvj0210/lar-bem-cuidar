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

        <Card className="border-2">
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
                      {typeof item.clinic === "boolean" ? (
                        item.clinic ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-muted-foreground">{item.clinic}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      {typeof item.home === "boolean" ? (
                        item.home ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )
                      ) : (
                        <span className="font-medium text-primary">{item.home}</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

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
