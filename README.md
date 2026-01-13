# 🚀 Landing Page - DETERZIN

Portfolio profissional otimizado para **GitHub Pages** com foco em performance e SEO.

## 📋 Features

✅ **Design Responsivo** - Mobile-first com breakpoints para todos os dispositivos  
✅ **Otimizado para GitHub Pages** - Sem dependências de backend  
✅ **PWA (Progressive Web App)** - Instalável em dispositivos móveis  
✅ **Service Worker** - Cache inteligente para acesso offline  
✅ **SEO Friendly** - Meta tags, Open Graph, Sitemap e Robots.txt  
✅ **Performance** - Imagens otimizadas, CDN eficiente, carregamento rápido  
✅ **Acessibilidade** - Links seguros, navegação melhorada, focus states  
✅ **Dark Mode** - Design moderno com tema escuro e transições suaves  

## 🛠️ Estrutura do Projeto

```
landing-page/
├── index.html              # Página principal
├── styles/
│   └── main.css           # Estilos responsivos com otimizações
├── assets/
│   ├── dtzsemfundo.png    # Logo
│   └── imagens/
│       ├── landing page.png
│       ├── metricas.jpg
│       └── dtzviews600x400.png
├── manifest.json          # Configuração PWA
├── sw.js                  # Service Worker para cache
├── sitemap.xml            # Sitemap para SEO
├── robots.txt             # Instruções para buscadores
├── .htaccess              # Configuração servidor Apache
├── .gitignore             # Arquivos ignorados pelo Git
└── README.md              # Este arquivo
```

## 🎯 Melhorias Implementadas

### 1. **Imagens Otimizadas**
- Suporte para múltiplos formatos (PNG, JPG)
- Lazy loading automático
- Object-fit para responsividade

### 2. **PWA (Progressive Web App)**
- `manifest.json` para instalação em dispositivos
- Service Worker (`sw.js`) para cache inteligente
- Funciona offline após primeira visita

### 3. **SEO Completo**
- Meta tags (description, keywords, author)
- Open Graph tags (redes sociais)
- Sitemap XML (`sitemap.xml`)
- Robots.txt (`robots.txt`)
- Schema estruturado

### 4. **Performance**
- Header sticky com backdrop-filter
- Will-change para animações suaves
- Cache de longa duração para assets
- Compressão GZIP automática
- Service Worker para offline-first

### 5. **Acessibilidade Melhorada**
- Links com focus states e outline
- Underline animation nos links (visual feedback)
- Alt text descritivo em todas as imagens
- Navegação semântica

### 6. **Segurança**
- Headers de segurança (X-Frame-Options, CSP)
- Links externos com `rel="noopener noreferrer"`
- Proteção contra XSS

### 7. **Responsividade Total**
- Media queries para 768px e 480px
- Smooth scroll
- Carrossel adaptativo (1-3 slides)

## 7. **Configuração do Servidor**
- `.htaccess` para caching inteligente
- Compressão GZIP
- Rewrite rules para SPA

## 🌐 Hosting no GitHub Pages

Para usar este projeto no GitHub Pages:

1. **Habilitar GitHub Pages** nas configurações do repositório
2. **Branch**: Selecionar `main` como branch de deploy
3. **URL padrão**: `https://eliasmagaia.github.io/landing-page/`

### 🚀 Recursos PWA
- Instalar na tela inicial (mobile)
- Ícone personalizado
- Cores do tema configuradas
- Funciona offline com Service Worker

> **Nota**: Service Worker requer HTTPS (automaticamente em GitHub Pages)

## 📱 Breakpoints Responsivos

- **Desktop**: 1024px+ (3 slides no carrossel)
- **Tablet**: 768px (2 slides)
- **Mobile**: até 480px (1 slide)

## 🎨 Cores do Projeto

- **Fundo**: `#111` (Almost Black)
- **Destaque**: `#f00` (Red)
- **Cards**: `#181818` (Dark Gray)
- **Hover**: `#202020` (Lighter Gray)

## 📞 Contacto

- **Email**: eliasrmagaia@gmail.com
- **WhatsApp**: +258 855 002 264
- **GitHub**: [Eliasmagaia](https://github.com/Eliasmagaia)

## 📄 Licença

Este projeto é de uso pessoal. Todos os direitos reservados © 2025 DETERZIN.

---

**Última atualização**: 13 de janeiro de 2026

## 💻 Comandos Úteis

```bash
# Verificar erros HTML
# Use VS Code: Ctrl+Shift+P > "Run Linter"

# Atualizar sitemap
# Editar sitemap.xml com novas seções se necessário

# Testar offline
# Abrir DevTools (F12) > Application > Service Workers

# Analisar performance
# Usar Google Lighthouse: https://developers.google.com/web/tools/lighthouse
```

## 📊 Sugestões de Melhoria Futura

- [ ] Adicionar formulário de contacto backend
- [ ] Integrar Analytics avançado (Google Analytics 4)
- [ ] Criar blog/artigos (CMS estático)
- [ ] Adicionar suporte a mais idiomas
- [ ] Implementar WebP para imagens
- [ ] Adicionar testes automatizados
