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

    return <div>CreateModal</div>;
};

export default CreateModal;
