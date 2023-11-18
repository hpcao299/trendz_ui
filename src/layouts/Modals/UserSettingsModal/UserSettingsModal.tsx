import { ModalActionsList } from '@/components';
import { ModalActionItem } from '@/types';
import { useTranslations } from 'next-intl';
import React from 'react';

const UserSettingsModal = () => {
    const t = useTranslations('User Settings Modal');
    const actions: ModalActionItem[] = [
        { title: t('qr-code') },
        { title: t('setting-privacy') },
        { title: t('logout') },
    ];

    return <ModalActionsList actions={actions} showCancelAction />;
};

export default UserSettingsModal;
