import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Clock } from "lucide-react";

interface RelatedPost {
  slug: string;
  title: string;
  subtitle: string | null;
  image_url: string | null;
  read_time: number;
  created_at: string;
}

interface RelatedPostsProps {
  currentSlug: string;
  category: string;
}

const RelatedPosts = ({ currentSlug, category }: RelatedPostsProps) => {
  const [posts, setPosts] = useState<RelatedPost[]>([]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      const { data } = await supabase
        .from('blog_posts')
        .select('slug, title, subtitle, image_url, read_time, created_at')
        .eq('published', true)
        .eq('category', category)
        .neq('slug', currentSlug)
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (data) setPosts(data);
    };

    fetchRelatedPosts();
  }, [currentSlug, category]);

  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t border-border">
      <h2 className="text-3xl font-bold text-primary mb-8">Artigos Relacionados</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block group"
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              {post.image_url && (
                <div className="w-full h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width={400}
                    height={300}
                    decoding="async"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {post.subtitle && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {post.subtitle}
                  </p>
                )}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{post.read_time} min de leitura</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
