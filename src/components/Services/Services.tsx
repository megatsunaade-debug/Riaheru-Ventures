import { ArrowRight, Code2, Lightbulb, Rocket } from 'lucide-react';

const services = [
    {
        id: 'desenvolvimento',
        icon: Code2,
        title: 'Desenvolvimento de Software',
        description: 'Squads dedicados para criar soluções escaláveis com arquitetura robusta.',
        color: '#0052CC',
    },
    {
        id: 'consultoria',
        icon: Lightbulb,
        title: 'Consultoria Estratégica',
        description: 'IA, automação e otimização de processos para operações inteligentes.',
        color: '#FF6B35',
    },
    {
        id: 'ventures',
        icon: Rocket,
        title: 'Venture Building',
        description: 'Construímos produtos digitais e startups. Da ideia ao mercado.',
        color: '#00C853',
    },
];

export function Services() {
    return (
        <section id="servicos" className="py-[var(--space-xl)] bg-[var(--white)]">
            <div className="container">
                {/* Header */}
                <div className="max-w-2xl mb-16">
                    <span className="label mb-4 block">O que fazemos</span>
                    <h2 className="mb-4">Três pilares de excelência</h2>
                    <p>
                        Combinamos engenharia de ponta com visão estratégica para
                        entregar resultados excepcionais.
                    </p>
                </div>

                {/* Grid de serviços */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="card group cursor-pointer"
                        >
                            {/* Ícone */}
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                                style={{
                                    backgroundColor: `${service.color}10`,
                                    color: service.color
                                }}
                            >
                                <service.icon size={24} strokeWidth={1.5} />
                            </div>

                            {/* Conteúdo */}
                            <h3 className="mb-3">{service.title}</h3>
                            <p className="text-[var(--gray-600)] mb-6 text-[0.9375rem]">
                                {service.description}
                            </p>

                            {/* Link */}
                            <a
                                href={`#${service.id}`}
                                className="link-arrow text-sm"
                            >
                                Saiba mais
                                <ArrowRight size={14} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
