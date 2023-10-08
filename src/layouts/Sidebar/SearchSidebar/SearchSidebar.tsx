import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

interface SearchSidebarProps {
    isNarrowed: boolean;
    handleClose: () => void;
}

const searchSidebarMotion = {
    rest: { x: '-100%', transition: { duration: 0.3, ease: 'easeIn' } },
    slideIn: {
        x: 0,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
};

const SearchSidebar: React.FC<SearchSidebarProps> = ({ isNarrowed, handleClose }) => {
    const wrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            // if click outside the sidebar
            if (!wrapper.current?.contains(e.target as Node)) {
                handleClose();
            }
        };

        if (isNarrowed) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => document.removeEventListener('click', handleClickOutside);
    }, [isNarrowed, handleClose]);

    return (
        <AnimatePresence>
            {isNarrowed && (
                <motion.div
                    variants={searchSidebarMotion}
                    initial="rest"
                    animate="slideIn"
                    exit="rest"
                    className="fixed top-0 z-30 h-screen py-2 overflow-y-auto bg-white border-r border-solid w-search-sidebar shadow-searchSidebar left-search-sidebar-left-spacing border-separator rounded-r-2xl"
                    ref={wrapper}
                >
                    <div className="pl-6 pt-3 pr-[14px] pb-9 text-2xl font-semibold">Search</div>
                    <div className="mx-4 mb-6">
                        <input
                            type="text"
                            placeholder="Search"
                            className="py-[3px] px-4 rounded-lg bg-[#efefef] outline-none w-full h-10"
                            autoCapitalize="none"
                        />
                    </div>
                    <div className="pt-3 border-t border-solid border-separator">
                        <div className="flex items-center justify-between pt-1 mx-6 mb-2">
                            <span className="text-base font-semibold">Recent</span>
                            <div
                                role="button"
                                className="text-sm font-semibold text-primary hover:text-black"
                            >
                                Clear all
                            </div>
                        </div>
                        {Array.from({ length: 20 }).map((a, i) => (
                            <Link key={i} href="/">
                                <div className="flex px-6 py-2 transition-colors duration-100 hover:bg-lightHover">
                                    <Image
                                        src="/example_profile.jpeg"
                                        alt="profile picture"
                                        width={44}
                                        height={44}
                                        className="mr-3 rounded-full w-11 h-11"
                                    />
                                    <div className="flex-1">
                                        <span className="text-sm font-semibold">t_thuy.1607</span>
                                        <div className="text-sm text-secondaryText">Thanh Thuý</div>
                                    </div>
                                    <div
                                        className="flex items-center justify-center p-2 ml-3"
                                        role="button"
                                    >
                                        <IoCloseOutline size={24} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchSidebar;
