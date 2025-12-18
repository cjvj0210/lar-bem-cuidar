import requests

SUPABASE_URL = 'https://dudlenfeqtungijxhvpa.supabase.co'
SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1ZGxlbmZlcXR1bmdpanhodnBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2Mjg1MjMsImV4cCI6MjA3ODIwNDUyM30.e62DsqpsrcQ4ZbCGEbOnWzvjpwvqB6KvBuYSH4a9OYc'

EMAIL = 'cjvj0210@gmail.com'
PASSWORD = '02101122'

def login():
    response = requests.post(
        f'{SUPABASE_URL}/auth/v1/token?grant_type=password',
        headers={
            'apikey': SUPABASE_KEY,
            'Content-Type': 'application/json'
        },
        json={'email': EMAIL, 'password': PASSWORD}
    )
    if response.status_code == 200:
        return response.json()['access_token']
    return None

def update_image(access_token, slug, image_url):
    headers = {
        'apikey': SUPABASE_KEY,
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
    }
    response = requests.patch(
        f'{SUPABASE_URL}/rest/v1/blog_posts?slug=eq.{slug}',
        headers=headers,
        json={'image_url': image_url}
    )
    return response.status_code

if __name__ == '__main__':
    print('Autenticando...')
    token = login()
    
    if token:
        # Atualizar imagem do artigo de dor nas costas
        # Usando imagem existente que faz sentido: blog-fisioterapia-domiciliar.jpg
        print('Atualizando imagem do artigo de dor nas costas...')
        status = update_image(token, '8-mitos-dor-costas-barretos', '/images/blog-fisioterapia-domiciliar.jpg')
        print(f'Status: {status}')
        
        # Atualizar imagem do artigo de prevenção de quedas
        # Usando imagem existente: blog-prevencao-quedas.jpg
        print('Atualizando imagem do artigo de prevenção de quedas...')
        status = update_image(token, '5-exercicios-prevenir-quedas-idosos-barretos', '/images/blog-prevencao-quedas.jpg')
        print(f'Status: {status}')
        
        print('Concluído!')
    else:
        print('Erro no login')
