# ai.wiki.br

Biblioteca de prompts de IA para concurseiros e profissionais do direito. Acelere sua aprovação e otimize sua prática jurídica com prompts otimizados para o ecossistema jurídico brasileiro.

## Funcionalidades

- **Biblioteca de prompts** — acervo curado com técnicas de prompting (Few-Shot, Chain of Thought, Role Prompting, etc.)
- **Busca e filtro** — pesquise por título, filtre por categoria (Concursos, Redação Jurídica, Análise, Administrativo, etc.)
- **Playground** — teste prompts contra o Gemini em tempo real e copie os resultados
- **Modos de visualização** — grid ou lista

## Stack

| Camada | Tecnologia |
|---|---|
| Frontend | React 19 + TypeScript + Vite |
| Estilo | Tailwind CSS (CDN) |
| Ícones | Lucide React |
| Banco | Supabase (PostgreSQL) |
| Backend | Supabase Edge Functions |
| IA | Google Gemini API |
| Deploy | Vercel (via GitHub) |

## Setup local

**Pré-requisitos:** Node.js >= 18

```bash
git clone <repo-url>
cd ai-wiki-br

npm install
cp .env.example .env.local
# Preencha as variáveis em .env.local

npm run dev
```

Acesse `http://localhost:3000`.

### Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `SUPABASE_URL` | URL do projeto Supabase |
| `SUPABASE_ANON_KEY` | Chave anônima do Supabase |
| `GEMINI_API_KEY` | Chave da API Gemini (usada pela Edge Function) |

## Supabase

O projeto usa Supabase para:

- **Banco de dados** — tabelas `prompts`, `categories`, `prompt_tags`
- **Edge Functions** — proxy seguro para a API Gemini (`/api/generate`)

### Configuração local do Supabase

```bash
npx supabase login
npx supabase link --project-ref <seu-ref>
npx supabase db push
npx supabase functions deploy generate
```

## Deploy (Vercel)

O deploy é feito via Vercel CLI com integração GitHub:

```bash
npx vercel --prod
```

As variáveis de ambiente devem ser configuradas no dashboard da Vercel e linkadas ao projeto Supabase via [integração oficial](https://supabase.com/partners/integrations/vercel).

## Estrutura

```
├── components/         # Componentes reutilizáveis (Header, Footer, PromptCard, Toast, etc.)
├── pages/              # Páginas (Home)
├── services/           # Serviço de comunicação com a API Gemini
├── supabase/           # Edge Functions e migrations
├── App.tsx             # Componente raiz
├── constants.tsx       # Dados estáticos (seed inicial dos prompts)
├── types.ts            # Tipos, interfaces e enums
├── index.html          # Entry point HTML
├── index.tsx           # Entry point React
└── vite.config.ts      # Configuração do Vite
```

## Licença

MIT
