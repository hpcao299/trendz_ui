'use client'

import { useTranslations } from 'next-intl';
import AppearanceOptions from './AppearanceOptions';

const AppearanceSettings = () => {
    const t = useTranslations('Settings');

    return (
        <div className="ml-12 mr-16">
            <div className="mt-8 text-2xl">{t('appearance-settings')}</div>
            <div className="mt-2 mb-5 text-sm text-secondaryText dark:text-secondaryText">
                {t('appearance-settings-desc')}
            </div>
            <AppearanceOptions />
        </div>
    );
};

export default AppearanceSettings;
