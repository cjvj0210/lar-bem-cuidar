import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Brain, UserCircle, Stethoscope, Phone, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import WhyChooseRoberta from "@/components/WhyChooseRoberta";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import UrgencyBanner from "@/components/cro/UrgencyBanner";
import SocialProof from "@/components/cro/SocialProof";
import Guarantees from "@/components/cro/Guarantees";
import ComparisonTable from "@/components/cro/ComparisonTable";
import heroImage from "@/assets/treatment-elderly-band.jpg";
import robertaPortrait from "@/assets/roberta-profile.jpg";

const Home = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness", "Physiotherapist"],
    "name": "Roberta Rocha - Fisioterapia Domiciliar",
    "alternateName": "Físio Roberta Domiciliar",
    "description": "Fisioterapia domiciliar premium em Barretos-SP. Especializada em atendimento para idosos, reabilitação pós-operatória e fisioterapia neurológica. 13 anos de experiência com atendimento humanizado de 60 minutos.",
    "image": "https://www.fisiorobertadomiciliar.com/logo.png",
    "logo": "https://www.fisiorobertadomiciliar.com/logo.png",
    "url": "https://www.fisiorobertadomiciliar.com",
    "telephone": "+5517982123269",
    "email": "fisiorobertarochadomiciliar@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Barretos",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -20.5577,
      "longitude": -48.5682
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -20.5577,
        "longitude": -48.5682
      },
      "geoRadius": "6000"
    },
    "priceRange": "R$ 140 - R$ 180",
    "paymentAccepted": "Dinheiro, PIX, Cartão de Crédito, Cartão de Débito",
    "currenciesAccepted": "BRL",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "4"
    },
    "sameAs": [
      "https://www.instagram.com/fisiorobertadomiciliar",
      "https://www.facebook.com/fisiorobertadomiciliar"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Fisioterapia Domiciliar",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Avaliação Inicial de Fisioterapia",
            "description": "Avaliação completa de 60 minutos com anamnese, exame físico e plano de tratamento personalizado"
          },
          "price": "150",
          "priceCurrency": "BRL"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sessão Avulsa de Fisioterapia Domiciliar",
            "description": "Sessão individual de 60 minutos com todos os equipamentos inclusos"
          },
          "price": "180",
          "priceCurrency": "BRL"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pacote 8 Sessões/Mês",
            "description": "2x por semana - Ideal para manutenção e prevenção"
          },
          "price": "1200",
          "priceCurrency": "BRL"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pacote 12 Sessões/Mês",
            "description": "3x por semana - Recomendado para reabilitação intensiva"
          },
          "price": "1680",
          "priceCurrency": "BRL"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Como funciona o atendimento de fisioterapia domiciliar em Barretos-SP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O atendimento domiciliar é realizado na casa do paciente, em horários flexíveis. Levo todos os equipamentos necessários e realizo avaliação individualizada para criar um plano personalizado de tratamento focado nas suas necessidades específicas. As sessões têm duração de 60 minutos completos."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o valor da avaliação de fisioterapia domiciliar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A avaliação inicial custa R$ 150 e tem duração de 60 minutos. Inclui anamnese completa, avaliação física detalhada e orientações personalizadas para o tratamento. Sessões avulsas custam R$ 180. Oferecemos pacotes mensais: 8 sessões por R$ 1.200 (R$ 150/sessão) ou 12 sessões por R$ 1.680 (R$ 140/sessão)."
        }
      },
      {
        "@type": "Question",
        "name": "Quais condições são tratadas pela fisioterapia domiciliar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Atendo principalmente idosos com dificuldade de locomoção, pacientes em reabilitação pós-operatória (próteses, fraturas, cirurgias), sequelas de AVC, Parkinson, Alzheimer, condições ortopédicas e respiratórias (DPOC, asma, pós-COVID). Cada tratamento é personalizado conforme as necessidades do paciente."
        }
      },
      {
        "@type": "Question",
        "name": "Atende em quais bairros de Barretos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Atendo em raio de 6km a partir do centro de Barretos-SP. Bairros prioritários: Primavera, City Barretos, Jardim Botânico, Tamboré, Centro, Jardim Eldorado, Vila Planalto e Jardim Progresso. Não encontrou seu bairro? Entre em contato para confirmar disponibilidade."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso ter equipamentos em casa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. Levo todos os equipamentos profissionais necessários para o atendimento (therabands, halteres, bolas, bastões, etc.). Também utilizo móveis da casa (cadeiras, cama) para tornar os exercícios mais funcionais e adaptados ao seu ambiente."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo dura cada sessão?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cada sessão tem duração de 60 minutos completos, garantindo tempo adequado para avaliação, exercícios terapêuticos, orientações e atendimento humanizado. Diferente de clínicas que oferecem 30-40 minutos, aqui você tem uma hora inteira dedicada ao seu tratamento."
        }
      },
      {
        "@type": "Question",
        "name": "Como agendar uma avaliação?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Você pode agendar pelo WhatsApp (17) 98212-3269 ou pelo formulário no site. Respondo em até 10 minutos durante horário comercial. A primeira avaliação não tem compromisso e você pode cancelar gratuitamente até 24h antes."
        }
      },
      {
        "@type": "Question",
        "name": "A fisioterapia domiciliar é indicada para idosos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! A fisioterapia domiciliar é especialmente indicada para idosos, pois elimina o risco de quedas no deslocamento, oferece maior conforto no ambiente familiar, permite exercícios adaptados ao espaço da casa e aumenta significativamente a adesão ao tratamento. Sou especializada em fisioterapia geriátrica com 13 anos de experiência."
        }
      }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Roberta Rocha",
    "jobTitle": "Fisioterapeuta",
    "description": "Fisioterapeuta com 13 anos de experiência em Barretos-SP, especializada em fisioterapia domiciliar para idosos e pacientes neurológicos. CREFITO-3: 189269-F.",
    "url": "https://www.fisiorobertadomiciliar.com",
    "email": "fisiorobertarochadomiciliar@gmail.com",
    "telephone": "+5517982123269",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Barretos",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Roberta Rocha - Fisioterapia Domiciliar"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "CREFITO-3"
      },
      "identifier": "189269-F"
    },
    "knowsAbout": [
      "Fisioterapia Geriátrica",
      "Fisioterapia Neurológica",
      "Reabilitação Pós-Operatória",
      "Fisioterapia Respiratória",
      "Fisioterapia Domiciliar"
    ],
    "sameAs": [
      "https://www.instagram.com/fisiorobertadomiciliar",
      "https://www.facebook.com/fisiorobertadomiciliar"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://www.fisiorobertadomiciliar.com"
      }
    ]
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <SEO 
        title="Fisioterapia Domiciliar em Barretos-SP | Roberta Rocha - 13 Anos de Experiência"
        description="Fisioterapia domiciliar premium em Barretos-SP. 13 anos de experiência em idosos, neurológica e pós-operatória. Avaliação R$ 150. Agende agora!"
        keywords="fisioterapia domiciliar barretos, fisioterapeuta para idosos barretos, fisioterapia geriátrica barretos, reabilitação pós-operatória barretos, fisioterapia neurológica barretos"
        canonicalUrl="https://fisiorobertadomiciliar.com.br/"
        schema={[localBusinessSchema, faqSchema, personSchema, breadcrumbSchema]}
      />
      {/* Hero Section */}
      <UrgencyBanner />
      <section className="relative pt-24 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium text-foreground">
                  ⭐ 5.0 - 4 avaliações Google
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Fisioterapia Domiciliar Premium em Barretos-SP
              </h1>

              <p className="text-xl text-muted-foreground">
                13 anos cuidando de idosos e pacientes neurológicos no conforto da sua casa
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/agendar" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 text-lg bg-primary hover:bg-primary/90"
                  >
                    Agende Sua Avaliação
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 text-lg border-2 border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open("https://wa.me/5517982123269?text=Olá! Gostaria de mais informações sobre fisioterapia domiciliar em Barretos.", "_blank")}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Fale no WhatsApp
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4 border-t border-border">
                <div>
                  <p className="text-3xl font-bold text-primary">13</p>
                  <p className="text-sm text-muted-foreground">Anos de Experiência</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">287</p>
                  <p className="text-sm text-muted-foreground">Pacientes Atendidos</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfação</p>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img
                src={heroImage}
                alt="Fisioterapeuta Roberta Rocha atendendo paciente idosa com exercícios em Barretos-SP"
                className="relative rounded-3xl shadow-elegant w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Escolher Roberta */}
      <WhyChooseRoberta />

      {/* Prova Social */}
      <SocialProof />

      {/* Garantias */}
      <Guarantees />

      {/* Sobre Roberta */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl"></div>
              <img
                src={robertaPortrait}
                alt="Roberta Rocha - Fisioterapeuta especializada em atendimento domiciliar em Barretos-SP"
                className="relative rounded-3xl shadow-elegant w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Sobre Roberta Rocha
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                Sou Roberta Rocha, fisioterapeuta com 13 anos de experiência em Barretos-SP, 
                especializada em fisioterapia domiciliar para idosos e pacientes neurológicos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Minha missão é devolver movimento, autonomia e qualidade de vida para quem mais precisa, 
                com um atendimento humanizado e baseado em evidências científicas.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">CREFITO-3:</strong> 189269-F
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Especializações:</strong> Fisioterapia Geriátrica, Neurológica e Respiratória
                </p>
              </div>
              <Link to="/sobre">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10"
                >
                  Conheça Minha História
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serviços de Fisioterapia Domiciliar em Barretos
            </h2>
            <p className="text-lg text-muted-foreground">
              Tratamentos especializados no conforto da sua casa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:shadow-elegant transition-smooth hover:-translate-y-1 group">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <UserCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-center">
                  Fisioterapia Geriátrica
                </h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Prevenção de quedas, fortalecimento e autonomia para idosos
                </p>
                <Link to="/servicos/fisioterapia-geriatrica" className="block">
                  <Button 
                    variant="ghost" 
                    className="w-full text-primary hover:bg-primary/10"
                  >
                    Saiba Mais
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-elegant transition-smooth hover:-translate-y-1 group">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-center">
                  Reabilitação Pós-Operatória
                </h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Recuperação após cirurgias ortopédicas e próteses
                </p>
                <Link to="/servicos/reabilitacao-pos-operatoria" className="block">
                  <Button 
                    variant="ghost" 
                    className="w-full text-primary hover:bg-primary/10"
                  >
                    Saiba Mais
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-elegant transition-smooth hover:-translate-y-1 group">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-center">
                  Fisioterapia Neurológica
                </h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Tratamento de AVC, Parkinson, Alzheimer e mais
                </p>
                <Link to="/servicos/fisioterapia-neurologica" className="block">
                  <Button 
                    variant="ghost" 
                    className="w-full text-primary hover:bg-primary/10"
                  >
                    Saiba Mais
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-elegant transition-smooth hover:-translate-y-1 group">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-center">
                  Fisioterapia Respiratória
                </h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Melhora da capacidade pulmonar e respiração
                </p>
                <Link to="/servicos/fisioterapia-respiratoria" className="block">
                  <Button 
                    variant="ghost" 
                    className="w-full text-primary hover:bg-primary/10"
                  >
                    Saiba Mais
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tabela de Comparação */}
      <ComparisonTable />

      {/* Depoimentos */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              O que Nossos Pacientes Dizem
            </h2>
            <p className="text-lg text-muted-foreground">
              Histórias reais de recuperação e cuidado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="flex gap-1 justify-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mx-auto" />
                <p className="text-foreground italic text-center min-h-[100px]">
                  "Excelente profissional! Minha mãe melhorou muito após as sessões. Recomendo!"
                </p>
                <div className="text-center pt-4 border-t">
                  <p className="font-semibold text-foreground">Edna Aparecida</p>
                  <p className="text-sm text-muted-foreground">Filha de paciente</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="flex gap-1 justify-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mx-auto" />
                <p className="text-foreground italic text-center min-h-[100px]">
                  "Tratamento humanizado e eficiente. Minha recuperação foi muito mais rápida!"
                </p>
                <div className="text-center pt-4 border-t">
                  <p className="font-semibold text-foreground">Tania Maria</p>
                  <p className="text-sm text-muted-foreground">Paciente</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="flex gap-1 justify-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mx-auto" />
                <p className="text-foreground italic text-center min-h-[100px]">
                  "Profissional competente e carinhosa. Fez toda diferença na recuperação do meu pai."
                </p>
                <div className="text-center pt-4 border-t">
                  <p className="font-semibold text-foreground">Gabriela Ramos</p>
                  <p className="text-sm text-muted-foreground">Filha de paciente</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/depoimentos">
              <Button 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10"
              >
                Ver mais no Google
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Área de Atendimento */}
      <ServiceArea />

      {/* Investimento / Preços */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Investimento em Fisioterapia Domiciliar
            </h2>
            <p className="text-lg text-muted-foreground">
              Transparência e clareza nos valores. Confira nossos preços e escolha o melhor plano para você.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Avaliação Inicial</h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-primary">R$ 150</span>
                    <span className="text-muted-foreground">/ 60 minutos</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Avaliação completa com anamnese, exame físico e plano de tratamento personalizado
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Sessão Avulsa</h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-primary">R$ 180</span>
                    <span className="text-muted-foreground">/ 60 minutos</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sessão individual de fisioterapia domiciliar com todos os equipamentos inclusos
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary text-primary-foreground inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    Mais Popular
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Pacote 8 Sessões/Mês</h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-primary">R$ 150</span>
                    <span className="text-muted-foreground">/ sessão</span>
                  </div>
                  <p className="text-sm font-semibold text-primary mb-3">
                    Total: R$ 1.200/mês
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2x por semana - Ideal para manutenção e prevenção
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary text-primary-foreground inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    Melhor Custo-Benefício
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Pacote 12 Sessões/Mês</h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-primary">R$ 140</span>
                    <span className="text-muted-foreground">/ sessão</span>
                  </div>
                  <p className="text-sm font-semibold text-primary mb-3">
                    Total: R$ 1.680/mês
                  </p>
                  <p className="text-sm text-muted-foreground">
                    3x por semana - Recomendado para reabilitação intensiva
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted/50 border-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                  O que está incluso?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <span className="text-muted-foreground">Equipamentos profissionais inclusos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <span className="text-muted-foreground">Atendimento de 60 minutos completos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <span className="text-muted-foreground">Relatório de evolução mensal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <span className="text-muted-foreground">Dinheiro, PIX ou cartão de crédito/débito</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Link to="/agendar">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg"
                >
                  Solicitar Orçamento Personalizado
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground mt-3">
                Condições especiais para pacotes personalizados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Pronto para Melhorar Sua Qualidade de Vida?
            </h2>
            <p className="text-xl text-muted-foreground">
              Agende sua avaliação de fisioterapia domiciliar hoje mesmo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agendar">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-lg bg-primary hover:bg-primary/90"
                >
                  Agendar Agora
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 text-lg border-2 border-primary text-primary hover:bg-primary/10"
                onClick={() => window.open("https://wa.me/5517982123269?text=Olá! Gostaria de mais informações sobre fisioterapia domiciliar em Barretos.", "_blank")}
              >
                <Phone className="mr-2 w-5 h-5" />
                WhatsApp
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Atendimento domiciliar premium em Barretos-SP • <a href="tel:+5517982123269" className="hover:text-primary transition-colors">(17) 98212-3269</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
