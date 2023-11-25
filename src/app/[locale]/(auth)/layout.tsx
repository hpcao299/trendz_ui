import { CopyrightFooter } from '@/layouts';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
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
