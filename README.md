# Site Polaroids - Matheus e Mariana

Um site romântico interativo com polaroids que podem ser clicados para revelar mensagens especiais.

## 🚀 Funcionalidades

- **Polaroids Interativos**: Clique nos polaroids para virá-los e ver mensagens românticas
- **Editor de Texto**: Clique no botão de edição para escrever mensagens personalizadas
- **Timer de Relacionamento**: Contador em tempo real mostrando quanto tempo vocês estão juntos
- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **Animações Suaves**: Transições e efeitos visuais elegantes

## 🛠️ Tecnologias Utilizadas

- React 18
- CSS3 com animações
- JavaScript ES6+
- React Scripts para build

## 📦 Como Executar

1. Clone o repositório
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o projeto em modo de desenvolvimento:

   ```bash
   npm start
   ```

4. Para fazer o build de produção:
   ```bash
   npm run build
   ```

## 🚀 Deploy no GitHub Pages

1. Configure o homepage no `package.json` com seu usuário do GitHub:

   ```json
   "homepage": "https://seu-usuario.github.io/site-polaroids"
   ```

2. Execute o deploy:
   ```bash
   npm run deploy
   ```

## 📱 Como Usar

1. **Visualizar Polaroids**: Os polaroids aparecem em um grid responsivo
2. **Virar Polaroids**: Clique em qualquer polaroid para virá-lo
3. **Editar Mensagens**: Clique no botão de edição (✏️) para escrever uma mensagem romântica
4. **Salvar/Cancelar**: Use os botões para salvar ou cancelar suas edições

## 🎨 Personalização

- **Imagens**: Substitua as imagens na pasta `src/images/` pelas suas fotos
- **Data do Relacionamento**: Altere a data no arquivo `src/components/Timer.js` na linha 13
- **Cores e Estilos**: Modifique os arquivos CSS em `src/` para personalizar a aparência

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Polaroid.js      # Componente do polaroid
│   ├── Polaroid.css     # Estilos do polaroid
│   ├── Timer.js         # Componente do timer
│   └── Timer.css        # Estilos do timer
├── images/              # Imagens dos polaroids
├── App.js              # Componente principal
├── App.css             # Estilos principais
├── index.js            # Ponto de entrada
└── index.css           # Estilos globais
```

## 💝 Feito com Amor

Este projeto foi criado com muito carinho para Matheus e Mariana. Que vocês tenham muitos momentos especiais juntos! 💕

---

**Desenvolvido com ❤️ para casais românticos**
