# Plano de implementação — CodeRabbit Review

Decisões tomadas em sessão de grilling. Ordenadas por dependência (resolver de cima pra baixo em cada fase).

---

## Status geral: ✅ CONCLUÍDO (exceto 1 item manual abaixo)

---

## Fase 1 — Infraestrutura

### 1.1 Supabase: banco + dados

- [x] Criar projeto no [Supabase](https://supabase.com/dashboard) — criado via `vercel integration add supabase` (`noumepqbybteqthiwqrn`)
- [x] Criar schema normalizado (`supabase/migrations/001_initial_schema.sql`):
  - `categories`, `prompts` (title UNIQUE), `prompt_tags`
  - enum `complexity_level`
- [x] Popular com seed dos prompts — 16 prompts inseridos via `scripts/seed.ts`
- [x] Proxy Gemini → **Vercel Edge Function** `api/generate.ts` *(substituiu Supabase Edge Function — sem necessidade de PAT)*

### 1.2 Vercel + GitHub

- [x] Repositório GitHub conectado ao Vercel
- [x] Integração Supabase no Vercel — auto-provisiona `SUPABASE_URL`, `SUPABASE_ANON_KEY`
- [x] `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` — Production ✅ Development ✅
- [x] `GEMINI_API_KEY` — Production ✅ Development ✅
- [ ] **ÚNICO ITEM PENDENTE:** Adicionar 3 env vars no ambiente **Preview** (2 min no dashboard):
  - Acesse: https://vercel.com/gabriel-ramos-projects-c715690c/ai-wiki-br/settings/environment-variables
  - Adicione para `Preview`:
    - `VITE_SUPABASE_URL` = `https://noumepqbybteqthiwqrn.supabase.co`
    - `VITE_SUPABASE_ANON_KEY` = (copie do Development)
    - `GEMINI_API_KEY` = (copie do Development)
- [x] Build command `npm run build`, output `dist`
- [x] Push main → deploy de produção efetuado

### 1.3 Configuração do projeto

- [x] `package.json`: `"name": "ai-wiki-br"`, removido `@google/genai`
- [x] `tsconfig.json`: `"strict": true`, `"baseUrl": "./"`, `"vite/client"` em types
- [x] `vite.config.ts`: host via env, removido bloco `define` de API_KEY
- [x] `.env.example`: criado com `VITE_SUPABASE_URL=`, `VITE_SUPABASE_ANON_KEY=`
- [x] `.gitignore`: `crabbit.txt`, `.env.*`, `.vercel`, `coverage/`, `.cache/`, `.vite/`

---

## Fase 2 — Tipos e contratos ✅

- [x] `ToastMessage.id` → `string`
- [x] `enum Complexity`
- [x] `services/supabase.ts`, `lib/utils.ts`, `components/ErrorBoundary.tsx`
- [x] `services/geminiService.ts` → `fetch('/api/generate')` (Vercel Edge Function)
- [x] `PROMPTS` migrado para Supabase, removido do `constants.tsx`

---

## Fase 3 — Componentes ✅

- [x] `App.tsx`: `crypto.randomUUID()`, `useCallback`, `ErrorBoundary`
- [x] `Logo.tsx`: `aria-hidden`, `cn()`
- [x] `Header.tsx`: `aria-expanded`, active class, API Docs mobile
- [x] `Footer.tsx`: drop React import, `<span>` substituindo `href="#"`
- [x] `PlaygroundModal.tsx`: `role="dialog"`, escape key, clipboard fallback, ping via `/api/generate`
- [x] `PromptCard.tsx`: localStorage bookmark, popup guard, `addToast` prop
- [x] `Toast.tsx`: module-scope styles/icons, ARIA condicional

---

## Fase 4 — CSS e HTML ✅

- [x] `index.html`: import map limpo, keyframe duplicado removido, scrollbar Firefox

---

## Fase 5 — Documentação ✅

- [x] `DESIGN.md`: tokens semânticos, WCAG, font stacks
- [x] `ARCHITECTURE.md`: fluxo Supabase → Vercel Edge Function, diagrama atualizado
- [x] `metadata.json`: version, author, license, repository, keywords

---

## Arquitetura final

```
[Browser SPA]
  ↓ fetch('/api/generate')
[Vercel Edge Function — api/generate.ts]
  ↓ fetch Gemini REST API (GEMINI_API_KEY server-side)
[Google Gemini API]

[Browser SPA]
  ↓ @supabase/supabase-js
[Supabase PostgreSQL]
  categories, prompts, prompt_tags
```
