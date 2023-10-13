import { SettingsSidebar } from '@/layouts';
import React from 'react';

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <SettingsSidebar />
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default SettingsLayout;
