import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "5 Exercícios Simples para Fazer em Casa",
      description: "Movimentos suaves que ajudam a manter a mobilidade e prevenir quedas.",
      date: "15 de março, 2024",
      readTime: "5 min",
      content: "Manter-se ativo em casa é fundamental para preservar a saúde e a independência..."
    },
    {
      title: "A Importância da Fisioterapia Respiratória",
      description: "Como técnicas respiratórias podem melhorar a qualidade de vida.",
      date: "10 de março, 2024",
      readTime: "4 min",
      content: "A fisioterapia respiratória é essencial para quem enfrenta desafios respiratórios..."
    },
    {
      title: "Recuperação Após AVC: Um Caminho de Esperança",
      description: "Entenda como a fisioterapia domiciliar auxilia na reabilitação neurológica.",
      date: "5 de março, 2024",
      readTime: "6 min",
      content: "A recuperação após um AVC é uma jornada que requer paciência, técnica e dedicação..."
    }
  ];

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-primary mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Dicas, orientações e histórias para cuidar melhor da sua saúde e bem-estar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card 
                key={index}
                className="hover:shadow-soft transition-smooth hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-foreground">{post.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.content}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
