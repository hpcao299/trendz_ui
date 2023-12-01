'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import React from 'react';

const CopyrightFooter: React.FC = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleChangeLanguage: React.ChangeEventHandler<HTMLSelectElement> = e => {
        router.push(pathname, { locale: e.target.value });
    };

    return (
        <footer className="flex items-center justify-center pb-12 text-xs text-secondaryText dark:text-darkSecondaryText">
            <div className="relative inline-block overflow-hidden w-max">
                <select
                    className="w-full bg-transparent outline-none"
                    defaultValue={locale}
                    onChange={handleChangeLanguage}
                >
                    <option value="en">English</option>
                    <option value="vi">Tiếng Việt</option>
                    <option value="zh">中国人</option>
                </select>
            </div>
            <span className="ml-4">© 2023 Trendz from Jack Cao</span>
        </footer>
    );
};

export default CopyrightFooter;
