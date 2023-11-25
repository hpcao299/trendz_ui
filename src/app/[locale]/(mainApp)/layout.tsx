import { Sidebar } from '@/layouts';
import React from 'react';

const MainAppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Sidebar />
            <main className="ml-sidebar">{children}</main>
        </>
    );
};

export default MainAppLayout;
