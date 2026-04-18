import { Cpu, ServerCog, Target } from 'lucide-react';

import { m } from '@/lib/motion';

const services = [
    {
        id: 'venture',
        icon: Target,
        title: 'Tech Partner & Venture Building',
        description: 'Não somos uma fábrica convencional. Atuamos com visão de donos (Skin in the Game), aportando engenharia de elite para co-criar startups, plataformas SaaS e spin-offs empresariais.',
        accent: 'rgba(255, 107, 53, 1)', // highlight
        bgHover: 'rgba(255, 107, 53, 0.05)',
        gridArea: 'lg:col-span-8',
        highlight: true,
    },
    {
        id: 'engineering',
        icon: ServerCog,
        title: 'Engenharia Dedicada',
        description: 'Squads avançados operando como extensão do seu CTO. Desenvolvemos desde o backend de alta liquidez até UIs perfeitas ao pixel.',
        accent: 'rgba(0, 82, 204, 1)',
        bgHover: 'rgba(0, 82, 204, 0.05)',
        gridArea: 'lg:col-span-4',
        highlight: false,
    },
    {
        id: 'architecture',
        icon: Cpu,
        title: 'Consultoria de Arquitetura e IA',
        description: 'Resolvemos dívidas técnicas críticas. Refatoração para Cloud-native, integrações RAG/IA corporativas e aumento de tolerância a falhas reais.',
        accent: 'rgba(0, 82, 204, 1)',
        bgHover: 'rgba(0, 82, 204, 0.05)',
        gridArea: 'lg:col-span-12',
        highlight: false,
    },
];

export function Services() {
    return (
        <section id="servicos" className="relative py-24 md:py-32 bg-[#080B12] overflow-hidden text-white border-b border-white/5">
            {/* Tech background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>
            
            <m.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-dark)]/10 blur-[150px] rounded-full pointer-events-none"
            />

            <div className="container relative z-10">
                {/* Header */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mb-16"
                >
                    <span className="on-dark-kicker inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest mb-6">
                        O Modelo Riaheru
                    </span>
                    <h2 className="on-dark-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Engenharia e Estratégia sem atalhos.
                    </h2>
                    <p className="on-dark-copy text-xl leading-relaxed">
                        Construir tecnologia que escala requer mais do que escrever código. Exige arquitetura limpa, segurança rigorosa e visão profunda do negócio.
                    </p>
                </m.div>

                {/* Grid de serviços (Assymmetric layout for premium feel) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {services.map((service, index) => (
                        <m.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -4 }}
                            className={`group relative p-8 md:p-10 bg-white/[0.02] border border-white/5 rounded-3xl cursor-default transition-all duration-300 hover:border-white/10 overflow-hidden ${service.gridArea}`}
                        >
                            {/* Hover effect background */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{ backgroundColor: service.bgHover }}
                            />
                            
                            {/* Accent line for Highlighted service */}
                            {service.highlight && (
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--highlight)] to-[var(--accent)]" />
                            )}

                            {/* Icon */}
                            <div className="relative z-10 h-full flex flex-col">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/5 transition-transform duration-300 group-hover:scale-105"
                                    style={{
                                        backgroundColor: 'rgba(255,255,255,0.03)',
                                        color: service.accent,
                                    }}
                                >
                                    <service.icon size={26} strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <h3 className="on-dark-heading text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="on-dark-copy text-lg leading-relaxed mt-auto">
                                    {service.description}
                                </p>
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
