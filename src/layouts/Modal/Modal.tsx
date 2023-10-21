'use client';

import { useLayoutStore } from '@/stores';
import React from 'react';
import CreateModal from './CreateModal';

const Modal: React.FC = () => {
    const { isVisible, modalType, modalProps } = useLayoutStore(state => state.modal);

    console.log({ isVisible, modalType, modalProps });

    const renderModal = () => {
        switch (modalType) {
            case 'Create':
                return <CreateModal />;
            default:
                return null;
        }
    };

    return <>{isVisible && renderModal()}</>;
};

export default Modal;
