'use client';

import Image from 'next/image';
import React from 'react';
import Carousel from 'nuka-carousel';

const Stories: React.FC = () => {
    const settings = {
        dragging: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
    };

    return (
        <Carousel
            {...settings}
            renderBottomCenterControls={() => null}
            renderCenterLeftControls={({ previousSlide, previousDisabled }) => (
                <button
                    className={`absolute pb-3 mx-2 -translate-y-1/2 top-1/2 left-0 ${
                        previousDisabled && 'hidden'
                    }`}
                    onClick={previousSlide}
                >
                    <div className="h-[45px] w-[45px] bg-back-btn"></div>
                </button>
            )}
            renderCenterRightControls={({ nextSlide, nextDisabled }) => (
                <button
                    className={`absolute pb-3 mx-2 -translate-y-1/2 top-1/2 right-0 ${
                        nextDisabled && 'hidden'
                    }`}
                    onClick={nextSlide}
                >
                    <div className="h-[45px] w-[45px] bg-forward-btn"></div>
                </button>
            )}
        >
            {Array.from({ length: 16 }).map((a, i) => (
                <div key={i} className="flex flex-col items-center">
                    <div className="relative mt-1 mb-2 rounded-full bg-white p-0.5">
                        <Image
                            src="/example_profile.jpeg"
                            width={56}
                            height={56}
                            alt="Profile"
                            className="rounded-full w-14 h-14"
                        />
                        <div className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-bl from-primary to-pink top-1/2 left-1/2 -z-10"></div>
                    </div>
                    <div className="px-0.5 text-xs truncate">t_thuy.1607</div>
                </div>
            ))}
        </Carousel>
    );
};

export default Stories;
