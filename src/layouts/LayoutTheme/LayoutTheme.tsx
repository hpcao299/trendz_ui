'use client';

import { useThemeStore } from '@/stores';
import React, { useEffect } from 'react';

const LayoutTheme: React.FC = () => {
    const darkMode = useThemeStore(state => state.darkMode);

    useEffect(() => {
        const documentElement = document.documentElement;
        documentElement.classList.remove(darkMode ? 'light' : 'dark');
        documentElement.classList.add(darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return null;
};

export default LayoutTheme;
