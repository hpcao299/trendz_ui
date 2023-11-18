import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface State {
    hasSetInitialTheme: boolean;
    darkMode: boolean;
}

interface Actions {
    toggleDarkTheme: () => void;
    setLightTheme: () => void;
    setDarkTheme: () => void;
}

const useThemeStore = create(
    persist<State & Actions>(
        set => ({
            hasSetInitialTheme: false,
            darkMode: false,
            toggleDarkTheme: () => {
                set(state => ({ darkMode: !state.darkMode }));
            },
            setLightTheme: () => {
                set({ darkMode: false, hasSetInitialTheme: true });
            },
            setDarkTheme: () => {
                set({ darkMode: true, hasSetInitialTheme: true });
            },
        }),
        {
            name: 'theme-store',
            storage: createJSONStorage(() => localStorage),
        },
    ),
);

export default useThemeStore;
