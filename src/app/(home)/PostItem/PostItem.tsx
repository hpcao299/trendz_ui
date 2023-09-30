'use client';

import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'nuka-carousel';
import React from 'react';
import {
    IoBookmarkOutline,
    IoChatbubbleOutline,
    IoEllipsisHorizontal,
    IoHeartOutline,
    IoPaperPlaneOutline,
} from 'react-icons/io5';

const images = [
    'https://z-p4-instagram.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/367434819_18050179387464350_6484115261302664419_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=z-p4-instagram.fsgn5-9.fna.fbcdn.net&_nc_cat=102&_nc_ohc=WHn-gqWehnIAX8Rlc0O&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzE2ODMwOTgxMDM2NDgyNjU0OA%3D%3D.2-ccb7-5&oh=00_AfA4vUbUYgmhRVsNK877u0GSLS9Uy8iNB9w5S7RWvrqDVA&oe=651AEC47&_nc_sid=b41fef',
    'https://z-p4-instagram.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/367406314_18050179405464350_4330429137490543278_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=z-p4-instagram.fsgn5-9.fna.fbcdn.net&_nc_cat=102&_nc_ohc=gFtL1N9McjoAX_DU7Lu&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzE2ODMwOTgxMDM1NjM5MjU3MQ%3D%3D.2-ccb7-5&oh=00_AfBGVW6CdtZ0Wh5BksmFpSetkXG5qiG7bq662AiPlxcozA&oe=651B2229&_nc_sid=b41fef',
    'https://z-p4-instagram.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/367394631_18050179402464350_8730014089767795299_n.jpg?stp=dst-jpg_e15_p480x480&_nc_ht=z-p4-instagram.fsgn5-9.fna.fbcdn.net&_nc_cat=102&_nc_ohc=6eDSCH-sRqIAX-FXiTW&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzE2ODMwOTgxMDI5NzgyODAwMA%3D%3D.2-ccb7-5&oh=00_AfDj9dj3Rwiru3k3kgRQVfYs4TzXFQ76RXLW399hcfeKbg&oe=651AC87C&_nc_sid=b41fef',
];

const PostItem: React.FC = () => {
    return (
        <article className="pb-4 mb-6 border-b border-solid border-separator">
            <div className="flex items-center justify-between pb-3 pl-1">
                <div className="flex">
                    <div className="relative rounded-full bg-white p-0.5 mr-3">
                        <div className="after:absolute relative after:w-full after:h-full after:border after:border-solid after:border-[rgba(0,0,0,0.0975)] after:top-0 after:left-0 after:rounded-full">
                            <Image
                                src="/example_profile.jpeg"
                                alt="profile picture"
                                height={32}
                                width={32}
                                className="w-8 h-8 rounded-full"
                            />
                        </div>
                        <div className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-bl from-primary to-pink top-1/2 left-1/2 -z-10"></div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-sm font-semibold">t_thuy.1607</div>
                        <span className="mx-1 text-sm font-normal text-secondaryText">•</span>
                        <span className="text-sm font-normal text-secondaryText">1d</span>
                    </div>
                </div>
                <div>
                    <IoEllipsisHorizontal size={20} />
                </div>
            </div>
            <Carousel
                slidesToScroll={1}
                dragging={false}
                speed={300}
                slidesToShow={1}
                renderCenterLeftControls={({ previousSlide, previousDisabled }) => (
                    <button
                        className={`absolute px-2 py-4 -translate-y-1/2 top-1/2 left-0 ${
                            previousDisabled && 'hidden'
                        }`}
                        onClick={previousSlide}
                    >
                        <div className="h-[30px] w-[30px] bg-opacity-back-btn"></div>
                    </button>
                )}
                renderCenterRightControls={({ nextSlide, nextDisabled }) => (
                    <button
                        className={`absolute px-2 py-4 -translate-y-1/2 top-1/2 right-0 ${
                            nextDisabled && 'hidden'
                        }`}
                        onClick={nextSlide}
                    >
                        <div className="h-[30px] w-[30px] bg-opacity-forward-btn"></div>
                    </button>
                )}
            >
                {images.map((image, i) => (
                    <Image key={i} src={image} alt="" width={732} height={915} />
                ))}
            </Carousel>
            <div className="flex items-center justify-between my-1 -ml-2">
                <div className="flex items-center">
                    <button className="p-2 hover:text-grey">
                        <IoHeartOutline size={26} />
                    </button>
                    <button className="p-2 hover:text-grey">
                        <IoChatbubbleOutline size={26} />
                    </button>
                    <button className="p-2 hover:text-grey">
                        <IoPaperPlaneOutline size={26} />
                    </button>
                </div>
                <div>
                    <button className="hover:text-grey">
                        <IoBookmarkOutline size={26} />
                    </button>
                </div>
            </div>
            <div className="text-sm font-semibold">16 likes</div>
            <div className="mt-2 text-sm">
                <div className="flex">
                    <Link href="/" className="mr-1 font-semibold hover:text-grey">
                        t_thuy.1607
                    </Link>
                    <span>Mùi hương em nồng sayy</span>
                </div>
                <div>
                    <span>...</span>
                    <br />
                    <div className="flex-1 text-[#737373] cursor-pointer">more</div>
                </div>
            </div>
            <form className="mt-2">
                <textarea
                    autoCorrect="off"
                    autoComplete="off"
                    placeholder="Add a comment…"
                    className="w-full max-w-full text-sm bg-white outline-none resize-none max-h-20 h-4.5"
                ></textarea>
            </form>
        </article>
    );
};

export default PostItem;
