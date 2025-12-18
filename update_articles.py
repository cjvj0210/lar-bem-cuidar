import requests
import json

SUPABASE_URL = 'https://dudlenfeqtungijxhvpa.supabase.co'
SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1ZGxlbmZlcXR1bmdpanhodnBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2Mjg1MjMsImV4cCI6MjA3ODIwNDUyM30.e62DsqpsrcQ4ZbCGEbOnWzvjpwvqB6KvBuYSH4a9OYc'

# Credenciais de autenticação
EMAIL = 'cjvj0210@gmail.com'
PASSWORD = '02101122'

def login():
    """Autentica no Supabase e retorna o token de acesso."""
    response = requests.post(
        f'{SUPABASE_URL}/auth/v1/token?grant_type=password',
        headers={
            'apikey': SUPABASE_KEY,
            'Content-Type': 'application/json'
        },
        json={
            'email': EMAIL,
            'password': PASSWORD
        }
    )
    
    if response.status_code == 200:
        data = response.json()
        return data['access_token']
    else:
        print(f'Erro no login: {response.status_code}')
        print(response.text)
        return None

def update_article(access_token, slug, content, image_url):
    """Atualiza um artigo no Supabase."""
    headers = {
        'apikey': SUPABASE_KEY,
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
    }
    
    data = {
        'content': content,
        'image_url': image_url
    }
    
    response = requests.patch(
        f'{SUPABASE_URL}/rest/v1/blog_posts?slug=eq.{slug}',
        headers=headers,
        json=data
    )
    
    return response.status_code, response.text

# Conteúdo corrigido do artigo de dor nas costas
content_dor_costas = '''<div class="article-content">
    <p class="lead">A dor nas costas é uma das queixas mais comuns em consultórios médicos e uma das principais causas de incapacidade no mundo. Em Barretos, a realidade não é diferente. Muitos sofrem em silêncio, acreditando em conselhos ultrapassados que mais atrapalham do que ajudam. Recentemente, um neurocirurgião da renomada <strong>Mayo Clinic</strong> desvendou 8 mitos persistentes sobre a dor lombar. Vamos quebrar essas crenças e mostrar como a abordagem correta, com fisioterapia domiciliar especializada, pode transformar sua qualidade de vida.</p>

    <h2>Mito 1: Se você está com dor, deve ficar de cama e repousar.</h2>
    <p><strong>A VERDADE:</strong> O repouso absoluto é um dos piores inimigos da sua recuperação. Ficar parado por mais de 1 ou 2 dias pode, na verdade, <strong>piorar a dor</strong> e levar à rigidez e fraqueza muscular. O movimento controlado e orientado é essencial para a cura.</p>
    <blockquote>
      <p>"Movimento é remédio." A fisioterapia introduz exercícios leves e progressivos que fortalecem a musculatura de suporte da coluna, melhorando a circulação e acelerando a recuperação.</p>
    </blockquote>

    <h2>Mito 2: Levantar peso é sempre a causa da dor nas costas.</h2>
    <p><strong>A VERDADE:</strong> Embora levantar um objeto pesado de forma incorreta possa causar uma lesão aguda, a maioria das dores lombares (cerca de 85%) é <strong>inespecífica</strong>, ou seja, não vem de um único evento, mas sim de um acúmulo de fatores como má postura, fraqueza muscular e sedentarismo.</p>

    <h2>Mito 3: A dor é sempre sinal de uma lesão grave na coluna.</h2>
    <p><strong>A VERDADE:</strong> Na grande maioria dos casos, a dor não está relacionada a condições graves como fraturas ou tumores. Geralmente, é uma questão muscular ou ligamentar. A intensidade da dor nem sempre corresponde à gravidade da lesão.</p>

    <h2>Mito 4: Preciso de um exame de imagem (Raio-X, Ressonância) imediatamente.</h2>
    <p><strong>A VERDADE:</strong> Exames de imagem só são necessários se houver "bandeiras vermelhas" (sinais de alerta para condições graves). Estudos mostram que alterações como "bicos de papagaio" ou pequenas hérnias de disco são comuns até em pessoas <strong>sem dor</strong> e nem sempre são a causa do problema. O tratamento deve focar nos sintomas e na função, não apenas na imagem.</p>

    <h2>Mito 5: Hérnia de disco sempre exige cirurgia.</h2>
    <p><strong>A VERDADE:</strong> Este é um dos maiores mitos. Cerca de <strong>90% dos casos de hérnia de disco melhoram com tratamento conservador</strong>, como a fisioterapia. A cirurgia é o último recurso, reservado para casos específicos onde há perda de força progressiva ou alterações neurológicas graves.</p>

    <h2>Mito 6: Exercício é perigoso para quem tem dor nas costas.</h2>
    <p><strong>A VERDADE:</strong> O oposto é verdadeiro. A falta de exercício enfraquece os músculos que sustentam a coluna, piorando o quadro. Exercícios terapêuticos, prescritos por um fisioterapeuta, são a ferramenta mais poderosa para tratar e prevenir a dor lombar.</p>

    <h2>Mito 7: Se não dói, não há problema.</h2>
    <p><strong>A VERDADE:</strong> A ausência de dor não significa que a causa raiz foi resolvida. Fraqueza muscular, desequilíbrios e má postura podem permanecer, tornando as crises de dor recorrentes. A fisioterapia trabalha não só no alívio da dor, mas na correção desses desequilíbrios para uma solução duradoura.</p>

    <h2>Mito 8: Uma vez com dor nas costas, sempre com dor nas costas.</h2>
    <p><strong>A VERDADE:</strong> Absolutamente não! Com o diagnóstico correto e um plano de tratamento ativo focado em fortalecimento, flexibilidade e educação postural, é totalmente possível viver sem dor e retomar todas as suas atividades.</p>

    <div class="cta-box">
      <h3>A Solução Definitiva: Fisioterapia Domiciliar em Barretos</h3>
      <p>Não deixe que mitos e informações incorretas limitem sua vida. A dor nas costas tem tratamento, e ele pode ser mais simples e eficaz do que você imagina. Agende uma avaliação e descubra como a fisioterapia pode transformar sua rotina.</p>
      <a href="https://wa.me/5517982123269?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20para%20dor%20nas%20costas" class="cta-button">Agendar Avaliação pelo WhatsApp</a>
    </div>

    <hr>

    <p class="author-note"><em>Artigo desenvolvido em colaboração com Roberta Rocha, fisioterapeuta especializada em atendimento domiciliar geriátrico em Barretos e região.</em></p>

    <h3>Referências</h3>
    <p style="font-size: 0.9rem; color: #6c757d;">- Mayo Clinic News Network. (2025, December 15). <em>A Mayo Clinic neurosurgeon reveals 8 back pain myths to stop believing</em>.<br>- Brinjikji, W., et al. (2015). <em>Systematic Literature Review of Imaging Features of Spinal Degeneration in Asymptomatic Populations</em>. American Journal of Neuroradiology.</p>
</div>'''

