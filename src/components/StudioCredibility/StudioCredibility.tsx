import { ArrowRight, Building2, Code2, Database, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

import { m } from '@/lib/motion';
import { useModal } from '../../hooks/useModal';

const leadership = [
    {
        name: 'Carlos Henrique Marques Pereira',
        role: 'Produto e engenharia',
        image: '/carlos-henrique.webp',
        icon: Code2,
    },
    {
        name: 'Rian Lenger',
        role: 'Dados e arquitetura',
        image: '/rian-lenger.webp',
        icon: Database,
    },
    {
        name: 'Ruan Lenger',
        role: 'Integrações e operação',
        image: '/ruan-lenger.webp',
        icon: Building2,
    },
    {
        name: 'Dra. Letícia Gomes Marques',
        role: 'Governança e LGPD',
        image: '/leticia-gomes.webp',
        icon: Scale,
    },
];

export function StudioCredibility() {
    const { openContactModal } = useModal();

    return (
        <section className="bg-white py-20 md:py-28">
            <div className="container">
                <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                    <m.div
                        initial={false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        <span className="label label-accent block">Equipe fundadora</span>
                        <h2 className="mt-5 text-4xl font-bold tracking-normal md:text-6xl">
                            Um estúdio menor, mais próximo da decisão.
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
                            A Riaheru junta produto, engenharia, dados, integração e leitura jurídica para construir com menos repasse e mais responsabilidade técnica.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link to="/sobre" className="link-arrow">
                                Conhecer a Riaheru
                                <ArrowRight size={18} />
                            </Link>
                            <button
                                type="button"
                                onClick={() => openContactModal({ source: 'studio_credibility', page: '/' })}
                                className="text-sm font-semibold text-[var(--gray-500)] transition-colors hover:text-[var(--accent-primary)]"
                            >
                                Chamar o time
                            </button>
                        </div>
                    </m.div>

                    <div className="grid gap-0 border-y border-[var(--border-subtle)] sm:grid-cols-2">
                        {leadership.map((person, index) => (
                            <m.article
                                key={person.name}
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-70px' }}
                                transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
                                className="flex gap-4 border-b border-[var(--border-subtle)] py-6 sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
                            >
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    loading="lazy"
                                    width={72}
                                    height={72}
                                    className="h-18 w-18 shrink-0 rounded-lg object-cover object-top"
                                />
                                <div>
                                    <person.icon size={20} className="text-[var(--accent-primary)]" strokeWidth={1.7} />
                                    <h3 className="mt-3 text-base font-semibold leading-snug text-[var(--text-dark)]">
                                        {person.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                                        {person.role}
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
