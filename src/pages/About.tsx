import { Helmet } from 'react-helmet-async';
import { ArrowRight, Building2, CheckCircle2, Code2, FileCheck2, LockKeyhole, Network, Scale, Shield, UsersRound } from 'lucide-react';

import { m } from '@/lib/motion';
import { Button } from '../components/ui/Button';
import { SectionTitle } from '../components/ui/SectionTitle';
import { useCanonical } from '../hooks/useCanonical';
import { useModal } from '../hooks/useModal';

const leadership = [
    {
        name: 'Carlos Henrique Marques Pereira',
        role: 'Co-Founder & Technical COO',
        description:
            'Conduz arquitetura, produto e execução full-stack, conectando decisões técnicas a impacto operacional e comercial.',
        image: '/carlos-henrique.webp',
        color: '#0052CC',
    },
    {
        name: 'Rian Lenger',
        role: 'Co-Founder & Head de Dados',
        description:
            'Estrutura dados, APIs e bases operacionais para que sistemas críticos tenham rastreabilidade e consistência.',
        image: '/rian-lenger.webp',
        color: '#00A86B',
    },
    {
        name: 'Ruan Lenger',
        role: 'Co-Founder & Head de Integração',
        description:
            'Atua em integrações, automações e fluxos entre sistemas, reduzindo trabalho manual e ruído operacional.',
        image: '/ruan-lenger.webp',
        color: '#FF6B35',
    },
    {
        name: 'Dra. Letícia Gomes Marques',
        role: 'Co-Founder & Chief Legal Officer',
        description:
            'Apoia decisões de conformidade, LGPD, contratos e responsabilidade jurídica em produtos e operações digitais.',
        image: '/leticia-gomes.webp',
        color: '#7C3AED',
    },
];

const proofPoints = [
    {
        icon: Building2,
        title: 'Visão de negócio',
        text: 'A solução nasce conectada ao modelo operacional, às restrições do cliente e ao valor que precisa ser criado.',
    },
    {
        icon: Network,
        title: 'Arquitetura proporcional',
        text: 'Escolhemos stack, banco, integrações e deploy pelo risco real do produto, não por moda técnica.',
    },
    {
        icon: FileCheck2,
        title: 'Entrega documentada',
        text: 'Fluxos, regras, decisões e handoffs são registrados para facilitar manutenção, auditoria e continuidade.',
    },
];

const principles = [
    {
        icon: CheckCircle2,
        title: 'Clareza técnica',
        text: 'Decisões explícitas, tradeoffs visíveis e comunicação direta com quem depende do sistema.',
    },
    {
        icon: UsersRound,
        title: 'Execução sênior',
        text: 'Times menores, mais responsáveis e próximos da decisão, sem camadas desnecessárias de repasse.',
    },
    {
        icon: LockKeyhole,
        title: 'Confidencialidade',
        text: 'Projetos sensíveis são tratados com discrição, escopo definido e exposição pública controlada.',
    },
    {
        icon: Shield,
        title: 'Governança',
        text: 'Segurança, permissões, backup, documentação e manutenção entram no desenho desde o início.',
    },
];

const expertise = [
    { icon: Code2, title: 'Produto e front-end', description: 'React, TypeScript, design systems e interfaces de operação.' },
    { icon: Network, title: 'Back-end e integrações', description: 'APIs, automações, webhooks, filas e regras de negócio.' },
    { icon: Building2, title: 'Dados e infraestrutura', description: 'PostgreSQL, Docker, deploy, backup e observabilidade.' },
    { icon: Scale, title: 'Compliance aplicado', description: 'LGPD, contratos, consentimento e governança de acesso.' },
];

