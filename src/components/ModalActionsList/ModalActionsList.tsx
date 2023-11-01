import { useLayoutStore } from '@/stores';
import { ModalActionItem } from '@/types';
import classNames from 'classnames';
import React from 'react';

interface ModalActionsList {
    actions?: ModalActionItem[];
    showCancelAction?: boolean;
    warnCancelAction?: boolean;
    onClose?: (...args: any[]) => void;
}

// TODO: Handle lazy loading for modal

const ModalActionsList: React.FC<ModalActionsList> = ({
    actions,
    showCancelAction,
    warnCancelAction,
    onClose,
}) => {
    const hideModal = useLayoutStore(state => state.hideModal);

    const handleClose = () => {
        if (typeof onClose === 'function') {
            onClose();
            return;
        }

        hideModal();
    };

    return (
        <div className="overflow-y-auto bg-white max-h-modal rounded-xl w-[400px] animate-scale-small">
            {actions?.map((item, i) => (
                <button
                    className={classNames(
                        'flex items-center justify-center w-full first:rounded-tl-xl first:rounded-tr-xl last:rounded-bl-xl last:rounded-br-xl text-sm min-h-[48px] py-1 px-2 select-none border-t border-solid border-separator first:border-[0px]',
                        { 'text-red font-semibold': item.color === 'warn' },
                    )}
                    onClick={() => item.onClick && item.onClick()}
                    key={i}
                >
                    {item.title}
                </button>
            ))}
            {showCancelAction && (
                <button
                    className={classNames(
                        'flex items-center justify-center w-full first:rounded-tl-xl first:rounded-tr-xl last:rounded-bl-xl last:rounded-br-xl text-sm min-h-[48px] py-1 px-2 select-none border-t border-solid border-separator first:border-[0px]',
                        { 'text-red font-semibold': warnCancelAction },
                    )}
                    onClick={handleClose}
                >
                    Cancel
                </button>
            )}
        </div>
    );
};

export default ModalActionsList;
