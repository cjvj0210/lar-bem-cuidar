import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-smooth">
            <img 
              src="/logo.png" 
              alt="Roberta Rocha Fisioterapeuta" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground">Físio Roberta</h1>
              <p className="text-xs md:text-sm text-muted-foreground">Atendimento Domiciliar</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-smooth ${
                isActive("/") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Início
            </Link>
            <Link
              to="/sobre"
              className={`transition-smooth ${
                isActive("/sobre") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Sobre Mim
            </Link>
            <Link
              to="/servicos"
              className={`transition-smooth ${
                isActive("/servicos") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Serviços
            </Link>
            <Link
              to="/depoimentos"
              className={`transition-smooth ${
                isActive("/depoimentos") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Depoimentos
            </Link>
            <Link
              to="/contato"
              className={`transition-smooth ${
                isActive("/contato") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Contato
            </Link>
            <Link
              to="/blog"
              className={`transition-smooth ${
                isActive("/blog") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Blog
            </Link>
            <Button
              onClick={() => window.open("https://wa.me/5517982123269", "_blank")}
              className="bg-primary hover:bg-primary/90"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 border-t border-border animate-fade-in">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left transition-smooth ${
                isActive("/") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Início
            </Link>
            <Link
              to="/sobre"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left transition-smooth ${
                isActive("/sobre") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Sobre Mim
            </Link>
            <Link
              to="/servicos"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left transition-smooth ${
                isActive("/servicos") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Serviços
            </Link>
            <Link
              to="/depoimentos"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left transition-smooth ${
                isActive("/depoimentos") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Depoimentos
            </Link>
            <Link
              to="/contato"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left transition-smooth ${
                isActive("/contato") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Contato
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left transition-smooth ${
                isActive("/blog") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Blog
            </Link>
            <Button
              onClick={() => window.open("https://wa.me/5517982123269", "_blank")}
              className="w-full bg-primary hover:bg-primary/90"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
