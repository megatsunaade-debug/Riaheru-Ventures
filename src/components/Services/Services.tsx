import { ArrowRight, BrainCircuit, ServerCog, Target } from 'lucide-react';

import { m } from '@/lib/motion';
import { useModal } from '../../hooks/useModal';

const services = [
    {
        id: 'venture',
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
        icon: BrainCircuit,
        title: 'Arquitetura, IA e Operação',
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
        <section id="servicos" className="bg-white py-20 md:py-28">
            <div className="container">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="grid gap-10 border-b border-[var(--border-subtle)] pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
                >
                    <div>
                        <span className="label label-accent block">O que entregamos</span>
                        <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-normal md:text-6xl">
                            Construção técnica para empresas que precisam decidir com confiança.
                        </h2>
                    </div>
                    <div className="max-w-2xl lg:justify-self-end">
                        <p className="text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
                            A Riaheru atua onde produto, tecnologia e operação se encontram: sistemas próprios, plataformas B2B, automações críticas e presença digital com padrão profissional.
                        </p>
                        <button
                            type="button"
                            onClick={openContactModal}
                            className="link-arrow mt-6"
                        >
                            Conversar sobre o seu contexto
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </m.div>

                <div className="grid gap-0 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <m.article
                            key={service.id}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                            className="group border-b border-[var(--border-subtle)] py-10 lg:border-b-0 lg:border-r lg:px-8 lg:last:border-r-0"
                        >
                            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--off-white)] text-[var(--accent-primary)] transition-colors group-hover:border-[var(--accent-primary)]/24 group-hover:bg-[var(--accent-primary)] group-hover:text-white">
                                <service.icon size={24} strokeWidth={1.7} />
                            </div>

                            <h3 className="text-2xl font-semibold tracking-normal text-[var(--text-dark)]">
                                {service.title}
                            </h3>
                            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
                                {service.summary}
                            </p>

                            <ul className="mt-8 space-y-3">
                                {service.details.map((detail) => (
                                    <li key={detail} className="flex gap-3 text-sm leading-relaxed text-[var(--gray-600)]">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--highlight)]" />
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
