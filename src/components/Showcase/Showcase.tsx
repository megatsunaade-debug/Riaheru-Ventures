import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { CaseGrid } from '@/components/Cases/CaseGrid';
import { m } from '@/lib/motion';

export function Showcase() {
    return (
        <section id="trabalhos" className="bg-[var(--gray-50)] py-20 md:py-28">
            <div className="container">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="mb-14 flex flex-col gap-6 md:mb-18 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div className="max-w-3xl">
                        <span className="label label-accent block">Cases e ativos digitais</span>
                        <h2 className="mt-5 text-4xl font-bold tracking-normal md:text-6xl">
                            Prova de construção, não promessa de apresentação.
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
                            Sites e sistemas sob medida, com espaços preparados para as prévias de cada projeto.
                        </p>
                    </div>
                    <Link to="/cases" className="link-arrow">
                        Ver todos os cases
                        <ArrowRight size={18} />
                    </Link>
                </m.div>

                <CaseGrid />
            </div>
        </section>
    );
}
