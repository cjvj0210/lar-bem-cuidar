-- Criar tabela para estatísticas do site
CREATE TABLE public.site_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  stat_key TEXT NOT NULL UNIQUE,
  stat_value TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.site_stats ENABLE ROW LEVEL SECURITY;

-- Permitir leitura pública das estatísticas
CREATE POLICY "Estatísticas são públicas"
ON public.site_stats
FOR SELECT
USING (true);

-- Inserir dados iniciais
INSERT INTO public.site_stats (stat_key, stat_value) VALUES
  ('google_rating', '5.0'),
  ('google_reviews_count', '6'),
  ('total_patients', '287'),
  ('years_experience', '13'),
  ('satisfaction_rate', '98');

-- Criar trigger para atualizar updated_at
CREATE TRIGGER update_site_stats_updated_at
BEFORE UPDATE ON public.site_stats
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();