import { Activity, Code2, Database, FileCheck2, LifeBuoy, Network, RefreshCw, Search, ShieldCheck } from 'lucide-react';

import { m } from '@/lib/motion';
import './Stack.css';

const processSteps = [
    {
        icon: Search,
        title: 'Tese',
        text: 'Organizamos oportunidade, risco, usuário, operação e critérios de sucesso antes de escolher stack ou escopo.',
    },
    {
        icon: Network,
        title: 'Arquitetura',
        text: 'Definimos fronteiras, dados, integrações, segurança e caminho de evolução proporcional ao risco.',
    },
    {
        icon: Code2,
        title: 'Build',
        text: 'Construímos em ciclos curtos com base tipada, revisão técnica, demonstração e validação de uso.',
    },
    {
        icon: Activity,
        title: 'Operação',
        text: 'Preparamos deploy, observabilidade, backup, rotinas administrativas e handoff para continuidade.',
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
        <section id="metodo" className="studio-method-section bg-[#f7f9fc] py-20 text-[var(--text-dark)] md:py-28">
            <div className="container">
                <m.div
                    initial={{ opacity: 0.94, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.38, ease: 'easeOut' }}
                    className="studio-section-intro max-w-4xl"
                >
                    <span className="studio-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                        Método de estúdio
                    </span>
                    <h2 className="studio-section-title mt-6 text-4xl font-bold tracking-normal md:text-6xl">
                        Decisão clara antes de código rápido.
                    </h2>
                    <p className="studio-section-copy mt-6 max-w-3xl text-lg leading-relaxed md:text-xl">
                        O trabalho começa no problema certo e termina com um sistema que alguém consegue operar, manter e evoluir.
                    </p>
                </m.div>

                <div className="studio-method-grid mt-14 grid gap-3">
                    <m.div
                        aria-hidden="true"
                        className="studio-method-connector"
                        initial={{ scale: 0.86, opacity: 0.72 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.42, ease: 'easeOut' }}
                    />
                    {processSteps.map((step, index) => (
                        <m.article
                            key={step.title}
                            tabIndex={0}
                            initial={{ opacity: 0.92, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.38, delay: index * 0.045, ease: 'easeOut' }}
                            className="studio-method-step"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div className="studio-method-icon flex h-11 w-11 items-center justify-center rounded-lg border text-[var(--accent-light)]">
                                    <step.icon size={21} strokeWidth={1.7} className={`studio-step-glyph studio-step-glyph-${index + 1}`} />
                                </div>
                                <span className="studio-method-number font-mono text-sm">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <h3 className="studio-card-title mt-7 text-xl font-semibold tracking-normal">
                                {step.title}
                            </h3>
                            <p className="studio-card-copy mt-3 text-sm leading-relaxed">
                                {step.text}
                            </p>
                        </m.article>
                    ))}
                </div>

                <m.div
                    initial={{ opacity: 0.94, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.38, ease: 'easeOut' }}
                    className="studio-trust-layout mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
                >
                    <div>
                        <span className="studio-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                            Confiança operacional
                        </span>
                        <h2 className="studio-section-title mt-6 text-3xl font-bold tracking-normal md:text-5xl">
                            O produto precisa vender, operar e sobreviver ao primeiro lançamento.
                        </h2>
                        <m.span
                            aria-hidden="true"
                            className="studio-trust-title-rule mt-6 block h-px w-20 bg-[var(--accent-primary)]"
                            initial={{ scaleX: 0, opacity: 0.5 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.24, ease: 'easeOut' }}
                        />
                    </div>

                    <div className="studio-trust-grid grid gap-3 sm:grid-cols-2">
                        {trustPillars.map((pillar, index) => (
                            <m.article
                                key={pillar.title}
                                tabIndex={0}
                                initial={{ opacity: 0.92, y: 6 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-70px' }}
                                transition={{ duration: 0.38, delay: index * 0.045, ease: 'easeOut' }}
                                className="studio-trust-card"
                            >
                                <pillar.icon size={22} className="studio-trust-glyph text-[var(--highlight)]" strokeWidth={1.7} />
                                <h3 className="studio-card-title mt-5 text-lg font-semibold tracking-normal">
                                    {pillar.title}
                                </h3>
                                <p className="studio-card-copy mt-3 text-sm leading-relaxed">
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
