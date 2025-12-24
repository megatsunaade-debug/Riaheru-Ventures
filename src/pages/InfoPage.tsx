import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';
import { useModal } from '../context/ModalContext';

interface InfoPageProps {
    title: string;
    description: string;
    tag?: string;
    body?: string[];
    metaTitle?: string;
    metaDescription?: string;
}

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={[
                'transition-all duration-1000 ease-out',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
            ].join(' ')}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

function ScrollIndicator({ progress }: { progress: number }) {
    return (
        <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
            <div className="h-full bg-white/80" style={{ width: `${progress}%` }} />
        </div>
    );
}

function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Base */}
            <div className="absolute inset-0 bg-[#050608]" />

            {/* Grid sutil */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
                    `,
                    backgroundSize: '96px 96px',
                }}
            />

            {/* Orbes */}
            <div className="absolute -top-1/2 -left-1/2 w-[1200px] h-[1200px] rounded-full bg-white/5 blur-3xl animate-pulse" />
            <div className="absolute -bottom-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-white/4 blur-3xl animate-pulse" />
            <div className="absolute top-1/3 -right-1/3 w-[900px] h-[900px] rounded-full bg-white/3 blur-3xl" />

            {/* Noise */}
            <div
                className="absolute inset-0 opacity-[0.14]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}

export function InfoPage({
    title,
    description,
    tag,
    body = [],
    metaTitle,
    metaDescription,
}: InfoPageProps) {
    const { openContactModal } = useModal();
    const pageTitle = metaTitle ?? `${title} | Riaheru`;
    const pageDescription = metaDescription ?? description;

    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const doc = document.documentElement;
            const scrollTop = window.scrollY;
            const scrollHeight = doc.scrollHeight - window.innerHeight;
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            setScrollProgress(Math.min(100, Math.max(0, progress)));
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: '#050608' }}>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <style>
                    {`
                        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
                        :root { --font-sans: 'Space Grotesk', system-ui, -apple-system, Segoe UI, Roboto, sans-serif; --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace; }
                    `}
                </style>
            </Helmet>

            <ScrollIndicator progress={scrollProgress} />
            <AnimatedBackground />

            <main className="relative">
                <section className="relative pb-24 md:pb-32" style={{ paddingTop: '10rem' }}>
                    <div className="container">
                        <AnimatedSection>
                            {tag && (
                                <span
                                    className={[
                                        'inline-flex items-center gap-2 w-fit',
                                        'px-3 py-1.5 rounded-full border',
                                        'font-medium tracking-widest uppercase',
                                        'text-[11px] md:text-xs',
                                        'border-white/15 bg-white/5 text-white/80',
                                    ].join(' ')}
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/60" />
                                    {tag}
                                </span>
                            )}

                            <h1
                                className="mt-6 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
                                style={{ fontFamily: 'var(--font-sans)' }}
                            >
                                <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                                    {title}
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-white/70">
                                {description}
                            </p>
                        </AnimatedSection>

                        {body.length > 0 && (
                            <AnimatedSection delay={120}>
                                <div className="mt-10 max-w-3xl">
                                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 md:p-8">
                                        <div className="space-y-5 text-white/75">
                                            {body.map((paragraph) => (
                                                <p key={paragraph} className="text-base md:text-lg leading-relaxed">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-white/10">
                                            <div className="flex flex-wrap gap-4">
                                                <Button variant="primary" size="md" onClick={openContactModal}>
                                                    Falar com a equipe
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="md"
                                                    type="button"
                                                    onClick={() => {
                                                        window.location.href = 'mailto:contato@riaheru.com';
                                                    }}
                                                >
                                                    Enviar email
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        )}

                        {body.length === 0 && (
                            <AnimatedSection delay={120}>
                                <div className="mt-10 flex flex-wrap gap-4">
                                    <Button variant="primary" size="md" onClick={openContactModal}>
                                        Falar com a equipe
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="md"
                                        type="button"
                                        onClick={() => {
                                            window.location.href = 'mailto:contato@riaheru.com';
                                        }}
                                    >
                                        Enviar email
                                    </Button>
                                </div>
                            </AnimatedSection>
                        )}

                        <AnimatedSection delay={220}>
                            <div className="mt-16 max-w-3xl">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                                    <p className="text-white/70 leading-relaxed">
                                        Precisa de um direcionamento rápido? Compartilhe seu cenário e retornamos com uma recomendação objetiva.
                                    </p>
                                    <div className="mt-6">
                                        <Button variant="primary" size="md" onClick={openContactModal}>
                                            Solicitar orientação
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                <footer className="relative py-16 border-t border-white/10">
                    <div className="container">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <div
                                    className="text-white/90 font-semibold tracking-tight"
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                >
                                    Riaheru
                                </div>
                                <div className="text-white/50 text-sm mt-1">
                                    Conteúdo institucional com clareza, consistência e estética premium.
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Button
                                    variant="ghost"
                                    size="md"
                                    type="button"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                >
                                    Voltar ao topo
                                </Button>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
