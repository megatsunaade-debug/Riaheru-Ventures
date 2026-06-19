import { useEffect } from 'react';

export function useCanonical(href: string) {
    useEffect(() => {
        let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }

        canonical.href = href;
    }, [href]);
}
