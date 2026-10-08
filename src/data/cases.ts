type CasePreviewAsset = {
    src: string;
    alt: string;
    avif?: string;
};

type SiteCase = {
    id: 'marqlet' | 'nimet' | 'serralheria-cp' | 'sansi-arquitetura' | 'leticia-gomes-marques';
    title: string;
    kind: 'site';
    summary?: string;
    preview?: CasePreviewAsset;
    url?: string;
};

type ConfidentialCase = {
    id: 'custom-system';
    title: 'Sistema sob medida';
    kind: 'confidential';
    subtitle: 'Projeto desenvolvido para empresa confidencial';
    preview: CasePreviewAsset;
};

export type CaseStudy = SiteCase | ConfidentialCase;

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'marqlet', title: 'Marqlet', kind: 'site',
        preview: {
            src: '/images/cases/riaheru-case-marqlet.jpg',
            alt: 'Captura do site Marqlet com apresentação da operação jurídica e prévia do painel.',
        },
        url: 'https://marqlet.com/',
    },
    {
        id: 'nimet', title: 'Nimet', kind: 'site',
        preview: {
            src: '/images/cases/riaheru-case-nimet.jpg',
            alt: 'Captura do site Nimet com apresentação dos serviços de engenharia e visual de instalações industriais.',
        },
        url: 'https://nimet.com.br/',
    },
    {
        id: 'serralheria-cp', title: 'Serralheria CP', kind: 'site',
        preview: {
            src: '/images/cases/riaheru-case-serralheria-cp.jpg',
            alt: 'Captura do site Serralheria CP com chamada sobre soluções sob medida diante de um portão metálico.',
        },
        url: 'https://www.serralheriacp.com/',
    },
    {
        id: 'sansi-arquitetura', title: 'SANSI Arquitetura', kind: 'site',
        preview: {
            src: '/images/cases/riaheru-case-sansi-arquitetura.jpg',
            alt: 'Captura do site SANSI Arquitetura com ambiente interno e apresentação do escritório.',
        },
        url: 'https://sansiarquiteturainteriores.com.br/',
    },
    {
        id: 'leticia-gomes-marques', title: 'Letícia Gomes Marques', kind: 'site',
        preview: {
            src: '/images/cases/riaheru-case-leticia-gomes-marques.jpg',
            alt: 'Captura do site de Letícia Gomes Marques com apresentação da advocacia e retrato da profissional.',
        },
        url: 'https://leticiagomesmarquesadvocacia.com/',
    },
    {
        id: 'custom-system',
        title: 'Sistema sob medida',
        kind: 'confidential',
        subtitle: 'Projeto desenvolvido para empresa confidencial',
        preview: {
            src: '/images/cases/sistema-sob-medida-ilustrativo.jpg',
            alt: 'Imagem ilustrativa de um painel de sistema empresarial; não representa o sistema real do projeto confidencial.',
        },
    },
];
