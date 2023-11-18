'use client';

import { useLayoutStore } from '@/stores';
import classNames from 'classnames';
import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import SearchSidebar from './SearchSidebar';
import SidebarLinks from './SidebarLinks/SidebarLinks';

const Sidebar: React.FC = () => {
    const { isNarrowed } = useLayoutStore(state => state.sidebar);

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
                    <SidebarLinks />
                </div>
                <Menu />
            </div>
            <SearchSidebar />
        </>
    );
};

export default Sidebar;
