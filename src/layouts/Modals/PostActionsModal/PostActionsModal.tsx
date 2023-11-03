import { ModalActionsList } from '@/components';
import { ModalActionItem } from '@/types';
import React from 'react';

const PostActionsModal: React.FC = () => {
    const actions: ModalActionItem[] = [
        {
            title: 'Report',
            color: 'warn',
        },
        {
            title: 'Unfollow',
            color: 'warn',
        },
        { title: 'Add to favorites' },
        { title: 'Go to post' },
        { title: 'Share to...' },
        { title: 'Copy link' },
        { title: 'About this account' },
    ];

    return <ModalActionsList actions={actions} showCancelAction />;
};

export default PostActionsModal;
