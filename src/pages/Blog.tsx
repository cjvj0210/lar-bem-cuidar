import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, MessageCircle } from "lucide-react";

const Blog = () => {
  const whatsappLink = "https://wa.me/5517991234567";

  const posts = [
    {
      title: "5 exercícios simples para fazer em casa com segurança",
      description: "Movimentos suaves e eficazes que ajudam a manter a mobilidade, fortalecer o corpo e prevenir quedas.",
      date: "Há 3 dias",
      readTime: "5 min",
      content: "Manter-se ativo em casa é fundamental para preservar a saúde e a independência. Descubra exercícios que podem ser realizados com segurança, sem equipamentos especiais."
    },
    {
      title: "Como prevenir quedas na terceira idade?",
      description: "Dicas práticas e orientações para tornar o ambiente doméstico mais seguro e prevenir acidentes.",
      date: "Semana passada",
      readTime: "6 min",
      content: "A prevenção de quedas é fundamental para a qualidade de vida dos idosos. Pequenas mudanças no ambiente e exercícios específicos podem fazer toda a diferença."
    },
    {
      title: "Fisioterapia após AVC: o que esperar?",
      description: "Entenda como a fisioterapia neurológica auxilia na recuperação e reabilitação após um AVC.",
      date: "Há 2 semanas",
      readTime: "7 min",
      content: "A recuperação após um AVC é uma jornada que requer paciência, técnica e dedicação. A fisioterapia domiciliar oferece um caminho de esperança e progresso real."
    },
    {
      title: "Cuidar de quem cuida: a importância do descanso do cuidador",
      description: "Como familiares e cuidadores podem preservar sua própria saúde física e emocional.",
      date: "Há 3 semanas",
      readTime: "5 min",
      content: "Cuidar de alguém que amamos é uma tarefa nobre, mas também exigente. É fundamental que o cuidador também cuide de si mesmo para continuar oferecendo o melhor."
    },
    {
      title: "A diferença entre fisioterapia ortopédica e neurológica",
      description: "Conheça as particularidades de cada abordagem e qual pode ser mais adequada para você.",
      date: "Há 1 mês",
      readTime: "6 min",
      content: "Cada especialidade fisioterapêutica tem suas técnicas e objetivos específicos. Entender essas diferenças ajuda a tomar decisões mais conscientes sobre o tratamento."
    }
  ];

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
            {posts.map((post, index) => (
              <Card 
                key={index}
                className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-[1.03] animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-foreground text-xl leading-snug">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-muted-foreground line-clamp-3 flex-1">
                    {post.content}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t">
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
            ))}
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
