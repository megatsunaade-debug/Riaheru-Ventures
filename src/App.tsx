import { Suspense, lazy, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import { Header } from '@/components';
import { ModalProvider } from '@/context/ModalContext';
import { INFO_PAGES } from '@/data/infoPages';
import { useModal } from '@/hooks/useModal';
import { Home } from '@/pages/Home';
import { CookieConsentProvider } from '@/providers/CookieConsentProvider';

const LazyAbout = lazy(() => import('@/pages/About').then((module) => ({ default: module.About })));
const LazyInfoPage = lazy(() => import('@/pages/InfoPage').then((module) => ({ default: module.InfoPage })));
const LazyContactModal = lazy(() => import('@/components/ContactModal/ContactModal').then((module) => ({ default: module.ContactModal })));
const LazyFooter = lazy(() => import('@/components/Footer/Footer').then((module) => ({ default: module.Footer })));
const LazyCookieConsent = lazy(() => import('@/components/CookieConsent/CookieConsent').then((module) => ({ default: module.CookieConsent })));

function ScrollToTop() {
    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
}

function RouteFallback() {
    return (
        <div className="bg-[var(--bg)]" aria-hidden="true">
            <section className="pb-20 pt-36">
                <div className="container">
                    <div className="max-w-3xl animate-pulse">
                        <div className="h-4 w-28 rounded-full bg-[var(--surface-2)]" />
                        <div className="mt-6 h-14 max-w-2xl rounded-2xl bg-[var(--surface-2)]" />
                        <div className="mt-4 h-6 max-w-xl rounded-full bg-[var(--surface-2)]" />
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)]">
                        <div className="min-h-[360px] rounded-2xl border border-[var(--border)] bg-[var(--surface)]" />
                        <div className="min-h-[320px] rounded-2xl border border-[var(--border)] bg-[var(--surface)]" />
                    </div>
                </div>
            </section>
        </div>
    );
}

function ContactModalFallback() {
    return (
        <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Carregando contato">
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <div className="w-full max-w-xl animate-pulse rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-8 shadow-[var(--shadow-lg)]">
                        <div className="h-4 w-28 rounded-full bg-[var(--surface-2)]" />
                        <div className="mt-6 h-9 w-56 rounded-full bg-[var(--surface-2)]" />
                        <div className="mt-4 h-5 w-full max-w-md rounded-full bg-[var(--surface-2)]" />
                        <div className="mt-8 space-y-4">
                            <div className="h-14 rounded-lg bg-[var(--surface-2)]" />
                            <div className="h-14 rounded-lg bg-[var(--surface-2)]" />
                            <div className="h-14 rounded-lg bg-[var(--surface-2)]" />
                            <div className="h-28 rounded-lg bg-[var(--surface-2)]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FooterFallback() {
    return (
        <footer className="border-t border-[var(--border)] bg-[var(--bg)]" aria-hidden="true">
            <div className="container animate-pulse py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
                    <div className="space-y-4 md:col-span-5">
                        <div className="h-8 w-40 rounded-full bg-[var(--surface-2)]" />
                        <div className="h-5 max-w-sm rounded-full bg-[var(--surface-2)]" />
                        <div className="h-5 max-w-xs rounded-full bg-[var(--surface-2)]" />
                    </div>
                    <div className="min-h-28 rounded-xl bg-[var(--surface)] md:col-span-2" />
                    <div className="min-h-28 rounded-xl bg-[var(--surface)] md:col-span-2" />
                    <div className="min-h-28 rounded-xl bg-[var(--surface)] md:col-span-3" />
                </div>
                <div className="mt-10 h-px bg-[var(--border)]" />
                <div className="mt-6 h-5 w-full max-w-xl rounded-full bg-[var(--surface-2)]" />
            </div>
        </footer>
    );
}

function CookieConsentFallback() {
    return (
        <div className="fixed inset-x-4 bottom-4 z-[200] md:left-4 md:right-auto md:max-w-xl" aria-hidden="true">
            <div className="h-28 animate-pulse rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] shadow-[var(--shadow-lg)] backdrop-blur-xl" />
        </div>
    );
}

function ContactModalSlot() {
    const { shouldRenderContactModal } = useModal();

    if (!shouldRenderContactModal) {
        return null;
    }

    return (
        <Suspense fallback={<ContactModalFallback />}>
            <LazyContactModal />
        </Suspense>
    );
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Helmet>
                <title>Riaheru Ventures | Engenharia B2B e Venture Building</title>
                <meta
                    name="description"
                    content="Engenharia de software B2B, venture building, arquitetura, automação e sistemas críticos para empresas que precisam de segurança, clareza e continuidade."
                />
            </Helmet>
            <CookieConsentProvider>
                <ModalProvider>
                    <div className="min-h-screen antialiased">
                        <Header />
                        <main id="main-content" className="relative z-10">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="/sobre"
                                    element={(
                                        <Suspense fallback={<RouteFallback />}>
                                            <LazyAbout />
                                        </Suspense>
                                    )}
                                />
                                {INFO_PAGES.map((page) => (
                                    <Route
                                        key={page.path}
                                        path={page.path}
                                        element={(
                                            <Suspense fallback={<RouteFallback />}>
                                                <LazyInfoPage {...page} />
                                            </Suspense>
                                        )}
                                    />
                                ))}
                            </Routes>
                        </main>
                        <Suspense fallback={<FooterFallback />}>
                            <LazyFooter />
                        </Suspense>
                        <ContactModalSlot />
                        <Suspense fallback={<CookieConsentFallback />}>
                            <LazyCookieConsent />
                        </Suspense>
                    </div>
                </ModalProvider>
            </CookieConsentProvider>
        </Router>
    );
}

export default App;
