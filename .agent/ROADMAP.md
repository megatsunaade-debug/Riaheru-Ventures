# 🚀 Riaheru - Roadmap de Projeto

> **Atualizado:** 2025-12-21
> **Status:** ✅ Redesign Finalizado / 🚧 Refinamento em Progresso

## ✅ Concluído (Fase 1: Redesign & Estrutura)

### 🎨 Identidade Visual (Light Mode)
- **Design System:** Implementado tema "Clean/Minimalist" similar a Stripe/Apple (`index.css`).
- **Paleta:** Fundo branco/off-white (`bg-gray-50`), texto cinza-chumbo, sombras suaves (`shadow-lg`).
- **Tipografia:** Hierarquia visual clara com fontes modernas.

### 🧩 Componentes Principais
- [x] **Header:** Efeito glassmorphism claro, navegação responsiva e logo vetorial.
- [x] **Hero:** Tipografia bold, gradientes de texto, fundo "Mesh Gradient" leve via CSS.
- [x] **Services:** Cards brancos com sombras elevadas e ícones vibrantes.
- [x] **Showcase:** Mockup do Marqlet redesenhado para estilo clean sobre fundo suave.
- [x] **Stack:** Visualização limpa da tecnologia, removido visual "matrix/dark".
- [x] **Team:** Cards de perfil minimalistas com sombras elegantes.
- [x] **Footer:** Layout organizado, logo tipográfico minimalista.

### 📄 Páginas
- [x] **Home:** Estrutura modular finalizada.
- [x] **About:** Página completa com Manifesto, Liderança e DNA Técnico implementados.

### ⚡ Performance & Code
- [x] **Assets:** Imagens convertidas para WebP e otimizadas.
- [x] **CSS:** Substituição de animações Canvas pesadas por keyframes CSS performáticos.
- [x] **Refactor:** Correção de tipagem em `Button.tsx` (Framer Motion).

---

## 🚧 Por Fazer (Fase 2: Funcionalidade & Polimento)

### 🚨 Prioridade Alta

#### 1. Funcionalidade de Contato
- [ ] **Modal de Contato:** Botões "Iniciar Projeto" e "Falar com Especialista" precisam de ação (Link WhatsApp ou Modal).
- [ ] **Links Sociais:** Substituir placeholders `#` nas redes sociais do time e footer por links reais.

#### 2. SEO & Metadados
- [ ] **OG Image:** Criar `public/og-image.png` (1200x630) para compartilhamento social.
- [ ] **Favicon:** Gerar conjunto completo de ícones (ico, png, apple-touch).
- [ ] **SEO Tags:** Verificar title/description únicos em todas as páginas.

#### 3. Correção de Navegação
- [x] **Links Footer:** Ajustar links (`#fabrica`, `#consultoria` -> `/#...`) para âncoras funcionais com suporte a rota cruzada.
- [x] **Link Sobre:** Fixado link interno para rota `/sobre`.
- [ ] **Páginas Legais:** Criar páginas ou modais para Termos de Uso e Privacidade, ou remover links (Desabilitados visualmente por enquanto).

---

### � Prioridade Média

#### 4. Conteúdo Extra
- [ ] **Depoimentos:** Adicionar seção de prova social na Home.
- [ ] **Clientes:** Logo strip de parceiros/clientes atendidos.

#### 5. Melhorias de Código
- [ ] **Path Aliases:** Configurar `@/` para imports limpos.
- [ ] **Acessibilidade (A11y):** Garantir contraste adequado em textos claros e navegação por teclado.

---

## 📊 Status Geral

| Categoria    | Progresso | Detalhes |
|--------------|-----------|----------|
| **Design**   | 100% ✅   | Redesign Light Mode Completo |
| **Estrutura**| 100% ✅   | React Router, Componentes Base |
| **Funcional**| 40% 🚧    | Faltam forms e links reais |
| **SEO**      | 20% ⬜    | Faltam metatags e assets |
