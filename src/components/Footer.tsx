import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Roberta Rocha Fisioterapeuta" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-bold">Físio Roberta</h3>
                <p className="text-sm text-primary-foreground/80">Atendimento Domiciliar</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Atendimento domiciliar de fisioterapia exclusivo em Barretos-SP — com técnica, empatia e dedicação.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/" className="hover:text-primary-foreground transition-smooth">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-primary-foreground transition-smooth">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-primary-foreground transition-smooth">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/depoimentos" className="hover:text-primary-foreground transition-smooth">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-primary-foreground transition-smooth">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary-foreground transition-smooth">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Barretos-SP</li>
              <li>(17) 98212-3269</li>
              <li>fisiorobertarochadomiciliar@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p className="flex items-center justify-center">
            Feito com <Heart className="w-4 h-4 mx-2 text-red-400" /> para cuidar de você
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Físio Roberta Domiciliar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
