import { test, expect } from '@playwright/test';

test.describe('Contact Modal', () => {
    test.beforeEach(async ({ page, context }) => {
        // Limpar localStorage e aceitar cookies primeiro
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
        // Abrir modal de contato pelo botão "Iniciar Projeto" no HEADER (primeiro elemento)
        await page.getByRole('banner').getByRole('button', { name: 'Iniciar Projeto' }).click();

        // Aguardar modal abrir
        await expect(page.getByRole('dialog')).toBeVisible();
        await expect(page.getByText('Vamos Conversar?')).toBeVisible();

        // Preencher campos obrigatórios
        await page.fill('[name="nome"]', 'Teste Playwright');
        await page.fill('[name="email"]', 'teste@playwright.com');
        await page.fill('[name="mensagem"]', 'Esta é uma mensagem de teste automatizado.');

        // Tentar enviar sem marcar checkbox - usar o botão DENTRO do form
        await page.locator('form').getByRole('button', { name: 'Iniciar Projeto' }).click();

        // Deve mostrar erro de consentimento
        const consentError = page.locator('[data-testid="consent-error"]');
        await expect(consentError).toBeVisible();
        await expect(consentError).toContainText('Política de Privacidade');
    });

    test('formulário envia com consentimento marcado', async ({ page }) => {
        // Abrir modal de contato
        await page.getByRole('banner').getByRole('button', { name: 'Iniciar Projeto' }).click();

        // Aguardar modal abrir
        await expect(page.getByRole('dialog')).toBeVisible();
        await expect(page.getByText('Vamos Conversar?')).toBeVisible();

        // Preencher campos
        await page.fill('[name="nome"]', 'Teste Playwright');
        await page.fill('[name="email"]', 'teste@playwright.com');
        await page.fill('[name="mensagem"]', 'Esta é uma mensagem de teste automatizado.');

        // Marcar checkbox de consentimento
        await page.click('[data-testid="privacy-consent"]');

        // Verificar que o checkbox está marcado
        const checkbox = page.locator('[data-testid="privacy-consent"]');
        await expect(checkbox).toBeChecked();

        // Erro de consentimento não deve aparecer
        const consentError = page.locator('[data-testid="consent-error"]');
        await expect(consentError).not.toBeVisible();
    });

    test('campos opcionais são exibidos', async ({ page }) => {
        // Abrir modal de contato
        await page.getByRole('banner').getByRole('button', { name: 'Iniciar Projeto' }).click();

        // Aguardar modal abrir
        await expect(page.getByRole('dialog')).toBeVisible();
        await expect(page.getByText('Vamos Conversar?')).toBeVisible();

        // Verificar campos opcionais dentro do dialog
        const dialog = page.getByRole('dialog');
        await expect(dialog.locator('[name="empresa"]')).toBeVisible();
        await expect(dialog.locator('[name="telefone"]')).toBeVisible();

        // Verificar labels
        await expect(dialog.getByText('Empresa')).toBeVisible();
        await expect(dialog.getByText('Telefone')).toBeVisible();
        await expect(dialog.getByText('(opcional)').first()).toBeVisible();
    });

    test('link da política de privacidade está presente', async ({ page }) => {
        // Abrir modal de contato
        await page.getByRole('banner').getByRole('button', { name: 'Iniciar Projeto' }).click();

        // Aguardar modal abrir
        await expect(page.getByRole('dialog')).toBeVisible();
        await expect(page.getByText('Vamos Conversar?')).toBeVisible();

        // Verificar link da política dentro do dialog
        const dialog = page.getByRole('dialog');
        const policyLink = dialog.getByRole('link', { name: 'Política de Privacidade' });
        await expect(policyLink).toBeVisible();
        await expect(policyLink).toHaveAttribute('href', /Politica-de-Privacidade/);
        await expect(policyLink).toHaveAttribute('download');
    });
});
