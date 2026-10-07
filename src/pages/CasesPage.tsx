import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

import { CaseGrid } from '@/components/Cases/CaseGrid';
import { m } from '@/lib/motion';
import { Button } from '../components/ui/Button';
import { useCanonical } from '../hooks/useCanonical';
import { useModal } from '../hooks/useModal';

export function CasesPage() {
    const { openContactModal } = useModal();
    useCanonical('https://riaheru.com/cases');

    return (
        <div className="bg-[var(--off-white)]">
            <Helmet>
                <title>Cases de Produto, Engenharia e Operação | Riaheru</title>
                <meta
                    name="description"
                    content="Conheça projetos da Riaheru em sites e sistemas sob medida."
                />
                <link rel="canonical" href="https://riaheru.com/cases" />
                <meta property="og:title" content="Cases de Produto, Engenharia e Operação | Riaheru" />
                <meta
                    property="og:description"
                    content="Projetos da Riaheru em sites e sistemas sob medida."
                />
                <meta property="og:url" content="https://riaheru.com/cases" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://riaheru.com/LOGO.png" />
            </Helmet>

            <section className="relative overflow-hidden bg-[#070a12] pb-20 pt-32 text-white md:pb-28 md:pt-36">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.42) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.42) 1px, transparent 1px)`,
                        backgroundSize: '44px 44px',
                    }}
                />
                <div className="container relative">
                    <m.div
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="max-w-5xl"
                    >
                        <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                            Cases Riaheru
                        </span>
                        <h1 className="on-dark-heading mt-7 text-5xl font-black leading-[0.94] tracking-normal md:text-7xl">
                            Produto, operação e presença digital com lastro técnico.
                        </h1>
                        <p className="on-dark-copy mt-7 max-w-3xl text-lg leading-relaxed md:text-xl">
                            Uma seleção de sites e sistemas sob medida, organizada para receber as prévias de cada projeto.
                        </p>
                    </m.div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container">
                    <CaseGrid />
                </div>
            </section>

            <section className="bg-[#070a12] py-20 text-white md:py-24">
                <div className="container">
                    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                                Próximo projeto
                            </span>
                            <h2 className="on-dark-heading mt-6 max-w-3xl text-4xl font-bold tracking-normal md:text-5xl">
                                Se o problema mistura produto, dados e operação, vale uma conversa técnica.
                            </h2>
                        </div>
                        <Button
                            size="lg"
                            onClick={() => openContactModal({ source: 'cases_bottom', page: '/cases' })}
                        >
                            Iniciar conversa
                            <ArrowRight size={18} />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CasesPage;
