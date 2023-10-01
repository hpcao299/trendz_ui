'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
    return (
        <motion.div initial="rest" whileHover="hover" animate="rest" className="relative tooltip">
            {children}
            <motion.div
                variants={tooltipMotion}
                className="absolute select-none pointer-events-none -translate-y-1/2 left-[calc(100%+16px)] top-1/2"
            >
                <div className="relative origin-center px-2.5 py-1 bg-white rounded-lg shadow-tooltip after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:border-8 after:border-r-white after:border-transparent after:right-full">
                    <span className="text-sm">{title}</span>
                </div>
            </motion.div>
        </motion.div>
    );
};

// const Tooltip: React.FC<TooltipProps> = ({ title, children }) => {
//     const [isHovered, setIsHovered] = useState<boolean>();

//     return (
//         <div
//             className="relative tooltip group"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             {children}
//             <div className="absolute select-none pointer-events-none -translate-y-1/2 left-[calc(100%+16px)] top-1/2">
//                 <div
//                     className={classNames(
//                         "relative origin-center px-2.5 py-2 opacity-0 bg-white rounded-lg shadow-tooltip after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:border-8 after:border-r-white after:border-transparent after:right-full",
//                         { 'animate-fade-in-tooltip opacity-100': isHovered },
//                         { 'animate-fade-out-tooltip': !isHovered },
//                     )}
//                 >
//                     <span className="text-sm">{title}</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default Tooltip;
