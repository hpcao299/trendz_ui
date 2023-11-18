import React from 'react';
import { IoClose } from 'react-icons/io5';

const CloseButton: React.FC = () => {
    return (
        <button className="absolute text-white pointer-events-none right-4 top-4">
            <IoClose size={28} />
        </button>
    );
};

export default CloseButton;
