export interface ModalActionItem {
    title: string;
    onClick?: (...args: any[]) => void;
    color?: 'black' | 'warn';
}
