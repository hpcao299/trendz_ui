'use client';

import { PostsList } from '@/components';
// import config from '@/config';
import { CopyrightFooter } from '@/layouts';
import { useLayoutStore } from '@/stores';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IoChevronDown, IoSettingsOutline } from 'react-icons/io5';

interface ProfilePageProps {
    params: { username: string };
}

const ProfilePage: NextPage<ProfilePageProps> = ({ params }) => {
    const showModal = useLayoutStore(state => state.showModal);

    return (
        <>
            <div className="max-w-[935px] mx-auto pt-8 px-5 min-h-with-copyright-footer">
                <header className="flex mb-11">
                    <div className="flex items-center justify-center flex-grow mr-[30px]">
                        <Image
                            src="/example_profile.jpeg"
                            alt="Change profile photo"
                            width={150}
                            height={150}
                            className="rounded-full w-[150px] h-[150px]"
                        />
                    </div>
                    <div className="flex-grow-[2]">
                        <div className="flex items-center mb-5">
                            <Link href="#">
                                <h2 className="text-xl font-normal" role="button">
                                    t_thuy.1607
                                </h2>
                            </Link>
                            <div className="flex ml-5">
                                {/* <Link href={config.routes.accountEdit}>
                                    <button className="btn-sm btn-secondary">Edit profile</button>
                                </Link>
                                <Link href={config.routes.accountEdit}>
                                    <button className="ml-2 btn-sm btn-secondary">
                                        View archive
                                    </button>
                                </Link> */}
                                <button
                                    className="flex items-center btn-sm btn-secondary"
                                    onClick={() => showModal('Follow Account')}
                                >
                                    <span className="mr-1">Following</span>
                                    <IoChevronDown />
                                </button>
                            </div>
                            <div
                                className="p-2 ml-1 click-opacity"
                                role="button"
                                onClick={() => showModal('User Settings')}
                            >
                                <IoSettingsOutline size={24} />
                            </div>
                        </div>
                        <ul className="flex items-center gap-10 mb-5 text-base">
                            <li>
                                <span className="font-semibold">0</span> posts
                            </li>
                            <li>
                                <span className="font-semibold">28</span> posts
                            </li>
                            <li>
                                <span className="font-semibold">135</span> following
                            </li>
                        </ul>
                        <div>
                            <div className="mb-2 text-sm font-semibold">Thanh Thuý</div>
                            <div className="text-sm">Abc</div>
                        </div>
                    </div>
                </header>
                <div className="border-t border-solid border-separator">
                    {/* <div className="max-w-[350px] mx-auto my-[60px] flex flex-col items-center justify-center text-center">
                        <div className="bg-photo h-[62px] w-[62px]"></div>
                        <div className="mt-5 mb-4 text-3xl font-extrabold">Share Photos</div>
                        <div className="mb-5 text-sm">
                            When you share photos, they will appear on your profile.
                        </div>
                        <div
                            role="button"
                            className="text-sm font-semibold text-primary hover:text-black"
                        >
                            Share your first photo
                        </div>
                    </div> */}
                    <div className="mt-1 mb-6">
                        <PostsList />
                    </div>
                </div>
            </div>
            <CopyrightFooter />
        </>
    );
};

export default ProfilePage;
