'use client';

import { Tooltip } from '@/components';
import config from '@/config';
import { useLayoutStore } from '@/stores';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next-intl/link';
import React, { memo, useEffect, useMemo } from 'react';
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
import { usePathname } from 'next-intl/client';

const SidebarLinks: React.FC = () => {
    const t = useTranslations('Sidebar');
    const pathname = usePathname();
    const [
        { isNarrowed, activeLinkIndex, isAvailableBackward },
        setIsNarrowed,
        changeLinkIndex,
        showModal,
        setIsAvailableBackward,
    ] = useLayoutStore(state => [
        state.sidebar,
        state.setIsNarrowed,
        state.changeLinkIndex,
        state.showModal,
        state.setIsAvailableBackward,
    ]);

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
                    showModal('Create', {
                        handleClose() {
                            setIsAvailableBackward(true);
                        },
                    });
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

    useEffect(() => {
        if (isAvailableBackward) {
            const index = links.findIndex(link => link.href === pathname);
            changeLinkIndex(index);
        }
    }, [isAvailableBackward]);

    return (
        <ul>
            {links.map((link, i) => {
                const isActive = activeLinkIndex === i;

                return (
                    <Tooltip key={link.title} title={link.title} isAvailable={isNarrowed}>
                        <Link
                            href={link.href}
                            onClick={e => {
                                if (typeof link.onClick === 'function') {
                                    link.onClick(e);
                                }
                                changeLinkIndex(i);
                            }}
                        >
                            {link.profile ? (
                                <li
                                    className={classNames(
                                        'relative group flex items-center hover:bg-lightHover dark:hover:bg-darkLightHover rounded-lg duration-300 transition-colors',
                                        {
                                            'w-12 h-12 justify-center my-0.5': isNarrowed,
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
                                        className={classNames(
                                            'ml-10.5 text-base relative h-6 flex-1',
                                            {
                                                hidden: isNarrowed,
                                                'font-bold': isActive,
                                            },
                                        )}
                                    >
                                        <span
                                            className={classNames(
                                                'absolute top-0 bottom-0 left-0 right-0 w-max',
                                                {
                                                    'animate-fade-in-opacity': !isNarrowed,
                                                },
                                            )}
                                        >
                                            {t('profile')}
                                        </span>
                                    </span>
                                </li>
                            ) : (
                                <li
                                    className={classNames(
                                        'relative group flex items-center hover:bg-lightHover dark:hover:bg-darkLightHover rounded-lg duration-300 transition-colors',
                                        {
                                            'w-12 h-12 justify-center my-0.5': isNarrowed,
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
                                        className={classNames(
                                            'ml-10.5 text-base relative h-6 flex-1',
                                            {
                                                hidden: isNarrowed,
                                                'font-bold': isActive,
                                            },
                                        )}
                                    >
                                        <span
                                            className={classNames(
                                                'absolute top-0 bottom-0 left-0 right-0 w-max',
                                                {
                                                    'animate-fade-in-opacity': !isNarrowed,
                                                },
                                            )}
                                        >
                                            {link.title}
                                        </span>
                                    </span>
                                </li>
                            )}
                        </Link>
                    </Tooltip>
                );
            })}
        </ul>
    );
};

export default memo(SidebarLinks);
