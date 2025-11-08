-- Criar tabela de posts do blog
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  content TEXT NOT NULL,
  image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS na tabela de posts
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Todos podem visualizar posts publicados
CREATE POLICY "Qualquer pessoa pode ver posts publicados"
ON public.blog_posts
FOR SELECT
USING (published = true);

-- Criar função para atualizar updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Trigger para atualizar updated_at automaticamente
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Criar tabela de mensagens de contato
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS na tabela de mensagens
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Policy: Permitir inserção de mensagens por qualquer pessoa
CREATE POLICY "Qualquer pessoa pode enviar mensagens"
ON public.contact_messages
FOR INSERT
WITH CHECK (true);

-- Criar índices para melhor performance
CREATE INDEX idx_blog_posts_published ON public.blog_posts(published, created_at DESC);
CREATE INDEX idx_contact_messages_created_at ON public.contact_messages(created_at DESC);
