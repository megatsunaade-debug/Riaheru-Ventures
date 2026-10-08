import { Helmet } from 'react-helmet-async';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { ArrowRight, Boxes, Compass, Lightbulb, Rocket, Settings2 } from 'lucide-react';
import { m } from '@/lib/motion';
import { Button } from '@/components/ui/Button';
import type { ServiceOffering } from '@/data/serviceOfferings';
import ventureBuildArtwork from '../../Identidade Riaheru em arte Venture Build.png';
import './VentureBuildServicePage.css';

type VentureBuildServicePageProps = {
    service: ServiceOffering;
    onContact: (source: string) => void;
};

const productTypes = [
    { title: 'MVPs', description: 'Primeiras versões para estruturar e validar uma oportunidade.', icon: Lightbulb },
    { title: 'SaaS', description: 'Produtos digitais com uma base preparada para evoluir.', icon: Settings2 },
    { title: 'Plataformas', description: 'Experiências e fluxos digitais organizados em torno do produto.', icon: Boxes },
    { title: 'Sistemas', description: 'Soluções digitais desenhadas para necessidades reais do negócio.', icon: Rocket },
];

const processSteps = [
    {
        title: 'Diagnóstico da oportunidade',
        description: 'Entendemos o problema, o contexto do negócio e a oportunidade que precisa ser explorada.',
        icon: Lightbulb,
    },
    {
        title: 'Estratégia',
        description: 'Organizamos a direção do produto e o escopo inicial que orientará as decisões.',
        icon: Compass,
    },
    {
        title: 'Arquitetura da solução',
        description: 'Definimos a estrutura técnica adequada ao produto e às necessidades identificadas.',
        icon: Boxes,
    },
    {
        title: 'Construção',
        description: 'Construímos o produto em etapas, aproximando engenharia e objetivo de negócio.',
        icon: Settings2,
    },
    {
        title: 'Evolução contínua',
        description: 'A evolução considera aprendizados, uso e novas necessidades do produto.',
        icon: Rocket,
    },
];

const audiences = [
    'Empresas que querem validar uma ideia ou oportunidade.',
    'Negócios que pretendem criar um produto digital próprio.',
    'Equipes que precisam estruturar uma solução para uma necessidade real da operação.',
];

function moveMagneticButton(event: ReactPointerEvent<HTMLButtonElement>) {
    if (
        event.pointerType !== 'mouse'
        || window.matchMedia('(prefers-reduced-motion: reduce)').matches
        || !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    ) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - (bounds.left + bounds.width / 2)) * 0.12;
    const offsetY = (event.clientY - (bounds.top + bounds.height / 2)) * 0.12;
    event.currentTarget.style.setProperty('--venture-magnet-x', `${Math.max(-4, Math.min(4, offsetX))}px`);
    event.currentTarget.style.setProperty('--venture-magnet-y', `${Math.max(-4, Math.min(4, offsetY))}px`);
}

function resetMagneticButton(event: ReactPointerEvent<HTMLButtonElement>) {
    event.currentTarget.style.setProperty('--venture-magnet-x', '0px');
    event.currentTarget.style.setProperty('--venture-magnet-y', '0px');
}

