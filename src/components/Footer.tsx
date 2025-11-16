import { Heart, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { trackPhoneClick } from "@/lib/analytics";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo" aria-label="Rodapé do site">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Logo Roberta Rocha Fisioterapeuta" 
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

          <nav aria-label="Links rápidos do rodapé">
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link 
                  to="/" 
                  className="hover:text-primary-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre" 
                  className="hover:text-primary-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicos" 
                  className="hover:text-primary-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                  to="/depoimentos" 
                  className="hover:text-primary-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato" 
                  className="hover:text-primary-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="hover:text-primary-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <address className="not-italic space-y-2 text-sm text-primary-foreground/80">
              <p>Barretos-SP</p>
              <p>
                <a 
                  href="tel:+5517982123269" 
                  className="hover:text-primary-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
                  aria-label="Ligar para (17) 98212-3269"
                  onClick={() => trackPhoneClick()}
                >
                  (17) 98212-3269
                </a>
              </p>
              <p>
                <a 
                  href="mailto:fisiorobertarochadomiciliar@gmail.com" 
                  className="hover:text-primary-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded break-all"
                  aria-label="Enviar email para fisiorobertarochadomiciliar@gmail.com"
                >
                  fisiorobertarochadomiciliar@gmail.com
                </a>
              </p>
            </address>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/fisiorobertadomiciliar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
                  aria-label="Visitar perfil no Instagram - @fisiorobertadomiciliar (abre em nova aba)"
                >
                  <Instagram className="w-6 h-6" aria-hidden="true" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61553900038660" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
                  aria-label="Visitar perfil no Facebook - Físio Roberta Domiciliar (abre em nova aba)"
                >
                  <Facebook className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p className="flex items-center justify-center">
            Feito com <Heart className="w-4 h-4 mx-2 text-red-400" aria-label="amor" /> para cuidar de você
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
