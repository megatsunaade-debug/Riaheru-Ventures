import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useModal } from '../../hooks/useModal';
import { Button } from '../ui/Button';

const navLinks = [
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Trabalhos', href: '/#trabalhos' },
    { name: 'Sobre', href: '/sobre' },
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { openContactModal } = useModal();

    const headerOffset = 92;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isMobileMenuOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (elementId: string, attempts = 0) => {
        const element = document.getElementById(elementId);

        if (!element) {
            if (attempts < 12) {
                window.setTimeout(() => scrollToSection(elementId, attempts + 1), 60);
            }
            return;
        }

        const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (href === '/') {
            if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate('/');
            }
            return;
        }

        if (href.startsWith('/#')) {
            const elementId = href.replace('/#', '');

            if (location.pathname === '/') {
                scrollToSection(elementId);
            } else {
                navigate('/');
                window.setTimeout(() => {
                    scrollToSection(elementId);
                }, 80);
            }

            return;
        }

        navigate(href);
    };

    return (
        <>
            <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-[var(--border-subtle)] bg-[color:rgba(248,250,252,0.85)] backdrop-blur-xl py-4' : 'border-b border-transparent bg-transparent py-6'}`}>
                <nav className="container" aria-label="Principal">
                    <div className="flex items-center justify-between">
                        <a
                            href="/"
                            onClick={(e) => handleNavClick(e, '/')}
                            className="flex items-center gap-3"
                            aria-label="Ir para a página inicial da Riaheru"
                        >
                            <img
                                src="/LOGO header.png"
                                alt="Riaheru"
                                className={`h-8 w-auto transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`}
                            />
                        </a>

                        <div className="hidden items-center gap-8 md:flex">
                            {navLinks.map((link) => {
                                const isActive = link.href === '/sobre'
                                    ? location.pathname === '/sobre'
                                    : location.pathname === '/' && link.href.startsWith('/#');

                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        aria-current={isActive ? 'page' : undefined}
                                        className={`text-sm font-semibold transition-colors ${
                                            isActive
                                            ? (isScrolled ? 'text-[var(--accent)]' : 'text-white')
                                            : (isScrolled ? 'text-[var(--gray-600)] hover:text-[var(--text-dark)]' : 'text-white/70 hover:text-white')
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                            <Button
                                size="sm"
                                onClick={openContactModal}
                                className={!isScrolled ? "shadow-none bg-white text-black hover:bg-white/90 border-transparent relative overflow-hidden group" : "shadow-[var(--shadow-sm)]"}
                            >
                                <span className={!isScrolled ? "relative z-10" : ""}>Iniciar projeto</span>
                                {!isScrolled && <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-black/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />}
                            </Button>
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen((current) => !current)}
                            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-[var(--shadow-sm)] md:hidden transition-colors ${
                                isScrolled 
                                ? 'border-[var(--border-subtle)] bg-white text-[var(--gray-600)]' 
                                : 'border-white/10 bg-white/5 text-white backdrop-blur-md'
                            }`}
                            aria-label="Menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-navigation"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </header>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true" aria-label="Menu mobile">
                    <button
                        type="button"
                        aria-label="Fechar menu"
                        className="absolute inset-0 bg-[color:rgba(15,23,42,0.2)] backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div
                        id="mobile-navigation"
                        className="absolute inset-x-4 top-20 rounded-[28px] border border-[var(--border-subtle)] bg-white/96 p-6 shadow-[var(--shadow-lg)]"
                    >
                        <nav className="flex flex-col gap-2" aria-label="Navegação mobile">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="rounded-2xl px-4 py-4 text-lg font-medium text-[var(--text-dark)] transition-colors hover:bg-[var(--gray-50)]"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="mt-4 border-t border-[var(--border-subtle)] pt-4">
                                <Button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        openContactModal();
                                    }}
                                    className="w-full justify-center"
                                >
                                    Iniciar projeto
                                </Button>
                            </div>
                        </nav>
                    </div>
                </div>
            )}

            <div className="h-[76px]" />
        </>
    );
}
