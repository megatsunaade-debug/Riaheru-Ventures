import type { PointerEvent as ReactPointerEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { useReducedMotion } from 'framer-motion';
import { ArrowRight, Building2, CheckCircle2, Code2, FileCheck2, LockKeyhole, Network, Scale, Shield, UsersRound } from 'lucide-react';

import aboutLogoArtwork from '../../9ab79472-1244-4d1d-8e8b-5201f9ce0be4.jfif';
import { m } from '@/lib/motion';
import { Button } from '../components/ui/Button';
import { SectionTitle } from '../components/ui/SectionTitle';
import { useCanonical } from '../hooks/useCanonical';
import { useModal } from '../hooks/useModal';
import './About.css';

const proofPoints = [
    {
        icon: Building2,
        title: 'Visão de negócio',
        text: 'A solução nasce conectada ao modelo operacional, às restrições do cliente e ao valor que precisa ser criado.',
    },
    {
        icon: Network,
        title: 'Arquitetura proporcional',
        text: 'Escolhemos stack, banco, integrações e deploy pelo risco real do produto, não por moda técnica.',
    },
    {
        icon: FileCheck2,
        title: 'Entrega documentada',
        text: 'Fluxos, regras, decisões e handoffs são registrados para facilitar manutenção, auditoria e continuidade.',
    },
];

const principles = [
    {
        icon: CheckCircle2,
        title: 'Clareza técnica',
        text: 'Decisões explícitas, tradeoffs visíveis e comunicação direta com quem depende do sistema.',
    },
    {
        icon: UsersRound,
        title: 'Execução sênior',
        text: 'Times menores, mais responsáveis e próximos da decisão, sem camadas desnecessárias de repasse.',
    },
    {
        icon: LockKeyhole,
        title: 'Confidencialidade',
        text: 'Projetos sensíveis são tratados com discrição, escopo definido e exposição pública controlada.',
    },
    {
        icon: Shield,
        title: 'Governança',
        text: 'Segurança, permissões, backup, documentação e manutenção entram no desenho desde o início.',
    },
];

const expertise = [
    { icon: Code2, title: 'Produto e front-end', description: 'React, TypeScript, design systems e interfaces de operação.' },
    { icon: Network, title: 'Back-end e integrações', description: 'APIs, automações, webhooks, filas e regras de negócio.' },
    { icon: Building2, title: 'Dados e infraestrutura', description: 'PostgreSQL, Docker, deploy, backup e observabilidade.' },
    { icon: Scale, title: 'Compliance aplicado', description: 'LGPD, contratos, consentimento e governança de acesso.' },
];

function moveMagneticControl(event: ReactPointerEvent<HTMLElement>) {
    if (
        event.pointerType !== 'mouse'
        || window.matchMedia('(prefers-reduced-motion: reduce)').matches
        || !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    ) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(-4, Math.min(4, (event.clientX - bounds.left - bounds.width / 2) * 0.12));
    const y = Math.max(-4, Math.min(4, (event.clientY - bounds.top - bounds.height / 2) * 0.12));
    event.currentTarget.style.setProperty('--about-magnet-x', `${x}px`);
    event.currentTarget.style.setProperty('--about-magnet-y', `${y}px`);
}

function resetMagneticControl(event: ReactPointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty('--about-magnet-x', '0px');
    event.currentTarget.style.setProperty('--about-magnet-y', '0px');
}

function resetCardPointer(event: ReactPointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty('--about-spotlight-x', '50%');
    event.currentTarget.style.setProperty('--about-spotlight-y', '50%');
}

function trackCardPointer(event: ReactPointerEvent<HTMLElement>) {
    if (
        event.pointerType !== 'mouse'
        || window.matchMedia('(prefers-reduced-motion: reduce)').matches
        || !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    ) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--about-spotlight-x', `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
    event.currentTarget.style.setProperty('--about-spotlight-y', `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
}

export function About() {
    const { openContactModal } = useModal();
    const prefersReducedMotion = useReducedMotion();
    useCanonical('https://riaheru.com/sobre');

    return (
        <div className="bg-[var(--off-white)]">
            <Helmet>
                <title>Sobre a Riaheru | Engenharia B2B e Venture Building</title>
                <meta
                    name="description"
                    content="Conheça a Riaheru Ventures: engenharia de software B2B, venture building, arquitetura, automação, dados e operação com segurança e governança."
                />
            </Helmet>

            <section className="about-hero relative overflow-hidden bg-[#070a12] pb-20 pt-32 text-white md:pb-28">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.1]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(231,235,240,0.45) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(231,235,240,0.45) 1px, transparent 1px)`,
                        backgroundSize: '44px 44px',
                    }}
                />

                <div className="container relative">
                    <div className="about-hero__layout">
                    <m.div
                        initial={prefersReducedMotion ? false : { opacity: 0.94, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: 'easeOut' }}
                        className="about-hero__copy"
                    >
                        <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                            Sobre a Riaheru
                        </span>
                        <h1 className="on-dark-heading mt-7 max-w-5xl text-5xl font-bold leading-tight tracking-normal md:text-7xl">
                            Software com responsabilidade de negócio, operação e continuidade.
                        </h1>
                        <p className="on-dark-copy mt-7 max-w-3xl text-lg leading-relaxed md:text-xl">
                            A Riaheru Ventures é uma empresa de engenharia de software e venture building para organizações que precisam transformar processos, produtos e dados em sistemas confiáveis.
                        </p>

                <div className="mt-9 flex flex-wrap gap-4">
                    <Button
                        onClick={() => openContactModal({ source: 'about_hero', page: '/sobre' })}
                        onPointerMove={moveMagneticControl}
                        onPointerLeave={resetMagneticControl}
                        onPointerCancel={resetMagneticControl}
                        size="lg"
                        className="about-magnetic-control"
                    >
                        Iniciar projeto
                        <ArrowRight size={19} />
                    </Button>
                    <a
                        href="/cases"
                        onPointerMove={moveMagneticControl}
                        onPointerLeave={resetMagneticControl}
                        onPointerCancel={resetMagneticControl}
                        className="about-magnetic-control btn btn-outline on-dark-outline-button min-h-14 px-8 py-4 text-base"
                    >
                                Ver cases
                            </a>
                        </div>
                    </m.div>
                    <m.div
                        initial={prefersReducedMotion ? false : { opacity: 0.94, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.45, delay: prefersReducedMotion ? 0 : 0.06, ease: 'easeOut' }}
                        className="about-hero__artwork"
                    >
                        <img
                            src={aboutLogoArtwork}
                            alt="Logo bordada da Riaheru em branco e azul sobre fundo preto texturizado"
                            className="about-hero__artwork-image"
                            width={640}
                            height={640}
                            fetchPriority="high"
                        />
                    </m.div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 md:py-20">
                <div className="container">
                    <div className="grid gap-4 md:grid-cols-3">
                        {proofPoints.map((item, index) => (
                            <m.article
                                key={item.title}
                                initial={prefersReducedMotion ? false : { opacity: 0.92, y: 7 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: prefersReducedMotion ? 0 : 0.38, delay: prefersReducedMotion ? 0 : index * 0.055, ease: 'easeOut' }}
                                onPointerMove={trackCardPointer}
                                onPointerLeave={resetCardPointer}
                                onPointerCancel={resetCardPointer}
                                className="about-info-card"
                            >
                                <span aria-hidden="true" className="about-info-card__spotlight" />
                                <div className="about-info-card__content">
                                    <item.icon size={24} className="about-info-card__icon text-[var(--accent-primary)]" strokeWidth={1.7} />
                                    <h2 className="mt-5 text-2xl font-semibold tracking-normal">
                                        {item.title}
                                    </h2>
                                    <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
                                        {item.text}
                                    </p>
                                </div>
                            </m.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#070a12] py-20 text-white md:py-28">
                <div className="container">
                    <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                        <m.div
                            initial={prefersReducedMotion ? false : { opacity: 0.94, y: 7 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: prefersReducedMotion ? 0 : 0.38, ease: 'easeOut' }}
                        >
                            <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                                Princípios
                            </span>
                            <h2 className="on-dark-heading mt-6 text-4xl font-bold tracking-normal md:text-6xl">
                                O que não negociamos quando construímos tecnologia.
                            </h2>
                        </m.div>

                        <div className="grid gap-0 border-t border-white/10 sm:grid-cols-2">
                            {principles.map((item, index) => (
                                <m.article
                                    key={item.title}
                                    initial={prefersReducedMotion ? false : { opacity: 0.92, y: 6 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ duration: prefersReducedMotion ? 0 : 0.36, delay: prefersReducedMotion ? 0 : index * 0.05, ease: 'easeOut' }}
                                    className="about-dark-info-item border-b border-white/10 py-7 sm:odd:pr-7 sm:even:border-l sm:even:pl-7"
                                >
                                    <item.icon size={23} className="about-info-icon text-[var(--highlight)]" strokeWidth={1.7} />
                                    <h3 className="on-dark-heading mt-5 text-xl font-semibold tracking-normal">
                                        {item.title}
                                    </h3>
                                    <p className="on-dark-copy mt-3 text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </m.article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20 md:py-28">
                <div className="container">
                    <m.div
                        initial={prefersReducedMotion ? false : { opacity: 0.96, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.38, ease: 'easeOut' }}
                    >
                        <SectionTitle
                            tag="Expertise"
                            title="Competências para tirar sistemas do improviso."
                            description="Atuamos em produto, arquitetura, dados, integrações, automação, segurança e operação para entregar software que pode ser usado e mantido."
                        />
                    </m.div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {expertise.map((item, index) => (
                            <m.article
                                key={item.title}
                                initial={prefersReducedMotion ? false : { opacity: 0.92, y: 7 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: prefersReducedMotion ? 0 : 0.38, delay: prefersReducedMotion ? 0 : index * 0.045, ease: 'easeOut' }}
                                onPointerMove={trackCardPointer}
                                onPointerLeave={resetCardPointer}
                                onPointerCancel={resetCardPointer}
                                className="about-info-card"
                            >
                                <span aria-hidden="true" className="about-info-card__spotlight" />
                                <div className="about-info-card__content">
                                    <item.icon size={24} className="about-info-card__icon text-[var(--accent-primary)]" strokeWidth={1.7} />
                                    <h3 className="mt-5 text-xl font-semibold tracking-normal">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                                        {item.description}
                                    </p>
                                </div>
                            </m.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-first-conversation bg-[var(--off-white)] py-20">
                <div className="about-first-conversation__container container text-center">
                    <span className="about-first-conversation__eyebrow label label-accent justify-center">Primeira conversa</span>
                    <h2 className="about-first-conversation__title mx-auto mt-5 w-full max-w-3xl text-center text-4xl font-bold tracking-normal md:text-5xl">
                        Vamos entender o contexto antes de vender uma solução.
                    </h2>
                    <p className="about-first-conversation__description mx-auto mt-5 w-full max-w-2xl text-center text-lg leading-relaxed text-[var(--text-secondary)]">
                        Conte o momento do produto, a dor operacional ou o sistema que precisa evoluir. A resposta será objetiva e orientada a próximos passos.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Button
                            onClick={() => openContactModal({ source: 'about_bottom', page: '/sobre' })}
                            onPointerMove={moveMagneticControl}
                            onPointerLeave={resetMagneticControl}
                            onPointerCancel={resetMagneticControl}
                            size="lg"
                            className="about-magnetic-control"
                        >
                            Iniciar projeto
                            <ArrowRight size={18} />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
