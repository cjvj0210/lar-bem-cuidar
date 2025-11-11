import { Star, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SocialProof = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-2 hover:shadow-elegant transition-smooth">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">5.0</p>
              <p className="text-sm text-muted-foreground">⭐ 4 avaliações Google</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-elegant transition-smooth">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">287+</p>
              <p className="text-sm text-muted-foreground">Pacientes atendidos</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-elegant transition-smooth">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">13</p>
              <p className="text-sm text-muted-foreground">Anos de experiência</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-elegant transition-smooth">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">98%</p>
              <p className="text-sm text-muted-foreground">Taxa de satisfação</p>
            </CardContent>
          </Card>
        </div>

        {/* CREFITO Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white dark:bg-gray-800 rounded-full border-2 border-border shadow-sm">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Credenciado CREFITO-SP | Fisioterapeuta Certificada
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
