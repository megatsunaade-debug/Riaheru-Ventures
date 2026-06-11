import { Activity, Code2, Database, FileCheck2, LifeBuoy, Network, RefreshCw, Search, ShieldCheck } from 'lucide-react';

import { m } from '@/lib/motion';

const processSteps = [
    {
        icon: Search,
        title: 'Diagnóstico',
        text: 'Mapeamos objetivos, riscos, usuários, sistemas existentes e restrições de operação antes de propor tecnologia.',
    },
    {
        icon: Network,
        title: 'Arquitetura',
        text: 'Definimos fronteiras, dados, integrações, segurança, stack e estratégia de evolução com visão de longo prazo.',
    },
    {
        icon: Code2,
        title: 'Construção',
        text: 'Implementamos em ciclos curtos, com base tipada, revisão técnica, documentação e validação contínua.',
    },
    {
        icon: Activity,
        title: 'Operação',
        text: 'Preparamos deploy, monitoramento, backup, rotinas administrativas e handoff para reduzir dependência informal.',
    },
    {
        icon: RefreshCw,
        title: 'Evolução',
        text: 'Priorizamos melhorias com base em uso real, impacto de negócio, segurança e custo de manutenção.',
    },
];

const trustPillars = [
    {
        icon: ShieldCheck,
        title: 'Segurança & LGPD',
        text: 'Permissões, consentimento, segregação de acesso e cuidado com dados desde o desenho do produto.',
    },
    {
        icon: Database,
        title: 'Dados confiáveis',
        text: 'Modelagem, persistência, backup e rastreabilidade para decisões operacionais menos frágeis.',
    },
    {
        icon: FileCheck2,
        title: 'Documentação útil',
        text: 'Registro técnico, fluxos, regras de negócio e handoff para que o sistema sobreviva à primeira entrega.',
    },
    {
        icon: LifeBuoy,
        title: 'Continuidade',
        text: 'Suporte, governança de mudanças e evolução planejada para ambientes que não podem parar sem aviso.',
    },
];

export function Stack() {
    return (
        <section id="processo" className="border-b border-[var(--border)] bg-[var(--bg)] py-24 md:py-32">
            <div className="container">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="max-w-3xl"
                >
                    <span className="mono-label mono-label--accent">Como trabalhamos</span>
                    <h2 className="mt-6 text-pretty text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">
                        Engenharia que organiza a decisão antes de acelerar a entrega.
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
                        A qualidade do software começa antes do código: clareza de escopo,
                        arquitetura proporcional ao risco e operação planejada desde o primeiro
                        ciclo.
                    </p>
                </m.div>

                <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-5">
                    {processSteps.map((step, index) => (
                        <m.article
                            key={step.title}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.48, delay: index * 0.07, ease: 'easeOut' }}
                            className="group bg-[var(--bg)] p-7 transition-colors hover:bg-[var(--bg-2)]"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)]">
                                    <step.icon size={19} strokeWidth={1.6} />
                                </div>
                                <span className="font-mono text-xs text-[var(--text-dim)]">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <h3 className="mt-6 text-lg font-semibold tracking-tight text-[var(--text)]">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                                {step.text}
                            </p>
                        </m.article>
                    ))}
                </div>

                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.52, ease: 'easeOut' }}
                    className="mt-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"
                >
                    <div>
                        <span className="mono-label">Confiança operacional</span>
                        <h2 className="mt-6 text-pretty text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
                            O site vende. O sistema precisa continuar funcionando.
                        </h2>
                    </div>

                    <div className="grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
                        {trustPillars.map((pillar, index) => (
                            <m.article
                                key={pillar.title}
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-70px' }}
                                transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
                                className="bg-[var(--bg)] p-7"
                            >
                                <pillar.icon size={21} className="text-[var(--accent)]" strokeWidth={1.6} />
                                <h3 className="mt-5 text-lg font-semibold tracking-tight text-[var(--text)]">
                                    {pillar.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                                    {pillar.text}
                                </p>
                            </m.article>
                        ))}
                    </div>
                </m.div>
            </div>
        </section>
    );
}
