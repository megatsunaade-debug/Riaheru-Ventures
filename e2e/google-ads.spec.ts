import { expect, test, type Page } from '@playwright/test';

const tagSelector = 'script[src*="googletagmanager.com/gtag/js"]';
const destination = 'AW-18063522051/xBSFCIj0_JUdEIPyraVD';
const calls = (page: Page) => page.evaluate(() => (window.dataLayer ?? []).map((entry) => Array.from(entry)));
const conversions = async (page: Page) => (await calls(page)).filter((entry) => entry[0] === 'event' && entry[1] === 'conversion');
const floatingLink = (page: Page) => page.locator('a[href^="https://wa.me/"]');
const openContact = (page: Page) => page.locator('main').getByRole('button', { name: /Iniciar conversa estratégica|Conversar sobre meu projeto/i }).first().click();

test.beforeEach(async ({ page }) => {
    // Exercise the real application queue without sending test conversions to Google.
    await page.route(/https:\/\/[^/]*(googletagmanager\.com|googleadservices\.com|doubleclick\.net)\//, (route) => route.fulfill({ contentType: 'application/javascript', body: '' }));
    await page.addInitScript(() => {
        window.open = () => null;
        for (const type of ['click', 'auxclick']) {
            document.addEventListener(type, (event) => {
                if (event.target instanceof Element && event.target.closest('a[href^="https://wa.me/"]')) event.preventDefault();
            }, true);
        }
    });
    await page.goto('/');
});

test('does not load Google or track contact before marketing consent', async ({ page }) => {
    await expect(page.getByTestId('cookie-banner')).toBeVisible();
    await openContact(page);
    await page.getByRole('dialog').getByRole('button', { name: /Falar direto pelo WhatsApp/i }).click();
    await expect(page.locator(tagSelector)).toHaveCount(0);
    expect(await conversions(page)).toHaveLength(0);
});

test('keeps both WhatsApp entry points usable after rejecting marketing', async ({ page }) => {
    await page.getByTestId('reject-non-essential').click();
    await floatingLink(page).click();
    await openContact(page);
    await page.getByRole('dialog').getByRole('button', { name: /Falar direto pelo WhatsApp/i }).click();
    await expect(page.locator(tagSelector)).toHaveCount(0);
    expect(await conversions(page)).toHaveLength(0);
});

test('tracks each floating and modal activation once after consent', async ({ page, isMobile }) => {
    await page.getByTestId('accept-all-cookies').click();
    await expect(page.locator(tagSelector)).toHaveCount(1);
    expect(await conversions(page)).toHaveLength(0);
    await floatingLink(page).click();
    await expect.poll(async () => (await conversions(page)).length).toBe(1);
    let expectedCount = 1;
    if (!isMobile) {
        await floatingLink(page).click({ button: 'middle' });
        expectedCount++;
        await expect.poll(async () => (await conversions(page)).length).toBe(expectedCount);
        await floatingLink(page).focus();
        await page.keyboard.press('Enter');
        expectedCount++;
        await expect.poll(async () => (await conversions(page)).length).toBe(expectedCount);
    }
    await openContact(page);
    await page.getByRole('dialog').getByRole('button', { name: /Falar direto pelo WhatsApp/i }).click();
    await expect.poll(async () => (await conversions(page)).length).toBe(expectedCount + 1);
    for (const entry of await conversions(page)) expect(entry[2]).toEqual({ send_to: destination });
    expect((await calls(page)).filter((entry) => entry[0] === 'config')).toHaveLength(1);
});

test('revokes marketing and resumes without duplicating the tag', async ({ page }) => {
    await page.getByTestId('accept-all-cookies').click();
    await expect(page.locator(tagSelector)).toHaveCount(1);
    await floatingLink(page).click();
    await page.getByRole('button', { name: 'Preferências de cookies', exact: true }).click();
    const dialog = page.getByRole('dialog');
    await dialog.getByRole('heading', { name: 'Cookies de Marketing', exact: true }).locator('../..').getByRole('button').click();
    await dialog.getByRole('button', { name: 'Salvar preferências' }).click();
    await expect.poll(async () => (await calls(page)).filter((entry) => entry[0] === 'consent' && entry[1] === 'update').at(-1)?.[2]).toEqual({ ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' });
    await floatingLink(page).click();
    expect(await conversions(page)).toHaveLength(1);
    await page.getByRole('button', { name: 'Preferências de cookies', exact: true }).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Aceitar tudo', exact: true }).click();
    await floatingLink(page).click();
    await expect.poll(async () => (await conversions(page)).length).toBe(2);
    await expect(page.locator(tagSelector)).toHaveCount(1);
    expect((await calls(page)).filter((entry) => entry[0] === 'config')).toHaveLength(1);
});

test('restores marketing consent after reload without sending a conversion on load', async ({ page }) => {
    await page.getByTestId('accept-all-cookies').click();
    await page.reload();
    await expect(page.locator(tagSelector)).toHaveCount(1);
    await expect(page.getByTestId('cookie-banner')).not.toBeVisible();
    expect(await conversions(page)).toHaveLength(0);
    await floatingLink(page).click();
    await expect.poll(async () => (await conversions(page)).length).toBe(1);
});
