import { createContext } from 'react';

export interface ModalContextValue {
    isContactOpen: boolean;
    shouldRenderContactModal: boolean;
    openContactModal: () => void;
    closeContactModal: () => void;
}

export const ModalContext = createContext<ModalContextValue | undefined>(undefined);
