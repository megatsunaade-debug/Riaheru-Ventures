import { Helmet } from 'react-helmet-async';

import { CONTACT_INFO } from '../constants';
import { Button } from '../components/ui/Button';
import { SectionTitle } from '../components/ui/SectionTitle';
import { useModal } from '../hooks/useModal';

interface InfoPageProps {
    title: string;
    description: string;
    tag?: string;
    body?: string[];
    metaTitle?: string;
    metaDescription?: string;
}

export function InfoPage({
    title,
    description,
    tag,
    body = [],
    metaTitle,
    metaDescription,
}: InfoPageProps) {
    const { openContactModal } = useModal();
    const pageTitle = metaTitle ?? `${title} | Riaheru`;
    const pageDescription = metaDescription ?? description;

    return (
        <div className="bg-[var(--off-white)]">
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            <section className="pb-14 pt-32 md:pb-20">
                <div className="container">
                    <SectionTitle
                        tag={tag}
                        title={title}
                        description={description}
                    />
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button onClick={openContactModal}>
                            Iniciar projeto
                        </Button>
                        <Button
                            variant="outline"
                            type="button"
                            onClick={() => {
                                window.location.href = `mailto:${CONTACT_INFO.EMAIL}`;
                            }}
                        >
                            Enviar email
                        </Button>
                    </div>
                </div>
            </section>

            <section className="pb-20">
                <div className="container">
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.8fr)]">
                        <article className="card">
                            <div className="space-y-5">
                                {body.length > 0 ? body.map((paragraph) => (
                                    <p key={paragraph} className="text-base leading-relaxed text-[var(--gray-600)] md:text-lg">
                                        {paragraph}
                                    </p>
                                )) : (
                                    <p className="text-base leading-relaxed text-[var(--gray-600)] md:text-lg">
                                        Conteúdo institucional em preparação. Se você precisa de uma resposta direta sobre este tema, a equipe pode direcionar o contexto certo sem fricção desnecessária.
                                    </p>
                                )}
                            </div>
                        </article>

                        <aside className="card h-fit">
                            <span className="label block mb-4">Como seguimos</span>
                            <h2 className="text-2xl font-semibold text-[var(--text-dark)]">Próximo passo claro</h2>
                            <p className="mt-4 text-[var(--gray-600)]">
                                Se este conteúdo se conecta com uma iniciativa em andamento, podemos indicar o melhor próximo movimento técnico ou operacional.
                            </p>
                            <div className="mt-6 space-y-3 text-sm text-[var(--gray-600)]">
                                <div className="rounded-2xl bg-[var(--gray-50)] px-4 py-3">Retorno inicial em até 24h úteis.</div>
                                <div className="rounded-2xl bg-[var(--gray-50)] px-4 py-3">Leitura objetiva do cenário, sem descoberta teatral.</div>
                                <div className="rounded-2xl bg-[var(--gray-50)] px-4 py-3">Canal direto por email ou WhatsApp.</div>
                            </div>
                            <div className="mt-6">
                                <Button onClick={openContactModal} className="w-full justify-center">
                                    Abrir conversa
                                </Button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
