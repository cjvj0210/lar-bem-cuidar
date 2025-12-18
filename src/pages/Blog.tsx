import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Link, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import BlogSidebar from "@/components/blog/BlogSidebar";

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

const Blog = () => {
  const { categoria } = useParams<{ categoria?: string }>();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todas");
  const [sortBy, setSortBy] = useState("recentes");

  const categories = [
    "Fisioterapia Geriátrica",
    "Fisioterapia Neurológica",
    "Dicas de Saúde",
    "Reabilitação",
    "Prevenção de Quedas",
    "Fisioterapia Ortopédica",
    "Fisioterapia Respiratória",
    "Preços e Orçamentos",
    "Comparativos"
  ];

  // Set category from URL param
  useEffect(() => {
    if (categoria) {
      const categoryName = categories.find(
        cat => cat.toLowerCase().replace(/\s+/g, '-') === categoria
      );
      if (categoryName) {
        setSelectedCategory(categoryName);
      }
    }
  }, [categoria]);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    filterAndSortPosts();
  }, [posts, searchTerm, selectedCategory, sortBy]);

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

  const filterAndSortPosts = () => {
    let filtered = [...posts];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.subtitle?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "todas") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Sort posts
    if (sortBy === "recentes") {
      filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    } else if (sortBy === "antigos") {
      filtered.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
    }

    setFilteredPosts(filtered);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      <SEO 
        title={categoria ? `${selectedCategory} - Blog Fisioterapia Barretos-SP` : "Blog de Fisioterapia - Dicas e Informações | Barretos-SP"}
        description="Artigos sobre fisioterapia domiciliar, cuidados com idosos e reabilitação em Barretos-SP. Dicas práticas da fisioterapeuta Roberta Rocha. Leia agora!"
        keywords="blog fisioterapia barretos, artigos fisioterapia, dicas cuidados idosos, reabilitação domiciliar"
        canonicalUrl={categoria ? `https://fisiorobertadomiciliar.com/blog/categoria/${categoria}` : "https://fisiorobertadomiciliar.com/blog"}
      />
      <Breadcrumb items={categoria 
        ? [{ label: "Blog", href: "/blog" }, { label: selectedCategory }]
        : [{ label: "Blog" }]
      } />
      
      <section className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-primary mb-4">
              {categoria ? `${selectedCategory} - Blog Fisioterapia Barretos-SP` : "Blog de Fisioterapia - Dicas e Informações | Barretos-SP"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {categoria 
                ? `Artigos sobre ${selectedCategory.toLowerCase()} em Barretos-SP. Dicas práticas da fisioterapeuta Roberta Rocha.`
                : "Artigos sobre fisioterapia domiciliar, cuidados com idosos e reabilitação. Dicas práticas da fisioterapeuta Roberta Rocha."}
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[250px]">
                  <SelectValue placeholder="Todas as categorias" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas as categorias</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recentes">Mais recentes</SelectItem>
                  <SelectItem value="antigos">Mais antigos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-[1fr_350px] gap-12">
            {/* Posts Grid */}
            <div>
              {loading ? (
                <p className="text-center text-muted-foreground">Carregando posts...</p>
              ) : filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    {searchTerm || selectedCategory !== "todas" 
                      ? "Nenhum artigo encontrado com os filtros selecionados."
                      : "Ainda não publiquei nenhum conteúdo, mas em breve teremos dicas valiosas por aqui!"}
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredPosts.map((post, index) => (
                    <Link 
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="block group"
                    >
                      <Card 
                        className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in flex flex-col overflow-hidden"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {post.image_url && (
                          <div className="w-full h-48 overflow-hidden">
                            <img 
                              src={post.image_url} 
                              alt={`${post.title} - Artigo de fisioterapia domiciliar em Barretos-SP por Roberta Rocha`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                              width="600"
                              height="400"
                            />
                          </div>
                        )}
                        <CardHeader className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                              {post.category}
                            </span>
                          </div>
                          <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                          {post.subtitle && (
                            <CardDescription className="line-clamp-2">
                              {post.subtitle}
                            </CardDescription>
                          )}
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.created_at)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{post.read_time} min</span>
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground"
                          >
                            Ler mais
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <BlogSidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
