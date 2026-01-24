import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 'marqlet',
        title: 'Marqlet',
        logo: '/logomarqlet.webp',
        category: 'SaaS Jurídico',
        description: 'Plataforma de gestão para escritórios de advocacia. Desktop-first com segurança bancária e inteligência artificial integrada.',
        image: '/marqletdashboard.webp',
        link: 'https://marqlet.com',
        accent: '#1E4B8E',
    },
];

export function Showcase() {
    return (
        <section id="trabalhos" className="py-[var(--space-xl)] bg-[var(--gray-50)]">
            <div className="container">
                {/* Header */}
                <div className="max-w-2xl mb-16">
                    <span className="label mb-4 block">Portfólio</span>
                    <h2>Projetos que construímos</h2>
                </div>

                {/* Projetos */}
                <div className="space-y-16">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                        >
                            {/* Imagem */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative group overflow-hidden rounded-xl"
                            >
                                <div className="aspect-[16/10] bg-[var(--gray-100)] overflow-hidden rounded-xl">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-[var(--accent)]/0 group-hover:bg-[var(--accent)]/5 transition-colors duration-300 rounded-xl" />
                            </a>

                            {/* Conteúdo */}
                            <div>
                                <span className="label mb-4 block">{project.category}</span>

                                {/* Logo do projeto */}
                                <div className="flex items-center gap-3 mb-4">
                                    <img
                                        src={project.logo}
                                        alt={`${project.title} Logo`}
                                        className="h-10 w-10 object-contain"
                                    />
                                    <h3 className="text-4xl font-bold" style={{ color: project.accent }}>
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-[var(--gray-600)] mb-8 text-lg leading-relaxed">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-arrow"
                                >
                                    Visitar projeto
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
