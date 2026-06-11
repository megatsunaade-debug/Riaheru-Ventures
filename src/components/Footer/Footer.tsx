import { ArrowUpRight } from 'lucide-react';

import { CONTACT_INFO } from '../../constants';
import { useCookieConsent } from '../../hooks/useCookieConsent';

export function Footer() {
    const { openSettings } = useCookieConsent();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg)] text-[var(--text)]">
            <div className="grid-texture pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="container relative">
                <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:py-20">
                    <div className="md:col-span-5">
                        <a href="/" className="inline-flex items-center gap-2.5">
                            <img
                                src="/LOGO header.png"
                                alt="Riaheru"
                                className="h-7 w-auto brightness-0 invert"
                            />
                        </a>
                        <p className="mt-6 max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
                            Engenharia de software B2B, venture building e arquitetura para
                            produtos digitais, sistemas críticos e operações que exigem
                            continuidade.
                        </p>
                        <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-dim)]">
                            <span className="h-1.5 w-1.5 bg-[var(--highlight)]" aria-hidden="true" />
                            São Paulo · Brasil
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--text-dim)]">
                            Empresa
                        </span>
                        <nav className="mt-5 space-y-3">
                            {[
                                ['Serviços', '/#servicos'],
                                ['Cases', '/#trabalhos'],
                                ['Processo', '/#processo'],
                                ['Sobre', '/sobre'],
                            ].map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="md:col-span-2">
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--text-dim)]">
                            Legal
                        </span>
                        <nav className="mt-5 space-y-3">
                            <a
                                href="/politica-privacidade-riaheru-ventures.pdf"
                                download
                                className="block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                            >
                                Privacidade
                            </a>
                            <a href="/termos" className="block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]">
                                Termos de uso
                            </a>
                            <button
                                onClick={openSettings}
                                className="block text-left text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                            >
                                Preferências de cookies
                            </button>
                        </nav>
                    </div>

                    <div className="md:col-span-3">
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--text-dim)]">
                            Contato
                        </span>
                        <div className="mt-5 space-y-3">
                            <a
                                href={`mailto:${CONTACT_INFO.EMAIL}`}
                                className="block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                            >
                                {CONTACT_INFO.EMAIL}
                            </a>
                            <a
                                href={`tel:+${CONTACT_INFO.WHATSAPP}`}
                                className="block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                            >
                                +55 {CONTACT_INFO.WHATSAPP_DISPLAY}
                            </a>
                            <a
                                href={CONTACT_INFO.LINKEDIN}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                            >
                                LinkedIn
                                <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-[var(--border)]" />

                <div className="flex flex-col gap-3 py-6 text-sm md:flex-row md:items-center md:justify-between">
                    <p className="text-[var(--text-dim)]">
                        © {currentYear} Riaheru Ventures. Todos os direitos reservados.
                    </p>
                    <p className="text-[var(--text-dim)]">
                        Feito em São Paulo para empresas que precisam de tecnologia clara,
                        segura e operacional.
                    </p>
                </div>
            </div>
        </footer>
    );
}
