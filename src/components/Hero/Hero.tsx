import { ArrowRight } from 'lucide-react';

import { m } from '@/lib/motion';
import { useModal } from '../../hooks/useModal';

const disciplines = [
    { id: '01', label: 'Sistemas críticos' },
    { id: '02', label: 'Automação & dados' },
    { id: '03', label: 'IA aplicada' },
    { id: '04', label: 'Operações' },
];

const stats = [
    { value: 'B2B', label: 'Foco exclusivo' },
    { value: 'Full-stack', label: 'Produto a operação' },
    { value: 'LGPD', label: 'Governança nativa' },
];

export function Hero() {
    const { openContactModal } = useModal();

    return (
        <section className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[var(--bg)]">
            <div className="grid-texture pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent"
                aria-hidden="true"
            />

            <div className="container relative z-10 pb-16 pt-32 md:pb-24 md:pt-40">
                <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">
                    <m.div
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <span className="mono-label mono-label--accent">
                            Software engineering &amp; venture building
                        </span>

                        <h1 className="mt-8 text-[clamp(3.4rem,10vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.03em] text-[var(--text)]">
                            Riaheru
                            <span className="text-[var(--text-dim)]">.</span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-pretty text-2xl font-medium leading-[1.2] tracking-tight text-[var(--text)] md:text-[2.1rem]">
                            Engenharia B2B para produtos digitais, sistemas críticos e
                            operações que precisam{' '}
                            <span className="text-[var(--accent)]">escalar com segurança</span>.
                        </p>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
                            Unimos estratégia de produto, arquitetura robusta e execução
                            sênior para construir ativos digitais com clareza operacional e
                            visão de negócio.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={openContactModal}
                                className="btn btn-primary min-h-13 px-7 py-3.5 text-base"
                            >
                                Iniciar conversa estratégica
                                <ArrowRight size={18} />
                            </button>
                            <a
                                href="#trabalhos"
                                className="btn btn-outline min-h-13 px-7 py-3.5 text-base"
                            >
                                Ver cases
                            </a>
                        </div>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
                        className="w-full"
                    >
                        <div className="panel overflow-hidden">
                            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
                                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-dim)]">
                                    Disciplinas
                                </span>
                                <span className="h-1.5 w-1.5 bg-[var(--highlight)]" aria-hidden="true" />
                            </div>
                            <ul>
                                {disciplines.map((item) => (
                                    <li
                                        key={item.id}
                                        className="group flex items-center justify-between border-b border-[var(--border)] px-5 py-5 transition-colors last:border-b-0 hover:bg-[var(--surface-2)]"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="font-mono text-xs text-[var(--text-dim)]">
                                                {item.id}
                                            </span>
                                            <span className="text-base font-medium tracking-tight text-[var(--text)]">
                                                {item.label}
                                            </span>
                                        </div>
                                        <ArrowRight
                                            size={16}
                                            className="text-[var(--text-dim)] transition-all group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </m.div>
                </div>

                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                    className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3"
                >
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-[var(--bg)] px-6 py-7">
                            <div className="font-[var(--font-primary)] text-2xl font-semibold tracking-tight text-[var(--text)]">
                                {stat.value}
                            </div>
                            <div className="mt-1.5 text-sm text-[var(--text-muted)]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </m.div>
            </div>
        </section>
    );
}
