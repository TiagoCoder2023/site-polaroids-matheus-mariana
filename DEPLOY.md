# 🚀 Instruções para Deploy no GitHub Pages

## Passo a Passo

### 1. Preparar o Repositório

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit: Site Polaroids Matheus e Mariana"

# Conectar com o repositório remoto (substitua SEU_USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/site-polaroids.git

# Fazer push para o GitHub
git push -u origin main
```

### 2. Configurar o Homepage

Edite o arquivo `package.json` e altere a linha do homepage:

```json
"homepage": "https://SEU_USUARIO.github.io/site-polaroids"
```

### 3. Fazer o Deploy

```bash
# Instalar gh-pages (se ainda não estiver instalado)
npm install --save-dev gh-pages

# Fazer o deploy
npm run deploy
```

### 4. Verificar o Site

Após o deploy, seu site estará disponível em:
`https://SEU_USUARIO.github.io/site-polaroids`

## 🔧 Solução de Problemas

### Se as imagens não carregarem:

1. Verifique se as imagens estão na pasta `src/images/`
2. Verifique se as importações no `App.js` estão corretas
3. Faça um novo build: `npm run build`

### Se o site não atualizar:

1. Limpe o cache do navegador (Ctrl+F5)
2. Verifique se o deploy foi feito corretamente
3. Aguarde alguns minutos para a propagação

### Se houver erro de build:

1. Verifique se todas as dependências estão instaladas: `npm install`
2. Verifique se não há erros de sintaxe nos arquivos
3. Execute `npm run build` para ver os erros detalhados

## 📱 Testando o Site

1. **Desktop**: Teste em diferentes tamanhos de tela
2. **Mobile**: Use as ferramentas de desenvolvedor do navegador
3. **Funcionalidades**: Teste clicar nos polaroids e editar textos
4. **Timer**: Verifique se o contador está funcionando

## 🎨 Personalizações Finais

- **Imagens**: Substitua as fotos em `src/images/` pelas suas
- **Data**: Altere a data do relacionamento em `src/components/Timer.js`
- **Cores**: Modifique os arquivos CSS para suas cores preferidas
- **Texto**: Altere o título e textos no `App.js`

## ✅ Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Código enviado para o GitHub
- [ ] Homepage configurado corretamente
- [ ] Deploy executado com sucesso
- [ ] Site funcionando no GitHub Pages
- [ ] Imagens carregando corretamente
- [ ] Funcionalidades testadas
- [ ] Design responsivo funcionando

---

**Boa sorte com o deploy! 💕**
