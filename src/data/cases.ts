export type CaseStudy = {
    id: 'marqlet' | 'nimet' | 'industrial-platform';
    title: string;
    eyebrow: string;
    description: string;
    challenge: string;
    delivery: string;
    outcome: string;
    image?: string;
    imageAlt?: string;
    logo?: string;
    link?: string;
    tags: string[];
    confidential?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'marqlet',
        title: 'Marqlet',
        eyebrow: 'LegalTech SaaS | Venture Build',
        description:
            'Produto próprio para escritórios de advocacia, com dashboard operacional, modelo multi-tenant e base preparada para automações de IA.',
        challenge:
            'Transformar rotinas jurídicas, dados de clientes e acompanhamento processual em uma experiência única, segura e escalável.',
        delivery:
            'Arquitetura full TypeScript, interface desktop-first, API tipada, PostgreSQL e fundações de segurança para uso multi-tenant.',
        outcome:
            'Um SaaS jurídico pronto para escalar produto, operação e evolução comercial sem depender de planilhas paralelas.',
        image: '/marqletdashboard.webp',
        imageAlt: 'Dashboard do Marqlet com indicadores jurídicos',
        logo: '/marqlet-logo-horizontal-dark.svg',
        link: 'https://marqlet.com',
        tags: ['React', 'TypeScript', 'tRPC', 'PostgreSQL', 'Multi-tenant', 'IA aplicada'],
    },
    {
        id: 'nimet',
        title: 'NIMET',
        eyebrow: 'Site institucional | Engenharia de campo',
        description:
            'Presença digital premium para empresa técnica, com narrativa comercial clara, SEO local e fluxo direto para solicitação de orçamento.',
        challenge:
            'Reposicionar uma operação de engenharia elétrica e manutenção como marca confiável para indústrias, empresas, condomínios e residências.',
        delivery:
            'Next.js estático, design responsivo, copy técnica, seções de serviços, processo, provas de confiança e chamada direta para WhatsApp.',
        outcome:
            'Um site institucional mais robusto, preparado para aquisição local, apresentação comercial e manutenção simples de conteúdo.',
        image: '/nimet-home-desktop-after.png',
        imageAlt: 'Home do site NIMET com hero de engenharia industrial',
        link: 'https://nimet.com.br',
        tags: ['Next.js', 'SEO local', 'Landing page', 'WhatsApp', 'Institucional', 'Performance'],
    },
    {
        id: 'industrial-platform',
        title: 'Plataforma operacional industrial',
        eyebrow: 'Sistema interno | Operação crítica',
        description:
            'Sistema web interno para operação industrial, controle documental, filas de execução, planejamento de capacidade e indicadores gerenciais.',
        challenge:
            'Reduzir controles paralelos, planilhas manuais e decisões operacionais dispersas em rotinas sensíveis de produção e serviços.',
        delivery:
            'Backend Python/FastAPI, PostgreSQL, Docker, publicação protegida, permissões por área, auditoria, geração de documentos e rotinas de backup.',
        outcome:
            'Mais rastreabilidade, governança operacional e visibilidade de prazo, capacidade, documentos, pessoas, estoque e risco de entrega.',
        tags: ['FastAPI', 'PostgreSQL', 'Docker', 'Cloudflare Access', 'PDF/DOCX', 'Governança'],
        confidential: true,
    },
];
