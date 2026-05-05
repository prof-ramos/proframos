# Architecture Overview

This document serves as a critical, living template designed to equip agents with a rapid and comprehensive understanding of the codebase's architecture, enabling efficient navigation and effective contribution from day one. Update this document as the codebase evolves.

## 1. Project Structure
The project is an AI-powered React Single Page Application (SPA) built with Vite and Tailwind CSS.

[Project Root]/
├── components/           # Reusable UI components (PromptCard, Toast, PlaygroundModal)
├── services/             # API interaction logic (geminiService.ts)
├── App.tsx               # Main application view and monolithic routing
├── constants.tsx         # Static data, prompt definitions, and UI constants
├── types.ts              # Shared TypeScript definitions, interfaces, and enums
├── index.tsx             # React application entry point
├── index.html            # Main HTML document
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite build and dev server configuration
├── DESIGN.md             # Brand guidelines and design system specifications
└── ARCHITECTURE.md       # This document

## 2. High-Level System Diagram

[User] <--> [React SPA (Vite)] <--> [Gemini Service] <--> [Google Gemini API]

## 3. Core Components

### 3.1. Frontend Single Page Application
**Name:** ai.wiki.br Web App
**Description:** The main user interface providing a library of optimized prompts for Brazilian "concursos públicos" and legal professionals. Allows searching, filtering, and interacting with an AI playground.
**Technologies:** React 19, TypeScript, Vite, Tailwind CSS, Lucide React.
**Deployment:** Google Cloud Run (via AI Studio Preview/Shared App).

### 3.2. AI Integration Service
**Name:** Gemini Service (`services/geminiService.ts`)
**Description:** Client-side service that interfaces with the Google Gemini API to power the Playground features (testing prompts against LLM).
**Technologies:** `@google/genai` SDK.

## 4. Data Stores

### 4.1. Local Static Data
**Type:** In-memory / Hardcoded File (`constants.tsx`)
**Purpose:** Stores the core library of prompts, categories, and tags. This acts as a read-only local database for the application's main catalog.

## 5. External Integrations / APIs

**Service Name 1:** Google Gemini API
**Purpose:** Provides generative AI capabilities for the interactive playground so users can test prompts.
**Integration Method:** Node/Browser SDK (`@google/genai`).

### External Integrations

- **Supabase** — PostgreSQL database (prompts, categories, tags) + Edge Functions (Gemini proxy)
- **Vercel** — Hosting; connected via Supabase Vercel integration for automatic env var sync
- **Gemini API** — AI generation (accessed only via Supabase Edge Function)

## 6. Deployment & Infrastructure

**Cloud Provider:** Google Cloud Platform (GCP) via Google Cloud Run (managed by AI Studio).
**CI/CD Pipeline:** Handled transparently by AI Studio Build.

## Deployment

Hosted on **Vercel**. Build command: `npm run build`. Output dir: `dist`.

Environment variables required in Vercel dashboard:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

These are auto-synced via the Supabase Vercel integration.

## 7. Security Considerations

## API Key Management

All Gemini API calls are proxied through a **Supabase Edge Function** (`supabase/functions/generate/`). The `GEMINI_API_KEY` is stored as a Supabase secret and never reaches the browser. The SPA only holds the public `VITE_SUPABASE_ANON_KEY`, which is safe to expose.

### Data Flow

```
[Browser SPA]
  ↓ supabase.functions.invoke('generate', { body })
[Supabase Edge Function — Deno]
  ↓ GoogleGenAI({ apiKey: Deno.env.get('GEMINI_API_KEY') })
[Gemini API]
```

## 8. Development & Testing Environment

**Local Setup Instructions:** Run `npm install` followed by `npm run dev`. Ensure the environment contains a valid `GEMINI_API_KEY`.
**Code Quality Tools:** TypeScript compiler checks (`tsc`).

## 9. Future Considerations / Roadmap

- **Backend Integration:** Migrate from static `constants.tsx` to a real backend (e.g., Firebase Firestore or Node.js server) for dynamic prompt management, user authentication, and saving favorites.
- **API Key Security:** Move Gemini API calls to a server-side endpoint to fully secure the API key.
- **User Accounts:** Allow users to save their playground history and custom prompts.

## 10. Project Identification

**Project Name:** ai.wiki.br
**Repository URL:** [AI Studio Managed]
**Primary Contact:** gabrielgfcramos2@gmail.com
**Date of Last Update:** 2026-04-27

## 11. Glossary / Acronyms

- **SPA:** Single Page Application
- **LLM:** Large Language Model
