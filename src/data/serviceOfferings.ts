import type { CaseStudy } from '@/data/cases';

export type ServiceOfferingId = 'venture-building' | 'engenharia-dedicada' | 'arquitetura-ia-operacao';

export type ServiceOffering = {
    id: ServiceOfferingId;
    route: string;
    eyebrow: string;
    title: string;
    shortTitle: string;
    headline: string;
    summary: string;
    description: string;
    proof: string;
    metaTitle: string;
    metaDescription: string;
    primaryCta: string;
    outcomes: string[];
    deliverables: string[];
    operatingModel: string[];
    bestFor: string[];
    relatedCaseIds: CaseStudy['id'][];
    accent: 'blue' | 'orange' | 'emerald';
};

export const SERVICE_OFFERINGS: ServiceOffering[] = [
    {
        id: 'venture-building',
        route: '/servicos/venture-building',
        eyebrow: 'Venture studio',
        title: 'Venture Building',
        shortTitle: 'Venture build',
        headline: 'Da tese ao produto operando com engenharia, negócio e governança no mesmo ciclo.',
        summary: 'Construímos MVPs, plataformas SaaS e ativos digitais próprios ou em parceria, com decisões técnicas conectadas ao modelo de negócio.',
        description:
            'Entramos cedo para transformar oportunidade, mercado e operação em produto real: discovery objetivo, arquitetura inicial, experiência, base técnica e evolução comercial.',
        proof: 'Marqlet nasceu desse modelo: produto SaaS B2B, multi-tenant, com base preparada para automações e operação recorrente.',
        metaTitle: 'Venture Building B2B | Riaheru Ventures',
        metaDescription:
            'Venture building técnico para criar MVPs, SaaS e produtos digitais B2B com arquitetura, produto, operação e governança desde o primeiro ciclo.',
        primaryCta: 'Discutir uma tese de produto',
        outcomes: [
            'Tese traduzida em escopo executável',
            'MVP ou plataforma com base evolutiva',
            'Arquitetura pronta para receita, dados e operação',
        ],
        deliverables: [
            'Discovery técnico e mapa de riscos',
            'Roadmap de produto e arquitetura inicial',
            'Interface, backend, banco, integrações e deploy',
            'Documentação para evolução e tomada de decisão',
        ],
        operatingModel: [
            'Sprint zero para escopo, riscos e critérios de sucesso',
            'Ciclos curtos com demo, validação e revisão técnica',
            'Priorização por uso real, custo de manutenção e valor comercial',
        ],
        bestFor: [
            'Empresas com tese clara, mas sem produto próprio',
            'Operações B2B que ainda dependem de planilhas e fluxos manuais',
            'Novos produtos que precisam nascer com segurança e continuidade',
        ],
        relatedCaseIds: ['marqlet'],
        accent: 'blue',
    },
    {
        id: 'engenharia-dedicada',
        route: '/servicos/engenharia-dedicada',
        eyebrow: 'Squads sêniores',
        title: 'Engenharia Dedicada',
        shortTitle: 'Engenharia',
        headline: 'Times enxutos para construir, modernizar e estabilizar sistemas que sustentam a operação.',
        summary: 'Atuamos como braço técnico para evoluir produtos, APIs, integrações e interfaces críticas sem montar uma área inteira do zero.',
        description:
            'A Riaheru assume entregas de software com cadência, revisão técnica e documentação. O foco é tirar sistemas do improviso e reduzir dependência informal.',
        proof: 'Aplicamos esse formato em produtos próprios, sites de aquisição e sistemas internos com requisitos reais de manutenção.',
        metaTitle: 'Engenharia Dedicada para Sistemas B2B | Riaheru Ventures',
        metaDescription:
            'Squads sêniores de engenharia para construir, modernizar e estabilizar sistemas B2B, APIs, integrações, front-end e operação digital.',
        primaryCta: 'Montar um squad sob medida',
        outcomes: [
            'Backlog técnico convertido em entrega contínua',
            'Menos dependência de conhecimento informal',
            'Base de código mais previsível para evoluir',
        ],
        deliverables: [
            'Frontend, backend, APIs e integrações',
            'Refatoração, modernização e sustentação evolutiva',
            'Revisão técnica, testes e documentação de handoff',
            'Rotinas de deploy, observabilidade e manutenção',
        ],
        operatingModel: [
            'Entrada por diagnóstico de stack, riscos e prioridades',
            'Squad enxuto com responsáveis técnicos claros',
            'Relato objetivo de progresso, bloqueios e próximas decisões',
        ],
        bestFor: [
            'Empresas com produto em produção e fila técnica acumulada',
            'Operações que precisam acelerar sem perder governança',
            'Times internos que precisam de reforço sênior e documentação',
        ],
        relatedCaseIds: ['nimet', 'marqlet'],
        accent: 'orange',
    },
    {
        id: 'arquitetura-ia-operacao',
        route: '/servicos/arquitetura-ia-operacao',
        eyebrow: 'Arquitetura aplicada',
        title: 'Arquitetura, IA e Operação',
        shortTitle: 'Arquitetura e IA',
        headline: 'Diagnóstico e execução para ambientes onde dados, automação e segurança precisam funcionar juntos.',
        summary: 'Organizamos arquitetura, dados, integrações, IA aplicada, deploy e governança para sistemas que não podem depender de improviso.',
        description:
            'Quando a operação já é crítica, tratamos software como ativo: fronteiras de sistema, permissões, backup, observabilidade, automações e documentação útil.',
        proof: 'O case industrial confidencial concentra esse tipo de entrega: permissões, documentos, filas, capacidade, indicadores e publicação protegida.',
        metaTitle: 'Arquitetura, IA e Operação para Sistemas Críticos | Riaheru',
        metaDescription:
            'Arquitetura de software, IA aplicada, governança de dados, deploy, observabilidade, backup e operação segura para sistemas B2B críticos.',
        primaryCta: 'Diagnosticar arquitetura e operação',
        outcomes: [
            'Decisões técnicas explícitas e auditáveis',
            'Dados mais confiáveis para operação e gestão',
            'Ambiente preparado para automação e continuidade',
        ],
        deliverables: [
            'Revisão de arquitetura, segurança e permissões',
            'Modelagem de dados, integrações e automações',
            'Bases RAG, fluxos de IA e governança de uso',
            'Deploy, backup, observabilidade e documentação operacional',
        ],
        operatingModel: [
            'Mapeamento de sistemas, dados, riscos e rotinas críticas',
            'Plano de evolução proporcional ao risco operacional',
            'Execução técnica com handoff e governança de mudanças',
        ],
        bestFor: [
            'Sistemas internos com dados sensíveis ou processos críticos',
            'Empresas que querem aplicar IA sem fragilizar governança',
            'Operações que precisam de segurança, backup e rastreabilidade',
        ],
        relatedCaseIds: ['industrial-platform', 'marqlet'],
        accent: 'emerald',
    },
];

export function findServiceOffering(id: ServiceOfferingId) {
    return SERVICE_OFFERINGS.find((service) => service.id === id);
}
