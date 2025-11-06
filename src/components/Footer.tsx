import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-primary-foreground font-bold">FR</span>
              </div>
              <div>
                <h3 className="font-bold">Físio Roberta</h3>
                <p className="text-sm text-primary-foreground/80">Atendimento Domiciliar</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Fisioterapia especializada no conforto do seu lar, com técnica, empatia e dedicação.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#inicio" className="hover:text-primary-foreground transition-smooth">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-primary-foreground transition-smooth">
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary-foreground transition-smooth">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-primary-foreground transition-smooth">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary-foreground transition-smooth">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Barretos - SP e região</li>
              <li>(17) 99123-4567</li>
              <li>contato@fisioroberta.com.br</li>
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
