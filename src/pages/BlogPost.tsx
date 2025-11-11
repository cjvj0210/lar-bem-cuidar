import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, MessageCircle, User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import SocialShare from "@/components/blog/SocialShare";
import RelatedPosts from "@/components/blog/RelatedPosts";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  content: string;
  created_at: string;
  image_url: string | null;
  category: string;
  read_time: number;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const whatsappLink = "https://wa.me/5517982123269?text=Olá! Gostaria de agendar uma avaliação de fisioterapia domiciliar em Barretos.";

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      
      try {
        // Try to fetch by slug first, then by ID for backward compatibility
        let query = supabase
          .from('blog_posts')
          .select('*')
          .eq('published', true);
        
        // Check if id looks like a UUID
        const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
        
        if (isUUID) {
          query = query.eq('id', id);
        } else {
          query = query.eq('slug', id);
        }

        const { data, error } = await query.maybeSingle();

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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.subtitle || post.content.substring(0, 155),
    "image": post.image_url || "https://fisiorobertadomiciliar.com.br/logo.png",
    "author": {
      "@type": "Person",
      "name": "Roberta Rocha",
      "url": "https://fisiorobertadomiciliar.com.br/sobre"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Físio Roberta Domiciliar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fisiorobertadomiciliar.com.br/logo.png"
      }
    },
    "datePublished": post.created_at,
    "dateModified": post.created_at,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://fisiorobertadomiciliar.com.br/blog/${post.slug}`
    }
  };

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      <SEO 
        title={`${post.title} - Blog Fisioterapia Barretos-SP`}
        description={post.subtitle || post.content.substring(0, 155)}
        keywords={`${post.category}, fisioterapia domiciliar barretos, blog fisioterapia, dicas cuidados idosos`}
        canonicalUrl={`https://fisiorobertadomiciliar.com.br/blog/${post.slug}`}
      />
      
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumb items={[
        { label: "Blog", href: "/blog" },
        { label: post.category, href: `/blog/categoria/${post.category.toLowerCase().replace(/\s+/g, '-')}` },
        { label: post.title }
      ]} />

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
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-foreground mb-4 text-3xl md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            
            {post.subtitle && (
              <p className="text-xl text-muted-foreground mb-6">
                {post.subtitle}
              </p>
            )}

            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Roberta Rocha</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.created_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.read_time} min de leitura</span>
              </div>
            </div>

            {/* Social Share */}
            <SocialShare title={post.title} url={`/blog/${post.slug}`} />
          </header>

          {/* Featured Image */}
          {post.image_url && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-elegant max-w-4xl mx-auto">
              <img
                src={post.image_url}
                alt={`${post.title} - Artigo sobre fisioterapia domiciliar em Barretos-SP por Roberta Rocha, fisioterapeuta especializada`}
                className="w-full h-auto object-cover"
                loading="lazy"
                width="1200"
                height="630"
              />
            </div>
          )}

          {/* Article Content */}
          <article 
            className="prose prose-lg max-w-none mb-16
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:text-primary prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
              prose-h3:text-2xl prose-h3:text-foreground prose-h3:mt-8 prose-h3:mb-4 prose-h3:leading-snug
              prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:my-6 prose-ul:text-foreground/90
              prose-ol:my-6 prose-ol:text-foreground/90
              prose-li:my-2 prose-li:text-base
              prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center mb-16 border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Precisa de Fisioterapia Domiciliar em Barretos?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Agende sua avaliação personalizada no conforto do seu lar. Atendimento humanizado com foco em resultados.
            </p>
            <Button asChild size="lg">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar Avaliação
              </a>
            </Button>
          </div>

          {/* Related Posts */}
          <RelatedPosts currentSlug={post.slug} category={post.category} />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
