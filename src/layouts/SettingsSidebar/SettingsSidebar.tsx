'use client';

import config from '@/config';
import Link from 'next-intl/link';
import React from 'react';
import { usePathname } from 'next-intl/client';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

const SettingsSidebar: React.FC = () => {
    const pathname = usePathname();
    const t = useTranslations('Settings');

    const links = [
        {
            title: t('edit-profile'),
            href: config.routes.accountEdit,
        },
        {
            title: t('lan-preferences'),
            href: config.routes.langPreferences,
        },
        {
            title: t('appearance-settings'),
            href: config.routes.appearanceSetting,
        },
    ];

    return (
        <div className="h-screen py-6 overflow-y-auto w-setting-sidebar-width">
            <div className="h-full border-r border-solid border-separator dark:border-darkSeparator">
                <div className="mr-12 ml-9">
                    <div className="px-4 mb-6 text-xl font-bold">{t('settings')}</div>
                    {links.map((link, i) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link href={link.href} key={i}>
                                <div
                                    className={classNames(
                                        'p-4 text-sm rounded-lg transition-colors ease-out',
                                        {
                                            'hover:bg-[#e5e4e5] bg-btnBackground dark:hover:bg-darkSeparator dark:bg-darkLightHover':
                                                isActive,
                                            'hover:bg-[rgba(0,0,0,.05)] dark:hover:bg-darkLightHover':
                                                !isActive,
                                        },
                                    )}
                                >
                                    {link.title}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SettingsSidebar;
