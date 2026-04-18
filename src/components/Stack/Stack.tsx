import { m } from '@/lib/motion';

import { SectionTitle } from '../ui/SectionTitle';

const stackCategories = [
    {
        name: 'Frontend',
        description: 'Experiências digitais rápidas, acessíveis e consistentes em desktop e mobile.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Router', 'Vite'],
    },
    {
        name: 'Backend',
        description: 'Arquitetura resiliente para regras de negócio sensíveis, integrações e escalabilidade.',
        technologies: ['Node.js', 'TypeScript', 'tRPC', 'REST APIs', 'Zod', 'Vitest'],
    },
    {
        name: 'Dados',
        description: 'Modelagem, governança e leitura de dados como parte da estratégia operacional.',
        technologies: ['PostgreSQL', 'MySQL', 'Drizzle ORM', 'Supabase', 'Docker', 'Observabilidade'],
    },
    {
        name: 'Integração',
        description: 'Automação de fluxos complexos com segurança, rastreabilidade e baixo atrito.',
        technologies: ['Webhooks', 'Nginx', 'Linux VPS', 'CI/CD', 'PM2', 'Lets Encrypt'],
    },
];

export function Stack() {
    return (
        <section id="stack" className="relative bg-white py-20 md:py-28">
            <div className="container max-w-7xl">
                <SectionTitle
                    tag="Engenharia de Software"
                    title={
                        <>
                            Nossa <span className="text-[var(--accent-primary)]">Powerhouse</span> tecnológica
                        </>
                    }
                    description="Superamos o desenvolvimento tradicional para construir ativos digitais estratégicos. Projetamos plataformas SaaS e sistemas críticos com foco em escalabilidade, governança e longevidade."
                />

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stackCategories.map((category, categoryIndex) => (
                        <m.div
                            key={category.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.12 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="group relative rounded-2xl border border-gray-100 bg-white p-7 shadow-lg transition-all duration-500 hover:shadow-2xl"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative z-10">
                                <div className="mb-4 flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--accent-primary)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[var(--accent-primary)]/30">
                                        <div className="h-3.5 w-3.5 rounded-full bg-current" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--text-dark)] transition-colors duration-300 group-hover:text-[var(--accent-primary)]">
                                        {category.name}
                                    </h3>
                                </div>

                                <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)]">
                                    {category.description}
                                </p>

                                <div className="flex flex-wrap gap-2.5">
                                    {category.technologies.map((tech, techIndex) => (
                                        <m.span
                                            key={tech}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                                            whileHover={{ scale: 1.05 }}
                                            className="cursor-default rounded-lg border border-gray-100 bg-gray-50 px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent-primary)]/30 hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)] hover:shadow-md"
                                        >
                                            {tech}
                                        </m.span>
                                    ))}
                                </div>
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
