'use client';

import config from '@/config';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { IoMenu, IoMenuOutline, IoSettingsOutline, IoSunnyOutline } from 'react-icons/io5';

const Menu: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            // If click outside of modal
            if (!modalRef.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => document.removeEventListener('click', handleOutsideClick);
    }, [open]);

    return (
        <div className="px-3 select-none">
            <div className="relative">
                <div
                    className="flex items-center p-3 transition-colors duration-300 rounded-lg cursor-pointer group hover:bg-lightHover"
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <IoMenu className="w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]" />
                    ) : (
                        <IoMenuOutline className="w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]" />
                    )}
                    <span className={classNames('ml-4 text-base', { 'font-bold': open })}>
                        Menu
                    </span>
                </div>

                {open && (
                    <div
                        ref={modalRef}
                        className="absolute left-0 z-10 p-2 bg-white bottom-full filter-menu rounded-2xl w-menu"
                    >
                        <Link href={config.routes.settings}>
                            <div className="flex items-center p-4 text-sm transition-opacity duration-100 rounded-lg hover:bg-lightHover ease-hover">
                                <IoSettingsOutline className="w-5 h-5" />
                                <span className="ml-3">Settings</span>
                            </div>
                        </Link>
                        <div className="flex items-center p-4 text-sm transition-opacity duration-100 rounded-lg hover:bg-lightHover ease-hover">
                            <IoSunnyOutline className="w-5 h-5" />
                            <span className="ml-3">Switch appearance</span>
                        </div>
                        <div className="h-[6px] bg-[rgba(219,219,219,.3)] my-2 -mx-2"></div>
                        <div className="flex items-center p-4 text-sm transition-opacity duration-100 rounded-lg hover:bg-lightHover ease-hover">
                            <span>Log out</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;
