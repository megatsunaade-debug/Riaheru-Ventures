import type { IncomingMessage, ServerResponse } from 'node:http';
import { env } from 'node:process';

type ContactRequest = IncomingMessage & { body?: unknown };
type ContactPayload = Record<string, unknown>;

const RECIPIENT = 'admin@riaheru.com';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sendJson(res: ServerResponse, status: number, data: Record<string, unknown>) {
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(data));
}

function field(value: unknown, maxLength: number) {
    return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function contextField(context: ContactPayload | undefined, key: string, maxLength = 160) {
    return field(context?.[key], maxLength);
}

export default async function handler(req: ContactRequest, res: ServerResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return sendJson(res, 405, { error: 'Método não permitido.' });
    }

    const apiKey = env.RESEND_API_KEY;
    const from = env.CONTACT_FROM_EMAIL;
    if (!apiKey || !from) {
        return sendJson(res, 503, { error: 'O envio do briefing não está configurado no servidor.' });
    }

    const payload = req.body;
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
        return sendJson(res, 400, { error: 'Dados do briefing inválidos.' });
    }

    const data = payload as ContactPayload;
    const name = field(data.name, 120);
    const email = field(data.email, 254);
    const company = field(data.empresa, 160);
    const phone = field(data.telefone, 60);
    const message = field(data.message, 5000);
    const context = data.context && typeof data.context === 'object' && !Array.isArray(data.context)
        ? data.context as ContactPayload
        : undefined;

    if (!name || !EMAIL_PATTERN.test(email) || !message || data.privacyConsent !== true) {
        return sendJson(res, 400, { error: 'Confira os campos obrigatórios e o consentimento de privacidade.' });
    }

    const details = [
        `Nome: ${name}`,
        `Email: ${email}`,
        company ? `Empresa: ${company}` : '',
        phone ? `Telefone: ${phone}` : '',
        contextField(context, 'serviceLabel') ? `Serviço de interesse: ${contextField(context, 'serviceLabel')}` : '',
        contextField(context, 'source') ? `Origem do contato: ${contextField(context, 'source')}` : '',
        contextField(context, 'page') ? `Página: ${contextField(context, 'page')}` : '',
        '',
        'Contexto do projeto:',
        message,
    ].filter(Boolean).join('\n');

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from,
                to: [RECIPIENT],
                reply_to: email,
                subject: `Novo briefing de projeto — ${name}`,
                text: details,
            }),
        });

        if (!response.ok) {
            console.error('Resend rejeitou o envio do briefing. HTTP', response.status);
            return sendJson(res, 502, { error: 'Não foi possível enviar o briefing agora.' });
        }

        return sendJson(res, 200, { ok: true });
    } catch {
        console.error('Falha de conexão ao enviar briefing pelo Resend.');
        return sendJson(res, 502, { error: 'Não foi possível enviar o briefing agora.' });
    }
}
