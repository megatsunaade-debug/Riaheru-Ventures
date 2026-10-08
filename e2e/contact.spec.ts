import { expect, test, type Page } from '@playwright/test';

test.describe('Contact Modal', () => {
    const openContactModal = async (page: Page) => {
        await page.getByRole('button', { name: /Iniciar projeto/i }).first().click();
    };

    test.beforeEach(async ({ page, context }) => {
        await context.addInitScript(() => {
            localStorage.setItem('riaheru_cookie_consent', JSON.stringify({
                essential: true,
                functional: true,
                marketing: true,
            }));
        });

        await page.goto('/');
    });

    test('formulário requer consentimento de privacidade', async ({ page }) => {
        await openContactModal(page);

        await expect(page.getByRole('dialog')).toBeVisible();
        await expect(page.getByText('Traga o contexto.')).toBeVisible();

        await page.fill('[name="nome"]', 'Teste Playwright');
        await page.fill('[name="email"]', 'teste@playwright.com');
        await page.fill('[name="mensagem"]', 'Esta é uma mensagem de teste automatizado.');

        await page.locator('form').getByRole('button', { name: /Abrir email com briefing|Enviar briefing/i }).click();

        const consentError = page.locator('[data-testid="consent-error"]');
        await expect(consentError).toBeVisible();
        await expect(consentError).toContainText('Política de Privacidade');
    });

    test('falha do endpoint é comunicada sem abrir o email do visitante', async ({ page }) => {
        await page.route('**/api/contact', (route) => route.fulfill({
            status: 503,
            contentType: 'application/json',
            body: JSON.stringify({ error: 'O envio do briefing não está configurado no servidor.' }),
        }));

        await openContactModal(page);

        const dialog = page.getByRole('dialog');
        await expect(dialog).toBeVisible();
        await expect(dialog.getByRole('button', { name: /Falar direto pelo WhatsApp/i })).toBeVisible();
        await page.fill('[name="nome"]', 'Teste Playwright');
        await page.fill('[name="email"]', 'teste@playwright.com');
        await page.fill('[name="mensagem"]', 'Esta é uma mensagem de teste automatizado.');
        await page.locator('[data-testid="privacy-consent"]').check({ force: true });
        await dialog.locator('form').getByRole('button', { name: 'Enviar briefing' }).click();

        await expect(dialog.getByRole('alert')).toContainText('Não conseguimos concluir agora');
        await expect(page).toHaveURL('/');
    });

    test('campos opcionais são exibidos', async ({ page }) => {
        await openContactModal(page);

        const dialog = page.getByRole('dialog');
        await expect(dialog).toBeVisible();
        await expect(dialog.locator('[name="empresa"]')).toBeVisible();
        await expect(dialog.locator('[name="telefone"]')).toBeVisible();
        await expect(dialog.getByText('Empresa')).toBeVisible();
        await expect(dialog.getByText('Telefone')).toBeVisible();
        await expect(dialog.getByText('(opcional)').first()).toBeVisible();
    });

    test('link da política de privacidade está presente', async ({ page }) => {
        await openContactModal(page);

        const dialog = page.getByRole('dialog');
        await expect(dialog).toBeVisible();

        const policyLink = dialog.getByRole('link', { name: 'Política de Privacidade' });
        await expect(policyLink).toBeVisible();
        await expect(policyLink).toHaveAttribute('href', '/politica-privacidade-riaheru-ventures.pdf');
        await expect(policyLink).toHaveAttribute('download');
    });
});