export function About() {
    const { openContactModal } = useModal();
    useCanonical('https://riaheru.com/sobre');

    return (
        <div className="bg-[var(--off-white)]">
            <Helmet>
                <title>Sobre a Riaheru | Engenharia B2B e Venture Building</title>
                <meta
                    name="description"
                    content="Conheça a Riaheru Ventures: engenharia de software B2B, venture building, arquitetura, automação, dados e operação com segurança e governança."
                />
            </Helmet>

            <section className="relative overflow-hidden bg-[#070a12] pb-20 pt-32 text-white md:pb-28">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)`,
                        backgroundSize: '44px 44px',
                    }}
                />

                <div className="container relative">
                    <m.div
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="max-w-5xl"
                    >
                        <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                            Sobre a Riaheru
                        </span>
                        <h1 className="on-dark-heading mt-7 max-w-5xl text-5xl font-bold leading-tight tracking-normal md:text-7xl">
                            Software com responsabilidade de negócio, operação e continuidade.
                        </h1>
                        <p className="on-dark-copy mt-7 max-w-3xl text-lg leading-relaxed md:text-xl">
                            A Riaheru Ventures é uma empresa de engenharia de software e venture building para organizações que precisam transformar processos, produtos e dados em sistemas confiáveis.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <Button onClick={() => openContactModal({ source: 'about_hero', page: '/sobre' })} size="lg">
                                Iniciar projeto
                                <ArrowRight size={19} />
                            </Button>
                            <a href="/cases" className="btn btn-outline on-dark-outline-button min-h-14 px-8 py-4 text-base">
                                Ver cases
                            </a>
                        </div>
                    </m.div>
                </div>
            </section>

            <section className="bg-white py-20 md:py-24">
                <div className="container">
                    <div className="grid gap-0 border-y border-[var(--border-subtle)] md:grid-cols-3">
                        {proofPoints.map((item, index) => (
                            <m.article
                                key={item.title}
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                                className="border-b border-[var(--border-subtle)] py-8 md:border-b-0 md:border-r md:px-8 md:last:border-r-0"
                            >
                                <item.icon size={24} className="text-[var(--accent-primary)]" strokeWidth={1.7} />
                                <h2 className="mt-5 text-2xl font-semibold tracking-normal">
                                    {item.title}
                                </h2>
                                <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
                                    {item.text}
                                </p>
                            </m.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[var(--gray-50)] py-20 md:py-28">
                <div className="container">
                    <SectionTitle
                        tag="Liderança"
                        title="Uma equipe técnica com leitura de produto, dados, operação e direito."
                        description="A Riaheru combina engenharia, processos, dados e governança jurídica para construir sistemas com menor improviso e maior previsibilidade."
                    />

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {leadership.map((person, index) => (
                            <m.article
                                key={person.name}
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.48, delay: index * 0.08, ease: 'easeOut' }}
                                className="flex gap-5 rounded-lg border border-[var(--border-subtle)] bg-white p-5 shadow-[var(--shadow-sm)] md:p-6"
                            >
                                <div className="shrink-0">
                                    <div
                                        className="h-[4.5rem] w-[4.5rem] overflow-hidden rounded-lg ring-2 ring-offset-2"
                                        style={{ ['--tw-ring-color' as string]: person.color }}
                                    >
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="h-full w-full object-cover object-top"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold tracking-normal text-[var(--text-dark)]">
                                        {person.name}
                                    </h3>
                                    <p className="mt-1 text-sm font-semibold" style={{ color: person.color }}>
                                        {person.role}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                                        {person.description}
                                    </p>
                                </div>
                            </m.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#070a12] py-20 text-white md:py-28">
                <div className="container">
                    <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                        <m.div
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                                Princípios
                            </span>
                            <h2 className="on-dark-heading mt-6 text-4xl font-bold tracking-normal md:text-6xl">
                                O que não negociamos quando construímos tecnologia.
                            </h2>
                        </m.div>

                        <div className="grid gap-0 border-t border-white/10 sm:grid-cols-2">
                            {principles.map((item, index) => (
                                <m.article
                                    key={item.title}
                                    initial={false}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ duration: 0.46, delay: index * 0.07, ease: 'easeOut' }}
                                    className="border-b border-white/10 py-7 sm:odd:pr-7 sm:even:border-l sm:even:pl-7"
                                >
                                    <item.icon size={23} className="text-[var(--highlight)]" strokeWidth={1.7} />
                                    <h3 className="on-dark-heading mt-5 text-xl font-semibold tracking-normal">
                                        {item.title}
                                    </h3>
                                    <p className="on-dark-copy mt-3 text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </m.article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20 md:py-28">
                <div className="container">
                    <SectionTitle
                        tag="Expertise"
                        title="Competências para tirar sistemas do improviso."
                        description="Atuamos em produto, arquitetura, dados, integrações, automação, segurança e operação para entregar software que pode ser usado e mantido."
                    />

                    <div className="grid grid-cols-1 gap-0 border-y border-[var(--border-subtle)] sm:grid-cols-2 lg:grid-cols-4">
                        {expertise.map((item, index) => (
                            <m.article
                                key={item.title}
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
                                className="border-b border-[var(--border-subtle)] py-8 sm:px-6 lg:border-b-0 lg:border-r lg:last:border-r-0"
                            >
                                <item.icon size={24} className="text-[var(--accent-primary)]" strokeWidth={1.7} />
                                <h3 className="mt-5 text-xl font-semibold tracking-normal">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                                    {item.description}
                                </p>
                            </m.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[var(--off-white)] py-20">
                <div className="container text-center">
                    <span className="label label-accent justify-center">Primeira conversa</span>
                    <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-normal md:text-5xl">
                        Vamos entender o contexto antes de vender uma solução.
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
                        Conte o momento do produto, a dor operacional ou o sistema que precisa evoluir. A resposta será objetiva e orientada a próximos passos.
                    </p>
                    <div className="mt-8">
                        <Button onClick={() => openContactModal({ source: 'about_bottom', page: '/sobre' })} size="lg">
                            Iniciar projeto
                            <ArrowRight size={18} />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
