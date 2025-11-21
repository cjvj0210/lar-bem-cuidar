import { Star, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { trackEvent } from "@/lib/analytics";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const SocialProof = () => {
  const { data: stats } = useQuery({
    queryKey: ['site-stats'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_stats')
        .select('stat_key, stat_value');
      
      if (error) throw error;
      
      return data.reduce((acc, stat) => {
        acc[stat.stat_key] = stat.stat_value;
        return acc;
      }, {} as Record<string, string>);
    }
  });

  const handleGoogleReviewClick = () => {
    trackEvent('google_reviews_click', {
      source: 'social_proof_section'
    });
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-6">
          <a
            href="https://www.google.com/search?q=roberta+rocha+fisioterapia+barretos&rlz=1C1CHBD_pt-PTBR1168BR1168&oq=roberta+rocha+fisioterapia+barretos&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORigATIGCAEQRRg8MgYIAhBFGDzSAQg3MDI2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#mpd=~17066499652436838690/customers/reviews"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleGoogleReviewClick}
            className="block"
          >
            <Card className="border-2 hover:shadow-elegant transition-smooth cursor-pointer hover:border-primary/50">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{stats?.google_rating || '5.0'}</p>
                <p className="text-sm text-muted-foreground">⭐ {stats?.google_reviews_count || '6'} avaliações Google</p>
              </CardContent>
            </Card>
          </a>

          <Card className="border-2 hover:shadow-elegant transition-smooth">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">{stats?.total_patients || '287'}+</p>
              <p className="text-sm text-muted-foreground">Pacientes atendidos</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-elegant transition-smooth">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">{stats?.years_experience || '13'}</p>
              <p className="text-sm text-muted-foreground">Anos de experiência</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-elegant transition-smooth">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">{stats?.satisfaction_rate || '98'}%</p>
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
