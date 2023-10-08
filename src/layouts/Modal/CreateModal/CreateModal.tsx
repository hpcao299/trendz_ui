'use client';

import { useLayoutStore } from '@/stores';
import React from 'react';

const CreateModal: React.FC = () => {
    const hideModal = useLayoutStore(state => state.hideModal);

    return (
        <div
            onClick={() => hideModal()}
            className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black"
        >
            CreateModal
        </div>
    );
};

export default CreateModal;
