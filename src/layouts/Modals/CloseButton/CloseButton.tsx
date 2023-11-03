import React from 'react';
import { IoClose } from 'react-icons/io5';

interface CloseButtonProps {
    onClose?: (...args: any[]) => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => {
    return (
        <button className="absolute text-white right-4 top-4" onClick={onClose}>
            <IoClose size={28} />
        </button>
    );
};

export default CloseButton;
