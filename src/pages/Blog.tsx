import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  subtitle: string | null;
  content: string;
  created_at: string;
}

const Blog = () => {
  const whatsappLink = "https://wa.me/5517991527125";
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (error) {
        console.error('Erro ao carregar posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "Hoje";
    if (diffInDays === 1) return "Ontem";
    if (diffInDays <= 7) return `Há ${diffInDays} dias`;
    if (diffInDays <= 30) return `Há ${Math.floor(diffInDays / 7)} semanas`;
    
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-primary mb-4">Dicas de bem-estar e movimento</h1>
            <p className="text-lg text-muted-foreground">
              Conteúdos leves, úteis e confiáveis para você e sua família cuidarem melhor da saúde em casa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {loading ? (
              <p className="col-span-2 text-center text-muted-foreground">Carregando posts...</p>
            ) : posts.length === 0 ? (
              <div className="col-span-2 text-center py-12">
                <p className="text-lg text-muted-foreground">
                  Ainda não publiquei nenhum conteúdo, mas em breve teremos dicas valiosas por aqui!
                </p>
              </div>
            ) : (
              posts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-[1.03] animate-fade-in flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-foreground text-xl leading-snug">
                      {post.title}
                    </CardTitle>
                    {post.subtitle && (
                      <CardDescription className="text-muted-foreground text-base">
                        {post.subtitle}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <p className="text-muted-foreground line-clamp-3 flex-1">
                      {post.content.substring(0, 200)}...
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.created_at)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{Math.ceil(post.content.split(' ').length / 200)} min</span>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:text-primary/80"
                      >
                        Ler mais
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          <Card className="border-2 bg-primary/5 animate-fade-in">
            <CardContent className="pt-8 pb-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-foreground">
                  Gostou do conteúdo?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Vamos conversar sobre como posso te ajudar.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Agendar avaliação
              </Button>
              <p className="text-sm text-muted-foreground italic">
                Será um prazer aplicar esse conhecimento no seu dia a dia.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
