import { ArrowRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export function Hero() {
    const { openContactModal } = useModal();

    return (
        <section className="min-h-[85vh] flex items-center bg-[var(--off-white)]">
            <div className="container">
                <div className="max-w-3xl">
                    {/* Label */}
                    <div
                        className="mb-6 animate-fade"
                        style={{ animationDelay: '0s' }}
                    >
                        <span className="label label-accent">
                            Software House & Venture Studio
                        </span>
                    </div>

                    {/* Headline */}
                    <h1
                        className="mb-6 animate-fade"
                        style={{ animationDelay: '0.1s' }}
                    >
                        Construímos software que{' '}
                        <span className="text-[var(--accent)]">transforma</span>{' '}
                        negócios
                    </h1>

                    {/* Subtítulo */}
                    <p
                        className="text-xl text-[var(--gray-600)] mb-10 max-w-xl animate-fade"
                        style={{ animationDelay: '0.2s' }}
                    >
                        Engenharia de software, consultoria estratégica e venture building
                        para empresas que querem escalar.
                    </p>

                    {/* CTAs */}
                    <div
                        className="flex flex-wrap gap-4 animate-fade"
                        style={{ animationDelay: '0.3s' }}
                    >
                        <button
                            onClick={openContactModal}
                            className="btn"
                        >
                            Iniciar projeto
                            <ArrowRight size={18} />
                        </button>
                        <a
                            href="#trabalhos"
                            className="btn btn-outline"
                        >
                            Ver trabalhos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
