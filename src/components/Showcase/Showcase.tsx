import { ArrowUpRight, Cpu } from 'lucide-react';

import { m } from '@/lib/motion';

const projects = [
    {
        id: 'marqlet',
        title: 'Marqlet',
        logo: '/marqlet-logo-horizontal-dark.svg',
        logoMode: 'wordmark',
        category: 'Venture Build | LegalTech SaaS',
        description: 'Plataforma de gestão para escritórios de advocacia. Desktop-first com segurança bancária e inteligência artificial integrada.',
        caseStudy: {
            challenge: 'Processamento de alta liquidez de dados processuais (LGPD-compliant) com latência zero.',
            architecture: 'Monorepo full TypeScript. Camada de API protegida via tRPC (End-to-End Type Safety) operando em PostgreSQL de alta disponibilidade.',
            impact: 'Plataforma Tier-Bank que escala dinamicamente para suportar múltiplos escritórios simultaneamente (Multi-tenant Isolado).'
        },
        image: '/marqletdashboard.webp',
        link: 'https://marqlet.com',
        accent: '#183EEB',
        tech: ['React', 'TypeScript', 'Node.js', 'tRPC', 'PostgreSQL', 'Drizzle ORM'],
        ventureBuild: true,
    },
];

export function Showcase() {
    return (
        <section id="trabalhos" className="py-[var(--space-xl)] bg-[var(--gray-50)]">
            <div className="container py-16">
                {/* Header */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mb-16"
                >
                    <span className="label mb-4 block">Estudos de Arquitetura</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">O que construímos e escalamos</h2>
                </m.div>

                {/* Projects */}
                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <m.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
                        >
                            {/* Image Showcase - 7 cols */}
                            <div className="lg:col-span-7 xl:col-span-7">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block relative group overflow-hidden rounded-[24px] border border-[var(--gray-200)] shadow-2xl bg-white p-2"
                                >
                                    <div className="aspect-[16/10] bg-[var(--gray-100)] overflow-hidden rounded-[16px]">
                                        <img
                                            src={project.image}
                                            alt={`${project.title} Dashboard`}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-[24px] pointer-events-none" />
                                </a>
                            </div>

                            {/* Content & Case Study - 5 cols */}
                            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="label text-[var(--accent)] flex items-center gap-1.5">
                                        <Cpu size={14} />
                                        {project.category}
                                    </span>
                                </div>

                                {/* Logo + Title */}
                                <div className="mb-5">
                                    <div className="inline-flex max-w-full items-center rounded-xl p-1 bg-white">
                                        <img
                                            src={project.logo}
                                            alt={`${project.title} Logo`}
                                            loading="lazy"
                                            className={project.logoMode === 'wordmark'
                                                ? 'h-8 w-auto max-w-[200px] object-contain sm:h-9'
                                                : 'h-10 w-10 object-contain'}
                                        />
                                    </div>
                                    {project.logoMode !== 'wordmark' ? (
                                        <h3 className="mt-4 text-3xl font-bold" style={{ color: project.accent }}>
                                            {project.title}
                                        </h3>
                                    ) : (
                                        <h3 className="sr-only">{project.title}</h3>
                                    )}
                                </div>

                                <p className="text-[var(--gray-600)] mb-8 text-lg leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technical Case Study Breakdown */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--gray-200)] mb-8 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent)]" />
                                    
                                    <div className="space-y-5">
                                        <div>
                                            <span className="text-[11px] font-bold uppercase text-[var(--gray-400)] tracking-widest block mb-1">O Desafio de Negócio</span>
                                            <p className="text-sm font-medium text-[var(--black)] leading-relaxed">
                                                {project.caseStudy.challenge}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-[11px] font-bold uppercase text-[var(--gray-400)] tracking-widest block mb-1">Engenharia Implementada</span>
                                            <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                                                {project.caseStudy.architecture}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-[11px] font-bold uppercase text-[var(--gray-400)] tracking-widest block mb-1">Impacto Final</span>
                                            <p className="text-sm font-semibold text-[var(--accent)] leading-relaxed">
                                                {project.caseStudy.impact}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Tech stack tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 text-xs font-semibold rounded-md bg-[var(--gray-100)] text-[var(--gray-800)] border border-[var(--gray-200)] transition-colors hover:bg-[var(--gray-200)] cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--black)] text-white font-semibold rounded-xl hover:bg-[var(--gray-800)] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
                                    >
                                        Inspecionar projeto
                                        <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
