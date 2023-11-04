import { create } from 'zustand';

interface State {
    darkMode: boolean;
}

interface Actions {
    toggleDarkTheme: () => void;
}

const useThemeStore = create<State & Actions>(set => ({
    darkMode: false,
    toggleDarkTheme: () => {
        set(state => ({ darkMode: !state.darkMode }));
    },
}));

export default useThemeStore;
