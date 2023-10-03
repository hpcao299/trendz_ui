'use client';

import { Tooltip } from '@/components';
import config from '@/config';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
    IoAddCircleOutline,
    IoCompassOutline,
    IoHomeOutline,
    IoSearchOutline,
} from 'react-icons/io5';
import Logo from './Logo';
import Menu from './Menu';
import SearchSidebar from './SearchSidebar';

const Sidebar: React.FC = () => {
    const [isNarrowed, setIsNarrowed] = useState<boolean>(false);

    return (
        <>
            <div
                className={classNames(
                    'fixed top-0 bottom-0 left-0 flex flex-col pt-1 pb-5 border-r border-solid border-separator transition-[width] duration-500 ease-[ease] z-40 bg-white',
                    { 'w-sidebar': !isNarrowed, 'w-narrow-sidebar': isNarrowed },
                )}
            >
                <div className="flex-1 px-3 pt-3 pb-10">
                    <Logo isNarrowed={isNarrowed} />
                    <ul>
                        <Link href={config.routes.home}>
                            <li
                                className={classNames(
                                    'relative group flex items-center hover:bg-lightHover rounded-lg duration-300 transition-colors',
                                    {
                                        'w-12 h-12 justify-center my-0.5': isNarrowed,
                                        'p-3 my-0.5': !isNarrowed,
                                    },
                                )}
                            >
                                <IoHomeOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]" />
                                <span
                                    className={classNames('ml-10.5 text-base', {
                                        hidden: isNarrowed,
                                    })}
                                >
                                    Home
                                </span>
                            </li>
                        </Link>
                        <li
                            onClick={() => setIsNarrowed(!isNarrowed)}
                            className={classNames(
                                'relative group flex items-center hover:bg-lightHover rounded-lg duration-300 transition-colors',
                                {
                                    'w-12 h-12 justify-center my-0.5': isNarrowed,
                                    'p-3 my-0.5': !isNarrowed,
                                },
                            )}
                        >
                            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]" />
                            <span
                                className={classNames('ml-10.5 text-base', { hidden: isNarrowed })}
                            >
                                Search
                            </span>
                        </li>
                        <Tooltip title="Explore">
                            <Link href={config.routes.explore}>
                                <li
                                    className={classNames(
                                        'relative group flex items-center hover:bg-lightHover rounded-lg duration-300 transition-colors',
                                        {
                                            'w-12 h-12 justify-center my-0.5': isNarrowed,
                                            'p-3 my-0.5': !isNarrowed,
                                        },
                                    )}
                                >
                                    <IoCompassOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]" />
                                    <span
                                        className={classNames('ml-10.5 text-base', {
                                            hidden: isNarrowed,
                                        })}
                                    >
                                        Explore
                                    </span>
                                </li>
                            </Link>
                        </Tooltip>
                        <li
                            className={classNames(
                                'relative group flex items-center hover:bg-lightHover rounded-lg duration-300 transition-colors',
                                {
                                    'w-12 h-12 justify-center my-0.5': isNarrowed,
                                    'p-3 my-0.5': !isNarrowed,
                                },
                            )}
                        >
                            <IoAddCircleOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]" />
                            <span
                                className={classNames('ml-10.5 text-base', { hidden: isNarrowed })}
                            >
                                Create
                            </span>
                        </li>
                        <li
                            className={classNames(
                                'relative group flex items-center hover:bg-lightHover rounded-lg duration-300 transition-colors',
                                {
                                    'w-12 h-12 justify-center my-0.5': isNarrowed,
                                    'p-3 my-0.5': !isNarrowed,
                                },
                            )}
                        >
                            <Image
                                src="/example_profile.jpeg"
                                width={26}
                                height={26}
                                alt="Profile"
                                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]"
                            />
                            <span
                                className={classNames('ml-10.5 text-base', { hidden: isNarrowed })}
                            >
                                Profile
                            </span>
                        </li>
                    </ul>
                </div>
                <Menu isNarrowed={isNarrowed} />
            </div>
            <SearchSidebar isNarrowed={isNarrowed} />
        </>
    );
};

export default Sidebar;
