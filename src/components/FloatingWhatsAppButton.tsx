import { CONTACT_INFO } from '@/constants';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { useModal } from '@/hooks/useModal';

const MESSAGE = 'Olá! Vim pelo site da Riaheru e gostaria de saber como vocês podem me ajudar a desenvolver um projeto. Podemos conversar?';

export function FloatingWhatsAppButton() {
    const { isContactOpen } = useModal();
    const { showBanner, showSettings } = useCookieConsent();

    if (isContactOpen || showBanner || showSettings) return null;

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent(MESSAGE)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar com a Riaheru pelo WhatsApp (abre em nova aba)"
            onPointerMove={(event) => {
                if (
                    event.pointerType !== 'mouse'
                    || window.matchMedia('(prefers-reduced-motion: reduce)').matches
                    || !window.matchMedia('(hover: hover) and (pointer: fine)').matches
                ) return;

                const bounds = event.currentTarget.getBoundingClientRect();
                const x = Math.max(-5, Math.min(5, (event.clientX - (bounds.left + bounds.width / 2)) * 0.14));
                const y = Math.max(-5, Math.min(5, (event.clientY - (bounds.top + bounds.height / 2)) * 0.14));
                event.currentTarget.style.setProperty('--whatsapp-magnet-x', `${x}px`);
                event.currentTarget.style.setProperty('--whatsapp-magnet-y', `${y}px`);
            }}
            onPointerLeave={(event) => {
                event.currentTarget.style.setProperty('--whatsapp-magnet-x', '0px');
                event.currentTarget.style.setProperty('--whatsapp-magnet-y', '0px');
            }}
            onPointerCancel={(event) => {
                event.currentTarget.style.setProperty('--whatsapp-magnet-x', '0px');
                event.currentTarget.style.setProperty('--whatsapp-magnet-y', '0px');
            }}
            className="whatsapp-float btn min-h-10 px-4 py-2 text-sm shadow-none bg-white text-black hover:bg-white/90 border-transparent overflow-hidden group"
        >
            <span className="relative z-10 inline-flex items-center gap-2">
                <svg viewBox="0 0 32 32" className="h-5 w-5 shrink-0" fill="none" aria-hidden="true">
                    <path d="M16 3.5a12.1 12.1 0 0 0-10.3 18.4L4 28l6.3-1.6A12.2 12.2 0 1 0 16 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M12.1 10.3c-.3-.7-.7-.7-1-.7h-.8c-.3 0-.8.1-1.2.6-.4.4-1.5 1.4-1.5 3.4s1.5 3.9 1.7 4.2c.2.3 2.9 4.6 7.1 6.2 3.5 1.4 4.2 1.1 5 .9.8-.1 2.5-1 2.8-2 .4-1 .4-1.8.3-2-.1-.2-.4-.3-.8-.5l-2.7-1.3c-.4-.2-.7-.2-1 .2-.3.4-1.1 1.3-1.4 1.6-.3.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.2-1.3-1.2-2.2-2.7-2.4-3.1-.2-.4 0-.6.2-.8l.7-.8c.2-.3.3-.5.4-.7.1-.3 0-.5 0-.7l-1.1-2.5Z" fill="currentColor" transform="translate(2 0) scale(.88 1)" />
                </svg>
                Conversar
            </span>
            <span aria-hidden="true" className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-white/0 via-black/5 to-white/0 transition-transform duration-500 group-hover:translate-x-[100%]" />
        </a>
    );
}
