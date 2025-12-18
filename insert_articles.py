#!/usr/bin/env python3
"""
Script para inserir os 2 novos artigos do blog no Supabase
"""

import requests
import json

# Configurações do Supabase
SUPABASE_URL = "https://dudlenfeqtungijxhvpa.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1ZGxlbmZlcXR1bmdpanhodnBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2Mjg1MjMsImV4cCI6MjA3ODIwNDUyM30.e62DsqpsrcQ4ZbCGEbOnWzvjpwvqB6KvBuYSH4a9OYc"

# URLs das imagens
IMG_DOR_COSTAS = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663208695668/oGCLqICpcsdkZWEe.jpg"
IMG_FISIO_DOMICILIAR = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663208695668/bOsaaVIyTLKVwxTX.jpg"
IMG_EQUILIBRIO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663208695668/dCxXQGnYFJfLKFrU.jpg"
IMG_FISIO_SENIOR = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663208695668/UTpelDNHJUHZUtfC.jpg"

# Artigo 1: 8 Mitos sobre Dor nas Costas
artigo_dor_costas = {
    "slug": "8-mitos-dor-costas-barretos",
    "title": "8 Mitos Sobre Dor nas Costas que Você Precisa Parar de Acreditar em Barretos",
    "subtitle": "Um neurocirurgião da Mayo Clinic revela as verdades sobre dor lombar e como a fisioterapia domiciliar em Barretos pode ser a solução definitiva.",
    "category": "Dicas de Saúde",
    "image_url": IMG_DOR_COSTAS,
    "read_time": 8,
    "published": True,
    "content": """## A Verdade Sobre Sua Dor nas Costas: O Que a Ciência Diz e Como a Fisioterapia em Barretos Pode Ajudar

A dor nas costas é uma das queixas mais comuns em consultórios médicos e uma das principais causas de incapacidade no mundo. Em Barretos, a realidade não é diferente. Muitos sofrem em silêncio, acreditando em conselhos ultrapassados que mais atrapalham do que ajudam.

Recentemente, um neurocirurgião da renomada **Mayo Clinic** desvendou 8 mitos persistentes sobre a dor lombar. Vamos quebrar essas crenças e mostrar como a abordagem correta, com fisioterapia domiciliar especializada, pode transformar sua qualidade de vida.

![Idoso com dor nas costas](""" + IMG_DOR_COSTAS + """)
*Entender a complexidade da coluna é o primeiro passo para um tratamento eficaz.*

---

### Mito 1: Se você está com dor, deve ficar de cama e repousar.

**A VERDADE:** O repouso absoluto é um dos piores inimigos da sua recuperação. Ficar parado por mais de 1 ou 2 dias pode, na verdade, **piorar a dor** e levar à rigidez e fraqueza muscular. O movimento controlado e orientado é essencial para a cura.

> **Movimento é remédio.** A fisioterapia introduz exercícios leves e progressivos que fortalecem a musculatura de suporte da coluna, melhorando a circulação e acelerando a recuperação.

### Mito 2: Levantar peso é sempre a causa da dor nas costas.

**A VERDADE:** Embora levantar um objeto pesado de forma incorreta possa causar uma lesão aguda, a maioria das dores lombares (cerca de 85%) é **inespecífica**, ou seja, não vem de um único evento, mas sim de um acúmulo de fatores como má postura, fraqueza muscular e sedentarismo.

### Mito 3: A dor é sempre sinal de uma lesão grave na coluna.

**A VERDADE:** Na grande maioria dos casos, a dor não está relacionada a condições graves como fraturas ou tumores. Geralmente, é uma questão muscular ou ligamentar. A intensidade da dor nem sempre corresponde à gravidade da lesão.

![Fisioterapia domiciliar em Barretos](""" + IMG_FISIO_DOMICILIAR + """)
*Roberta Rocha realizando avaliação completa no conforto do lar do paciente em Barretos.*

### Mito 4: Preciso de um exame de imagem (Raio-X, Ressonância) imediatamente.

**A VERDADE:** Exames de imagem só são necessários se houver "bandeiras vermelhas" (sinais de alerta para condições graves). Estudos mostram que alterações como "bicos de papagaio" ou pequenas hérnias de disco são comuns até em pessoas **sem dor** e nem sempre são a causa do problema. O tratamento deve focar nos sintomas e na função, não apenas na imagem.

### Mito 5: Hérnia de disco sempre exige cirurgia.

**A VERDADE:** Este é um dos maiores mitos. Cerca de **90% dos casos de hérnia de disco melhoram com tratamento conservador**, como a fisioterapia. A cirurgia é o último recurso, reservado para casos específicos onde há perda de força progressiva ou alterações neurológicas graves.

### Mito 6: Exercício é perigoso para quem tem dor nas costas.

**A VERDADE:** O oposto é verdadeiro. A falta de exercício enfraquece os músculos que sustentam a coluna, piorando o quadro. Exercícios terapêuticos, prescritos por um fisioterapeuta, são a ferramenta mais poderosa para tratar e prevenir a dor lombar.

### Mito 7: Se não dói, não há problema.

**A VERDADE:** A ausência de dor não significa que a causa raiz foi resolvida. Fraqueza muscular, desequilíbrios e má postura podem permanecer, tornando as crises de dor recorrentes. A fisioterapia trabalha não só no alívio da dor, mas na correção desses desequilíbrios para uma solução duradoura.

### Mito 8: Uma vez com dor nas costas, sempre com dor nas costas.

**A VERDADE:** Absolutamente não! Com o diagnóstico correto e um plano de tratamento ativo focado em fortalecimento, flexibilidade e educação postural, é totalmente possível viver sem dor e retomar todas as suas atividades.

---

## A Solução Definitiva: Fisioterapia Domiciliar em Barretos

Percebeu como a fisioterapia é a resposta para quase todos os mitos? A abordagem moderna e baseada em evidências foca em devolver a função e a independência ao paciente.

**Vantagens da Fisioterapia Domiciliar com Roberta Rocha:**

| Vantagem | Descrição |
| :--- | :--- |
| **Comodidade** | Tratamento no conforto e segurança do seu lar, sem deslocamentos. |
| **Personalização** | O plano de tratamento é adaptado à sua realidade, usando seus móveis e seu espaço. |
| **Foco Total** | Atendimento individualizado, 100% focado em você e na sua recuperação. |
| **Segurança** | Ideal para idosos e pessoas com mobilidade reduzida, evitando riscos de transporte. |

Não deixe que mitos e informações incorretas limitem sua vida. A dor nas costas tem tratamento, e ele pode ser mais simples e eficaz do que você imagina.

**Está sofrendo com dor nas costas em Barretos?** Chega de acreditar em mitos. Vamos tratar a causa do problema com ciência e cuidado.

---

### Referências

- Mayo Clinic News Network. (2025, December 15). *A Mayo Clinic neurosurgeon reveals 8 back pain myths to stop believing*.
- Brinjikji, W., et al. (2015). *Systematic Literature Review of Imaging Features of Spinal Degeneration in Asymptomatic Populations*. American Journal of Neuroradiology."""
}

