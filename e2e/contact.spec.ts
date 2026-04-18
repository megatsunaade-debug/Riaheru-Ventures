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

    test('modo sem backend é comunicado com clareza', async ({ page }) => {
        await openContactModal(page);

        const dialog = page.getByRole('dialog');
        await expect(dialog).toBeVisible();
        await expect(dialog.getByText('Ao enviar, abrimos seu cliente de email com o briefing preenchido.')).toBeVisible();
        await expect(dialog.locator('form').getByRole('button', { name: /Abrir email com briefing/i })).toBeVisible();
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
