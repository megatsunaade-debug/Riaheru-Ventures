import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

const navLinks = [
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Ventures', href: '/#ventures' },
    { name: 'Expertise', href: '/#stack' },
    { name: 'Sobre', href: '/sobre' },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { openContactModal } = useModal();

    // Check if we're on a dark hero page (home)
    const isDarkHero = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`
                    fixed top-4 left-4 right-4 z-50 rounded-2xl
                    transition-all duration-300
                    ${isScrolled
                        ? 'bg-[var(--bg-dark)]/95 backdrop-blur-xl shadow-lg'
                        : isDarkHero
                            ? 'bg-[var(--bg-dark)]/40 backdrop-blur-md'
                            : 'bg-white/95 backdrop-blur-xl'
                    }
                `}
            >
                <nav className="container mx-auto py-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a
                            href="/"
                            onClick={(e) => handleNavClick(e, '/')}
                            className="flex items-center group"
                        >
                            <img
                                src="/LOGO header.png"
                                alt="Riaheru"
                                className="h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                            />
                        </a>


                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`
                                        text-sm font-medium transition-all duration-200
                                        hover:text-[var(--accent-light)] relative group
                                        ${isScrolled || isDarkHero
                                            ? 'text-white/80 hover:text-white'
                                            : 'text-gray-600 hover:text-gray-900'
                                        }
                                        ${location.pathname === link.href ? 'text-white' : ''}
                                    `}
                                >
                                    {link.name}
                                    <span className={`
                                        absolute -bottom-1 left-0 h-0.5 bg-[var(--accent-primary)] transition-all duration-300
                                        ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}
                                    `} />
                                </a>
                            ))}
                        </div>

                        {/* CTA & Mobile Toggle */}
                        <div className="flex items-center gap-4">
                            <div className="hidden md:block">
                                <Button
                                    variant="primary"
                                    size="md"
                                    onClick={openContactModal}
                                >
                                    Iniciar Projeto
                                </Button>
                            </div>

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled || isDarkHero
                                    ? 'text-white hover:bg-white/10'
                                    : 'text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[var(--bg-dark)]/98 backdrop-blur-xl pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-xl font-semibold text-white/90 hover:text-white border-b border-white/10 py-4 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full mt-6"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    openContactModal();
                                }}
                            >
                                Iniciar Projeto
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
