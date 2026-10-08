import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ExternalLink, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { CasePreview } from '@/components/Cases/CasePreview';
import { CASE_STUDIES, type CaseStudy } from '@/data/cases';
import { m } from '@/lib/motion';
import './Showcase.css';

export function Showcase() {
    const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!activeCase || !dialog) return;

        const previousOverflow = document.body.style.overflow;
        if (!dialog.open) dialog.showModal();
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [activeCase]);

    const closePreview = () => dialogRef.current?.close();

    return (
        <section id="trabalhos" className="showcase-section py-20 md:py-28">
            <div className="container">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="showcase-heading mb-10 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div className="max-w-3xl">
                        <span className="label label-accent block">Cases e ativos digitais</span>
                        <h2 className="mt-5 text-4xl font-bold tracking-normal md:text-6xl">
                            Prova de construção, não promessa de apresentação.
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed md:text-xl">
                            Sites e sistemas sob medida, com espaços preparados para as prévias de cada projeto.
                        </p>
                    </div>
                    <Link to="/cases" className="showcase-all-link">
                        Ver todos os cases
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </m.div>

                <div className="showcase-grid grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {CASE_STUDIES.map((caseStudy, index) => (
                        <m.article
                            key={caseStudy.id}
                            data-case-id={caseStudy.id}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.42, delay: (index % 2) * 0.06, ease: 'easeOut' }}
                            className="showcase-card"
                            style={{ animationDelay: `${(index % 2) * 55}ms` }}
                            tabIndex={0}
                            aria-haspopup="dialog"
                            aria-label={`Abrir detalhes do projeto ${caseStudy.title}`}
                            onClick={(event) => {
                                if (event.target instanceof Element && event.target.closest('a, button')) return;
                                setActiveCase(caseStudy);
                            }}
                            onKeyDown={(event) => {
                                if (event.target !== event.currentTarget) return;
                                if (event.key === 'Enter' || event.key === ' ') {
                                    event.preventDefault();
                                    setActiveCase(caseStudy);
                                }
                            }}
                        >
                            <button
                                type="button"
                                className="showcase-preview-trigger"
                                onClick={() => setActiveCase(caseStudy)}
                                aria-label={`Ampliar imagem: ${caseStudy.title}`}
                            >
                                <CasePreview caseStudy={caseStudy} className="showcase-preview-frame aspect-[1.48/1] w-full" fit="contain" />
                            </button>
                            <div className="showcase-card-content">
                                <div className="showcase-case-heading">
                                    <div>
                                        <span className="showcase-category">
                                            {caseStudy.kind === 'site' ? 'Site' : 'Projeto confidencial'}
                                        </span>
                                        <h3>{caseStudy.title}</h3>
                                    </div>
                                    {caseStudy.kind === 'confidential' && (
                                        <span className="showcase-illustrative">Imagem ilustrativa</span>
                                    )}
                                </div>
                                {caseStudy.kind === 'confidential' ? (
                                    <p className="showcase-case-description">{caseStudy.subtitle}</p>
                                ) : caseStudy.summary ? (
                                    <p className="showcase-case-description">{caseStudy.summary}</p>
                                ) : null}
                                <div className="showcase-card-actions">
                                    {caseStudy.kind === 'site' && caseStudy.url && (
                                        <a
                                            href={caseStudy.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Visitar site ${caseStudy.title} (abre em nova aba)`}
                                            className="showcase-visit-link"
                                        >
                                            Visitar site
                                            <ExternalLink size={16} aria-hidden="true" />
                                        </a>
                                    )}
                                    <button
                                        type="button"
                                        className="showcase-enlarge-link"
                                        onClick={() => setActiveCase(caseStudy)}
                                        aria-label={`Ampliar imagem: ${caseStudy.title}`}
                                    >
                                        Ampliar prévia
                                    </button>
                                </div>
                            </div>
                        </m.article>
                    ))}
                </div>
            </div>

            <dialog
                ref={dialogRef}
                className="showcase-dialog"
                aria-labelledby="showcase-dialog-title"
                onClose={() => setActiveCase(null)}
                onClick={(event) => {
                    if (event.target === event.currentTarget) closePreview();
                }}
            >
                {activeCase?.preview && (
                    <div className="showcase-dialog-layout">
                        <div className="showcase-dialog-preview">
                            <img src={activeCase.preview.src} alt={activeCase.preview.alt} />
                            {activeCase.kind === 'confidential' && (
                                <span className="showcase-dialog-illustrative">Imagem ilustrativa</span>
                            )}
                        </div>
                        <div className="showcase-dialog-details">
                            <header className="showcase-dialog-heading">
                                <div>
                                    <span className="showcase-dialog-category">
                                        {activeCase.kind === 'site' ? 'Site' : 'Projeto confidencial'}
                                    </span>
                                    <h2 id="showcase-dialog-title">{activeCase.title}</h2>
                                </div>
                                <button type="button" onClick={closePreview} aria-label="Fechar prévia">
                                    <X size={22} aria-hidden="true" />
                                </button>
                            </header>
                            <div className="showcase-dialog-copy">
                                <section aria-labelledby="showcase-about-heading">
                                    <h3 id="showcase-about-heading">Sobre o projeto</h3>
                                    {activeCase.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                </section>
                            </div>
                            {activeCase.kind === 'site' && activeCase.url && (
                                <footer className="showcase-dialog-actions">
                                    <a href={activeCase.url} target="_blank" rel="noopener noreferrer" className="showcase-visit-link">
                                        Visitar site
                                        <ExternalLink size={16} aria-hidden="true" />
                                    </a>
                                </footer>
                            )}
                        </div>
                    </div>
                )}
            </dialog>
        </section>
    );
}
