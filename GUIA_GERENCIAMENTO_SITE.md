# 📚 GUIA COMPLETO: Gerenciamento do Site Roberta Rocha Fisioterapia

## 🎉 PROJETO IMPORTADO COM SUCESSO!

O site da Roberta foi clonado do GitHub e está rodando localmente. Agora você tem **controle total** do código!

---

## 📋 ESTRUTURA DO PROJETO

```
roberta-site/
├── src/
│   ├── pages/                    # Páginas do site
│   │   ├── Home.tsx              # Página inicial
│   │   ├── Blog.tsx              # Listagem do blog
│   │   ├── BlogPost.tsx          # Página de artigo individual
│   │   ├── Sobre.tsx             # Página Sobre
│   │   ├── Contato.tsx           # Página de Contato
│   │   ├── Servicos.tsx          # Página de Serviços
│   │   ├── Admin.tsx             # Painel administrativo
│   │   └── servicos/             # Páginas de serviços específicos
│   │       ├── FisioterapiaGeriatrica.tsx
│   │       ├── FisioterapiaNeurologica.tsx
│   │       ├── FisioterapiaRespiratoria.tsx
│   │       └── ReabilitacaoPosOperatoria.tsx
│   ├── components/               # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── blog/                 # Componentes do blog
│   │   │   ├── BlogSidebar.tsx
│   │   │   ├── RelatedPosts.tsx
│   │   │   └── SocialShare.tsx
│   │   └── ui/                   # Componentes de interface
│   ├── integrations/
│   │   └── supabase/             # Conexão com banco de dados
│   └── assets/                   # Imagens e arquivos estáticos
├── public/                       # Arquivos públicos
├── .env                          # Variáveis de ambiente (Supabase)
└── package.json                  # Dependências do projeto
```

---

## 🗄️ BANCO DE DADOS (SUPABASE)

O site usa **Supabase** como banco de dados para:
- **blog_posts** - Artigos do blog
- **contact_messages** - Mensagens de contato
- **site_stats** - Estatísticas do site

### Estrutura da tabela `blog_posts`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | uuid | ID único |
| slug | text | URL amigável (ex: "dor-no-joelho-idosos") |
| title | text | Título do artigo |
| subtitle | text | Subtítulo/descrição |
| content | text | Conteúdo em HTML/Markdown |
| category | text | Categoria do artigo |
| image_url | text | URL da imagem de capa |
| read_time | int | Tempo de leitura em minutos |
| published | bool | Se está publicado ou rascunho |
| created_at | timestamp | Data de criação |
| updated_at | timestamp | Data de atualização |
| views | int | Número de visualizações |

---

## ✍️ COMO ADICIONAR NOVOS ARTIGOS AO BLOG

### OPÇÃO 1: Via Supabase Dashboard (RECOMENDADO)

1. **Acesse o Supabase:**
   - URL: https://supabase.com/dashboard
   - Faça login com sua conta
   - Selecione o projeto: `dudlenfeqtungijxhvpa`

2. **Vá em Table Editor:**
   - Clique em "Table Editor" no menu lateral
   - Selecione a tabela `blog_posts`

3. **Adicione um novo artigo:**
   - Clique em "Insert row"
   - Preencha os campos:
     - **slug**: `nome-do-artigo-em-minusculas` (sem acentos, com hífens)
     - **title**: Título do artigo
     - **subtitle**: Descrição curta
     - **content**: Conteúdo em HTML
     - **category**: Uma das categorias existentes
     - **image_url**: URL da imagem de capa
     - **read_time**: Tempo estimado de leitura
     - **published**: `true` para publicar

4. **Salve e pronto!**
   - O artigo aparecerá automaticamente no blog

### OPÇÃO 2: Via Código (Para desenvolvedores)

Posso criar um script para adicionar artigos diretamente via código. Me avise se preferir essa opção!

---

## 📝 CATEGORIAS DISPONÍVEIS

