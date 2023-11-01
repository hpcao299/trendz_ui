'use client';

import { useLayoutStore } from '@/stores';
import React, { useEffect, useRef } from 'react';
import FollowAccountModal from './FollowAccountModal';
import CreateModal from './CreateModal';
import PostActionsModal from './PostActionsModal';
import UserSettingsModal from './UserSettingsModal';

const Modal: React.FC = () => {
    const [{ isVisible, modalType, modalProps }, hideModal] = useLayoutStore(state => [
        state.modal,
        state.hideModal,
    ]);
    const modalRef = useRef<HTMLDivElement>(null);

    console.log({ isVisible, modalType, modalProps });

    const renderModal = () => {
        switch (modalType) {
            case 'Create':
                return <CreateModal />;
            case 'Follow Account':
                return <FollowAccountModal />;
            case 'Post Actions':
                return <PostActionsModal />;
            case 'User Settings':
                return <UserSettingsModal />;
            default:
                return null;
        }
    };

    useEffect(() => {
        const handleClickOutsideModal = (e: MouseEvent) => {
            if (!modalRef.current?.contains(e.target as Node)) {
                hideModal();
            }
        };

        if (isVisible) {
            document.addEventListener('click', handleClickOutsideModal);
        } else {
            document.removeEventListener('click', handleClickOutsideModal);
        }

        return () => document.removeEventListener('click', handleClickOutsideModal);
    }, [isVisible]);

    return isVisible ? (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex bg-[rgba(0,0,0,0.65)]">
            <div ref={modalRef} className="m-auto">
                {renderModal()}
            </div>
        </div>
    ) : null;
};

export default Modal;
