import { create } from 'zustand';

interface State {
    sidebar: {
        isNarrowed: boolean;
        activeLinkIndex: number;
        previousLinkIndex: number;
    };
}

interface Actions {
    setIsNarrowed(isNarrowed: boolean): void;
    setActiveLinkIndex(index: number): void;
    setPreviousLinkIndex(index: number): void;
}

const useLayoutStore = create<State & Actions>(set => ({
    sidebar: {
        isNarrowed: false,
        activeLinkIndex: 0,
        previousLinkIndex: 0,
    },
    setIsNarrowed(isNarrowed: boolean) {
        set(state => ({
            sidebar: { ...state.sidebar, isNarrowed },
        }));
    },
    setActiveLinkIndex(index) {
        set(state => ({
            sidebar: { ...state.sidebar, activeLinkIndex: index },
        }));
    },
    setPreviousLinkIndex(index) {
        set(state => ({
            sidebar: { ...state.sidebar, previousLinkIndex: index },
        }));
    },
}));

export default useLayoutStore;
