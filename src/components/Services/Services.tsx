import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SERVICE_OFFERINGS } from '@/data/serviceOfferings';
import { m } from '@/lib/motion';
import { useModal } from '../../hooks/useModal';

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
                    className="grid gap-10 border-b border-[var(--border-subtle)] pb-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
                >
                    <div>
                        <span className="label label-accent block">Rotas de atuação</span>
                        <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-normal md:text-6xl">
                            Um estúdio para criar, acelerar e governar tecnologia B2B.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl lg:justify-self-end">
                        A Riaheru combina visão de produto, engenharia sênior e responsabilidade operacional. Cada rota tem um ponto de entrada claro, mas todas compartilham a mesma base técnica.
                    </p>
                </m.div>

                <div className="grid gap-0 lg:grid-cols-3">
                    {SERVICE_OFFERINGS.map((service, index) => (
                        <m.article
                            key={service.id}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                            className="group border-b border-[var(--border-subtle)] py-10 lg:border-b-0 lg:border-r lg:px-8 lg:last:border-r-0"
                        >
                            <span className="font-mono text-sm text-[var(--gray-300)]">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="mt-6 text-3xl font-semibold tracking-normal text-[var(--text-dark)]">
                                {service.title}
                            </h3>
                            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
                                {service.summary}
                            </p>

                            <div className="mt-8 divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
                                {service.outcomes.map((outcome) => (
                                    <p key={outcome} className="py-3 text-sm leading-relaxed text-[var(--gray-600)]">
                                        {outcome}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link to={service.route} className="link-arrow">
                                    Ver rota
                                    <ArrowRight size={18} />
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => openContactModal({
                                        source: `service_card_${service.id}`,
                                        serviceId: service.id,
                                        serviceLabel: service.title,
                                        page: '/',
                                    })}
                                    className="text-sm font-semibold text-[var(--gray-500)] transition-colors hover:text-[var(--accent-primary)]"
                                >
                                    Conversar
                                </button>
                            </div>
                        </m.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
