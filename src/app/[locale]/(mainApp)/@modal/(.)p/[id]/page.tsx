'use client';

import { BaseModal } from '@/components';
import PostModal from '@/layouts/Modals/PostModal';
import { useRouter } from 'next-intl/client';
import React from 'react';

const PostModalPage = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <BaseModal isOpen={true} onRequestClose={handleBack}>
            <PostModal />
        </BaseModal>
    );
};

export default PostModalPage;
