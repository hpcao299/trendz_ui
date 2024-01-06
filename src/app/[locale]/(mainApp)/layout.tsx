import config from '@/config';
import { Sidebar } from '@/layouts';
import { getServerSession } from 'next-auth';
import { redirect } from 'next-intl/server';
import React from 'react';

const MainAppLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession();

    console.log('server session ', session);

    if (!session || !session.user) {
        redirect(config.routes.login);
    }

    return (
        <>
            <Sidebar />
            <main className="ml-sidebar">{children}</main>
        </>
    );
};

export default MainAppLayout;
