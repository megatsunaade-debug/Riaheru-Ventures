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
        title: 'Segurança e LGPD',
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
        <section id="stack" className="bg-[#070a12] py-20 text-white md:py-28">
            <div className="container">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="max-w-4xl"
                >
                    <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                        Como trabalhamos
                    </span>
                    <h2 className="on-dark-heading mt-6 text-4xl font-bold tracking-normal md:text-6xl">
                        Engenharia que organiza a decisão antes de acelerar a entrega.
                    </h2>
                    <p className="on-dark-copy mt-6 max-w-3xl text-lg leading-relaxed md:text-xl">
                        A qualidade do software começa antes do código: clareza de escopo, arquitetura proporcional ao risco e operação planejada desde o primeiro ciclo.
                    </p>
                </m.div>

                <div className="mt-14 grid gap-0 border-y border-white/10 lg:grid-cols-5">
                    {processSteps.map((step, index) => (
                        <m.article
                            key={step.title}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.48, delay: index * 0.08, ease: 'easeOut' }}
                            className="border-b border-white/10 py-8 lg:border-b-0 lg:border-r lg:px-6 lg:last:border-r-0"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/6 text-[var(--accent-light)]">
                                    <step.icon size={21} strokeWidth={1.7} />
                                </div>
                                <span className="font-mono text-sm text-white/34">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <h3 className="on-dark-heading mt-7 text-xl font-semibold tracking-normal">
                                {step.title}
                            </h3>
                            <p className="on-dark-copy mt-3 text-sm leading-relaxed">
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
                    className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
                >
                    <div>
                        <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                            Confiança operacional
                        </span>
                        <h2 className="on-dark-heading mt-6 text-3xl font-bold tracking-normal md:text-5xl">
                            O site vende. O sistema precisa continuar funcionando.
                        </h2>
                    </div>

                    <div className="grid gap-0 border-t border-white/10 sm:grid-cols-2">
                        {trustPillars.map((pillar, index) => (
                            <m.article
                                key={pillar.title}
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-70px' }}
                                transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
                                className="border-b border-white/10 py-6 sm:odd:pr-7 sm:even:border-l sm:even:pl-7"
                            >
                                <pillar.icon size={22} className="text-[var(--highlight)]" strokeWidth={1.7} />
                                <h3 className="on-dark-heading mt-5 text-lg font-semibold tracking-normal">
                                    {pillar.title}
                                </h3>
                                <p className="on-dark-copy mt-3 text-sm leading-relaxed">
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
