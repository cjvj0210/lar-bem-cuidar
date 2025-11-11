import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface RecentPost {
  slug: string;
  title: string;
  created_at: string;
}

const BlogSidebar = () => {
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([]);
  const whatsappLink = "https://wa.me/5517982123269?text=Olá! Gostaria de agendar uma avaliação de fisioterapia domiciliar em Barretos.";
  
  const categories = [
    "Fisioterapia Geriátrica",
    "Fisioterapia Neurológica",
    "Fisioterapia Ortopédica",
    "Fisioterapia Respiratória",
    "Dicas de Saúde",
    "Reabilitação"
  ];

  useEffect(() => {
    const fetchRecentPosts = async () => {
      const { data } = await supabase
        .from('blog_posts')
        .select('slug, title, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (data) setRecentPosts(data);
    };

    fetchRecentPosts();
  }, []);

  return (
    <aside className="space-y-6">
      {/* Categorias */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Tag className="w-5 h-5" />
            Categorias
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/blog/categoria/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
            >
              {category}
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Artigos Recentes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="w-5 h-5" />
            Artigos Recentes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block group"
            >
              <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                {new Date(post.created_at).toLocaleDateString('pt-BR')}
              </p>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="pt-6 text-center space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Precisa de Fisioterapia Domiciliar?
          </h3>
          <p className="text-sm text-muted-foreground">
            Agende sua avaliação em Barretos-SP
          </p>
          <Button asChild className="w-full">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Agendar Avaliação
            </a>
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
};

export default BlogSidebar;
