import config from '@/config';
import { useLayoutStore } from '@/stores';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const wordLogoMotion = {
    rest: { opacity: 0, duration: 0.2, ease: 'easeIn' },
    fadeIn: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: 'easeInOut',
            delay: 0.1,
        },
    },
};

const iconLogoMotion = {
    rest: { opacity: 0, scale: 0, y: '-50%', duration: 0.5, ease: 'easeIn' },
    appear: {
        opacity: 1,
        scale: 1,
        y: '-50%',
        transition: {
            duration: 0.35,
            ease: 'easeInOut',
            delay: 0.1,
        },
    },
};

const Logo: React.FC = () => {
    const isNarrowed = useLayoutStore(state => state.sidebar.isNarrowed);

    return (
        <div
            className={classNames('relative mb-9 mt-6', {
                'h-6': !isNarrowed,
                'h-6 pb-6': isNarrowed,
            })}
        >
            <Link href={config.routes.home}>
                <AnimatePresence>
                    {isNarrowed && (
                        <motion.div
                            variants={iconLogoMotion}
                            className="absolute left-0 flex items-center justify-center w-12 h-12 transition-colors duration-300 -translate-y-1/2 rounded-lg top-1/2 group hover:bg-lightHover"
                            initial="rest"
                            animate="appear"
                            exit="rest"
                        >
                            <Image
                                rel="preload"
                                src="/icon_logo.png"
                                alt="Trendz Logo"
                                width={26}
                                height={26}
                                className="w-[26px] h-[26px] transition-transform duration-200 ease-icon group-hover:scale-[105%]"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence initial={false}>
                    {!isNarrowed && (
                        <motion.div
                            variants={wordLogoMotion}
                            initial="rest"
                            animate="fadeIn"
                            exit="rest"
                            className="absolute top-0 left-0"
                        >
                            <Image
                                src="/trendz_logo.png"
                                alt="Trendz Logo"
                                width={130}
                                height={24}
                                className="w-auto h-[26px] px-3"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Link>
        </div>
    );
};

export default Logo;
