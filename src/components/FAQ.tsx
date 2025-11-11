import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o atendimento de fisioterapia domiciliar em Barretos-SP?",
      answer: "O atendimento domiciliar é realizado na casa do paciente, em horários flexíveis. Levo todos os equipamentos necessários e realizo avaliação individualizada para criar um plano personalizado de tratamento focado nas suas necessidades específicas."
    },
    {
      question: "Qual o valor da avaliação de fisioterapia domiciliar?",
      answer: "A avaliação inicial custa R$ 150 e tem duração de 60 minutos. Inclui anamnese completa, avaliação física detalhada e orientações personalizadas para o tratamento."
    },
    {
      question: "Quais condições são tratadas pela fisioterapia domiciliar?",
      answer: "Atendo principalmente idosos com dificuldade de locomoção, pacientes em reabilitação pós-operatória, sequelas de AVC, Parkinson, Alzheimer, condições ortopédicas (fraturas, próteses) e respiratórias."
    },
    {
      question: "Atende em quais bairros de Barretos?",
      answer: "Atendo em diversos bairros de Barretos-SP, incluindo Primavera, City Barretos, Centro, Jardim Eldorado, Vila Planalto, Jardim Botânico, Tamboré e região. O raio de atendimento é de 6km a partir do centro."
    },
    {
      question: "Preciso ter equipamentos em casa?",
      answer: "Não! Levo todos os equipamentos profissionais necessários para o atendimento. Você não precisa se preocupar com nada, apenas com sua recuperação e bem-estar."
    },
    {
      question: "Quanto tempo dura cada sessão?",
      answer: "Cada sessão tem duração de 60 minutos completos, tempo adequado para um atendimento humanizado, personalizado e eficiente, respeitando suas limitações e necessidades."
    },
    {
      question: "Como agendar uma avaliação?",
      answer: "Você pode agendar pelo WhatsApp <a href='tel:+5517982123269' class='text-primary hover:underline'>(17) 98212-3269</a> ou pelo formulário de contato no site. Respondo rapidamente e agendamos um horário conveniente para você ou seu familiar."
    },
    {
      question: "A fisioterapia domiciliar é indicada para idosos?",
      answer: "Sim! A fisioterapia domiciliar é altamente recomendada para idosos, especialmente aqueles com dificuldade de locomoção. O tratamento no conforto de casa reduz riscos, aumenta a adesão e proporciona mais segurança e conforto."
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre fisioterapia domiciliar em Barretos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border-2 rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
