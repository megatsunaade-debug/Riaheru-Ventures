import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

const navLinks = [
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Trabalhos', href: '/#trabalhos' },
    { name: 'Sobre', href: '/sobre' },
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { openContactModal } = useModal();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (href.startsWith('/#')) {
            const elementId = href.replace('/#', '');
            if (location.pathname === '/') {
                const element = document.getElementById(elementId);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(elementId);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            navigate(href);
        }
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--off-white)]/90 backdrop-blur-md border-b border-[var(--gray-100)]">
                <nav className="container py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a
                            href="/"
                            onClick={(e) => handleNavClick(e, '/')}
                            className="flex items-center"
                        >
                            <img
                                src="/LOGO header.png"
                                alt="Riaheru"
                                className="h-8 w-auto"
                                style={{ filter: 'brightness(0) saturate(100%)' }}
                            />
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-sm font-medium text-[var(--gray-600)] hover:text-[var(--black)] transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={openContactModal}
                                className="btn text-sm py-2.5 px-5"
                            >
                                Contato
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-[var(--gray-600)]"
                            aria-label="Menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-[var(--off-white)] pt-20 px-6 md:hidden">
                    <nav className="flex flex-col gap-4 py-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-2xl font-medium py-2"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                openContactModal();
                            }}
                            className="btn mt-4 w-full"
                        >
                            Contato
                        </button>
                    </nav>
                </div>
            )}

            {/* Spacer */}
            <div className="h-16" />
        </>
    );
}
