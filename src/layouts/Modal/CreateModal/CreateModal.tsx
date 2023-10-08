'use client';

import { useLayoutStore } from '@/stores';
import React from 'react';

const CreateModal: React.FC = () => {
    const [backwardLinkIndex, hideModal] = useLayoutStore(state => [
        state.backwardLinkIndex,
        state.hideModal,
    ]);

    const handleCloseModal = () => {
        backwardLinkIndex();
        hideModal();
    };

    return (
        <div
            onClick={handleCloseModal}
            // z-50
            className="fixed top-0 bottom-0 left-0 right-0 bg-black"
        >
            CreateModal
        </div>
    );
};

export default CreateModal;