# Artigo 2: Prevenção de Quedas em Idosos
artigo_prevencao_quedas = {
    "slug": "5-exercicios-prevenir-quedas-idosos-barretos",
    "title": "Prevenção de Quedas em Idosos: 5 Exercícios Essenciais para Fazer em Casa em Barretos",
    "subtitle": "Reduza o risco de quedas em até 50% com exercícios simples e seguros, orientados por uma fisioterapeuta especialista em atendimento domiciliar em Barretos.",
    "category": "Prevenção de Quedas",
    "image_url": IMG_EQUILIBRIO,
    "read_time": 7,
    "published": True,
    "content": """## O Risco Silencioso: Como a Fisioterapia Domiciliar em Barretos Pode Salvar Vidas Através da Prevenção de Quedas

Uma queda pode parecer um acidente simples, mas para um idoso, ela representa um risco imenso à saúde, independência e qualidade de vida. A cada ano, **1 em cada 3 idosos acima de 65 anos sofre uma queda**, e muitas delas resultam em fraturas graves, hospitalizações e perda de autonomia.

Em Barretos, onde a qualidade de vida na terceira idade é uma prioridade, a prevenção é a melhor estratégia. A boa notícia? Estudos comprovam que programas de exercícios focados em equilíbrio e força, orientados por fisioterapeutas, podem **reduzir o risco de quedas em até 50%**.

Este artigo apresenta 5 exercícios essenciais, recomendados por especialistas, que podem ser realizados com segurança em casa, idealmente com a supervisão de um profissional.

![Exercícios de equilíbrio para idosos](""" + IMG_EQUILIBRIO + """)
*A fisioterapia domiciliar adapta os exercícios ao ambiente do paciente, tornando a prevenção mais eficaz e segura.*

---

### A Base da Prevenção: Por Que Esses Exercícios Funcionam?

Antes de detalhar os exercícios, é crucial entender o que causa as quedas. A perda de força muscular (sarcopenia), a diminuição do equilíbrio e a redução da flexibilidade são os principais vilões. Os exercícios a seguir atacam diretamente essas três frentes.

### Os 5 Exercícios Essenciais para Fazer em Casa

**Importante:** Antes de iniciar qualquer exercício, consulte um médico ou fisioterapeuta. Realize os movimentos de forma lenta e controlada, sempre perto de um apoio seguro (parede, cadeira firme).

#### 1. Marcha Estacionária (Aquecimento e Equilíbrio)

- **Como fazer:** De pé, segurando em uma cadeira, eleve um joelho como se estivesse marchando, mas sem sair do lugar. Alterne as pernas de forma lenta e controlada.
- **Por que funciona:** Melhora o equilíbrio dinâmico e aquece as articulações.
- **Séries e Repetições:** 2 séries de 20 passos (10 com cada perna).

![Fisioterapia domiciliar para idosos](""" + IMG_FISIO_SENIOR + """)
*Exercício de marcha estacionária, um passo fundamental para a segurança diária.*

#### 2. Sentar e Levantar da Cadeira (Força de Pernas)

- **Como fazer:** Sente-se em uma cadeira firme, com os pés apoiados no chão. Incline o tronco para frente e levante-se, usando a força das pernas. Sente-se novamente de forma controlada.
- **Por que funciona:** Fortalece os músculos das coxas e glúteos, essenciais para levantar, caminhar e subir escadas.
- **Séries e Repetições:** 2 séries de 10 repetições.

#### 3. Equilíbrio em Uma Perna Só (Equilíbrio Estático)

- **Como fazer:** De pé, ao lado de uma parede ou cadeira para apoio, levante um pé do chão e tente manter o equilíbrio por 10 a 15 segundos. Troque de perna.
- **Por que funciona:** Desafia e treina diretamente os sistemas responsáveis pelo equilíbrio.
- **Séries e Repetições:** 2 séries de 5 repetições para cada perna.

#### 4. Caminhada Calcanhar-Ponta do Pé (Equilíbrio e Coordenação)

- **Como fazer:** De pé, com a mão na parede para apoio, dê um passo à frente colocando o calcanhar de um pé bem na frente da ponta do outro pé, como em uma corda bamba.
- **Por que funciona:** Melhora a coordenação e o equilíbrio em situações de base estreita, comuns no dia a dia.
- **Séries e Repetições:** 10 passos à frente.

#### 5. Fortalecimento de Panturrilhas (Força e Impulso)

- **Como fazer:** De pé, segurando em um apoio, fique na ponta dos pés, segure por 2 segundos e desça lentamente.
- **Por que funciona:** Fortalece as panturrilhas, músculos vitais para o impulso da caminhada e para correções rápidas de desequilíbrio.
- **Séries e Repetições:** 2 séries de 15 repetições.

---

## O Papel Insubstituível da Fisioterapia Domiciliar em Barretos

Realizar esses exercícios sozinho é um bom começo, mas a supervisão de um fisioterapeuta faz toda a diferença.

**Por que escolher a fisioterapia domiciliar com Roberta Rocha?**

| Benefício | Descrição |
| :--- | :--- |
| **Avaliação de Risco** | Identificação de perigos dentro da própria casa (tapetes, iluminação, etc.). |
| **Progressão Segura** | Ajuste da dificuldade dos exercícios conforme a evolução do paciente, evitando lesões. |
| **Exercícios Corretos** | Garantia de que cada movimento está sendo executado da forma mais eficaz e segura. |
| **Motivação** | O acompanhamento profissional ajuda a manter a consistência e a disciplina. |

Investir na prevenção de quedas é investir em anos de vida com mais saúde, independência e felicidade. É a tranquilidade para a família e a liberdade para o idoso.

**Quer criar um ambiente mais seguro e um corpo mais forte para você ou para quem você ama em Barretos?**

---

### Referências

- World Health Organization (WHO). (2021). *Step safely: strategies for preventing and managing falls across the life-course*.
- Gillespie, L. D., et al. (2012). *Interventions for preventing falls in older people living in the community*. Cochrane Database of Systematic Reviews."""
}

def insert_article(article):
    """Insere um artigo no Supabase"""
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=representation"
    }
    
    response = requests.post(
        f"{SUPABASE_URL}/rest/v1/blog_posts",
        headers=headers,
        json=article
    )
    
    if response.status_code in [200, 201]:
        print(f"✅ Artigo '{article['title'][:50]}...' inserido com sucesso!")
        return True
    else:
        print(f"❌ Erro ao inserir artigo: {response.status_code}")
        print(f"   Resposta: {response.text}")
        return False

if __name__ == "__main__":
    print("=" * 60)
    print("Inserindo artigos no Supabase...")
    print("=" * 60)
    
    # Inserir artigo 1
    print("\n📝 Inserindo artigo: 8 Mitos sobre Dor nas Costas...")
    insert_article(artigo_dor_costas)
    
    # Inserir artigo 2
    print("\n📝 Inserindo artigo: Prevenção de Quedas em Idosos...")
    insert_article(artigo_prevencao_quedas)
    
    print("\n" + "=" * 60)
    print("Processo concluído!")
    print("=" * 60)
