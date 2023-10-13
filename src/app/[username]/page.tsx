import config from '@/config';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IoSettingsOutline } from 'react-icons/io5';

interface ProfilePageProps {
    params: { username: string };
}

const ProfilePage: NextPage<ProfilePageProps> = ({ params }) => {
    return (
        <div className="max-w-[935px] mx-auto pt-8 px-5 min-h-screen flex flex-col">
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
                            <Link
                                href={config.routes.accountEdit}
                                className="flex items-center h-8 px-4 text-sm font-semibold rounded-lg select-none bg-btnBackground hover:bg-btnHover"
                            >
                                Edit profile
                            </Link>
                            <Link
                                href={config.routes.accountEdit}
                                className="flex items-center h-8 px-4 ml-2 text-sm font-semibold rounded-lg select-none bg-btnBackground hover:bg-btnHover"
                            >
                                View archive
                            </Link>
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
                <div className="max-w-[350px] mx-auto my-[60px] flex flex-col items-center justify-center text-center">
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
                </div>
            </div>
            <footer className="flex items-center justify-center mt-auto mb-12">
                <span className="text-xs text-secondaryText">
                    © {new Date().getFullYear()} Trendz from Jack Cao
                </span>
            </footer>
        </div>
    );
};

export default ProfilePage;
