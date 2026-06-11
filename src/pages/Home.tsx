import { Hero, Services } from '@/components';
import { Newsletter } from '@/components/Newsletter/Newsletter';
import { PreFooterCTA } from '@/components/PreFooterCTA/PreFooterCTA';
import { Showcase } from '@/components/Showcase/Showcase';
import { Stack } from '@/components/Stack/Stack';

export function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Showcase />
            <Stack />
            <Newsletter />
            <PreFooterCTA />
        </>
    );
}

export default Home;
