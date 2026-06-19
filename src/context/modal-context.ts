import { createContext } from 'react';

export interface ContactIntent {
    source?: string;
    serviceId?: string;
    serviceLabel?: string;
    page?: string;
}

export interface ModalContextValue {
    isContactOpen: boolean;
    shouldRenderContactModal: boolean;
    contactIntent?: ContactIntent;
    openContactModal: (intent?: ContactIntent) => void;
    closeContactModal: () => void;
}

export const ModalContext = createContext<ModalContextValue | undefined>(undefined);
