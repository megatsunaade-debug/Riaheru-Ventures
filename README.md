# Riaheru

Site institucional da Riaheru Ventures construído com `React 19`, `TypeScript`, `Vite`, `Tailwind CSS 4` e `Framer Motion`.

## Stack

- `React` + `react-router-dom` para shell e rotas institucionais
- `TypeScript` para tipagem do app
- `Tailwind CSS 4` + tokens em `src/index.css` para o design system
- `Framer Motion` para animações de entrada e transições leves
- `Playwright` para cobertura E2E dos fluxos de cookies e contato

## Fluxos atuais

- Home, Sobre, Cases, páginas de serviço, Carreiras e Termos compartilham a mesma linguagem visual
- Páginas de serviço:
  - `/servicos/venture-building`
  - `/servicos/engenharia-dedicada`
  - `/servicos/arquitetura-ia-operacao`
- CTA primário unificado em `Iniciar projeto`
- Modal de contato suporta:
  - envio real via `VITE_CONTACT_ENDPOINT`, se configurado
  - fallback honesto para `mailto`, sem simular backend
  - contexto de origem, página e serviço de interesse quando o CTA fornece esses dados
  - atalho direto para WhatsApp
- Consentimento de cookies com banner, rejeição de não essenciais e modal acessível de preferências
- Newsletter substituída por CTA institucional até existir integração real

## Scripts

```bash
npm run dev
npm run build
npm run lint
npx playwright test
```

## Variáveis de ambiente

Opcionalmente, o modal de contato pode usar:

```bash
VITE_CONTACT_ENDPOINT=https://sua-api.exemplo.com/contact
VITE_CONTACT_EMAIL=contato@riaheru.com
```

Sem `VITE_CONTACT_ENDPOINT`, o formulário abre o cliente de email do usuário com o briefing já preenchido.

## Estrutura relevante

- `src/App.tsx`: shell do app e rotas
- `src/components/`: seções e UI compartilhada
- `src/data/serviceOfferings.ts`: rotas de serviço e copy estruturada
- `src/data/cases.ts`: cases e imagens de prova
- `src/context/` e `src/hooks/`: contexto/modal/cookies
- `src/providers/`: providers de aplicação
- `e2e/`: testes Playwright

## Qualidade

- `npm run lint` deve permanecer verde
- `npx tsc -b` valida tipagem do projeto
- `npx playwright test` cobre os fluxos críticos de cookies e contato
