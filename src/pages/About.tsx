import { Helmet } from 'react-helmet-async';
import { ArrowRight, Code2, Cpu, Quote, Scale, Shield } from 'lucide-react';

import { Button } from '../components/ui/Button';
import { SectionTitle } from '../components/ui/SectionTitle';
import { useModal } from '../hooks/useModal';

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
        description: 'Engenheiro de Produção. Mestre em webhooks, microsserviços e automação.',
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
                <meta
                    name="description"
                    content="Conheça a Riaheru: engenharia de software com visão de negócio, liderança técnica multidisciplinar e execução orientada a resultado."
                />
            </Helmet>

            <section className="pt-32 pb-20">
                <div className="container">
                    <div className="max-w-4xl">
                        <span className="label label-accent block mb-4">Sobre nós</span>
                        <h1 className="mb-6">
                            Engenharia de software com{' '}
                            <span className="text-[var(--accent)]">propósito</span>
                        </h1>
                        <p className="mb-8 text-xl leading-relaxed text-[var(--gray-600)]">
                            Somos uma software house híbrida que nasceu da inconformidade com o mercado tradicional.
                            Não entregamos apenas código: construímos ativos digitais robustos, com responsabilidade técnica e leitura clara de negócio.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button onClick={openContactModal}>
                                Iniciar projeto
                                <ArrowRight size={18} />
                            </Button>
                            <a href="/#trabalhos" className="btn btn-outline">
                                Ver trabalhos
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            ['Execução sênior', 'Produto, engenharia e operação alinhados desde o início do projeto.'],
                            ['Arquitetura útil', 'Decisões técnicas orientadas a longevidade, manutenção e velocidade real.'],
                            ['Conformidade prática', 'LGPD, governança e risco tratados como parte do produto, não como apêndice.'],
                        ].map(([title, description]) => (
                            <div key={title} className="card">
                                <h3 className="text-xl font-semibold">{title}</h3>
                                <p className="mt-3 text-[var(--gray-600)]">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[var(--black)] py-20">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center">
                        <Quote size={48} className="mx-auto mb-8 text-[var(--accent)]" strokeWidth={1} />
                        <blockquote className="mb-8 text-3xl font-semibold leading-tight text-white md:text-4xl">
                            Na Riaheru, eficiência é mandatória e o código é a lei.
                        </blockquote>
                        <div className="flex items-center justify-center gap-3">
                            <div className="h-px w-12 bg-[var(--accent)]" />
                            <span className="text-sm font-medium text-gray-400">Nossa filosofia</span>
                            <div className="h-px w-12 bg-[var(--accent)]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[var(--white)] py-20">
                <div className="container">
                    <SectionTitle
                        tag="Liderança"
                        title="Quem faz acontecer"
                        description="Engenheiros e juristas que entendem o detalhe técnico sem perder a leitura estratégica do negócio."
                    />

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {leadership.map((person) => (
                            <div key={person.name} className="card flex gap-5">
                                <div className="shrink-0">
                                    <div
                                        className="h-16 w-16 overflow-hidden rounded-full ring-2 ring-offset-2"
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
                                    <h3 className="mb-1 text-lg font-semibold">{person.name}</h3>
                                    <p className="mb-3 text-sm font-medium" style={{ color: person.color }}>
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

            <section className="bg-[var(--gray-50)] py-20">
                <div className="container">
                    <SectionTitle
                        tag="Expertise"
                        title="Nosso DNA técnico"
                        description="A mesma régua que aplicamos em nossos projetos institucionais é a régua que levamos para produtos, integrações e operações críticas."
                    />

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {expertise.map((item) => (
                            <div key={item.title} className="card text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                                    <item.icon size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-[var(--gray-600)]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container text-center">
                    <h2 className="mb-6">Pronto para começar?</h2>
                    <p className="mx-auto mb-8 max-w-xl text-lg text-[var(--gray-600)]">
                        Vamos conversar sobre como podemos ajudar sua empresa a escalar sem sacrificar clareza técnica ou qualidade de entrega.
                    </p>
                    <Button onClick={openContactModal}>
                        Iniciar projeto
                        <ArrowRight size={18} />
                    </Button>
                </div>
            </section>
        </div>
    );
}
