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
  - envio do briefing pelo endpoint server-side `/api/contact`
  - destinatário `admin@riaheru.com` e email informado como `Reply-To`
  - contexto de origem, página e serviço de interesse quando o CTA fornece esses dados
  - WhatsApp como caminho visual primário e briefing como alternativa
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

Configure no ambiente de servidor da Vercel (não use prefixo `VITE_` nem exponha estes valores no navegador):

```bash
RESEND_API_KEY=chave-secreta-do-resend
CONTACT_FROM_EMAIL="Riaheru <email-de-dominio-verificado@exemplo.com>"
```

O domínio do remetente precisa estar verificado no Resend. Sem essas variáveis, o endpoint retorna erro e o formulário não informa sucesso; a pessoa pode usar o WhatsApp enquanto o envio não estiver configurado.

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
