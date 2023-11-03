import { create } from 'zustand';

type ModalType = 'Create' | 'Follow Account' | 'Post Actions' | 'User Settings';

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
        modalProps: any;
    };
}

interface Actions {
    // Sidebar actions
    setIsNarrowed(isNarrowed: boolean): void;
    setIsAvailableBackward(isAvailableBackward: boolean): void;
    changeLinkIndex(activeIndex: number, previousIndex?: number): void;
    backwardLinkIndex(): void;

    // Modal actions
    showModal(type: ModalType, props?: any): void;
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
    changeLinkIndex(activeIndex, previousIndex) {
        set(state => {
            const index = previousIndex ? previousIndex : state.sidebar.previousLinkIndex;

            return {
                sidebar: {
                    ...state.sidebar,
                    activeLinkIndex: activeIndex,
                    previousLinkIndex: index,
                },
            };
        });
    },
    backwardLinkIndex() {
        set(state => {
            if (state.sidebar.isAvailableBackward) {
                return {
                    sidebar: {
                        ...state.sidebar,
                        activeLinkIndex: state.sidebar.previousLinkIndex,
                        isAvailableBackward: true,
                    },
                };
            }

            return { sidebar: { ...state.sidebar, isAvailableBackward: true } };
        });
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
