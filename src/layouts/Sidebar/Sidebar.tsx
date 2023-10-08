'use client';

import { Tooltip } from '@/components';
import config from '@/config';
import { useLayoutStore } from '@/stores';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
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
    const [{ isNarrowed, activeLinkIndex }, setIsNarrowed, setActiveLinkIndex] = useLayoutStore(
        state => [state.sidebar, state.setIsNarrowed, state.setActiveLinkIndex],
    );

    const links = useMemo(
        () => [
            {
                title: 'Home',
                href: config.routes.home,
                icon: IoHomeOutline,
                activeIcon: IoHomeSharp,
            },
            {
                title: 'Search',
                href: '#',
                onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    setIsNarrowed(!isNarrowed);
                },
                icon: IoSearchOutline,
                activeIcon: IoSearch,
            },
            {
                title: 'Explore',
                href: config.routes.explore,
                icon: IoCompassOutline,
                activeIcon: IoCompass,
            },
            {
                title: 'Create',
                href: '#',
                onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                },
                icon: IoAddCircleOutline,
                activeIcon: IoAddCircle,
            },
            {
                title: 'Profile · t_thuy.1607',
                href: 't_thuy.1607',
                imageUrl: '/example_profile.jpeg',
                profile: true,
            },
        ],
        [],
    );

    return (
        <>
            <div
                className={classNames(
                    'fixed top-0 bottom-0 left-0 flex flex-col pt-1 pb-5 border-r border-solid border-separator transition-[width] duration-500 ease-[ease] z-40 bg-white',
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
                                            }
                                            // previousLinkIndex.current = activeLinkIndex;
                                            setActiveLinkIndex(i);
                                        }}
                                    >
                                        {link.profile ? (
                                            <li
                                                className={classNames(
                                                    'relative group flex items-center hover:bg-lightHover rounded-lg duration-300 transition-colors',
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
                                                    Profile
                                                </span>
                                            </li>
                                        ) : (
                                            <li
                                                className={classNames(
                                                    'relative group flex items-center hover:bg-lightHover rounded-lg duration-300 transition-colors',
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
