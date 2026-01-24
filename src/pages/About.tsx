import { Helmet } from 'react-helmet-async';
import { ArrowRight, Code2, Shield, Cpu, Scale, Quote } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const leadership = [
    {
        name: 'Carlos Henrique Marques Pereira',
        role: 'Co-Founder & Technical COO',
        description: 'Engenheiro de Produção com MBA em Finanças. Domina a stack moderna garantindo arquitetura impecável.',
        image: '/carlos-henrique.webp',
        color: '#0052CC',
    },
    {
        name: 'Rian Lenger',
        role: 'Co-Founder & Head de Dados',
        description: 'Engenheiro de Produção e Arquiteto de Infraestrutura. Especialista em SQL e APIs robustas.',
        image: '/rian-lenger.webp',
        color: '#00C853',
    },
    {
        name: 'Ruan Lenger',
        role: 'Co-Founder & Head de Integração',
        description: 'Engenheiro de Produção. Mestre em Webhooks, Microsserviços e Automação.',
        image: '/ruan-lenger.webp',
        color: '#FF6B35',
    },
    {
        name: 'Dra. Letícia Gomes Marques',
        role: 'Co-Founder & Chief Legal Officer',
        description: 'Advogada especializada em Direito Administrativo. Garante conformidade LGPD desde a primeira linha.',
        image: '/leticia-gomes.webp',
        color: '#9C27B0',
    }
];

const expertise = [
    { icon: Code2, title: 'Front-end Imersivo', description: 'React, TypeScript e Tailwind CSS' },
    { icon: Shield, title: 'Back-end Type-Safe', description: 'Node.js, tRPC e APIs robustas' },
    { icon: Cpu, title: 'Infraestrutura', description: 'Docker, Nginx e cloud escalável' },
    { icon: Scale, title: 'Compliance', description: 'LGPD, segurança e governança' },
];

export function About() {
    const { openContactModal } = useModal();

    return (
        <div className="bg-[var(--off-white)]">
            <Helmet>
                <title>Sobre Nós | Riaheru</title>
                <meta name="description" content="Conheça a Riaheru: Onde a lógica da engenharia encontra a inovação do código." />
            </Helmet>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-[var(--off-white)]">
                <div className="container">
                    <div className="max-w-3xl">
                        <span className="label label-accent block mb-4">Sobre nós</span>
                        <h1 className="mb-6">
                            Engenharia de software com{' '}
                            <span className="text-[var(--accent)]">propósito</span>
                        </h1>
                        <p className="text-xl text-[var(--gray-600)] leading-relaxed mb-8">
                            Somos uma software house híbrida que nasceu da inconformidade com o mercado tradicional.
                            Não entregamos apenas código — construímos ativos digitais de alto valor.
                        </p>
                        <button onClick={openContactModal} className="btn">
                            Falar com a gente
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Quote - REDESENHADO */}
            <section className="py-20 bg-[var(--black)]">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <Quote size={48} className="mx-auto mb-8 text-[var(--accent)]" strokeWidth={1} />
                        <blockquote className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-8">
                            Na Riaheru, eficiência é mandatória e o código é a lei.
                        </blockquote>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-12 h-px bg-[var(--accent)]" />
                            <span className="text-sm text-gray-400 font-medium">Nossa filosofia</span>
                            <div className="w-12 h-px bg-[var(--accent)]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-[var(--white)]">
                <div className="container">
                    <div className="max-w-2xl mb-16">
                        <span className="label block mb-4">Liderança</span>
                        <h2>Quem faz acontecer</h2>
                        <p className="mt-4">
                            Engenheiros e juristas que dominam tecnologia e entregam resultados.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {leadership.map((person) => (
                            <div
                                key={person.name}
                                className="card flex gap-5"
                            >
                                {/* Avatar */}
                                <div className="shrink-0">
                                    <div
                                        className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-offset-2"
                                        style={{ ringColor: person.color }}
                                    >
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">{person.name}</h3>
                                    <p
                                        className="text-sm font-medium mb-3"
                                        style={{ color: person.color }}
                                    >
                                        {person.role}
                                    </p>
                                    <p className="text-sm text-[var(--gray-600)]">
                                        {person.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise */}
            <section className="py-20 bg-[var(--gray-50)]">
                <div className="container">
                    <div className="max-w-2xl mb-16">
                        <span className="label block mb-4">Expertise</span>
                        <h2>Nosso DNA técnico</h2>
                        <p className="mt-4">
                            Utilizamos as mesmas ferramentas das maiores tech companies do mundo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {expertise.map((item) => (
                            <div key={item.title} className="card text-center">
                                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                                    <item.icon size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-[var(--gray-600)]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[var(--off-white)]">
                <div className="container text-center">
                    <h2 className="mb-6">Pronto para começar?</h2>
                    <p className="text-lg text-[var(--gray-600)] mb-8 max-w-xl mx-auto">
                        Vamos conversar sobre como podemos ajudar sua empresa a escalar.
                    </p>
                    <button onClick={openContactModal} className="btn">
                        Iniciar conversa
                        <ArrowRight size={18} />
                    </button>
                </div>
            </section>
        </div>
    );
}
