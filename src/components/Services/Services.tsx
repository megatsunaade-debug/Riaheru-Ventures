import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, ArrowRight } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const services = [
    {
        id: 'fabrica',
        icon: Code2,
        title: 'Desenvolvimento Customizado',
        subtitle: 'Fábrica de Software',
        description: 'Squads de elite para seu projeto. Entregamos soluções escaláveis com arquitetura robusta e código de alta qualidade.',
        features: [
            'Squads dedicados',
            'Metodologia ágil',
            'Código escalável',
            'Suporte contínuo',
        ],
    },
    {
        id: 'consultoria',
        icon: Brain,
        title: 'Arquitetura de Software',
        subtitle: 'Consultoria Estratégica',
        description: 'IA, Automação e Otimização de Processos. Transformamos operações complexas em fluxos inteligentes.',
        features: [
            'Inteligência Artificial',
            'Automação de processos',
            'Análise de dados',
            'Otimização operacional',
        ],
    },
    {
        id: 'ventures-service',
        icon: Rocket,
        title: 'Soluções SaaS',
        subtitle: 'Riaheru Ventures',
        description: 'Produtos proprietários e startups incubadas. Construímos ativos digitais que geram valor real.',
        features: [
            'Produtos SaaS',
            'Startups incubadas',
            'MVP acelerado',
            'Go-to-market',
        ],
    },
];

export function Services() {
    return (
        <section id="servicos" className="relative py-32 md:py-40 bg-white">
            <div className="container max-w-7xl">
                <SectionTitle
                    tag="Nossos Serviços"
                    title={
                        <>
                            A <span className="text-[var(--accent-primary)]">Tríade</span> da Excelência
                        </>
                    }
                    description="Três pilares integrados que transformam ideias em produtos digitais de alta performance."
                />

                {/* Services Grid - Wix Style: Large Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            id={service.id}
                            key={service.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.7 }}
                            className="group relative bg-white rounded-3xl border-2 border-gray-100 p-12 hover:border-[var(--accent-primary)]/30 hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Icon - Much Larger */}
                            <div className="w-20 h-20 rounded-2xl mb-8 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] flex items-center justify-center group-hover:bg-[var(--accent-primary)] group-hover:text-white group-hover:scale-110 transition-all duration-500">
                                <service.icon size={40} strokeWidth={2} />
                            </div>

                            {/* Subtitle - Minimalist */}
                            <span className="text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-4 block font-bold">
                                {service.subtitle}
                            </span>

                            {/* Title - MASSIVE */}
                            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-[var(--text-dark)] leading-tight">
                                {service.title}
                            </h3>

                            {/* Description - Larger, More Readable */}
                            <p className="text-[var(--text-secondary)] mb-10 text-lg leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features - Clean List */}
                            <ul className="space-y-4 mb-10">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-4 text-base text-[var(--text-secondary)]">
                                        <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA - Subtle */}
                            <a
                                href={`#${service.id}`}
                                className="inline-flex items-center gap-3 text-base font-bold text-[var(--accent-primary)] group-hover:gap-5 transition-all duration-300"
                            >
                                Saiba mais
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
