import config from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
    IoAddCircleOutline,
    IoCompassOutline,
    IoHomeOutline,
    IoSearchOutline,
} from 'react-icons/io5';
import Menu from './Menu';

const Sidebar: React.FC = () => {
    return (
        <div className="fixed top-0 bottom-0 left-0 flex flex-col pt-1 pb-5 border-r border-solid border-separator">
            <div className="flex-1 px-3 pt-2 pb-5 w-sidebar">
                <div className="px-3 mt-6 mb-9">
                    <Link href={config.routes.home}>
                        <Image
                            src="/trendz_logo.png"
                            alt="Trendz Logo"
                            width={130}
                            height={24}
                            className="w-auto h-6"
                        />
                    </Link>
                </div>
                <ul>
                    <Link href={config.routes.home}>
                        <li className="group my-0.5 p-3 flex items-center hover:bg-lightHover rounded-lg duration-300 transition-colors">
                            <IoHomeOutline className="w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]" />
                            <span className="ml-4 text-base">Home</span>
                        </li>
                    </Link>
                    <li className="group my-0.5 p-3 flex items-center hover:bg-lightHover rounded-lg duration-300 transition-colors cursor-pointer">
                        <IoSearchOutline className="w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]" />
                        <span className="ml-4 text-base">Search</span>
                    </li>
                    <Link href={config.routes.explore}>
                        <li className="group my-0.5 p-3 flex items-center hover:bg-lightHover rounded-lg duration-300 transition-colors">
                            <IoCompassOutline className="w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]" />
                            <span className="ml-4 text-base">Explore</span>
                        </li>
                    </Link>
                    <li className="group my-0.5 p-3 flex items-center hover:bg-lightHover rounded-lg duration-300 transition-colors cursor-pointer">
                        <IoAddCircleOutline className="w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]" />
                        <span className="ml-4 text-base">Create</span>
                    </li>
                    <li className="group my-0.5 p-3 flex items-center hover:bg-lightHover rounded-lg duration-300 transition-colors">
                        <Image
                            src="/example_profile.jpeg"
                            width={26}
                            height={26}
                            alt="Profile"
                            className="rounded-full w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]"
                        />
                        <span className="ml-4 text-base">Profile</span>
                    </li>
                </ul>
            </div>
            <Menu />
        </div>
    );
};

export default Sidebar;
