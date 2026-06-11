import { ArrowRight, BrainCircuit, ServerCog, Target } from 'lucide-react';

import { m } from '@/lib/motion';
import { useModal } from '../../hooks/useModal';

const services = [
    {
        id: 'venture',
        no: '01',
        icon: Target,
        title: 'Venture Building',
        summary:
            'Entramos como parceiro técnico para transformar tese, mercado e operação em produto digital real.',
        details: [
            'Discovery de produto e arquitetura inicial',
            'Construção de MVPs e plataformas SaaS',
            'Evolução contínua com visão de negócio',
        ],
    },
    {
        id: 'engineering',
        no: '02',
        icon: ServerCog,
        title: 'Engenharia Dedicada',
        summary:
            'Squads enxutos para construir, modernizar ou estabilizar sistemas que sustentam receita e operação.',
        details: [
            'Frontend, backend e integrações',
            'APIs, bancos, filas e automações',
            'Documentação técnica e transferência de conhecimento',
        ],
    },
    {
        id: 'architecture',
        no: '03',
        icon: BrainCircuit,
        title: 'Arquitetura, IA & Operação',
        summary:
            'Diagnóstico e execução para ambientes que precisam de segurança, dados confiáveis e automação aplicada.',
        details: [
            'Revisão de arquitetura e segurança',
            'IA aplicada a fluxos internos e bases RAG',
            'Deploy, observabilidade, backup e governança',
        ],
    },
];

export function Services() {
    const { openContactModal } = useModal();

    return (
        <section id="servicos" className="border-b border-[var(--border)] bg-[var(--bg)] py-24 md:py-32">
            <div className="container">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
                >
                    <div>
                        <span className="mono-label mono-label--accent">O que entregamos</span>
                        <h2 className="mt-6 max-w-2xl text-pretty text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">
                            Construção técnica para empresas que precisam decidir com confiança.
                        </h2>
                    </div>
                    <div className="max-w-xl lg:justify-self-end">
                        <p className="text-lg leading-relaxed text-[var(--text-muted)]">
                            A Riaheru atua onde produto, tecnologia e operação se encontram:
                            sistemas próprios, plataformas B2B, automações críticas e presença
                            digital com padrão profissional.
                        </p>
                        <button type="button" onClick={openContactModal} className="link-arrow mt-6">
                            Conversar sobre o seu contexto
                            <ArrowRight size={17} />
                        </button>
                    </div>
                </m.div>

                <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] lg:grid-cols-3">
                    {services.map((service, index) => (
                        <m.article
                            key={service.id}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                            className="group bg-[var(--bg)] p-8 transition-colors hover:bg-[var(--bg-2)] md:p-10"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] transition-colors group-hover:border-[var(--accent)]/40">
                                    <service.icon size={22} strokeWidth={1.6} />
                                </div>
                                <span className="font-mono text-xs text-[var(--text-dim)]">
                                    {service.no}
                                </span>
                            </div>

                            <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[var(--text)]">
                                {service.title}
                            </h3>
                            <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
                                {service.summary}
                            </p>

                            <ul className="mt-8 space-y-3 border-t border-[var(--border)] pt-6">
                                {service.details.map((detail) => (
                                    <li key={detail} className="flex gap-3 text-sm leading-relaxed text-[var(--text-muted)]">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[var(--accent)]" aria-hidden="true" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </m.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
