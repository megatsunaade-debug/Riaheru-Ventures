import { expect, test } from '@playwright/test';

test.describe('Cookie Consent', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.evaluate(() => {
            localStorage.clear();
        });
        await page.reload();
    });

    test('banner aparece na primeira visita', async ({ page }) => {
        const banner = page.locator('[data-testid="cookie-banner"]');
        await expect(banner).toBeVisible({ timeout: 5000 });
    });

    test('banner desaparece após aceitar todos', async ({ page }) => {
        const banner = page.locator('[data-testid="cookie-banner"]');
        await expect(banner).toBeVisible();

        await page.click('[data-testid="accept-all-cookies"]');

        await expect(banner).not.toBeVisible();
    });

    test('banner desaparece após rejeitar não-essenciais', async ({ page }) => {
        const banner = page.locator('[data-testid="cookie-banner"]');
        await expect(banner).toBeVisible();

        await page.click('[data-testid="reject-non-essential"]');

        await expect(banner).not.toBeVisible();
    });

    test('preferências são persistidas após reload', async ({ page }) => {
        await page.click('[data-testid="accept-all-cookies"]');
        await page.waitForTimeout(250);
        await page.reload();
        await page.waitForLoadState('networkidle');

        const banner = page.locator('[data-testid="cookie-banner"]');
        await expect(banner).not.toBeVisible({ timeout: 3000 });
    });

    test('modal de personalização abre corretamente', async ({ page }) => {
        await page.click('[data-testid="customize-cookies"]');

        const dialog = page.getByRole('dialog');
        await expect(dialog).toBeVisible();
        await expect(dialog.getByRole('heading', { name: 'Preferências de Cookies' })).toBeVisible();
        await expect(dialog.getByText('Cookies Essenciais')).toBeVisible();
        await expect(dialog.getByText('Cookies Funcionais')).toBeVisible();
        await expect(dialog.getByText('Cookies de Marketing')).toBeVisible();
    });
});
