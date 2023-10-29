import { useLayoutStore } from '@/stores';
import Image from 'next/image';
import React from 'react';
import { IoCloseOutline, IoStarOutline } from 'react-icons/io5';

const FollowAccountModal: React.FC = () => {
    const hideModal = useLayoutStore(state => state.hideModal);

    const handleCloseModal = () => {
        hideModal();
    };

    return (
        <div className="bg-white rounded-xl w-[400px] relative animate-scale-small">
            <div className="flex flex-col items-center justify-center p-4 border-b border-solid border-separator">
                <Image
                    src="/example_profile.jpeg"
                    alt="t_thuy.1607's profile picture"
                    width={56}
                    height={56}
                    className="rounded-full w-14 h-14"
                />
                <div className="mt-2 text-sm font-semibold">t_thuy.1607</div>
            </div>
            <ul>
                <li
                    className="flex items-center justify-between p-4 text-sm transition-colors duration-100 hover:bg-lightHover"
                    role="button"
                >
                    <span>Add to favorites</span>
                    <IoStarOutline size={20} />
                </li>
                <li
                    className="flex items-center justify-between p-4 text-sm transition-colors duration-100 hover:bg-lightHover"
                    role="button"
                >
                    <span>Mute</span>
                </li>
                <li
                    className="flex items-center justify-between p-4 text-sm transition-colors duration-100 hover:bg-lightHover"
                    role="button"
                >
                    <span>Unfollow</span>
                </li>
            </ul>
            <button className="absolute right-2 top-2 z-5" onClick={handleCloseModal}>
                <IoCloseOutline size={24} />
            </button>
        </div>
    );
};

export default FollowAccountModal;
