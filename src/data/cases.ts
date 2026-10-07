type SiteCase = {
    id: 'marqlet' | 'nimet' | 'serralheria-cp' | 'sansi-arquitetura' | 'leticia-gomes-marques';
    title: string;
    kind: 'site';
    summary?: string;
    preview?: {
        src: string;
        alt: string;
        avif?: string;
    };
    url?: string;
};

type ConfidentialCase = {
    id: 'custom-system';
    title: 'Sistema sob medida';
    kind: 'confidential';
    subtitle: 'Projeto desenvolvido para empresa confidencial';
};

export type CaseStudy = SiteCase | ConfidentialCase;

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'marqlet', title: 'Marqlet', kind: 'site',
        preview: {
            src: '/images/cases/riaheru-case-marqlet.jpg',
            alt: 'Captura do site Marqlet com apresentação da operação jurídica e prévia do painel.',
        },
    },
    {
        id: 'nimet', title: 'Nimet', kind: 'site',
        preview: {
            src: '/images/cases/riaheru-case-nimet.jpg',
            alt: 'Captura do site Nimet com apresentação dos serviços de engenharia e visual de instalações industriais.',
        },
    },
    {
        id: 'serralheria-cp', title: 'Serralheria CP', kind: 'site',
        preview: {
            src: '/images/cases/riaheru-case-serralheria-cp.jpg',
            alt: 'Captura do site Serralheria CP com chamada sobre soluções sob medida diante de um portão metálico.',
        },
    },
    {
        id: 'sansi-arquitetura', title: 'SANSI Arquitetura', kind: 'site',
        preview: {
            src: '/images/cases/riaheru-case-sansi-arquitetura.jpg',
            alt: 'Captura do site SANSI Arquitetura com ambiente interno e apresentação do escritório.',
        },
    },
    {
        id: 'leticia-gomes-marques', title: 'Letícia Gomes Marques', kind: 'site',
        preview: {
            src: '/images/cases/riaheru-case-leticia-gomes-marques.jpg',
            alt: 'Captura do site de Letícia Gomes Marques com apresentação da advocacia e retrato da profissional.',
        },
    },
    {
        id: 'custom-system',
        title: 'Sistema sob medida',
        kind: 'confidential',
        subtitle: 'Projeto desenvolvido para empresa confidencial',
    },
];
