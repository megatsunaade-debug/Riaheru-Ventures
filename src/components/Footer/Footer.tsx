import { CONTACT_INFO } from '../../constants';
import { useCookieConsent } from '../../hooks/useCookieConsent';

export function Footer() {
    const { openSettings } = useCookieConsent();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-16 bg-[var(--black)] text-white">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-4">
                        <a href="/" className="inline-block mb-4">
                            <img
                                src="/LOGO header.png"
                                alt="Riaheru"
                                className="h-8 w-auto brightness-0 invert"
                            />
                        </a>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Engenharia de software, consultoria estratégica e venture building
                            para empresas que querem escalar.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-4">
                            Empresa
                        </span>
                        <nav className="space-y-3">
                            <a href="/#servicos" className="block text-sm text-gray-400 hover:text-white transition-colors">
                                Serviços
                            </a>
                            <a href="/#trabalhos" className="block text-sm text-gray-400 hover:text-white transition-colors">
                                Trabalhos
                            </a>
                            <a href="/sobre" className="block text-sm text-gray-400 hover:text-white transition-colors">
                                Sobre
                            </a>
                        </nav>
                    </div>

                    {/* Legal */}
                    <div className="md:col-span-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-4">
                            Legal
                        </span>
                        <nav className="space-y-3">
                            <a
                                href="/politica-privacidade-riaheru-ventures.pdf"
                                download
                                className="block text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                Privacidade
                            </a>
                            <button
                                onClick={openSettings}
                                className="block text-sm text-gray-400 hover:text-white transition-colors text-left"
                            >
                                Preferências de Cookies
                            </button>
                        </nav>
                    </div>

                    {/* Contato */}
                    <div className="md:col-span-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-4">
                            Contato
                        </span>
                        <div className="space-y-3">
                            <a
                                href={`mailto:${CONTACT_INFO.EMAIL}`}
                                className="block text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                {CONTACT_INFO.EMAIL}
                            </a>
                            <a
                                href={`tel:+${CONTACT_INFO.WHATSAPP}`}
                                className="block text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                +55 {CONTACT_INFO.WHATSAPP_DISPLAY}
                            </a>
                            <p className="text-sm text-gray-500">
                                São Paulo, Brasil
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-800 mb-8" />

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {currentYear} Riaheru Ventures. Todos os direitos reservados.
                    </p>
                    <p className="text-sm text-gray-600">
                        Feito com ☕ em São Paulo
                    </p>
                </div>
            </div>
        </footer>
    );
}
