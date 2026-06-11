import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useModal } from '../../hooks/useModal';

const navLinks = [
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Cases', href: '/#trabalhos' },
    { name: 'Processo', href: '/#processo' },
    { name: 'Sobre', href: '/sobre' },
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { openContactModal } = useModal();

    const headerOffset = 84;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };
        handleScroll();
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
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'border-b border-[var(--border)] bg-[color:rgba(5,7,13,0.72)] py-3.5 backdrop-blur-xl'
                        : 'border-b border-transparent bg-transparent py-5'
                }`}
            >
                <nav className="container" aria-label="Principal">
                    <div className="flex items-center justify-between">
                        <a
                            href="/"
                            onClick={(e) => handleNavClick(e, '/')}
                            className="flex items-center gap-2.5"
                            aria-label="Ir para a página inicial da Riaheru"
                        >
                            <img
                                src="/LOGO header.png"
                                alt="Riaheru"
                                className="h-7 w-auto brightness-0 invert"
                            />
                        </a>

                        <div className="hidden items-center gap-9 md:flex">
                            {navLinks.map((link) => {
                                const isActive = link.href === '/sobre'
                                    ? location.pathname === '/sobre'
                                    : false;

                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        aria-current={isActive ? 'page' : undefined}
                                        className={`text-sm font-medium tracking-tight transition-colors ${
                                            isActive
                                                ? 'text-[var(--text)]'
                                                : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                            <button
                                type="button"
                                onClick={openContactModal}
                                className="btn btn-primary min-h-10 px-5 py-2.5 text-sm"
                            >
                                Iniciar projeto
                            </button>
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen((current) => !current)}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)] backdrop-blur-md transition-colors hover:border-[var(--border-strong)] md:hidden"
                            aria-label="Menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-navigation"
                        >
                            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </nav>
            </header>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true" aria-label="Menu mobile">
                    <button
                        type="button"
                        aria-label="Fechar menu"
                        className="absolute inset-0 bg-[color:rgba(5,7,13,0.75)] backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div
                        id="mobile-navigation"
                        className="absolute inset-x-4 top-20 rounded-xl border border-[var(--border)] bg-[var(--bg-2)] p-5 shadow-[var(--shadow-lg)]"
                    >
                        <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="rounded-lg px-4 py-3.5 text-base font-medium text-[var(--text)] transition-colors hover:bg-[var(--surface-2)]"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="mt-3 border-t border-[var(--border)] pt-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        openContactModal();
                                    }}
                                    className="btn btn-primary min-h-12 w-full px-6 py-3"
                                >
                                    Iniciar projeto
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