# Conteúdo corrigido do artigo de prevenção de quedas
content_quedas = '''<div class="article-content">
    <p class="lead">À medida que envelhecemos, o medo de cair se torna uma preocupação real e justificada. Uma queda pode significar não apenas um susto, mas fraturas graves, perda de independência e um longo período de recuperação. Em Barretos, onde a qualidade de vida na terceira idade é uma prioridade, a prevenção de quedas é um tema de saúde pública. A boa notícia é que a maioria das quedas pode ser evitada com medidas simples e exercícios específicos que podem ser feitos em casa.</p>

    <h2>Por Que as Quedas Acontecem com Mais Frequência em Idosos?</h2>
    <p>O risco de quedas aumenta com a idade devido a uma combinação de fatores:</p>
    <ul>
        <li><strong>Perda de Força Muscular (Sarcopenia):</strong> Especialmente nas pernas e no core, diminuindo a capacidade de se estabilizar.</li>
        <li><strong>Redução do Equilíbrio:</strong> O sistema vestibular, responsável pelo equilíbrio, pode se tornar menos eficiente.</li>
        <li><strong>Alterações na Visão:</strong> Dificuldade em perceber obstáculos e profundidade.</li>
        <li><strong>Uso de Múltiplos Medicamentos:</strong> Alguns remédios podem causar tontura ou sonolência.</li>
    </ul>

    <h2>5 Exercícios Essenciais para Fazer em Casa</h2>
    <p>A fisioterapia domiciliar é uma ferramenta poderosa na prevenção de quedas, pois permite que o idoso treine em seu próprio ambiente. Abaixo, a fisioterapeuta Roberta Rocha, especialista em atendimento geriátrico em Barretos, recomenda 5 exercícios fundamentais. <strong>Lembre-se: sempre faça os exercícios perto de uma parede ou cadeira firme para apoio.</strong></p>

    <h3>1. Sentar e Levantar da Cadeira</h3>
    <p><strong>Objetivo:</strong> Fortalecer as pernas e glúteos.</p>
    <ol>
        <li>Sente-se na beirada de uma cadeira firme, com os pés apoiados no chão.</li>
        <li>Incline o tronco para frente e levante-se, usando a força das pernas.</li>
        <li>Sente-se novamente de forma controlada.</li>
        <li>Faça 3 séries de 10 repetições.</li>
    </ol>

    <h3>2. Caminhada com Elevação dos Calcanhares</h3>
    <p><strong>Objetivo:</strong> Fortalecer as panturrilhas e melhorar o equilíbrio dinâmico.</p>
    <ol>
        <li>Fique em pé, com os pés afastados na largura dos quadris.</li>
        <li>Dê um passo à frente e, ao mesmo tempo, eleve o calcanhar do pé de trás.</li>
        <li>Alterne os pés, caminhando lentamente pelo corredor.</li>
        <li>Faça por 1 a 2 minutos.</li>
    </ol>

    <h3>3. Equilíbrio em Uma Perna Só (com apoio)</h3>
    <p><strong>Objetivo:</strong> Melhorar o equilíbrio estático.</p>
    <ol>
        <li>Apoie as mãos em uma parede ou cadeira.</li>
        <li>Levante um dos pés, mantendo o joelho levemente dobrado.</li>
        <li>Tente manter a posição por 30 segundos.</li>
        <li>Troque de perna. Faça 3 vezes com cada perna.</li>
    </ol>

    <h3>4. Caminhada Tandem (um pé na frente do outro)</h3>
    <p><strong>Objetivo:</strong> Desafiar e treinar o equilíbrio de forma segura.</p>
    <ol>
        <li>Fique de pé ao lado de um corredor, usando a parede como apoio.</li>
        <li>Caminhe colocando um pé diretamente na frente do outro, como se estivesse em uma corda bamba.</li>
        <li>Dê 10 a 15 passos.</li>
        <li>Vire-se e repita.</li>
    </ol>

    <h3>5. Agachamento na Parede</h3>
    <p><strong>Objetivo:</strong> Fortalecer o quadríceps sem sobrecarregar os joelhos.</p>
    <ol>
        <li>Encoste as costas na parede e deslize para baixo até que os joelhos formem um ângulo de 90 graus.</li>
        <li>Mantenha a posição por 20 a 30 segundos.</li>
        <li>Volte à posição inicial. Faça 3 repetições.</li>
    </ol>

    <div class="cta-box">
      <h3>Segurança e Independência Começam em Casa</h3>
      <p>Estes exercícios são um ótimo começo, mas um programa personalizado faz toda a diferença. Agende uma avaliação de fisioterapia domiciliar em Barretos e receba um plano completo para prevenção de quedas.</p>
      <a href="https://wa.me/5517982123269?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20para%20prevenção%20de%20quedas" class="cta-button">Agendar Avaliação pelo WhatsApp</a>
    </div>

    <hr>

    <p class="author-note"><em>Artigo desenvolvido com a consultoria de Roberta Rocha, fisioterapeuta especialista em geriatria e prevenção de quedas em Barretos-SP.</em></p>
</div>'''

if __name__ == '__main__':
    print('Autenticando no Supabase...')
    access_token = login()
    
    if access_token:
        print('Login realizado com sucesso!')
        
        # Atualizar artigo de dor nas costas
        print('\nAtualizando artigo: 8 Mitos Sobre Dor nas Costas...')
        status, response = update_article(
            access_token,
            '8-mitos-dor-costas-barretos',
            content_dor_costas,
            '/images/blog-dor-costas-idosos.jpg'
        )
        if status in [200, 204]:
            print('✓ Artigo de dor nas costas atualizado com sucesso!')
        else:
            print(f'✗ Erro ao atualizar: {status} - {response}')
        
        # Atualizar artigo de prevenção de quedas
        print('\nAtualizando artigo: Prevenção de Quedas em Idosos...')
        status, response = update_article(
            access_token,
            '5-exercicios-prevenir-quedas-idosos-barretos',
            content_quedas,
            '/images/blog-prevencao-quedas-idosos.jpg'
        )
        if status in [200, 204]:
            print('✓ Artigo de prevenção de quedas atualizado com sucesso!')
        else:
            print(f'✗ Erro ao atualizar: {status} - {response}')
        
        print('\n✓ Processo concluído!')
    else:
        print('Falha na autenticação.')
