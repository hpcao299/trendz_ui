'use client';

import classNames from 'classnames';
import { AnimationControls, motion } from 'framer-motion';
import Link from 'next-intl/link';
import React from 'react';
import {
    IoBookmarkOutline,
    IoChatbubbleOutline,
    IoHeart,
    IoHeartOutline,
    IoPaperPlaneOutline,
} from 'react-icons/io5';

const heartIconMotion = {
    scale: {
        scale: [1, 1.2, 0.9, 1],
        ease: 'easeInOut',
        transition: {
            duration: 0.4,
        },
    },
};

interface PostActionsProps {
    isLiked: boolean;
    handleToggleLiked: (param?: any) => void;
    controls: AnimationControls;
}

const PostActions: React.FC<PostActionsProps> = ({ isLiked, handleToggleLiked, controls }) => {
    return (
        <div className="flex items-center justify-between my-1 -ml-2">
            <div className="flex items-center">
                <button
                    className={classNames('p-2', {
                        'text-red': isLiked,
                        'hover:text-grey': !isLiked,
                    })}
                    onClick={handleToggleLiked}
                >
                    <motion.div
                        variants={heartIconMotion}
                        animate={controls}
                        onHoverEnd={() => !isLiked && controls.start('scale')}
                        whileTap="scale"
                    >
                        {isLiked ? <IoHeart size={26} /> : <IoHeartOutline size={26} />}
                    </motion.div>
                </button>
                <Link href="/p/abcde">
                    <button className="p-2 hover:text-grey">
                        <IoChatbubbleOutline size={26} />
                    </button>
                </Link>
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
    );
};

export default PostActions;
