import type { PointerEvent as ReactPointerEvent } from 'react';
import { useReducedMotion } from 'framer-motion';
import { ArrowRight, Code2, Database, ShieldCheck, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

import { m } from '@/lib/motion';
import { useModal } from '../../hooks/useModal';
import './StudioCredibility.css';

function moveMagneticControl(event: ReactPointerEvent<HTMLElement>) {
    if (
        event.pointerType !== 'mouse'
        || window.matchMedia('(prefers-reduced-motion: reduce)').matches
        || !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    ) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(-3, Math.min(3, (event.clientX - bounds.left - bounds.width / 2) * 0.1));
    const y = Math.max(-3, Math.min(3, (event.clientY - bounds.top - bounds.height / 2) * 0.1));
    event.currentTarget.style.setProperty('--studio-magnet-x', `${x}px`);
    event.currentTarget.style.setProperty('--studio-magnet-y', `${y}px`);
}

function resetMagneticControl(event: ReactPointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty('--studio-magnet-x', '0px');
    event.currentTarget.style.setProperty('--studio-magnet-y', '0px');
}

function trackCardPointer(event: ReactPointerEvent<HTMLElement>) {
    if (
        event.pointerType !== 'mouse'
        || window.matchMedia('(prefers-reduced-motion: reduce)').matches
        || !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    ) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const tiltX = Math.max(-1, Math.min(1, (0.5 - y) * 2));
    const tiltY = Math.max(-1, Math.min(1, (x - 0.5) * 2));

    event.currentTarget.style.setProperty('--studio-spotlight-x', `${x * 100}%`);
    event.currentTarget.style.setProperty('--studio-spotlight-y', `${y * 100}%`);
    event.currentTarget.style.setProperty('--studio-tilt-x', `${tiltX}deg`);
    event.currentTarget.style.setProperty('--studio-tilt-y', `${tiltY}deg`);
}

function resetCardPointer(event: ReactPointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty('--studio-spotlight-x', '50%');
    event.currentTarget.style.setProperty('--studio-spotlight-y', '50%');
    event.currentTarget.style.setProperty('--studio-tilt-x', '0deg');
    event.currentTarget.style.setProperty('--studio-tilt-y', '0deg');
}

const competencies = [
    {
        title: 'Produto e engenharia',
        description: 'Da definição do problema à construção e evolução do produto.',
        icon: Code2,
    },
    {
        title: 'Dados e arquitetura',
        description: 'Estrutura para integrar informações e apoiar decisões.',
        icon: Database,
    },
    {
        title: 'Integrações e operação',
        description: 'Conexão entre sistemas, processos e rotinas do negócio.',
        icon: Workflow,
    },
    {
        title: 'Governança e privacidade',
        description: 'Cuidado com acessos, dados e responsabilidade desde o desenho.',
        icon: ShieldCheck,
    },
];

export function StudioCredibility() {
    const { openContactModal } = useModal();
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="studio-credibility-section bg-[var(--bg-dark)] py-20 md:py-28">
            <div className="container">
                <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                    <m.div
                        className="studio-credibility-copy"
                        initial={prefersReducedMotion ? false : { opacity: 0.96, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.38, ease: 'easeOut' }}
                    >
                        <span className="label label-accent block">Como a Riaheru atua</span>
                        <h2 className="mt-5 text-4xl font-bold tracking-normal text-white md:text-6xl">
                            Um estúdio menor, mais próximo da decisão.
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-white/75">
                            A Riaheru junta produto, engenharia, dados, integração e leitura jurídica para construir com menos repasse e mais responsabilidade técnica.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/sobre"
                                className="link-arrow studio-credibility-magnetic"
                                onPointerMove={moveMagneticControl}
                                onPointerLeave={resetMagneticControl}
                                onPointerCancel={resetMagneticControl}
                            >
                                Conhecer a Riaheru
                                <ArrowRight size={18} />
                            </Link>
                            <button
                                type="button"
                                onClick={() => openContactModal({ source: 'studio_credibility', page: '/' })}
                                onPointerMove={moveMagneticControl}
                                onPointerLeave={resetMagneticControl}
                                onPointerCancel={resetMagneticControl}
                                className="studio-credibility-magnetic studio-credibility-secondary text-sm font-semibold text-white"
                            >
                                Chamar o time
                            </button>
                        </div>
                    </m.div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {competencies.map((competency, index) => (
                            <m.article
                                key={competency.title}
                                initial={prefersReducedMotion ? false : { opacity: 0.92, y: 7 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-70px' }}
                                transition={{ duration: prefersReducedMotion ? 0 : 0.38, delay: prefersReducedMotion ? 0 : index * 0.05, ease: 'easeOut' }}
                                onPointerMove={trackCardPointer}
                                onPointerLeave={resetCardPointer}
                                onPointerCancel={resetCardPointer}
                                className="studio-competency-card group min-w-0 border border-slate-200/90 bg-white p-5 sm:p-6"
                            >
                                <span aria-hidden="true" className="studio-competency-spotlight" />
                                <div className="studio-competency-content">
                                    <div className="studio-competency-icon mb-5 flex h-11 w-11 items-center justify-center border border-blue-100 bg-blue-50 text-[var(--accent-primary)]">
                                        <competency.icon size={21} strokeWidth={1.7} aria-hidden="true" />
                                    </div>
                                    <h3 className="text-base font-semibold leading-snug text-[var(--text-dark)] sm:text-lg">
                                        {competency.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                                        {competency.description}
                                    </p>
                                </div>
                            </m.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
