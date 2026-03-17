# Netflix Clone 

Um clone funcional da Netflix criado como projeto de aprendizado de **React**, **TypeScript**, **Tailwind CSS** e **React Router**. Este projeto demonstra conceitos fundamentais de desenvolvimento web moderno com uma abordagem didática e simplificada.

## TESTE O PROJETO AQUI: https://netflix-clone-puce-three.vercel.app/

## 📋 Características

### Funcionalidades Implementadas

- ✅ **Sistema de Login Simples**: Autenticação com credenciais fixas para demonstração
- ✅ **Página Home**: Hero section com destaque e carrosséis de filmes por categoria
- ✅ **Carrosséis de Filmes**: Navegação horizontal com botões de scroll
- ✅ **Modal de Detalhes**: Exibe informações completas do filme ao clicar
- ✅ **Minha Lista**: Adicione e remova filmes de sua lista de favoritos
- ✅ **Página de Perfil**: Visualize informações do usuário
- ✅ **Página de Pesquisa**: Busque filmes por título ou descrição
- ✅ **Navegação por Categorias**: Séries e Filmes em páginas separadas
- ✅ **Design Responsivo**: Funciona em mobile, tablet e desktop
- ✅ **Persistência de Dados**: Lista de favoritos salva no localStorage

### Dados Mockados

O projeto utiliza dados estáticos (mockados) em vez de uma API real. Os filmes incluem:

- Dunkirk
- Avatar
- Atirador Americano
- The Batman
- Corações de Ferro
- Os Sete Magníficos
- 300: A Ascensão do Império
- Interestelar

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm como gerenciador de pacotes

### Instalação

```bash
# Clonar o repositório
git clone <url-do-repositorio>
cd netflix-clone

# Instalar dependências
pnpm install
# ou
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev
# ou
npm run dev
```


### Build para Produção

```bash
# Compilar para produção
pnpm build
# ou
npm run build

# Iniciar servidor de produção
pnpm start
# ou
npm start
```

## 🔐 Credenciais de Login

Para acessar a aplicação, use as seguintes credenciais:

- **Email**: `lucasferreirasilva.dev@gmail.com`
- **Senha**: `123456`

Ou clique no botão "Usar Credenciais de Demonstração" na página de login.

## 📁 Estrutura do Projeto

```
netflix-clone/
├── client/
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx          # Navegação principal
│   │   │   ├── Hero.tsx            # Banner principal
│   │   │   ├── MovieCard.tsx       # Card individual de filme
│   │   │   ├── Carousel.tsx        # Carrossel de filmes
│   │   │   ├── MovieModal.tsx      # Modal de detalhes
│   │   │   └── ErrorBoundary.tsx   # Tratamento de erros
│   │   ├── contexts/
│   │   │   ├── AuthContext.tsx     # Contexto de autenticação
│   │   │   ├── MovieListContext.tsx # Contexto de lista favoritos
│   │   │   └── ThemeContext.tsx    # Contexto de tema
│   │   ├── data/
│   │   │   └── movies.ts           # Dados mockados de filmes
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Página inicial
│   │   │   ├── Login.tsx           # Página de login
│   │   │   ├── Series.tsx          # Página de séries
│   │   │   ├── Movies.tsx          # Página de filmes
│   │   │   ├── MyList.tsx          # Página de favoritos
│   │   │   ├── Profile.tsx         # Página de perfil
│   │   │   ├── Search.tsx          # Página de pesquisa
│   │   │   └── NotFound.tsx        # Página 404
│   │   ├── types/
│   │   │   └── index.ts            # Tipos TypeScript
│   │   ├── App.tsx                 # Componente raiz
│   │   ├── main.tsx                # Entry point
│   │   └── index.css               # Estilos globais
│   └── index.html
├── server/
│   └── index.ts                    # Servidor Express
├── package.json
└── README.md
```

## 🎨 Design e Estilo

### Paleta de Cores

- **Fundo**: `#000000` (Preto)
- **Secundário**: `#141414` (Cinza escuro)
- **Primário**: `#E50914` (Vermelho Netflix)
- **Texto**: `#FFFFFF` (Branco)
- **Texto Secundário**: `#999999` (Cinza)

### Tipografia

- **Display**: Font-weight 900 (títulos)
- **Body**: Font-weight 400-600 (corpo do texto)
- **Fonte**: System fonts (Inter, sans-serif)

### Componentes

- **Cards**: Hover com escala (1.05x) e overlay escuro
- **Botões**: Transições suaves com feedback visual
- **Modais**: Backdrop com blur e animações
- **Navegação**: Header fixo com gradiente

## 💡 Conceitos de Aprendizado

Este projeto demonstra:

### React & TypeScript

- ✅ Componentes funcionais com hooks
- ✅ Context API para estado global
- ✅ Tipagem estrita com TypeScript
- ✅ Roteamento com Wouter
- ✅ Efeitos colaterais com useEffect

### Tailwind CSS

- ✅ Utility-first CSS
- ✅ Responsive design com breakpoints
- ✅ Variáveis CSS customizadas
- ✅ Componentes reutilizáveis

### Padrões de Código

- ✅ Separação de responsabilidades
- ✅ Componentes modulares
- ✅ Hooks customizados
- ✅ Tratamento de erros
- ✅ Comentários explicativos

## 🐛 Bugs e Simplificações Intencionais

Como projeto didático, o código inclui algumas simplificações e "bugs" propositais para demonstrar conceitos:

1. **Dados Repetidos**: Os carrosséis contêm filmes repetidos (simulando dados de API real)
2. **Reprodutor Desativado**: Ao clicar em "Play", mostra mensagem "Em desenvolvimento"
3. **Sem Backend Real**: Todos os dados são mockados e salvos localmente
4. **Autenticação Simplificada**: Credenciais fixas sem validação real
5. **Sem Persistência de Sessão**: Sessão se encerra ao fechar a aba

## 📝 Comentários no Código

O código inclui comentários explicativos em pontos-chave:

```typescript
// Nota didática: Este é um exemplo de...
// Explicação de decisão de design
// Referência a conceito importante
```

## 🔄 Fluxo de Dados

```
User Login
    ↓
AuthContext (gerencia estado do usuário)
    ↓
Home Page (carrega filmes mockados)
    ↓
MovieCard (exibe filme individual)
    ↓
MovieModal (detalhes completos)
    ↓
MovieListContext (adiciona à lista)
    ↓
localStorage (persiste dados)
```

## 🎯 Próximos Passos (Melhorias Futuras)

- [ ] Integrar com API real de filmes (TMDB, OMDb)
- [ ] Implementar backend com autenticação real
- [ ] Adicionar reprodutor de vídeo funcional
- [ ] Implementar recomendações baseadas em histórico
- [ ] Adicionar testes unitários e E2E
- [ ] Melhorar acessibilidade (WCAG)
- [ ] Adicionar dark/light mode toggle
- [ ] Implementar PWA (Progressive Web App)

## 📚 Recursos Úteis

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [Wouter Router](https://github.com/molefrog/wouter)

## 📄 Licença

Este projeto é fornecido como material educacional. Sinta-se livre para usar, modificar e compartilhar para fins de aprendizado.

## 👨‍💻 Autor

- [Lucas Ferreira](https://lucas.ferreiradev.com/)
- [GitHub](https://github.com/LucasFerreiraProgramador)
- [LinkedIn](https://www.linkedin.com/in/lucasferreira-dev-front-end/)

## 📄 Licença
Este projeto foi desenvolvido para fins de estudo e prática de desenvolvimento Front-End.

## 🚀 Let's code! 🚀
