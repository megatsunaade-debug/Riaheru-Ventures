import { test, expect } from '@playwright/test';

test.describe('Cookie Consent', () => {
    test.beforeEach(async ({ context }) => {
        // Limpar localStorage antes de cada teste
        await context.addInitScript(() => {
            localStorage.clear();
        });
    });

    test('banner aparece na primeira visita', async ({ page }) => {
        await page.goto('/');

        // Aguardar o banner aparecer
        const banner = page.locator('[data-testid="cookie-banner"]');
        await expect(banner).toBeVisible({ timeout: 5000 });
    });

    test('banner desaparece após aceitar todos', async ({ page }) => {
        await page.goto('/');

        const banner = page.locator('[data-testid="cookie-banner"]');
        await expect(banner).toBeVisible();

        // Clicar em "Aceitar Todos"
        await page.click('[data-testid="accept-all-cookies"]');

        // Banner deve sumir
        await expect(banner).not.toBeVisible();
    });

    test('banner desaparece após rejeitar não-essenciais', async ({ page }) => {
        await page.goto('/');

        const banner = page.locator('[data-testid="cookie-banner"]');
        await expect(banner).toBeVisible();

        // Clicar em "Apenas Essenciais"
        await page.click('[data-testid="reject-non-essential"]');

        // Banner deve sumir
        await expect(banner).not.toBeVisible();
    });

    test('preferências são persistidas após reload', async ({ page }) => {
        await page.goto('/');

        // Aceitar cookies
        await page.click('[data-testid="accept-all-cookies"]');

        // Aguardar um pouco para garantir persistência
        await page.waitForTimeout(500);

        // Recarregar a página
        await page.reload();

        // Aguardar carregamento completo
        await page.waitForLoadState('networkidle');

        // Banner não deve aparecer
        const banner = page.locator('[data-testid="cookie-banner"]');
        await expect(banner).not.toBeVisible({ timeout: 3000 });
    });

    test('modal de personalização abre corretamente', async ({ page }) => {
        await page.goto('/');

        // Clicar em "Personalizar"
        await page.click('[data-testid="customize-cookies"]');

        // Modal de preferências deve aparecer - usar role dialog para ser específico
        const dialog = page.getByRole('dialog');
        await expect(dialog).toBeVisible();

        // Verificar heading dentro do dialog
        await expect(dialog.getByRole('heading', { name: 'Preferências de Cookies' })).toBeVisible();

        // Verificar as três categorias de cookies
        await expect(dialog.getByText('Cookies Essenciais')).toBeVisible();
        await expect(dialog.getByText('Cookies Funcionais')).toBeVisible();
        await expect(dialog.getByText('Cookies de Marketing')).toBeVisible();
    });
});
