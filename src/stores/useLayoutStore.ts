import { create } from 'zustand';

type ModalType = 'Create' | 'Follow Account' | 'Post Actions' | 'User Settings';

interface ModalHandleClose {
    handleClose?: () => void;
    [propName: string]: any;
}

interface State {
    sidebar: {
        isNarrowed: boolean;
        activeLinkIndex: number;
        previousLinkIndex: number;
        isAvailableBackward: boolean;
    };
    modal: {
        isVisible: boolean;
        modalType: ModalType | null;
        modalProps: ModalHandleClose | undefined | null;
    };
}

interface Actions {
    // Sidebar actions
    setIsNarrowed(isNarrowed: boolean): void;
    setIsAvailableBackward(isAvailableBackward: boolean): void;
    changeLinkIndex(activeIndex: number): void;

    // Modal actions
    showModal(type: ModalType, props?: ModalHandleClose): void;
    hideModal(): void;
}

const useLayoutStore = create<State & Actions>(set => ({
    sidebar: {
        isNarrowed: false,
        activeLinkIndex: 0,
        previousLinkIndex: 0,
        isAvailableBackward: true,
    },
    modal: {
        isVisible: false,
        modalType: null,
        modalProps: null,
    },

    // Sidebar actions
    setIsNarrowed(isNarrowed) {
        set(state => ({
            sidebar: { ...state.sidebar, isNarrowed },
        }));
    },
    setIsAvailableBackward(isAvailableBackward) {
        set(state => ({
            sidebar: { ...state.sidebar, isAvailableBackward },
        }));
    },
    changeLinkIndex(activeIndex) {
        set(state => {
            const preIndex = state.sidebar.activeLinkIndex;

            return {
                sidebar: {
                    ...state.sidebar,
                    activeLinkIndex: activeIndex,
                    previousLinkIndex: preIndex,
                    isAvailableBackward: false,
                },
            };
        });
    },

    // Modal actions
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
