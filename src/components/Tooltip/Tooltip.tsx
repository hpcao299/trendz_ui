'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

interface TooltipProps {
    title: string;
    children?: React.ReactNode;
    isAvailable?: boolean;
}

const tooltipMotion = {
    rest: { opacity: 0, scale: 0, duration: 0.4, y: '-50%', ease: 'circOut' },
    hover: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
            delay: 0.7,
        },
    },
};

const Tooltip: React.FC<TooltipProps> = ({ title, children, isAvailable = true }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div
            className="relative tooltip"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            {isAvailable && (
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            variants={tooltipMotion}
                            initial="rest"
                            animate="hover"
                            exit="rest"
                            className="absolute select-none pointer-events-none -translate-y-1/2 left-[calc(100%+16px)] top-1/2"
                        >
                            <div className="relative origin-center px-2.5 py-1 bg-white dark:bg-darkBackground dark:text-darkText rounded-lg shadow-tooltip after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:border-8 after:border-r-white dark:after:border-r-darkBackground after:border-transparent after:right-full whitespace-nowrap">
                                <span className="text-sm">{title}</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
};

export default Tooltip;
