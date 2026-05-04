# ai.wiki.br - Brand Kit & Design System

## 1. Essência da Marca
A **ai.wiki.br** combina a tradição e seriedade do Direito com a inovação da Inteligência Artificial.
*   **Arquétipos:** O Sábio (Conhecimento) + O Mago (Transformação/Tecnologia).
*   **Keywords:** Autoridade, Aprovação, Tecnologia, Clareza, Sofisticação.

---

## 2. Tipografia

### Primária (UI & Leitura)
*   **Fonte:** `Inter` (Google Fonts)
*   **Pesos:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold).
*   **Uso:** Textos corridos, botões, descrições de prompts, interface geral.
*   **Por que?** Altíssima legibilidade em telas e neutralidade para não cansar a vista durante o estudo.

### Secundária (Headlines & Marca)
*   **Fonte:** `Playfair Display` (Google Fonts)
*   **Pesos:** 600 (Semi-bold), 700 (Bold).
*   **Uso:** Títulos H1/H2, Logo, Citações Jurídicas, Palavras de destaque ("Aprovação").
*   **Por que?** Uma fonte serifada moderna que evoca a tradição jurídica e elegância editorial.

---

## 3. Paleta de Cores

### Cores Institucionais (Legal Navy)
Representam a seriedade, o direito e o foco.
*   **Legal 900 (Deep Navy):** `#0f172a` (Fundo Hero, Textos Principais)
*   **Legal 800:** `#1e293b` (Cards em modo dark, Rodapés)
*   **Legal 700:** `#334155` (Subtítulos, Textos de apoio)
*   **Legal 50:** `#f8fafc` (Background Geral da Aplicação - Off-white frio)

### Cores de Ação (Professional Blue)
Representam a tecnologia, a IA e a ação de "clicar/avançar".
*   **Accent Default:** `#2563eb` (Botões Primários, Links, Destaques)
*   **Accent Hover:** `#1d4ed8` (Estado hover)
*   **Accent Light:** `#eff6ff` (Fundos de destaque sutil, Badges)

### Cores de Destaque (Success Gold)
Representam a aprovação, o prêmio, a "luz" no fim do túnel.
*   **Gold Default:** `#d97706` (Detalhes sutis, Ícones de valor, Gradients)
*   **Gold Light:** `#fef3c7` (Fundos de avisos, Destaques secundários)

---

## 4. Elementos de UI (Interface)

### Bordas e Arredondamento (Radius)
*   **Cards e Modais:** `rounded-xl` (12px) - Moderno e amigável.
*   **Botões:** `rounded-lg` (8px) ou `rounded-full` (para pílulas/tags).
*   **Input Fields:** `rounded-lg` (8px).

### Sombras e Profundidade (Elevation)
*   **Estado Natural:** `shadow-sm` (Sutil).
*   **Estado Hover:** `shadow-lg` + `scale-105` (Elevação perceptível).
*   **Efeito Glass:** `backdrop-blur-md` + `bg-white/80` (Usado no Header fixo).

### Ícones
*   **Família:** Lucide React.
*   **Estilo:** Traço fino (Stroke width 2), cantos levemente arredondados.

---

## 5. Diretrizes para Redes Sociais (Social Media Kit)

Ao criar carrosséis para Instagram ou posts para LinkedIn, siga estas regras para manter a consistência com o site:

### Estilo de Post: "Educativo Dark" (Carrossel Técnico)
*   **Fundo:** Use o `Legal 900 (#0f172a)` sólido.
*   **Texto:** Branco (`#FFFFFF`) e Accent Light (`#eff6ff`).
*   **Fonte Título:** Playfair Display (Bold).
*   **Fonte Corpo:** Inter (Regular).
*   **Destaque:** Use o Azul (`#2563eb`) para setas ou palavras-chave.

### Estilo de Post: "Clean/Institucional" (Frases ou Avisos)
*   **Fundo:** `Legal 50 (#f8fafc)` ou Branco.
*   **Texto:** `Legal 900`.
*   **Borda:** Uma linha fina de borda `Legal 100` ou `Legal 200` ao redor da arte.

### Uso de Degradê (Identidade Visual)
*   O "Brilho da IA" é representado por um degradê suave ou blur.
*   **Configuração:** Gradient Linear da Esquerda para Direita.
*   **Cores:** De Accent (`#2563eb`) para Gold (`#d97706`).
*   **Onde usar:** Apenas em detalhes, linhas finas, botões ou como luz de fundo (blur) em fotos. Nunca use como fundo sólido de texto para não comprometer a leitura.

### Elementos Gráficos
*   Use formas arredondadas (Círculos, Pílulas).
*   Evite cantos vivos (quadrados perfeitos).
*   Fotografia: Use imagens com tons frios/azulados ou preto e branco de alto contraste.

---

## 6. Código CSS (Tailwind Reference)

Para desenvolvedores, estas são as classes utilitárias chave:

```css
/* Fontes */
font-sans: 'Inter', sans-serif;
font-serif: 'Playfair Display', serif;

/* Cores Principais */
bg-legal-900: #0f172a;
text-legal-900: #0f172a;
bg-accent: #2563eb;
text-accent: #2563eb;

/* Animações */
animate-fade-in-up: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
hover:scale-105: transform scale(1.05);
```
