'use client';

import { PostActions, PostCommentInput, PostsList } from '@/components';
import { useAnimationControls } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoEllipsisHorizontal, IoHappyOutline } from 'react-icons/io5';

const CopyrightFooter = dynamic(() => import('@/layouts/CopyrightFooter'), { ssr: false });

const PostDetailPage = () => {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [commentText, setCommentText] = useState<string>('');
    const controls = useAnimationControls();

    return (
        <div className="max-w-[935px] pt-[4vh] px-5 w-full mx-auto">
            <div className="max-w-[815px] mx-auto flex border border-solid border-separator">
                <div className="min-h-[450px] border-r border-solid border-separator flex-1">
                    <div className="pb-[125%] overflow-hidden w-full relative">
                        <Image
                            src="/example_post1.jpeg"
                            alt="Photo by Thanh Thuy"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="absolute top-0 left-0 object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-media-info">
                    <div className="py-3.5 pl-6 pr-4 flex text-sm border-b border-solid border-separator">
                        <div className="flex flex-1 font-semibold">
                            <h2>t_thuy.1607</h2>
                            <span className="mx-1 font-normal">•</span>
                            <div className="text-[rgb(38,38,38)]" role="button">
                                Following
                            </div>
                        </div>
                        <div className="ml-2" role="button">
                            <IoEllipsisHorizontal size={18} />
                        </div>
                    </div>
                    <ul className="flex flex-col flex-1 px-4 pb-4">
                        <li className="flex py-3">
                            <div className="mr-2">
                                <Image
                                    src="/example_profile.jpeg"
                                    alt="t_thuy.1607 profile picture"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rounded-full"
                                />
                            </div>
                            <div className="text-sm">
                                <div className="flex">
                                    <span className="font-semibold">t_thuy.1607</span>
                                    <div className="ml-1 text-secondaryText">11w</div>
                                </div>
                                <span>
                                    Mùi hương em nồng sayy <br />
                                    Nhẹ nhàng mùi nước hoa
                                    <br />
                                    380.000 / 35ml
                                </span>
                            </div>
                        </li>
                        <div className="flex flex-col items-center justify-center flex-1">
                            <span className="text-2xl font-bold">No comments yet.</span>
                            <div className="mt-3 text-sm">Start the conversation.</div>
                        </div>
                    </ul>
                    <div className="py-1.5 px-4 border-t border-solid border-separator">
                        <PostActions
                            isLiked={isLiked}
                            controls={controls}
                            handleToggleLiked={() => setIsLiked(!isLiked)}
                        />
                        <div className="text-sm font-semibold">135 likes</div>
                        <div className="text-[10px] uppercase mb-4">AUGUST 13</div>
                    </div>
                    <div className="flex px-4 py-2">
                        <Image
                            src="/example_profile2.jpeg"
                            alt="danphuongshop98 profile picture"
                            width={32}
                            height={32}
                            className="w-8 h-8 mr-1 rounded-full"
                        />
                        <form className="flex flex-1 p-2">
                            <PostCommentInput
                                value={commentText}
                                onChange={value => setCommentText(value)}
                                autoComplete="off"
                                autoCorrect="off"
                                placeholder="Add a comment..."
                                className="flex-1"
                                rows={1}
                            />
                            {commentText && (
                                <button
                                    type="submit"
                                    className="text-sm font-semibold text-primary hover:text-link"
                                >
                                    Post
                                </button>
                            )}
                            <button className="text-secondaryText" type="button">
                                <IoHappyOutline size={24} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-b border-solid border-separator"></div>
            <div className="pt-[6vh]">
                <div className="mb-5 text-sm font-semibold text-secondaryText">
                    More posts from <span className="text-black">t_thuy.1607</span>
                </div>
                <PostsList />
            </div>
            <div className="mt-11">
                <CopyrightFooter />
            </div>
        </div>
    );
};

export default PostDetailPage;
