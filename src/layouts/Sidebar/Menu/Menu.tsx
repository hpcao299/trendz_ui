'use client';

import { useLayoutStore } from '@/stores';
import classNames from 'classnames';
import React, { useState } from 'react';
import { IoMenu, IoMenuOutline } from 'react-icons/io5';
import MenuModal from './MenuModal';

const Menu: React.FC = () => {
    const isNarrowed = useLayoutStore(state => state.sidebar.isNarrowed);
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="px-3 select-none">
            <div className="relative">
                <div
                    className={classNames(
                        'relative group flex items-center hover:bg-lightHover rounded-lg duration-300 transition-colors',
                        {
                            'w-12 h-12 justify-center my-0.5': isNarrowed,
                            'p-3 my-0.5': !isNarrowed,
                        },
                    )}
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <IoMenu className="absolute left-3 top-1/2 -translate-y-1/2 w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]" />
                    ) : (
                        <IoMenuOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]" />
                    )}
                    <span
                        className={classNames('ml-10.5 text-base', {
                            'font-bold': open,
                            hidden: isNarrowed,
                        })}
                    >
                        Menu
                    </span>
                </div>

                {open && <MenuModal open={open} handleCloseMenu={() => setOpen(false)} />}
            </div>
        </div>
    );
};

export default Menu;
