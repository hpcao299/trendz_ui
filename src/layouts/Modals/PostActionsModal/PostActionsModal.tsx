import { ModalActionsList } from '@/components';
import { ModalActionItem } from '@/types';
import { useTranslations } from 'next-intl';
import React from 'react';

const PostActionsModal: React.FC = () => {
    const t = useTranslations('Post Actions Modal');

    const actions: ModalActionItem[] = [
        {
            title: t('unfollow'),
            color: 'warn',
        },
        { title: t('share-to') },
        { title: t('copy-link') },
    ];

    return <ModalActionsList actions={actions} showCancelAction />;
};

export default PostActionsModal;
