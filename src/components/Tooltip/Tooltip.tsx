'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

interface TooltipProps {
    title: string;
    children?: React.ReactNode;
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

const Tooltip: React.FC<TooltipProps> = ({ title, children }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <motion.div
            className="relative tooltip"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        variants={tooltipMotion}
                        initial="rest"
                        animate="hover"
                        exit="rest"
                        className="absolute select-none pointer-events-none -translate-y-1/2 left-[calc(100%+16px)] top-1/2"
                    >
                        <div className="relative origin-center px-2.5 py-1 bg-white rounded-lg shadow-tooltip after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:border-8 after:border-r-white after:border-transparent after:right-full">
                            <span className="text-sm">{title}</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Tooltip;
