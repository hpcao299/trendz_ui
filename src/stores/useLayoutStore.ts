import { create } from 'zustand';

type ModalType = 'Create';

interface State {
    sidebar: {
        isNarrowed: boolean;
        activeLinkIndex: number;
        previousLinkIndex: number;
    };
    modal: {
        isVisible: boolean;
        modalType: ModalType | null;
        modalProps: any;
    };
}

interface Actions {
    // Sidebar actions
    setIsNarrowed(isNarrowed: boolean): void;
    setActiveLinkIndex(index: number): void;
    setPreviousLinkIndex(index: number): void;

    // Modal actions
    showModal(type: ModalType, props?: any): void;
    hideModal(): void;
}

const useLayoutStore = create<State & Actions>(set => ({
    sidebar: {
        isNarrowed: false,
        activeLinkIndex: 0,
        previousLinkIndex: 0,
    },
    modal: {
        isVisible: false,
        modalType: null,
        modalProps: null,
    },
    setIsNarrowed(isNarrowed) {
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
    showModal(type, props) {
        set({ modal: { isVisible: true, modalType: type, modalProps: props } });
    },
    hideModal() {
        set({
            modal: {
                isVisible: false,
                modalType: null,
                modalProps: null,
            },
        });
    },
}));

export default useLayoutStore;
