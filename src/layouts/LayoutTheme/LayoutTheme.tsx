'use client';

import { useThemeStore } from '@/stores';
import React, { useEffect } from 'react';

interface LayoutThemeProps {
    children?: React.ReactNode;
}

const LayoutTheme: React.FC<LayoutThemeProps> = ({ children }) => {
    const [darkMode, hasSetInitialTheme, setLightTheme, setDarkTheme] = useThemeStore(state => [
        state.darkMode,
        state.hasSetInitialTheme,
        state.setLightTheme,
        state.setDarkTheme,
    ]);

    useEffect(() => {
        if (hasSetInitialTheme) {
            if (darkMode) {
                localStorage.setItem('darkMode', 'true');
            } else {
                localStorage.setItem('darkMode', 'false');
            }
        } else {
            if (JSON.parse(localStorage.getItem('darkMode') || '')) {
                setDarkTheme();
            } else {
                setLightTheme();
            }
        }
    }, [darkMode]);

    return (
        <body className={darkMode ? 'dark' : 'light'}>
            <div className="font-system dark:text-darkText dark:bg-black">{children}</div>
        </body>
    );
};

export default LayoutTheme;
