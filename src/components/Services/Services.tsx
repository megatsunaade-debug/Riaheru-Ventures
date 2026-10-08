import { ArrowRight, BrainCircuit, Check, Code2, MessageCircle, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SERVICE_OFFERINGS } from '@/data/serviceOfferings';
import { m } from '@/lib/motion';
import { useModal } from '../../hooks/useModal';
import './Services.css';

const routeSymbols = {
    'venture-building': Rocket,
    'engenharia-dedicada': Code2,
    'arquitetura-ia-operacao': BrainCircuit,
};

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

                <div className="service-routes-grid grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {SERVICE_OFFERINGS.map((service, index) => {
                        const RouteSymbol = routeSymbols[service.id];

                        return (
                            <article
                                key={service.id}
                                className="service-route-card"
                                style={{ animationDelay: `${index * 65}ms` }}
                            >
                                <div className="service-route-card__top">
                                    <span className="service-route-card__number">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="service-route-symbol" aria-hidden="true">
                                        <RouteSymbol size={27} strokeWidth={1.7} />
                                    </span>
                                </div>
                                <h3 className="service-route-card__title">
                                    {service.title}
                                </h3>
                                <p className="service-route-card__description">
                                    {service.summary}
                                </p>

                                <ul className="service-route-card__outcomes">
                                    {service.outcomes.map((outcome) => (
                                        <li key={outcome}>
                                            <Check size={16} strokeWidth={2} aria-hidden="true" />
                                            {outcome}
                                        </li>
                                    ))}
                                </ul>

                                <div className="service-route-card__actions">
                                    <Link to={service.route} className="service-route-card__primary-action">
                                        Conheça a rota
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
                                        className="service-route-card__secondary-action"
                                    >
                                        <MessageCircle size={16} aria-hidden="true" />
                                        Conversar
                                    </button>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
