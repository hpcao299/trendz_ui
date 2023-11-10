import React from 'react';
import { Loader } from '@/components';

const LoadingModal: React.FC = () => {
    return (
        <div className="flex items-center justify-center overflow-y-auto bg-white dark:bg-darkBackground max-h-modal rounded-xl w-[400px] py-5">
            <Loader />
        </div>
    );
};

export default LoadingModal;
