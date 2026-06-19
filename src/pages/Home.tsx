import { Helmet } from 'react-helmet-async';

import { Hero, Services } from '@/components';
import { PreFooterCTA } from '@/components/PreFooterCTA/PreFooterCTA';
import { Showcase } from '@/components/Showcase/Showcase';
import { Stack } from '@/components/Stack/Stack';
import { StudioCredibility } from '@/components/StudioCredibility/StudioCredibility';
import { useCanonical } from '@/hooks/useCanonical';

export function Home() {
    useCanonical('https://riaheru.com/');

    return (
        <>
            <Helmet>
                <title>Riaheru Ventures | Venture Studio Técnico B2B</title>
                <meta
                    name="description"
                    content="Venture studio técnico para criar produtos digitais, sistemas B2B, automações e operações críticas com engenharia, dados e governança."
                />
                <link rel="canonical" href="https://riaheru.com/" />
                <meta property="og:title" content="Riaheru Ventures | Venture Studio Técnico B2B" />
                <meta
                    property="og:description"
                    content="Produto, engenharia e governança no mesmo ciclo para empresas que precisam lançar, modernizar ou escalar tecnologia."
                />
                <meta property="og:url" content="https://riaheru.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://riaheru.com/LOGO.png" />
            </Helmet>
            <Hero />
            <Services />
            <Showcase />
            <Stack />
            <StudioCredibility />
            <PreFooterCTA />
        </>
    );
}

export default Home;