export function VentureBuildServicePage({ service, onContact }: VentureBuildServicePageProps) {
    return (
        <div className="bg-[var(--off-white)]">
            <Helmet>
                <title>{service.metaTitle}</title>
                <meta name="description" content={service.metaDescription} />
                <link rel="canonical" href={`https://riaheru.com${service.route}`} />
                <meta property="og:title" content={service.metaTitle} />
                <meta property="og:description" content={service.metaDescription} />
                <meta property="og:url" content={`https://riaheru.com${service.route}`} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://riaheru.com/LOGO.png" />
            </Helmet>

            <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#070a12] pb-4 pt-20 text-white md:pb-5 md:pt-24">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.42) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.42) 1px, transparent 1px)',
                        backgroundSize: '44px 44px',
                    }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(76,154,255,0.2),transparent_32%),linear-gradient(120deg,rgba(7,10,18,0.98),rgba(7,10,18,0.88))]" />

                <div className="container relative z-10 flex w-full flex-1 items-center py-5 md:py-0">
                    <m.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.42, ease: 'easeOut' }}
                        className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.86fr)] lg:gap-10"
                    >
                        <div
                            className="venture-build-copy max-w-3xl lg:self-stretch lg:justify-between"
                            style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.1rem, 2.3vh, 1.5rem)' }}
                        >
                            <span className="venture-build-badge on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                                <span className="venture-build-badge__dot" aria-hidden="true" />
                                <span className="venture-build-badge__label">Venture Build</span>
                            </span>
                            <h1
                                className="on-dark-heading text-4xl font-black leading-[0.98] tracking-normal sm:text-5xl lg:text-[clamp(2.55rem,4.1vw,4.5rem)]"
                                style={{ fontSize: 'clamp(2.55rem, 4.1vw, 4.5rem)', lineHeight: 0.98 }}
                            >
                                Transformamos ideias em produtos digitais estruturados.
                            </h1>
                            <p
                                className="on-dark-copy max-w-2xl text-lg leading-relaxed md:text-xl"
                                style={{ fontSize: 'clamp(1.2rem, 1.55vw, 1.35rem)', lineHeight: 1.65 }}
                            >
                                Venture Build é o trabalho de transformar ideias e oportunidades em produtos digitais, conectando estratégia, arquitetura, construção e evolução contínua.
                            </p>
                            <p
                                className="on-dark-copy max-w-2xl text-base leading-relaxed md:text-lg"
                                style={{ fontSize: 'clamp(1.1rem, 1.35vw, 1.2rem)', lineHeight: 1.65 }}
                            >
                                Da primeira definição à solução em operação, a Riaheru ajuda a estruturar produtos com base técnica e direção alinhadas ao desafio real do negócio.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    size="lg"
                                    onClick={() => onContact('venture_build_hero')}
                                    onPointerMove={moveMagneticButton}
                                    onPointerLeave={resetMagneticButton}
                                    onPointerCancel={resetMagneticButton}
                                    className="venture-build-magnetic shadow-lg shadow-[var(--accent-primary)]/20"
                                    style={{ minHeight: 68, padding: '1.25rem 2.25rem', fontSize: '1.2rem' }}
                                >
                                    Conversar sobre uma ideia
                                    <ArrowRight size={22} />
                                </Button>
                            </div>
                        </div>

                        <figure className="venture-build-art-frame mx-auto w-full max-w-[520px] lg:max-w-none">
                            <img
                                src={ventureBuildArtwork}
                                alt="Arte bordada de Venture Build da Riaheru, com um painel central conectado a arquitetura, dados, integrações, desenvolvimento de produto e automação."
                                width={1118}
                                height={1407}
                                fetchPriority="high"
                                decoding="async"
                                className="venture-build-art-image block object-contain"
                                style={{ maxHeight: 'min(calc(100svh - 9rem), 46rem)' }}
                            />
                        </figure>
                    </m.div>
                </div>
            </section>

            <section className="bg-white py-18 md:py-24">
                <div className="container">
                    <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
                        <div>
                            <span className="label label-accent block">O que pode ser desenvolvido</span>
                            <h2 className="mt-5 text-4xl font-bold tracking-normal md:text-5xl">
                                Produtos digitais conectados a uma oportunidade real.
                            </h2>
                        </div>
                        <p className="max-w-3xl text-lg leading-relaxed text-[var(--text-secondary)]">
                            O formato parte do problema e do contexto: pode ser uma primeira versão para validar uma ideia, um produto SaaS, uma plataforma, um sistema ou outra solução digital.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {productTypes.map(({ title, description, icon: Icon }) => (
                            <article key={title} className="venture-build-card card h-full">
                                <Icon size={23} className="text-[var(--accent-primary)]" strokeWidth={1.8} aria-hidden="true" />
                                <h3 className="mt-5 text-xl font-semibold text-[var(--text-dark)]">{title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[var(--gray-50)] py-18 md:py-24">
                <div className="container">
                    <div className="max-w-3xl">
                        <span className="label label-accent block">Como funciona</span>
                        <h2 className="mt-5 text-4xl font-bold tracking-normal md:text-5xl">
                            Da oportunidade à evolução contínua.
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">
                            O trabalho avança por etapas conectadas, com decisões de produto e engenharia orientadas pelo contexto do negócio.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map(({ title, description, icon: Icon }, index) => (
                            <article key={title} className="venture-build-card card h-full">
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-sm font-semibold text-[var(--accent-primary)]">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <Icon size={21} className="text-[var(--accent-primary)]" strokeWidth={1.8} aria-hidden="true" />
                                </div>
                                <h3 className="mt-5 text-lg font-semibold leading-snug text-[var(--text-dark)]">{title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-18 md:py-24">
                <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div>
                        <span className="label label-accent block">Para quem faz sentido</span>
                        <h2 className="mt-5 text-4xl font-bold tracking-normal md:text-5xl">
                            Quando existe um desafio que pede um produto próprio.
                        </h2>
                    </div>
                    <ul className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
                        {audiences.map((audience) => (
                            <li key={audience} className="venture-build-audience-row py-5 text-lg leading-relaxed text-[var(--text-secondary)]">
                                {audience}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#070a12] py-20 text-white md:py-28">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(76,154,255,0.2),transparent_45%)]" />
                <div className="container relative z-10">
                    <div className="max-w-5xl">
                        <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                            Próximo passo
                        </span>
                        <h2 className="on-dark-heading mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-normal md:text-6xl">
                            Vamos entender a oportunidade por trás do produto.
                        </h2>
                        <p className="on-dark-copy mt-5 max-w-3xl text-lg leading-relaxed">
                            Compartilhe o contexto. A primeira conversa ajuda a organizar as perguntas e o próximo passo.
                        </p>
                        <div className="mt-8">
                            <Button
                                size="lg"
                                onClick={() => onContact('venture_build_bottom')}
                                onPointerMove={moveMagneticButton}
                                onPointerLeave={resetMagneticButton}
                                onPointerCancel={resetMagneticButton}
                                className="venture-build-magnetic btn-shimmer text-base"
                            >
                                Conversar com a Riaheru
                                <ArrowRight size={19} />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
