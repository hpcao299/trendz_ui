import React from 'react';
import styles from './LoadingModal.module.css';

const LoadingModal: React.FC = () => {
    return (
        <div className="overflow-y-auto bg-white max-h-modal rounded-xl w-[400px] py-5">
            <div className={styles.loader}>
                <span></span>
            </div>
        </div>
    );
};

export default LoadingModal;
