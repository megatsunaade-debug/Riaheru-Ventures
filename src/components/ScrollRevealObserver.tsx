import { useEffect } from 'react';

/** Adds entrance motion only after an element is observed; without observers, content stays visible. */
export function ScrollRevealObserver() {
    useEffect(() => {
        const main = document.querySelector<HTMLElement>('#main-content');
        if (!main || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                (entry.target as HTMLElement).dataset.scrollReveal = 'visible';
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.04, rootMargin: '0px 0px -6% 0px' });

        const observeContent = () => {
            const sections = main.querySelectorAll<HTMLElement>('section');
            for (const section of sections) {
                // Page-level headings already have their own entrance animation.
                if (section.querySelector('h1')) continue;
                const content = section.querySelector<HTMLElement>(':scope > .container');
                if (content && content.dataset.scrollReveal !== 'visible' && content.dataset.scrollReveal !== 'observed') {
                    content.dataset.scrollReveal = 'observed';
                    observer.observe(content);
                }
            }

            const footer = document.querySelector<HTMLElement>('footer:not([aria-hidden="true"])');
            const footerContent = footer?.querySelector<HTMLElement>(':scope > .container');
            if (footerContent && footerContent.dataset.scrollReveal !== 'visible' && footerContent.dataset.scrollReveal !== 'observed') {
                footerContent.dataset.scrollReveal = 'observed';
                observer.observe(footerContent);
            }
        };

        observeContent();
        const mutations = new MutationObserver(observeContent);
        mutations.observe(document.body, { childList: true, subtree: true });

        return () => {
            mutations.disconnect();
            observer.disconnect();
        };
    }, []);

    return null;
}
