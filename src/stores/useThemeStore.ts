import { create } from 'zustand';

interface State {
    hasSetInitialTheme: boolean;
    darkMode: boolean;
}

interface Actions {
    toggleDarkTheme: () => void;
    setLightTheme: () => void;
    setDarkTheme: () => void;
}

const useThemeStore = create<State & Actions>(set => ({
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
}));

export default useThemeStore;
