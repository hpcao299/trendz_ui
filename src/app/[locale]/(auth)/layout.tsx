import config from '@/config';
import { CopyrightFooter } from '@/layouts';
import { getServerSession } from 'next-auth';
import { redirect } from 'next-intl/server';
import React from 'react';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession();

    if (session && session.user) {
        redirect(config.routes.home);
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-with-copyright-footer">
                {children}
            </div>
            <CopyrightFooter />
        </>
    );
};

export default AuthLayout;
