'use client';

import { PostActions } from '@/components';
import { useLayoutStore } from '@/stores';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'nuka-carousel';
import React, { useRef, useState } from 'react';
import { IoEllipsisHorizontal, IoHeart } from 'react-icons/io5';

const images = ['/example_post1.jpeg', '/example_post2.jpeg', '/example_post3.jpeg'];

const heartImageMotion = {
    initial: {
        x: '-50%',
        y: '-50%',
        opacity: 0,
    },
    scaleIn: {
        scale: [0, 1.2, 0.95, 1],
        x: '-50%',
        y: '-50%',
        ease: 'easeInOut',
        transition: {
            duration: 0.4,
        },
    },
    fadeIn: {
        opacity: [0, 1],
        ease: 'easeIn',
        transition: {
            duration: 0.15,
        },
    },
    disappear: {
        scale: [1, 0],
        x: '-50%',
        y: '-50%',
        opacity: [1, 0],
        ease: 'easeOut',
        transition: {
            delay: 0.5,
            duration: 0.2,
        },
    },
};

const PostItem: React.FC = () => {
    const controls = useAnimationControls();
    const showModal = useLayoutStore(state => state.showModal);
    const [isLiked, setIsLiked] = useState<boolean>(true);
    const previousBtn = useRef<HTMLButtonElement>(null);
    const nextBtn = useRef<HTMLButtonElement>(null);
    // const [isHeartMounted, setIsHeartMounted] = useState<boolean>(true);

    const handleImageClick: React.MouseEventHandler<HTMLDivElement> = async event => {
        // If double click on image
        const isPreviousBtn = previousBtn.current?.contains(event.target as Node);
        const isNextBtn = nextBtn.current?.contains(event.target as Node);

        if (isPreviousBtn || isNextBtn) {
            return;
        }

        if (event.detail === 2) {
            if (!isLiked) {
                setIsLiked(true);

                controls.start('scale');
                controls.start('fadeIn');
                await controls.start('scaleIn');
                await controls.start('disappear');
            } else {
                controls.start('fadeIn');
                await controls.start('scaleIn');
                await controls.start('disappear');
            }
        }
    };

    return (
        <article className="pb-4 mb-6 border-b border-solid border-separator dark:border-darkSeparator">
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
                        <span className="mx-1 text-sm font-normal text-secondaryText dark:text-darkSecondaryText">
                            •
                        </span>
                        <span className="text-sm font-normal text-secondaryText dark:text-darkSecondaryText">
                            1d
                        </span>
                    </div>
                </div>
                <div
                    role="button"
                    onClick={() => showModal('Post Actions')}
                    className="p-1 click-opacity"
                >
                    <IoEllipsisHorizontal size={20} />
                </div>
            </div>
            <div
                onClick={handleImageClick}
                className="relative border border-solid border-separator dark:border-darkSeparator rounded-[4px] overflow-hidden"
            >
                <Carousel
                    slidesToScroll={1}
                    dragging={false}
                    speed={300}
                    slidesToShow={1}
                    renderCenterLeftControls={({ previousSlide, previousDisabled }) => (
                        <button
                            className={`absolute px-2 py-4 -translate-y-1/2 top-1/2 left-0 z-10 ${
                                previousDisabled && 'hidden'
                            }`}
                            onClick={previousSlide}
                            ref={previousBtn}
                        >
                            <div className="h-[30px] w-[30px] bg-opacity-back-btn"></div>
                        </button>
                    )}
                    renderCenterRightControls={({ nextSlide, nextDisabled }) => (
                        <button
                            className={`absolute px-2 py-4 -translate-y-1/2 top-1/2 right-0 z-10 ${
                                nextDisabled && 'hidden'
                            }`}
                            onClick={nextSlide}
                            ref={nextBtn}
                        >
                            <div className="h-[30px] w-[30px] bg-opacity-forward-btn"></div>
                        </button>
                    )}
                >
                    {images.map((image, i) => (
                        <Image key={i} src={image} alt="" width={732} height={915} />
                    ))}
                </Carousel>
                <motion.div
                    initial="initial"
                    animate={controls}
                    variants={heartImageMotion}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-lightWhite"
                >
                    <IoHeart size={100} />
                </motion.div>
            </div>
            <div className="my-1 -ml-2">
                <PostActions
                    isLiked={isLiked}
                    handleToggleLiked={() => setIsLiked(!isLiked)}
                    controls={controls}
                />
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
                    <div className="flex-1 text-[#737373] cursor-pointer dark:text-darkSecondaryText">
                        more
                    </div>
                </div>
            </div>
            <form className="mt-2">
                <textarea
                    autoCorrect="off"
                    autoComplete="off"
                    placeholder="Add a comment…"
                    className="w-full max-w-full text-sm bg-white outline-none resize-none max-h-20 h-4.5 dark:bg-black"
                ></textarea>
            </form>
        </article>
    );
};

export default PostItem;
