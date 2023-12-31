'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next-intl/link';
import React from 'react';

const FeedSidebar: React.FC = () => {
    const t = useTranslations('Feed Sidebar');

    return (
        <div className="pl-16 mt-9">
            <div className="w-feed-sidebar-width">
                <div className="flex items-center px-4">
                    <div className="mr-3">
                        <Image
                            src="/example_profile.jpeg"
                            alt="profile picture"
                            height={44}
                            width={44}
                            className="rounded-full w-11 h-11"
                        />
                    </div>
                    <div className="flex-1 text-sm">
                        <Link href="/" className="font-semibold">
                            t_thuy.1607
                        </Link>
                        <div className="text-[#737373] dark:text-[rgb(168,168,168)]">
                            Thanh Thuý
                        </div>
                    </div>
                    <button className="text-xs font-semibold text-primary">
                        {t('switch-account')}
                    </button>
                </div>
                <div className="mt-6 mb-2 font-semibold">
                    <div className="flex items-center justify-between px-4 py-1 text-sm">
                        <span className="text-[rgb(115,115,115)] dark:text-[rgb(168,168,168)]">
                            {t('suggested')}
                        </span>
                        <Link href="/" className="hover:opacity-50">
                            {t('see-all')}
                        </Link>
                    </div>
                    <div className="py-2">
                        {Array.from({ length: 5 }).map((a, i) => (
                            <div key={i} className="flex items-center px-4 py-2">
                                <div className="mr-3">
                                    <Image
                                        src="/example_profile.jpeg"
                                        alt="profile picture"
                                        height={44}
                                        width={44}
                                        className="rounded-full w-11 h-11"
                                    />
                                </div>
                                <div className="flex-1 text-sm">
                                    <Link href="/" className="font-semibold">
                                        t_thuy.1607
                                    </Link>
                                    <div className="text-[#737373] dark:text-[rgb(168,168,168)] font-normal">
                                        {t('suggested')}
                                    </div>
                                </div>
                                <button className="text-xs font-semibold text-primary hover:text-black dark:hover:text-darkLink">
                                    {t('follow')}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <ul className="text-xs text-[rgb(199,199,199)] dark:text-[#737373] flex mt-6">
                    <li className="after:text-[rgb(199,199,199)] dark:text-[#737373] after:rounded-full after:mx-[3px] after:content-['\00B7'] flex items-center last:after:hidden">
                        <Link href="/" className="hover:underline">
                            {t('about')}
                        </Link>
                    </li>
                    <li className="after:text-[rgb(199,199,199)] dark:text-[#737373] after:rounded-full after:mx-[3px] after:content-['\00B7'] flex items-center last:after:hidden">
                        <Link href="/" className="hover:underline">
                            {t('help')}
                        </Link>
                    </li>
                    <li className="after:text-[rgb(199,199,199)] dark:text-[#737373] after:rounded-full after:mx-[3px] after:content-['\00B7'] flex items-center last:after:hidden">
                        <Link href="/" className="hover:underline">
                            {t('api')}
                        </Link>
                    </li>
                    <li className="after:text-[rgb(199,199,199)] dark:text-[#737373] after:rounded-full after:mx-[3px] after:content-['\00B7'] flex items-center last:after:hidden">
                        <Link href="/" className="hover:underline">
                            {t('privacy')}
                        </Link>
                    </li>
                </ul>
                <div className="uppercase text-xs text-[rgb(199,199,199)] dark:text-[#737373] mt-4">
                    © 2023 TRENDZ FROM JACK CAO
                </div>
            </div>
        </div>
    );
};

export default FeedSidebar;
