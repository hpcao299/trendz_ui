'use client';

import { useThemeStore } from '@/stores';
import React from 'react';

interface LayoutThemeProps {
    children?: React.ReactNode;
}

const LayoutTheme: React.FC<LayoutThemeProps> = ({ children }) => {
    const darkMode = useThemeStore(state => state.darkMode);

    return (
        <body className={darkMode ? 'dark' : 'light'}>
            <div className="font-system dark:text-darkText dark:bg-black">{children}</div>
        </body>
    );
};

export default LayoutTheme;
