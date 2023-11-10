import { PostsList } from '@/components';
import dynamic from 'next/dynamic';
import React from 'react';

const CopyrightFooter = dynamic(() => import('@/layouts/CopyrightFooter'), { ssr: false });

const ExplorePage = () => {
    return (
        <>
            <div className="max-w-[935px] mb-6 px-5 pt-6 mx-auto">
                <PostsList />
            </div>
            <CopyrightFooter />
        </>
    );
};

export default ExplorePage;
