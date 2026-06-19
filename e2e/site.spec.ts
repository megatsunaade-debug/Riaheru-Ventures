import { expect, test } from '@playwright/test';

test.describe('Site structure and routing', () => {
    test.beforeEach(async ({ context }) => {
        await context.addInitScript(() => {
            localStorage.setItem('riaheru_cookie_consent', JSON.stringify({
                essential: true,
                functional: true,
                marketing: true,
            }));
        });
    });

    test('serviços têm rotas, SEO e CTA contextual', async ({ page }) => {
        await page.goto('/servicos/venture-building');

        await expect(page).toHaveTitle(/Venture Building B2B/);
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
            'href',
            'https://riaheru.com/servicos/venture-building',
        );
        await expect(page.getByRole('heading', { name: /Da tese ao produto operando/i })).toBeVisible();
        await expect(page.locator('[aria-current="page"]')).toHaveCount(1);
        await expect(page.locator('[aria-current="page"]')).toContainText('Serviços');

        await page.getByRole('button', { name: /Discutir uma tese de produto/i }).click();

        const dialog = page.getByRole('dialog');
        await expect(dialog).toBeVisible();
        await expect(dialog.locator('[data-testid="contact-context"]')).toContainText('Venture Building');
    });

    test('página de cases usa rota própria e metadados únicos', async ({ page }) => {
        await page.goto('/cases');

        await expect(page).toHaveTitle(/Cases de Produto/);
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://riaheru.com/cases');
        await expect(page.getByRole('heading', { name: /Produto, operação e presença digital/i })).toBeVisible();
        await expect(page.locator('[aria-current="page"]')).toHaveCount(1);
        await expect(page.locator('[aria-current="page"]')).toContainText('Cases');
    });

    test('menu mobile navega para cases', async ({ page }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto('/');

        await page.getByRole('button', { name: 'Menu' }).click();
        await page.getByRole('dialog', { name: 'Menu mobile' }).getByRole('link', { name: 'Cases' }).click();

        await expect(page).toHaveURL(/\/cases$/);
        await expect(page.getByRole('heading', { name: /Produto, operação e presença digital/i })).toBeVisible();
    });
});

test.describe('Cookie banner layout', () => {
    test('banner mobile permanece compacto no primeiro acesso', async ({ page }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto('/');
        await page.evaluate(() => localStorage.clear());
        await page.reload();

        const banner = page.locator('[data-testid="cookie-banner"]');
        await expect(banner).toBeVisible();

        const box = await banner.boundingBox();
        expect(box?.height).toBeLessThan(180);
        await expect(page.getByRole('button', { name: 'Aceitar' })).toBeVisible();
    });
});
