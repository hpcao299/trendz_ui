'use client';

import { Tooltip } from '@/components';
import config from '@/config';
import { useLayoutStore } from '@/stores';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next-intl/link';
import React, { useMemo } from 'react';
import {
    IoAddCircle,
    IoAddCircleOutline,
    IoCompass,
    IoCompassOutline,
    IoHomeOutline,
    IoHomeSharp,
    IoSearch,
    IoSearchOutline,
} from 'react-icons/io5';
import Logo from './Logo';
import Menu from './Menu';
import SearchSidebar from './SearchSidebar';

const Sidebar: React.FC = () => {
    const t = useTranslations('Sidebar');
    const [
        { isNarrowed, activeLinkIndex, previousLinkIndex },
        setIsNarrowed,
        changeLinkIndex,
        setIsAvailableBackward,
        showModal,
    ] = useLayoutStore(state => [
        state.sidebar,
        state.setIsNarrowed,
        state.changeLinkIndex,
        state.setIsAvailableBackward,
        state.showModal,
    ]);

    // console.log({ activeLinkIndex, previousLinkIndex });

    const links = useMemo(
        () => [
            {
                title: t('home'),
                href: config.routes.home,
                icon: IoHomeOutline,
                activeIcon: IoHomeSharp,
            },
            {
                title: t('search'),
                href: '#',
                onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    setIsNarrowed(!isNarrowed);
                },
                icon: IoSearchOutline,
                activeIcon: IoSearch,
            },
            {
                title: t('explore'),
                href: config.routes.explore,
                icon: IoCompassOutline,
                activeIcon: IoCompass,
            },
            {
                title: t('create'),
                href: '#',
                onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    showModal('Create');
                },
                icon: IoAddCircleOutline,
                activeIcon: IoAddCircle,
            },
            {
                title: `${t('profile')} · t_thuy.1607`,
                href: '/t_thuy.1607',
                imageUrl: '/example_profile.jpeg',
                profile: true,
            },
        ],
        [],
    );

    // TODO: fix active link index when changing from search link to create link
    // TODO: fix search link active when click to close

    return (
        <>
            <div
                className={classNames(
                    'fixed top-0 bottom-0 left-0 flex flex-col pt-1 pb-5 border-r border-solid border-separator dark:border-darkSeparator transition-[width] duration-500 ease-[ease] z-40 bg-white dark:bg-black',
                    { 'w-sidebar': !isNarrowed, 'w-narrow-sidebar': isNarrowed },
                )}
            >
                <div className="flex-1 px-3 pt-3 pb-10">
                    <Logo />
                    <ul>
                        {links.map((link, i) => {
                            const isActive = activeLinkIndex === i;

                            return (
                                <Tooltip
                                    key={link.title}
                                    title={link.title}
                                    isAvailable={isNarrowed}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={e => {
                                            if (typeof link.onClick === 'function') {
                                                link.onClick(e);
                                                setIsAvailableBackward(true);
                                                changeLinkIndex(i, activeLinkIndex);
                                                return;
                                            }
                                            setIsAvailableBackward(false);
                                            changeLinkIndex(i);
                                        }}
                                    >
                                        {link.profile ? (
                                            <li
                                                className={classNames(
                                                    'relative group flex items-center hover:bg-lightHover dark:hover:bg-darkLightHover rounded-lg duration-300 transition-colors',
                                                    {
                                                        'w-12 h-12 justify-center my-0.5':
                                                            isNarrowed,
                                                        'p-3 my-0.5': !isNarrowed,
                                                        'after:absolute after:border-2 after:border-black after:left-3 after:top-1/2 after:-translate-y-1/2 after:rounded-full after:w-[26px] after:h-[26px] after:border-solid':
                                                            isActive,
                                                    },
                                                )}
                                            >
                                                <Image
                                                    src={link.imageUrl}
                                                    width={26}
                                                    height={26}
                                                    alt={link.title}
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]"
                                                />
                                                <span
                                                    className={classNames('ml-10.5 text-base', {
                                                        hidden: isNarrowed,
                                                        'font-bold': isActive,
                                                    })}
                                                >
                                                    {t('profile')}
                                                </span>
                                            </li>
                                        ) : (
                                            <li
                                                className={classNames(
                                                    'relative group flex items-center hover:bg-lightHover dark:hover:bg-darkLightHover rounded-lg duration-300 transition-colors',
                                                    {
                                                        'w-12 h-12 justify-center my-0.5':
                                                            isNarrowed,
                                                        'p-3 my-0.5': !isNarrowed,
                                                        'after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:border after:border-solid after:border-separator':
                                                            isNarrowed && isActive,
                                                    },
                                                )}
                                            >
                                                {isActive ? (
                                                    <link.activeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]" />
                                                ) : (
                                                    <link.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]" />
                                                )}
                                                <span
                                                    className={classNames('ml-10.5 text-base', {
                                                        hidden: isNarrowed,
                                                        'font-bold': isActive,
                                                    })}
                                                >
                                                    {link.title}
                                                </span>
                                            </li>
                                        )}
                                    </Link>
                                </Tooltip>
                            );
                        })}
                    </ul>
                </div>
                <Menu />
            </div>
            <SearchSidebar />
        </>
    );
};

export default Sidebar;
