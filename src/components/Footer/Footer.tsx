import { CONTACT_INFO } from '../../constants';
import { useCookieConsent } from '../../hooks/useCookieConsent';

export function Footer() {
    const { openSettings } = useCookieConsent();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-[color:rgba(255,255,255,0.08)] bg-[var(--black)] text-white">
            <div className="container">
                <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <a href="/" className="inline-flex items-center gap-3">
                            <img
                                src="/LOGO header.png"
                                alt="Riaheru"
                                className="h-8 w-auto brightness-0 invert"
                            />
                        </a>
                        <p className="site-footer-copy mt-5 max-w-sm text-sm leading-relaxed">
                            Engenharia de software, consultoria estratégica e produtos digitais com foco em clareza técnica, robustez operacional e execução sem ruído.
                        </p>
                    </div>

                    <div className="md:col-span-2">
                        <span className="site-footer-label block text-xs font-semibold uppercase tracking-[0.22em]">
                            Empresa
                        </span>
                        <nav className="mt-4 space-y-3">
                            <a href="/#servicos" className="site-footer-link block text-sm transition-colors">
                                Serviços
                            </a>
                            <a href="/#trabalhos" className="site-footer-link block text-sm transition-colors">
                                Trabalhos
                            </a>
                            <a href="/sobre" className="site-footer-link block text-sm transition-colors">
                                Sobre
                            </a>
                            <a href="/carreiras" className="site-footer-link block text-sm transition-colors">
                                Carreiras
                            </a>
                        </nav>
                    </div>

                    <div className="md:col-span-2">
                        <span className="site-footer-label block text-xs font-semibold uppercase tracking-[0.22em]">
                            Legal
                        </span>
                        <nav className="mt-4 space-y-3">
                            <a
                                href="/politica-privacidade-riaheru-ventures.pdf"
                                download
                                className="site-footer-link block text-sm transition-colors"
                            >
                                Privacidade
                            </a>
                            <a href="/termos" className="site-footer-link block text-sm transition-colors">
                                Termos de uso
                            </a>
                            <button
                                onClick={openSettings}
                                className="site-footer-link block text-left text-sm transition-colors"
                            >
                                Preferências de cookies
                            </button>
                        </nav>
                    </div>

                    <div className="md:col-span-3">
                        <span className="site-footer-label block text-xs font-semibold uppercase tracking-[0.22em]">
                            Contato
                        </span>
                        <div className="mt-4 space-y-3">
                            <a
                                href={`mailto:${CONTACT_INFO.EMAIL}`}
                                className="site-footer-link block text-sm transition-colors"
                            >
                                {CONTACT_INFO.EMAIL}
                            </a>
                            <a
                                href={`tel:+${CONTACT_INFO.WHATSAPP}`}
                                className="site-footer-link block text-sm transition-colors"
                            >
                                +55 {CONTACT_INFO.WHATSAPP_DISPLAY}
                            </a>
                            <a
                                href={CONTACT_INFO.LINKEDIN}
                                target="_blank"
                                rel="noreferrer"
                                className="site-footer-link block text-sm transition-colors"
                            >
                                LinkedIn
                            </a>
                            <p className="site-footer-meta text-sm">
                                São Paulo, Brasil
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex flex-col gap-3 py-6 text-sm md:flex-row md:items-center md:justify-between">
                    <p className="site-footer-meta">
                        © {currentYear} Riaheru Ventures. Todos os direitos reservados.
                    </p>
                    <p className="site-footer-meta">
                        Feito em São Paulo para operações que exigem clareza, velocidade e confiabilidade.
                    </p>
                </div>
            </div>
        </footer>
    );
}