As categorias configuradas no blog são:

1. Fisioterapia Geriátrica
2. Fisioterapia Neurológica
3. Dicas de Saúde
4. Reabilitação
5. Prevenção de Quedas
6. Fisioterapia Ortopédica
7. Fisioterapia Respiratória
8. Preços e Orçamentos
9. Comparativos

---

## 🖼️ COMO ADICIONAR IMAGENS

### Para imagens de artigos:

1. **Opção A: Upload no Supabase Storage**
   - Vá em Storage no Supabase
   - Faça upload da imagem
   - Copie a URL pública
   - Use no campo `image_url`

2. **Opção B: Usar serviço externo**
   - Faça upload em Imgur, Cloudinary, etc.
   - Copie a URL
   - Use no campo `image_url`

3. **Opção C: Adicionar ao projeto**
   - Coloque a imagem em `src/assets/`
   - Importe no código

---

## 🚀 COMANDOS ÚTEIS

### Rodar o projeto localmente:
```bash
cd /home/ubuntu/roberta-site
npm install
npm run dev
```

### Fazer build para produção:
```bash
npm run build
```

### Verificar erros de código:
```bash
npm run lint
```

---

## 🔧 COMO FAZER MODIFICAÇÕES

### Modificar textos da página inicial:
- Arquivo: `src/pages/Home.tsx`

### Modificar informações de contato:
- Arquivo: `src/components/Contact.tsx`
- Arquivo: `src/components/Footer.tsx`

### Modificar serviços:
- Arquivos em: `src/pages/servicos/`

### Modificar SEO:
- Componente: `src/components/SEO.tsx`
- Cada página tem suas próprias meta tags

### Modificar cores/estilos:
- Arquivo: `tailwind.config.ts`
- Arquivo: `src/index.css`

---

## 📊 PAINEL ADMINISTRATIVO

O site tem um painel admin em `/admin` que mostra:
- Total de mensagens de contato
- Mensagens de hoje
- Mensagens da semana
- Lista completa de mensagens

**Acesso:** https://fisiorobertadomiciliar.com.br/admin

---

## 🌐 HOSPEDAGEM ATUAL

O site está hospedado no **Wix**, mas o código fonte está no **Lovable/GitHub**.

### Para atualizar o site no Wix:

1. Faça as modificações no código
2. Execute `npm run build`
3. Os arquivos de produção estarão em `dist/`
4. Faça upload para o Wix

**Nota:** O Wix tem limitações para sites React. Considere migrar para:
- **Vercel** (gratuito, melhor para React)
- **Netlify** (gratuito, fácil deploy)
- **GitHub Pages** (gratuito)

---

## 📞 SUPORTE

### Se precisar de ajuda:

1. **Adicionar artigos:** Me envie o conteúdo que eu adiciono
2. **Modificar design:** Me descreva o que quer mudar
3. **Corrigir bugs:** Me envie print do erro
4. **Novas funcionalidades:** Me descreva o que precisa

---

## ✅ CHECKLIST DE TAREFAS COMUNS

### Para adicionar um novo artigo:
- [ ] Escrever conteúdo
- [ ] Criar/escolher imagem de capa
- [ ] Definir categoria
- [ ] Definir slug (URL)
- [ ] Adicionar no Supabase
- [ ] Verificar se aparece no blog

### Para modificar uma página:
- [ ] Identificar arquivo correto
- [ ] Fazer modificação
- [ ] Testar localmente
- [ ] Fazer commit no GitHub
- [ ] Deploy para produção

---

## 🎉 PRONTO!

Agora você tem controle total do site da Roberta!

**Próximos passos sugeridos:**
1. Adicionar os 2 artigos que criamos (Joelho em Idosos + Pós-Cirúrgica)
2. Verificar se o Supabase está funcionando
3. Considerar migrar hospedagem do Wix para Vercel

**Me avise quando quiser adicionar os artigos ou fazer qualquer modificação!** 🚀
