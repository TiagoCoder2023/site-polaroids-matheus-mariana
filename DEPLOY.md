# 🚀 Guia de Deploy - Site Polaroids

## Deploy no GitHub Pages

### 1. Preparação

```bash
# Instalar dependências
npm install

# Instalar gh-pages para deploy
npm install --save-dev gh-pages
```

### 2. Configuração do GitHub

1. Crie um repositório no GitHub: `site-polaroids-matheus-mariana`
2. Faça o push do código:

```bash
git init
git add .
git commit -m "Site romântico com polaroids 3D"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/site-polaroids-matheus-mariana.git
git push -u origin main
```

### 3. Deploy Automático

```bash
# Deploy para GitHub Pages
npm run deploy
```

### 4. Configuração Manual (Alternativa)

1. Vá em Settings > Pages
2. Selecione "Deploy from a branch"
3. Escolha "gh-pages" branch
4. Salve

## Deploy em Outras Plataformas

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

1. Conecte o repositório GitHub
2. Build command: `npm run build`
3. Publish directory: `build`

## 📝 Notas Importantes

- As imagens estão na pasta `public/images/`
- O site é totalmente responsivo
- Funciona offline após o build
- Otimizado para produção

## 🔧 Troubleshooting

- Se as imagens não aparecerem, verifique os caminhos em `src/App.js`
- Para mudar as imagens, substitua os arquivos em `public/images/`
- O cronômetro inicia em 27/12/2023
