import React from 'react';
import styles from './LoadingModal.module.css';
import classNames from 'classnames';
import { useThemeStore } from '@/stores';

const LoadingModal: React.FC = () => {
    const darkMode = useThemeStore(state => state.darkMode);

    return (
        <div className="overflow-y-auto bg-white dark:bg-darkBackground max-h-modal rounded-xl w-[400px] py-5">
            <div className={classNames(styles.loader, { [styles.darkLoader]: darkMode })}>
                <span></span>
            </div>
        </div>
    );
};

export default LoadingModal;
