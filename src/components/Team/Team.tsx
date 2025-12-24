import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const defaultLinks = {
    linkedin: 'https://www.linkedin.com/company/riaheru',
    email: 'mailto:contato@riaheru.com',
};

const team = [
    {
        name: 'Carlos Henrique',
        role: 'Technical COO',
        bio: 'Engenheiro de Produção com MBA em Finanças. Full-Stack Developer com domínio de React, Node e tRPC.',
        initials: 'CH',
        image: '/carlos-henrique.webp',
        links: defaultLinks,
    },
    {
        name: 'Rian Lenger',
        role: 'Head de Dados',
        bio: 'Engenheiro de Produção e Arquiteto de Backend. Especialista em MySQL, APIs e Segurança.',
        initials: 'RL',
        image: '/rian-lenger.webp',
        links: defaultLinks,
    },
    {
        name: 'Ruan Lenger',
        role: 'Head de Integração',
        bio: 'Engenheiro de Produção focado em Automação. Especialista em Webhooks e microsserviços.',
        initials: 'RL',
        image: '/ruan-lenger.webp',
        links: defaultLinks,
    },

    {
        name: 'Dra. Letícia Gomes',
        role: 'CLO',
        bio: 'Advogada Estrategista. Especialista em compliance, LGPD e blindagem jurídica.',
        initials: 'LG',
        image: '/leticia-gomes.webp',
        links: defaultLinks,
    },
];

export function Team() {
    return (
        <section id="sobre" className="relative py-20 md:py-28 bg-[var(--bg-dark)]">
            <div className="container max-w-7xl">
                <SectionTitle
                    tag="Nosso Time"
                    title={
                        <>
                            Os <span className="text-[var(--accent-light)]">Arquitetos</span> por Trás do Código
                        </>
                    }
                    description="Uma equipe multidisciplinar que combina Engenharia de Produção, Desenvolvimento Full-Stack e Estratégia Jurídica."
                    dark={true}
                />

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                        >
                            {/* Avatar */}
                            <div className="flex justify-center mb-5">
                                {member.image ? (
                                    <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg shadow-[var(--accent-primary)]/20 ring-2 ring-white/10">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-dark)] flex items-center justify-center shadow-lg shadow-[var(--accent-primary)]/20">
                                        <span className="text-white font-bold text-xl font-mono">
                                            {member.initials}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="text-center">
                                <h3 className="text-lg font-bold text-white mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-[var(--accent-light)] text-sm font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-white/50 text-sm leading-relaxed mb-5">
                                    {member.bio}
                                </p>

                                {/* Social Links */}
                                <div className="flex items-center justify-center gap-2">
                                    {member.links?.linkedin && (
                                        <a
                                            href={member.links.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`LinkedIn de ${member.name}`}
                                            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-[var(--accent-light)] hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                        >
                                            <Linkedin size={16} />
                                        </a>
                                    )}
                                    {member.links?.email && (
                                        <a
                                            href={member.links.email}
                                            aria-label={`Email de ${member.name}`}
                                            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-[var(--accent-light)] hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                        >
                                            <Mail size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
