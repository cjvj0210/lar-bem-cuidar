import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Página não encontrada - 404"
        description="A página que você procura não existe. Volte para a página inicial da Fisioterapia Domiciliar Barretos-SP."
        canonicalUrl="https://fisiorobertadomiciliar.com/404"
      />
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center max-w-md animate-fade-in">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Página não encontrada</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Button asChild size="lg">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Voltar para o Início
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
