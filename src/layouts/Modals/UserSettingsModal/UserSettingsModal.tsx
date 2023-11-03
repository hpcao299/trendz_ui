import { ModalActionsList } from '@/components';
import { ModalActionItem } from '@/types';
import React from 'react';

const UserSettingsModal = () => {
    const actions: ModalActionItem[] = [
        { title: 'QR Code' },
        { title: 'Settings and privacy' },
        { title: 'Log Out' },
    ];

    return <ModalActionsList actions={actions} showCancelAction />;
};

export default UserSettingsModal;
