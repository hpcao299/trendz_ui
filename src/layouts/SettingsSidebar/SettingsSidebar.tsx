'use client';

import config from '@/config';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const links = [
    {
        title: 'Edit profile',
        href: config.routes.accountEdit,
    },
    {
        title: 'Language preferences',
        href: config.routes.langPreferences,
    },
    {
        title: 'Appearance settings',
        href: config.routes.appearanceSetting,
    },
];

const SettingsSidebar: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className="h-screen py-6 overflow-y-auto w-setting-sidebar-width">
            <div className="h-full border-r border-solid border-separator">
                <div className="mr-12 ml-9">
                    <div className="px-4 mb-6 text-xl font-bold">Settings</div>
                    {links.map((link, i) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link href={link.href} key={i}>
                                <div
                                    className={classNames(
                                        'p-4 text-sm rounded-lg transition-colors ease-out',
                                        {
                                            'hover:bg-[#e5e4e5] bg-btnBackground': isActive,
                                            'hover:bg-[rgba(0,0,0,.05)]': !isActive,
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
