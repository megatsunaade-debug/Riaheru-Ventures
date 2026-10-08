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
    about: string[];
    preview?: CasePreviewAsset;
    url?: string;
};

type ConfidentialCase = {
    id: 'custom-system';
    title: 'Sistema sob medida';
    kind: 'confidential';
    subtitle: 'Projeto desenvolvido para empresa confidencial';
    about: string[];
    preview: CasePreviewAsset;
};

export type CaseStudy = SiteCase | ConfidentialCase;

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'marqlet', title: 'Marqlet', kind: 'site',
        about: [
            'A Marqlet é uma plataforma indicada para advogados autônomos e escritórios de advocacia de todos os portes e áreas de atuação.',
            'Ela ajuda a organizar a rotina jurídica e acompanhar o trabalho do escritório, reunindo informações como processos, clientes, publicações, agenda e financeiro em uma visão integrada.',
        ],
        preview: {
            src: '/images/cases/riaheru-case-marqlet.jpg',
            alt: 'Captura do site Marqlet com apresentação da operação jurídica e prévia do painel.',
        },
        url: 'https://marqlet.com/',
    },
    {
        id: 'nimet', title: 'Nimet', kind: 'site',
        about: [
            'O site da NIMET apresenta serviços de engenharia elétrica, energia solar fotovoltaica e manutenção industrial para empresas, indústrias e residências.',
            'Ele ajuda quem procura essas soluções a conhecer as frentes de atuação, entender o atendimento oferecido e encontrar o canal para solicitar um orçamento.',
        ],
        preview: {
            src: '/images/cases/riaheru-case-nimet.jpg',
            alt: 'Captura do site Nimet com apresentação dos serviços de engenharia e visual de instalações industriais.',
        },
        url: 'https://nimet.com.br/',
    },
    {
        id: 'serralheria-cp', title: 'Serralheria CP', kind: 'site',
        about: [
            'O site da Serralheria CP é voltado a pessoas, comércios e empresas que procuram soluções de serralheria sob medida.',
            'Apresenta portões, grades, escadas, corrimãos, coberturas e estruturas metálicas, além de fabricação, instalação e reformas, ajudando o visitante a encontrar o serviço e pedir uma avaliação.',
        ],
        preview: {
            src: '/images/cases/riaheru-case-serralheria-cp.jpg',
            alt: 'Captura do site Serralheria CP com chamada sobre soluções sob medida diante de um portão metálico.',
        },
        url: 'https://www.serralheriacp.com/',
    },
    {
        id: 'sansi-arquitetura', title: 'SANSI Arquitetura', kind: 'site',
        about: [
            'O site da SANSI apresenta o escritório e seu trabalho em arquitetura e interiores, com projetos e ambientes residenciais em destaque.',
            'É voltado a quem deseja conhecer o escritório, seus serviços e portfólio; a página também oferece informações de contato e uma opção para iniciar uma conversa pelo WhatsApp.',
        ],
        preview: {
            src: '/images/cases/riaheru-case-sansi-arquitetura.jpg',
            alt: 'Captura do site SANSI Arquitetura com ambiente interno e apresentação do escritório.',
        },
        url: 'https://sansiarquiteturainteriores.com.br/',
    },
    {
        id: 'leticia-gomes-marques', title: 'Letícia Gomes Marques', kind: 'site',
        about: [
            'O site de Letícia Gomes Marques apresenta advocacia para mulheres em temas familiares, patrimoniais e profissionais, com atendimento em Itupeva, Jundiaí e online.',
            'Também informa sobre consultoria preventiva para empresas. A página ajuda cada visitante a conhecer as áreas de atuação e iniciar o contato; a orientação é enviar apenas o nome e o tema geral na primeira mensagem.',
        ],
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
        about: [
            'Trata-se de um sistema desenvolvido sob medida para atender a uma necessidade empresarial específica.',
            'O projeto foi realizado para uma empresa confidencial; por isso, esta apresentação não identifica a organização nem detalha o funcionamento da solução. A imagem é apenas ilustrativa e não representa o sistema real.',
        ],
        preview: {
            src: '/images/cases/sistema-sob-medida-ilustrativo.jpg',
            alt: 'Imagem ilustrativa de um painel de sistema empresarial; não representa o sistema real do projeto confidencial.',
        },
    },
];
