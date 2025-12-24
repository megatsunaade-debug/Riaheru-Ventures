import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Check, Code2, Shield, Cpu, Scale } from 'lucide-react';

const leadership = [
    {
        name: 'Carlos Henrique Marques Pereira',
        role: 'Co-Founder & Technical COO',
        description: 'Engenheiro de Produção com MBA em Finanças e mais de 10 anos de experiência em gestão. Domina a stack moderna (React, Node.js, tRPC) garantindo que a arquitetura seja tecnicamente impecável e financeiramente viável.',
        icon: Code2,
        initials: 'CH',
        image: '/carlos-henrique.webp',
    },
    {
        name: 'Rian Lenger',
        role: 'Co-Founder & Head de Dados',
        description: 'Engenheiro de Produção e Arquiteto de Infraestrutura. Especialista em modelagem de Bancos de Dados Relacionais (SQL) e APIs robustas para sustentar grandes operações.',
        icon: Shield,
        initials: 'RL',
        image: '/rian-lenger.webp',
    },
    {
        name: 'Ruan Lenger',
        role: 'Co-Founder & Head de Integração',
        description: 'Engenheiro de Produção e Especialista em Automação. Mestre em Webhooks, Microsserviços e Automação de Fluxos que eliminam gargalos manuais.',
        icon: Cpu,
        initials: 'RL',
        image: '/ruan-lenger.webp',
    },

    {
        name: 'Dra. Letícia Gomes Marques',
        role: 'Co-Founder & Chief Legal Officer',
        description: 'Advogada com experiência em Direito Administrativo e Trabalhista. Garante a conformidade com LGPD e riscos mitigados desde a primeira linha de código.',
        icon: Scale,
        initials: 'LG',
        image: '/leticia-gomes.webp',
    }
];

const dna = [
    {
        title: 'Front-end Imersivo',
        description: 'React 19, TypeScript e Tailwind CSS para interfaces que reagem instantaneamente.'
    },
    {
        title: 'Back-end Type-Safe',
        description: 'Node.js e tRPC para uma comunicação à prova de falhas entre servidor e cliente.'
    },
    {
        title: 'Infraestrutura de Guerra',
        description: 'Docker, Nginx e Bancos de Dados otimizados para alta performance e segurança.'
    }
];

export function About() {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Sobre Nós | Riaheru</title>
                <meta name="description" content="Conheça a Riaheru: Onde a lógica da engenharia encontra a inovação do código." />
            </Helmet>

            {/* Hero Header */}
            <section className="relative pb-24 bg-[var(--bg-dark)]" style={{ paddingTop: '10rem' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 text-[var(--accent-light)] text-sm font-medium mb-6">
                            Sobre a Riaheru
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                            Onde a Lógica da Engenharia encontra a{' '}
                            <span className="text-[var(--accent-light)]">Inovação do Código</span>.
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                            Somos uma Software House híbrida que nasceu da inconformidade com o mercado tradicional.
                            Não entregamos apenas código — construímos <strong className="text-white">ativos digitais de alto valor</strong>.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container">
                    <SectionTitle
                        tag="Nossa Liderança"
                        title="Engenharia, Direito & Tecnologia"
                        description="O diferencial da Riaheru está em quem lidera a estratégia. Somos engenheiros e juristas que dominam a tecnologia."
                        align="center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                        {leadership.map((leader, index) => (
                            <motion.div
                                key={leader.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl p-6 transition-all duration-300 flex gap-5"
                            >
                                {/* Avatar */}
                                <div className="shrink-0">
                                    {leader.image ? (
                                        <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg shadow-[var(--accent-primary)]/20 ring-1 ring-gray-100">
                                            <img
                                                src={leader.image}
                                                alt={leader.name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-dark)] flex items-center justify-center shadow-lg shadow-[var(--accent-primary)]/20">
                                            <span className="text-white font-bold text-2xl font-mono">
                                                {leader.initials}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                                        {leader.name}
                                    </h3>
                                    <p className="text-[var(--accent-primary)] text-sm font-medium mb-3">
                                        {leader.role}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {leader.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DNA Section */}
            <section className="py-20 md:py-28 bg-[var(--bg-light-alt)]">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionTitle
                                tag="The Riaheru Way"
                                title="Nosso DNA Técnico"
                                description="Utilizamos as mesmas ferramentas que as maiores tech companies do mundo usam para escalar."
                                align="left"
                            />

                            <ul className="space-y-5 mt-8">
                                {dna.map((item, index) => (
                                    <motion.li
                                        key={item.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className="flex gap-4 group"
                                    >
                                        <div className="shrink-0 mt-1">
                                            <div className="w-8 h-8 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center border border-[var(--accent-primary)]/20 group-hover:scale-110 transition-transform duration-300">
                                                <Check size={16} className="text-[var(--accent-primary)]" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative p-10 rounded-2xl bg-[var(--bg-dark)] text-center shadow-2xl overflow-hidden"
                        >
                            {/* Background effects */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--accent-primary)]/20 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 italic leading-tight">
                                    "Na Riaheru, eficiência é mandatória e o código é a lei."
                                </h3>
                                <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-light)] mx-auto rounded-full" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
