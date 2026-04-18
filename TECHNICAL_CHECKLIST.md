# Technical Checklist

## Implementado no ciclo 1

- Shell com um único `main`
- CTA primário padronizado em `Iniciar projeto`
- Navegação desktop/mobile mais previsível e acessível
- Modal de contato sem feedback enganoso
- Fallback explícito para `mailto` quando não há backend
- Banner de cookies com `aceitar`, `apenas essenciais` e `configurar`
- Modal de preferências com `role="dialog"` e heading claro
- Refatoração de providers/hooks para eliminar erros de lint
- Home, Sobre e páginas institucionais alinhadas na mesma direção visual
- Newsletter fake removida em favor de CTA honesto
- Testes Playwright alinhados ao comportamento real

## Validar sempre que houver mudança relevante

- `npm run lint`
- `npx tsc -b`
- `npm run build`
- `npx playwright test`

## Próximos incrementos recomendados

- Integrar `VITE_CONTACT_ENDPOINT` com backend real ou serviço transacional
- Trocar o bloco institucional do “Radar Riaheru” por newsletter real
- Medir Core Web Vitals em produção
- Adicionar analytics com governança explícita de consentimento
- Revisar conteúdo comercial com casos, provas sociais e métricas reais

## Débitos restantes de baixo risco

- Consolidar componentes visuais ainda não utilizados ou órfãos
- Refinar copy de algumas seções para maior especificidade comercial
- Revisar possíveis ganhos de performance visual em imagens e animações
