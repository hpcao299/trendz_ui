'use client';

// import config from '@/config';
import { CopyrightFooter } from '@/layouts';
import { useLayoutStore } from '@/stores';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IoChatbubble, IoChevronDown, IoHeart, IoSettingsOutline } from 'react-icons/io5';

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
                            <div className="p-2 ml-1" role="button">
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
                    <div className="flex flex-wrap gap-1 mt-1 mb-6">
                        {Array.from({ length: 13 }).map((a, i) => (
                            <div className="relative flex-[calc(33.33%-8px)] max-w-[calc(33.33%-8px)] w-[calc(33.33%-8px)] group">
                                <Link href="/" key={i} className="block">
                                    <div className="w-full overflow-hidden pb-[100%]">
                                        <Image
                                            src="/example_post1.jpeg"
                                            alt="Photo by Thanh Thuy"
                                            width={309}
                                            height={309}
                                            className="absolute top-0 left-0 object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-[rgb(0,0,0,0.3)] opacity-0 group-hover:opacity-100 flex items-center justify-center">
                                        <div className="flex items-center text-base font-bold text-white">
                                            <div className="flex items-center mr-7">
                                                <IoHeart size={20} />
                                                <span className="ml-1.5">78</span>
                                            </div>
                                            <div className="flex items-center">
                                                <IoChatbubble size={20} />
                                                <span className="ml-1.5">78</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute text-white top-2 right-2">
                                        <svg
                                            aria-label="Carousel"
                                            fill="currentColor"
                                            height="22"
                                            role="img"
                                            viewBox="0 0 48 48"
                                            width="22"
                                        >
                                            <title>Carousel</title>
                                            <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <CopyrightFooter />
        </>
    );
};

export default ProfilePage;
