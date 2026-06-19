import { useState, type ReactNode } from 'react';

import { ModalContext, type ContactIntent } from '@/context/modal-context';

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [shouldRenderContactModal, setShouldRenderContactModal] = useState(false);
    const [contactIntent, setContactIntent] = useState<ContactIntent | undefined>();

    const openContactModal = (intent?: ContactIntent) => {
        setContactIntent(intent);
        setShouldRenderContactModal(true);
        setIsContactOpen(true);
    };
    const closeContactModal = () => setIsContactOpen(false);

    return (
        <ModalContext.Provider value={{ isContactOpen, shouldRenderContactModal, contactIntent, openContactModal, closeContactModal }}>
            {children}
        </ModalContext.Provider>
    );
}
