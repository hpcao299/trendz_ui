'use client';

import CloseButton from '@/layouts/Modals/CloseButton';
import React, { useEffect, useRef } from 'react';

interface BaseModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onRequestClose?: (...args: any[]) => void;
}

const BaseModal: React.FC<BaseModalProps> = ({ children, isOpen, onRequestClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutsideModal = (e: MouseEvent) => {
            if (!modalRef.current?.contains(e.target as Node)) {
                if (typeof onRequestClose === 'function') {
                    onRequestClose();
                }
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutsideModal);
        } else {
            document.removeEventListener('click', handleClickOutsideModal);
        }

        return () => document.removeEventListener('click', handleClickOutsideModal);
    }, [isOpen]);

    return isOpen ? (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex bg-[rgba(0,0,0,0.65)]">
            <div ref={modalRef} className="m-auto">
                {children}
            </div>
            <CloseButton />
        </div>
    ) : null;
};

export default BaseModal;
