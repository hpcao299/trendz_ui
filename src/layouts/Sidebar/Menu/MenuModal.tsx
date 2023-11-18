import config from '@/config';
import { useThemeStore } from '@/stores';
import { motion, useCycle } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import React, { useEffect, useRef } from 'react';
import {
    IoBookmarkOutline,
    IoChevronBack,
    IoMoonOutline,
    IoSettingsOutline,
    IoSunnyOutline,
    IoWarningOutline,
} from 'react-icons/io5';

interface MenuModalProps {
    handleCloseMenu: () => void;
    open: boolean;
}

const slideHorizontalAnimation = {
    left: {
        x: 0,
        transition: {
            duration: 0.15,
        },
    },
    right: {
        x: -266,
        transition: {
            duration: 0.15,
        },
    },
};

const MenuModal: React.FC<MenuModalProps> = ({ open, handleCloseMenu }) => {
    const t = useTranslations('Sidebar');
    const [darkMode, toggleDarkTheme] = useThemeStore(state => [
        state.darkMode,
        state.toggleDarkTheme,
    ]);
    const modalRef = useRef<HTMLDivElement>(null);
    const [isMainMenu, toggleMenu] = useCycle(true, false);

    const mainMenuHeight = 298;
    const appearanceMenuHeight = 125;

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            // If click outside of modal
            if (!modalRef.current?.contains(e.target as Node)) {
                handleCloseMenu();
            }
        };

        if (open) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => document.removeEventListener('click', handleOutsideClick);
    }, [open]);

    const handleToggleMenu = (height: number) => {
        toggleMenu();

        if (modalRef.current) modalRef.current.style.height = height + 'px';
    };

    return (
        <div
            ref={modalRef}
            className="absolute left-0 z-10 overflow-hidden transition-all bg-white dark:bg-darkBackground dark:text-darkText bottom-full filter-menu rounded-2xl w-menu"
        >
            <motion.div
                variants={slideHorizontalAnimation}
                initial="left"
                animate={isMainMenu ? 'left' : 'right'}
                className="flex items-start w-menusContainer"
            >
                <div className="w-1/2 p-2 main-menu">
                    <Link href={config.routes.accountEdit} onClick={handleCloseMenu}>
                        <div className="flex items-center p-4 text-sm transition-opacity duration-100 rounded-lg hover:bg-lightHover dark:hover:bg-darkLightHover ease-hover">
                            <IoSettingsOutline className="w-5 h-5" />
                            <span className="ml-3">{t('settings')}</span>
                        </div>
                    </Link>
                    <Link href={`/t.thuy_1607/saved`} onClick={handleCloseMenu}>
                        <div className="flex items-center p-4 text-sm transition-opacity duration-100 rounded-lg hover:bg-lightHover dark:hover:bg-darkLightHover ease-hover">
                            <IoBookmarkOutline className="w-5 h-5" />
                            <span className="ml-3">{t('saved')}</span>
                        </div>
                    </Link>
                    <div
                        className="flex items-center p-4 text-sm transition-opacity duration-100 rounded-lg cursor-pointer hover:bg-lightHover dark:hover:bg-darkLightHover ease-hover"
                        onClick={() => handleToggleMenu(appearanceMenuHeight)}
                    >
                        {darkMode ? (
                            <IoMoonOutline className="w-5 h-5" />
                        ) : (
                            <IoSunnyOutline className="w-5 h-5" />
                        )}
                        <span className="ml-3">{t('appearance')}</span>
                    </div>
                    <div className="flex items-center p-4 text-sm transition-opacity duration-100 rounded-lg cursor-pointer hover:bg-lightHover dark:hover:bg-darkLightHover ease-hover">
                        <IoWarningOutline className="w-5 h-5" />
                        <span className="ml-3">{t('problem')}</span>
                    </div>
                    <div className="h-[6px] bg-[rgba(219,219,219,.3)] dark:bg-[rgba(85,85,85,.3)] my-2 -mx-2"></div>
                    <div className="flex items-center p-4 text-sm transition-opacity duration-100 rounded-lg cursor-pointer hover:bg-lightHover dark:hover:bg-darkLightHover ease-hover">
                        <span>{t('logout')}</span>
                    </div>
                </div>
                <div className="w-1/2 appearance-menu">
                    <div className="flex items-center p-4 border-b border-solid border-separator dark:border-stroke">
                        <div
                            className="text-[rgb(199,199,199)] w-6 h-6 flex items-center"
                            role="button"
                            onClick={() => handleToggleMenu(mainMenuHeight)}
                        >
                            <IoChevronBack size={14} />
                        </div>
                        <div className="flex-1 text-base font-semibold">{t('appearance')}</div>
                        {darkMode ? <IoMoonOutline size={18} /> : <IoSunnyOutline size={18} />}
                    </div>
                    <div className="p-2">
                        <div
                            className="flex items-center justify-between p-4 text-sm transition-opacity duration-100 rounded-lg cursor-pointer hover:bg-lightHover dark:hover:bg-darkLightHover ease-hover"
                            onClick={toggleDarkTheme}
                        >
                            <span>{t('dark-mode')}</span>
                            <input type="checkbox" name="theme" hidden className="hidden" />
                            <div className="input-checkbox-theme-mode" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default MenuModal;
