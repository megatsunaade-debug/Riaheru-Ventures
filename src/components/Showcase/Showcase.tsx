import { motion } from 'framer-motion';
import { Shield, Zap, Database, Lock, ExternalLink, Brain, Users } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';

const techStack = [
    'React 19',
    'tRPC',
    'Drizzle ORM',
    'AWS S3',
    'TypeScript',
    'Node.js',
    'Vite',
    'TanStack Query',
    'Radix/Shadcn',
];

const features = [
    {
        icon: Shield,
        title: 'Segurança Bancária',
        description: 'Criptografia de ponta e proteção de dados em conformidade com LGPD.',
    },
    {
        icon: Zap,
        title: 'Performance',
        description: 'Arquitetura desktop-first para máxima velocidade e responsividade.',
    },
    {
        icon: Database,
        title: 'Dados Estruturados',
        description: 'Gestão inteligente de documentos jurídicos com indexação avançada.',
    },
    {
        icon: Lock,
        title: 'Controle de Acesso',
        description: 'Permissões granulares e auditoria completa de ações.',
    },
    {
        icon: Brain,
        title: 'MarqletAI Integrada',
        description: 'Inteligência artificial nativa para automação e insights jurídicos avançados.',
    },
    {
        icon: Users,
        title: 'Painel do Cliente',
        description: 'Portal exclusivo para clientes do escritório acompanharem seus processos.',
    },
];

export function Showcase() {
    return (
        <section id="ventures" className="relative py-32 md:py-40 bg-[var(--bg-light-alt)]">
            <div className="container max-w-7xl">
                <SectionTitle
                    tag="Produto Próprio"
                    title={
                        <span className="flex items-center justify-center gap-4">
                            <img src="/logomarqlet.webp" alt="Marqlet Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                            <span>
                                <span className="text-[var(--accent-primary)]">Marqlet</span>: A Reinvenção da Gestão
                            </span>
                        </span>
                    }
                    description="Plataforma SaaS desktop-first com segurança bancária. Nosso produto principal que valida a autoridade técnica da Riaheru."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Product Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Mock Window */}
                        <div className="relative rounded-2xl overflow-hidden bg-[var(--bg-dark)] border border-white/10 shadow-2xl">
                            {/* Window Header */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0f1a2b]">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="px-3 py-1 bg-white/5 rounded-md text-xs text-white/40 font-mono">
                                        marqlet.com
                                    </div>
                                </div>
                            </div>

                            {/* Window Content */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src="/marqletdashboard.webp"
                                    alt="Marqlet Dashboard"
                                    className="w-full h-full object-cover object-top"
                                />

                                {/* Floating status indicator overlay if still desired, but user just said "dashboard" */}
                                <motion.div
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-6 right-6 p-3 rounded-xl bg-[var(--bg-dark)]/90 backdrop-blur-md border border-white/10 shadow-2xl flex items-center gap-3"
                                >
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                                        <Shield size={16} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/60">Seguro</div>
                                        <div className="text-sm font-semibold text-emerald-400">100%</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {techStack.map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="font-mono text-xs px-3 py-1.5 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-[var(--accent-primary)] font-medium"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.12 }}
                                    whileHover={{ y: -4 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-xl shrink-0 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] flex items-center justify-center group-hover:bg-[var(--accent-primary)] group-hover:text-white group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[var(--accent-primary)]/20">
                                        <feature.icon size={22} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[var(--text-dark)] mb-2 text-lg group-hover:text-[var(--accent-primary)] transition-colors duration-300">{feature.title}</h4>
                                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => window.open('https://marqlet.com', '_blank')}
                        >
                            Conhecer Marqlet
                            <ExternalLink size={18} />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
