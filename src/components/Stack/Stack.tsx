import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';

// Tech Stack organized by category
const stackCategories = [
    {
        name: 'Frontend',
        description: 'Experiência digital imersiva com performance otimizada para escala global.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'TanStack Query', 'Radix/Shadcn'],
    },
    {
        name: 'Backend',
        description: 'Arquitetura resiliente e segura para processamento de regras de negócio críticas.',
        technologies: ['Node.js 20', 'tRPC', 'Express', 'Vitest', 'Zod', 'Wouter'],
    },
    {
        name: 'Dados',
        description: 'Governança e integridade para ativos de informação de alto valor estratégico.',
        technologies: ['PostgreSQL', 'MySQL 8', 'Drizzle ORM', 'Docker', 'AWS S3', 'Supabase'],
    },
    {
        name: 'Integração',
        description: 'Interoperabilidade sistêmica para automação e orquestração de fluxos complexos.',
        technologies: ['Nginx', 'Linux VPS', 'PM2', 'Let\'s Encrypt', 'Webhooks', 'CI/CD'],
    },
];

export function Stack() {
    return (
        <section id="stack" className="relative py-20 md:py-28 bg-white">
            <div className="container max-w-7xl">
                <SectionTitle
                    tag="Engenharia de Software"
                    title={
                        <>
                            Nossa <span className="text-[var(--accent-primary)]">Powerhouse</span> Tecnológica
                        </>
                    }
                    description="Superamos o desenvolvimento tradicional para construir ativos digitais estratégicos. Projetamos plataformas SaaS e sistemas críticos com foco em escalabilidade, governança e longevidade, atuando como parceiros técnicos de negócios que exigem robustez enterprise."
                />

                {/* Stack Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stackCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.12 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="group relative p-7 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Gradient Glow on Hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[var(--accent-primary)]/30">
                                        <div className="w-3.5 h-3.5 rounded-full bg-current" />
                                    </div>
                                    <h3 className="font-bold text-xl text-[var(--text-dark)] group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                                        {category.name}
                                    </h3>
                                </div>

                                {/* Category Description */}
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                                    {category.description}
                                </p>

                                {/* Technologies as Tags */}
                                <div className="flex flex-wrap gap-2.5">
                                    {category.technologies.map((tech, techIndex) => (
                                        <motion.span
                                            key={tech}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-50 text-[var(--text-secondary)] border border-gray-100 hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]/30 hover:shadow-md transition-all duration-300 cursor-default"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
