import { Suspense, lazy, startTransition, useEffect, useRef, useState, type ReactNode } from 'react';

import { Hero, Services } from '@/components';

const LazyShowcase = lazy(() => import('@/components/Showcase/Showcase').then((module) => ({ default: module.Showcase })));
const LazyStack = lazy(() => import('@/components/Stack/Stack').then((module) => ({ default: module.Stack })));
const LazyNewsletter = lazy(() => import('@/components/Newsletter/Newsletter').then((module) => ({ default: module.Newsletter })));
const LazyPreFooterCTA = lazy(() => import('@/components/PreFooterCTA/PreFooterCTA').then((module) => ({ default: module.PreFooterCTA })));

interface DeferredSectionProps {
    children: ReactNode;
    fallback: ReactNode;
    rootMargin?: string;
}

function DeferredSection({
    children,
    fallback,
    rootMargin = '320px 0px',
}: DeferredSectionProps) {
    const triggerRef = useRef<HTMLDivElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        if (shouldLoad) {
            return;
        }

        const node = triggerRef.current;

        if (!node) {
            return;
        }

        if (typeof IntersectionObserver === 'undefined') {
            startTransition(() => {
                setShouldLoad(true);
            });
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return;
                }

                observer.disconnect();
                startTransition(() => {
                    setShouldLoad(true);
                });
            },
            { rootMargin }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [rootMargin, shouldLoad]);

    return (
        <div ref={triggerRef}>
            {shouldLoad ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
        </div>
    );
}

function ShowcaseFallback() {
    return (
        <section id="trabalhos" className="bg-[var(--gray-50)] py-20 md:py-28" aria-hidden="true">
            <div className="container animate-pulse">
                <div className="mb-12 max-w-2xl space-y-4 md:mb-16">
                    <div className="h-4 w-24 rounded-full bg-[var(--gray-100)]" />
                    <div className="h-12 max-w-xl rounded-[28px] bg-[var(--gray-100)]" />
                </div>

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="aspect-[16/10] rounded-[28px] bg-white shadow-[var(--shadow-sm)]" />
                    <div className="space-y-4">
                        <div className="h-4 w-28 rounded-full bg-[var(--gray-100)]" />
                        <div className="h-16 max-w-xs rounded-[24px] bg-white shadow-[var(--shadow-sm)]" />
                        <div className="h-5 max-w-lg rounded-full bg-[var(--gray-100)]" />
                        <div className="h-5 max-w-md rounded-full bg-[var(--gray-100)]" />
                        <div className="flex flex-wrap gap-2 pt-2">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div key={index} className="h-9 w-24 rounded-full bg-white shadow-[var(--shadow-sm)]" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StackFallback() {
    return (
        <section id="stack" className="bg-white py-20 md:py-28" aria-hidden="true">
            <div className="container max-w-7xl animate-pulse">
                <div className="mb-12 max-w-3xl space-y-4 md:mb-16">
                    <div className="h-12 w-56 rounded-full bg-[var(--gray-100)]" />
                    <div className="h-14 max-w-2xl rounded-[32px] bg-[var(--gray-100)]" />
                    <div className="h-5 max-w-2xl rounded-full bg-[var(--gray-100)]" />
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="min-h-[360px] rounded-[28px] bg-[var(--off-white)] shadow-[var(--shadow-sm)]" />
                    ))}
                </div>
            </div>
        </section>
    );
}

function NewsletterFallback() {
    return (
        <section className="bg-[var(--off-white)] py-20 md:py-24" aria-hidden="true">
            <div className="container">
                <div className="animate-pulse overflow-hidden rounded-[32px] border border-[color:rgba(12,18,34,0.08)] bg-[linear-gradient(135deg,#0c1222_0%,#102541_55%,#163154_100%)] p-8 shadow-[var(--shadow-lg)] md:p-12">
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:items-center">
                        <div className="space-y-5">
                            <div className="h-10 w-40 rounded-full bg-white/10" />
                            <div className="h-16 max-w-2xl rounded-[32px] bg-white/10" />
                            <div className="h-5 max-w-xl rounded-full bg-white/10" />
                            <div className="h-5 max-w-lg rounded-full bg-white/10" />
                            <div className="flex flex-wrap gap-4 pt-2">
                                <div className="h-12 w-52 rounded-2xl bg-white/10" />
                                <div className="h-12 w-44 rounded-2xl bg-white/10" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className="h-24 rounded-3xl bg-white/10" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PreFooterFallback() {
    return (
        <section className="bg-[var(--bg-dark)] py-24 md:py-32" aria-hidden="true">
            <div className="container max-w-4xl animate-pulse text-center">
                <div className="mx-auto h-12 w-56 rounded-full bg-white/10" />
                <div className="mx-auto mt-8 h-16 max-w-3xl rounded-[32px] bg-white/10" />
                <div className="mx-auto mt-5 h-5 max-w-2xl rounded-full bg-white/10" />
                <div className="mx-auto mt-10 h-14 w-56 rounded-2xl bg-white/10" />
            </div>
        </section>
    );
}

export function Home() {
    return (
        <>
            <Hero />
            <Services />
            <DeferredSection fallback={<ShowcaseFallback />}>
                <LazyShowcase />
            </DeferredSection>
            <DeferredSection fallback={<StackFallback />}>
                <LazyStack />
            </DeferredSection>
            <DeferredSection fallback={<NewsletterFallback />}>
                <LazyNewsletter />
            </DeferredSection>
            <DeferredSection fallback={<PreFooterFallback />}>
                <LazyPreFooterCTA />
            </DeferredSection>
        </>
    );
}

export default Home;
