import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  id: string;
  title: string;
  subtitle: string | null;
  content: string;
  created_at: string;
  image_url: string | null;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const whatsappLink = "https://wa.me/5517991527125";

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('id', id)
          .eq('published', true)
          .single();

        if (error) throw error;
        setPost(data);
      } catch (error) {
        console.error('Erro ao carregar post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const calculateReadTime = (content: string) => {
    return Math.ceil(content.split(' ').length / 200);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 animate-fade-in">
        <section className="section-padding">
          <div className="container mx-auto max-w-4xl">
            <Skeleton className="h-8 w-32 mb-8" />
            <Skeleton className="h-12 w-full mb-4" />
            <Skeleton className="h-6 w-3/4 mb-8" />
            <Skeleton className="h-96 w-full mb-8" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </section>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-20 animate-fade-in">
        <section className="section-padding">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-primary mb-4">Post não encontrado</h1>
            <p className="text-muted-foreground mb-8">
              O artigo que você procura não existe ou foi removido.
            </p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Blog
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      <article className="section-padding">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-foreground mb-4 text-3xl md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            
            {post.subtitle && (
              <p className="text-xl text-muted-foreground mb-6">
                {post.subtitle}
              </p>
            )}

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.created_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{calculateReadTime(post.content)} min de leitura</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.image_url && (
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-16">
            <div className="text-foreground/90 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>

          {/* CTA Section */}
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
      </article>
    </div>
  );
};

export default BlogPost;
