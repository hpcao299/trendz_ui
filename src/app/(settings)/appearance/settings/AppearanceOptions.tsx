'use client';

import { useThemeStore } from '@/stores';
import classNames from 'classnames';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

interface AppearanceOptionItem {
    isActive: boolean;
    Icon: React.FC<any>;
    title: string;
    onClick?: (...args: any[]) => void;
}

const AppearanceOptions: React.FC = () => {
    const [darkMode, setLightTheme, setDarkTheme] = useThemeStore(state => [
        state.darkMode,
        state.setLightTheme,
        state.setDarkTheme,
    ]);

    return (
        <div>
            <AppearanceOptionItem
                title="Light theme"
                Icon={IoSunnyOutline}
                isActive={!darkMode}
                onClick={setLightTheme}
            />
            <AppearanceOptionItem
                title="Dark theme"
                Icon={IoMoonOutline}
                isActive={darkMode}
                onClick={setDarkTheme}
            />
        </div>
    );
};

const AppearanceOptionItem: React.FC<AppearanceOptionItem> = ({
    isActive,
    onClick,
    Icon,
    title,
}) => {
    return (
        <div
            className={classNames(
                'flex items-center justify-between h-12 px-4 py-3 text-base transition-colors duration-100 rounded-lg hover:bg-lightHover dark:hover:bg-darkLightHover',
                { 'text-secondaryText dark:text-darkSecondaryText': !isActive },
            )}
            role="button"
            onClick={onClick}
        >
            <div className="flex items-center">
                <Icon size={22} />
                <span className="ml-2">{title}</span>
            </div>
            <div
                className={classNames(
                    'relative w-6 h-6 border border-solid rounded-full border-separator dark:border-darkSeparator',
                    { 'bg-primary': isActive },
                )}
            ></div>
        </div>
    );
};

export default AppearanceOptions;
