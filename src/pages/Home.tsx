import { useState, useEffect, useRef } from 'react';
import { Hero, Services, Showcase, Stack, Team } from '@/components';

// Componente de navegação flutuante elegante
function FloatingNav() {
    const [activeSection, setActiveSection] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const sections = [
        { id: 'hero', label: '01' },
        { id: 'services', label: '02' },
        { id: 'showcase', label: '03' },
        { id: 'stack', label: '04' },
        { id: 'team', label: '05' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
            
            const sectionElements = sections.map(s => document.getElementById(s.id));
            const scrollPos = window.scrollY + window.innerHeight / 2;
            
            sectionElements.forEach((section, index) => {
                if (section) {
                    const top = section.offsetTop;
                    const bottom = top + section.offsetHeight;
                    if (scrollPos >= top && scrollPos < bottom) {
                        setActiveSection(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
        >
            <div className="flex flex-col items-end gap-4">
                {sections.map((section, index) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="group flex items-center gap-3 transition-all duration-300"
                    >
                        <span
                            className={`font-mono text-xs tracking-widest transition-all duration-300 ${
                                activeSection === index
                                    ? 'text-amber-400 opacity-100'
                                    : 'text-neutral-500 opacity-0 group-hover:opacity-100'
                            }`}
                        >
                            {section.label}
                        </span>
                        <span
                            className={`block transition-all duration-500 rounded-full ${
                                activeSection === index
                                    ? 'w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-500'
                                    : 'w-2 h-2 bg-neutral-600 group-hover:bg-neutral-400'
                            }`}
                        />
                    </button>
                ))}
            </div>
        </nav>
    );
}

// Componente de transição entre seções
function SectionDivider({ number, title }: { number: string; title: string }) {
    return (
        <div className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                <span className="text-[40vw] font-black text-white select-none">
                    {number}
                </span>
            </div>
            <div className="relative max-w-7xl mx-auto px-8">
                <div className="flex items-center gap-8">
                    <span className="font-mono text-amber-400 text-sm tracking-[0.3em]">
                        {number}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-neutral-800 via-neutral-700 to-transparent" />
                    <h2 className="text-3xl font-light tracking-tight text-white">
                        {title}
                    </h2>
                </div>
            </div>
        </div>
    );
}

// Wrapper de seção com animação de entrada
function AnimatedSection({ 
    children, 
    id, 
    className = '' 
}: { 
    children: React.ReactNode; 
    id: string;
    className?: string;
}) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id={id}
            className={`transition-all duration-1000 ${
                isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
            } ${className}`}
        >
            {children}
        </section>
    );
}

// Cursor personalizado
function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                className="fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150"
                style={{
                    left: position.x - 4,
                    top: position.y - 4,
                    transform: isHovering ? 'scale(3)' : 'scale(1)',
                }}
            >
                <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <div
                className="fixed pointer-events-none z-[9998] transition-all duration-500"
                style={{
                    left: position.x - 20,
                    top: position.y - 20,
                    opacity: isHovering ? 0 : 0.3,
                }}
            >
                <div className="w-10 h-10 border border-amber-400/50 rounded-full" />
            </div>
        </>
    );
}

// Indicador de scroll
function ScrollIndicator() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-0.5 z-50 bg-neutral-900">
            <div
                className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 transition-all duration-150"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
}

// Background animado
function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Gradiente base */}
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            
            {/* Padrão de grid sutil */}
            <div 
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '100px 100px',
                }}
            />
            
            {/* Orbes de luz flutuantes */}
            <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-amber-500/5 blur-[150px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-3/4 left-1/3 w-[400px] h-[400px] rounded-full bg-red-500/3 blur-[100px] animate-pulse" style={{ animationDelay: '4s' }} />
            
            {/* Noise texture overlay */}
            <div 
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}

// Rodapé minimalista
function Footer() {
    return (
        <footer className="relative py-24 border-t border-neutral-800/50">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                    <div>
                        <h3 className="text-2xl font-light text-white mb-2">
                            Vamos criar algo
                            <span className="text-amber-400"> extraordinário</span>
                        </h3>
                        <p className="text-neutral-500 text-sm">
                            Transformando ideias em experiências digitais memoráveis
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-8">
                        <a 
                            href="#" 
                            className="text-neutral-400 hover:text-amber-400 transition-colors duration-300 text-sm tracking-wider"
                        >
                            LinkedIn
                        </a>
                        <a 
                            href="#" 
                            className="text-neutral-400 hover:text-amber-400 transition-colors duration-300 text-sm tracking-wider"
                        >
                            GitHub
                        </a>
                        <a 
                            href="#" 
                            className="text-neutral-400 hover:text-amber-400 transition-colors duration-300 text-sm tracking-wider"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
                
                <div className="mt-16 pt-8 border-t border-neutral-800/30 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-600 text-xs tracking-wider">
                        © {new Date().getFullYear()} — Todos os direitos reservados
                    </p>
                    <p className="text-neutral-600 text-xs tracking-wider font-mono">
                        Feito com <span className="text-amber-400">♥</span> e muito café
                    </p>
                </div>
            </div>
        </footer>
    );
}

// Componente principal da Home
export function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simula carregamento inicial
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`min-h-screen bg-[#0a0a0a] text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {/* Elementos de UI flutuantes */}
            <CustomCursor />
            <ScrollIndicator />
            <FloatingNav />
            <AnimatedBackground />

            {/* Conteúdo principal */}
            <main className="relative">
                {/* Hero Section */}
                <AnimatedSection id="hero" className="min-h-screen">
                    <Hero />
                </AnimatedSection>

                {/* Services Section */}
                <SectionDivider number="01" title="Serviços" />
                <AnimatedSection id="services" className="py-16">
                    <Services />
                </AnimatedSection>

                {/* Showcase Section */}
                <SectionDivider number="02" title="Portfólio" />
                <AnimatedSection id="showcase" className="py-16">
                    <Showcase />
                </AnimatedSection>

                {/* Stack Section */}
                <SectionDivider number="03" title="Tecnologias" />
                <AnimatedSection id="stack" className="py-16">
                    <Stack />
                </AnimatedSection>

                {/* Team Section */}
                <SectionDivider number="04" title="Equipe" />
                <AnimatedSection id="team" className="py-16">
                    <Team />
                </AnimatedSection>

                {/* Footer */}
                <Footer />
            </main>

            {/* Estilo global para esconder o cursor padrão */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
                
                * {
                    cursor: none !important;
                }
                
                body {
                    font-family: 'Space Grotesk', sans-serif;
                    background: #0a0a0a;
                }
                
                .font-mono {
                    font-family: 'JetBrains Mono', monospace;
                }
                
                /* Smooth scroll */
                html {
                    scroll-behavior: smooth;
                }
                
                /* Selection style */
                ::selection {
                    background: rgba(251, 191, 36, 0.3);
                    color: white;
                }
                
                /* Scrollbar personalizada */
                ::-webkit-scrollbar {
                    width: 6px;
                }
                
                ::-webkit-scrollbar-track {
                    background: #0a0a0a;
                }
                
                ::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, #f59e0b, #ea580c);
                    border-radius: 3px;
                }
                
                ::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, #fbbf24, #f97316);
                }
            `}</style>
        </div>
    );
}

export default Home;
