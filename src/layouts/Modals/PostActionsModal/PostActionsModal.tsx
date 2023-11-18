import { ModalActionsList } from '@/components';
import { ModalActionItem } from '@/types';
import { useTranslations } from 'next-intl';
import React from 'react';

const PostActionsModal: React.FC = () => {
    const t = useTranslations('Post Actions Modal');

    const actions: ModalActionItem[] = [
        {
            title: t('report'),
            color: 'warn',
        },
        {
            title: t('unfollow'),
            color: 'warn',
        },
        { title: t('add-to-favorites') },
        { title: t('go-to-post') },
        { title: t('share-to') },
        { title: t('copy-link') },
        { title: t('about-account') },
    ];

    return <ModalActionsList actions={actions} showCancelAction />;
};

export default PostActionsModal;
