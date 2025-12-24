import { motion } from 'framer-motion';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
    servicos: [
        { name: 'Desenvolvimento', href: '/#fabrica' },
        { name: 'Consultoria', href: '/#consultoria' },
        { name: 'Ventures', href: '/#ventures' },
    ],
    empresa: [
        { name: 'Sobre Nós', href: '/sobre' },
        { name: 'Expertise', href: '/#stack' },
        { name: 'Carreiras', href: '/carreiras' },
    ],
    legal: [
        { name: 'Privacidade', href: '/privacidade' },
        { name: 'Termos', href: '/termos' },
        { name: 'LGPD', href: '/lgpd' },
    ],
};

const contactInfo = [
    { icon: Mail, text: 'contato@riaheru.com', href: 'mailto:contato@riaheru.com' },
    { icon: Phone, text: '+55 (11) 99999-9999', href: 'tel:+5511999999999' },
    {
        icon: MapPin,
        text: 'São Paulo, Brasil',
        href: 'https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Paulo%2C+Brasil',
    },
];

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[var(--bg-dark)] border-t border-white/10">
            {/* Main Footer */}
            <div className="container max-w-7xl py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <motion.a
                            href="/"
                            className="flex items-center mb-6 group w-fit"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src="/LOGO header.png"
                                alt="Riaheru"
                                className="h-10 w-auto object-contain"
                            />
                        </motion.a>


                        <p className="text-white/50 mb-6 max-w-sm leading-relaxed text-sm">
                            Hub de tecnologia híbrido que combina Engenharia de Software,
                            Consultoria Estratégica e Venture Building.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            {contactInfo.map((item) => {
                                const isExternal = item.href.startsWith('http');
                                return (
                                    <a
                                        key={item.text}
                                        href={item.href}
                                        target={isExternal ? '_blank' : undefined}
                                        rel={isExternal ? 'noreferrer' : undefined}
                                        className="flex items-center gap-3 text-white/50 hover:text-[var(--accent-light)] transition-colors duration-300 text-sm"
                                    >
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40">
                                            <item.icon size={14} />
                                        </div>
                                        <span>{item.text}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-xs tracking-widest uppercase text-white font-semibold mb-5">
                            Serviços
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.servicos.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/50 hover:text-[var(--accent-light)] transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs tracking-widest uppercase text-white font-semibold mb-5">
                            Empresa
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.empresa.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/50 hover:text-[var(--accent-light)] transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs tracking-widest uppercase text-white font-semibold mb-5">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/50 hover:text-[var(--accent-light)] transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <div className="text-center md:text-left">
                            <p className="text-white/40 text-sm">
                                © 2025 Riaheru.{' '}
                                <span className="hidden sm:inline text-white/20 mx-2">|</span>
                                <span className="text-xs text-white/30 block sm:inline mt-1 sm:mt-0">
                                    Code is Law. Efficiency is Mandatory.
                                </span>
                            </p>
                        </div>

                        {/* Status Badge & Scroll */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="font-mono text-xs text-emerald-400 font-medium">ONLINE</span>
                            </div>

                            <motion.button
                                onClick={scrollToTop}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
                                aria-label="Voltar ao topo"
                            >
                                <ArrowUp size={18} />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
