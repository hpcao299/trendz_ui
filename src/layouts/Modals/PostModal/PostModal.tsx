import { PostActions, PostCommentInput } from '@/components';
import { useLayoutStore } from '@/stores';
import { useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoClose, IoEllipsisHorizontal, IoHappyOutline, IoHeartOutline } from 'react-icons/io5';

const PostModal: React.FC = () => {
    const hideModal = useLayoutStore(state => state.hideModal);
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [commentText, setCommentText] = useState<string>('');
    const controls = useAnimationControls();
    // const searchParams = useSearchParams();

    const handleTypeComment = (value: string) => {
        setCommentText(value);
    };

    // TODO: fix right side of post modal width
    // TODO: fix dynamic size of images based on their aspect ratio

    return (
        <>
            <button className="absolute text-white right-4 top-4" onClick={hideModal}>
                <IoClose size={28} />
            </button>
            <article className="rounded-[4px] m-auto overflow-hidden flex max-h-[calc(100vh-48px)] max-w-[calc(100vw-128px)] bg-black">
                <div className="flex flex-col justify-center min-h-[450px] flex-shrink flex-1">
                    <div className="w-[736.797px] bg-black">
                        <div className="pb-[125%] block w-full relative overflow-hidden">
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
                </div>
                <div className="flex flex-col flex-1 max-w-[500px] min-w-[405px] bg-white">
                    <header className="flex items-center border-b border-solid border-separator">
                        <div className="py-3.5 pr-1 pl-4 flex items-center flex-1">
                            <Link href="/t_thuy.1607">
                                <Image
                                    src="/example_profile.jpeg"
                                    alt="t_thuy.1607 profile picture"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rounded-full"
                                />
                            </Link>
                            <Link href="/t_thuy.1607" className="hover:opacity-50 block ml-3.5">
                                <div className="text-sm font-semibold">t_thuy.1607</div>
                            </Link>
                        </div>
                        <div role="button" className="p-2 mr-2">
                            <IoEllipsisHorizontal size={20} />
                        </div>
                    </header>
                    <ul className="flex-1 p-4 overflow-y-scroll min-h-[232px]">
                        <li className="pb-2 pr-4 pt-1.5">
                            <div className="flex">
                                <div className="mr-4.5">
                                    <Link href="/t_thuy.1607">
                                        <Image
                                            src="/example_profile.jpeg"
                                            alt="t_thuy.1607 profile picture"
                                            width={32}
                                            height={32}
                                            className="w-8 h-8 rounded-full"
                                        />
                                    </Link>
                                </div>
                                <div className="flex-1 text-sm">
                                    <div className="inline-flex mr-1">
                                        <Link href="/t_thuy.1607" className="hover:opacity-50">
                                            <h2 className="font-semibold">t_thuy.1607</h2>
                                        </Link>
                                    </div>
                                    <div className="inline">
                                        Mùi hương em nồng sayy <br />
                                        Nhẹ nhàng mùi nước hoa
                                        <br />
                                        380.000 / 35ml
                                    </div>
                                    <div className="mt-2 mb-1 text-xs text-secondaryText">10w</div>
                                </div>
                            </div>
                        </li>
                        {Array.from({ length: 10 }).map((a, i) => (
                            <li className="pt-4 mb-4" key={i}>
                                <div className="flex justify-between">
                                    <div className="flex flex-1 max-w-[calc(100%-24px)]">
                                        <div className="mr-4.5">
                                            <Link href="/danphuongshop98">
                                                <Image
                                                    src="/example_profile2.jpeg"
                                                    alt="danphuongshop98 profile picture"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8 rounded-full"
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-1 text-sm group">
                                            <div className="inline-flex mr-1">
                                                <Link
                                                    href="/danphuongshop98"
                                                    className="hover:opacity-50"
                                                >
                                                    <h2 className="font-semibold">
                                                        danphuongshop98
                                                    </h2>
                                                </Link>
                                            </div>
                                            <div className="inline">Đẹp quá em gái ơi !!</div>
                                            <div className="relative flex mt-2 mb-1 text-xs text-secondaryText">
                                                <div className="relative">
                                                    <span className="mr-3">8w</span>
                                                    <span className="mr-3 font-semibold">
                                                        3 likes
                                                    </span>
                                                    <span
                                                        className="mr-3 font-semibold"
                                                        role="button"
                                                    >
                                                        Reply
                                                    </span>
                                                    <div
                                                        role="button"
                                                        className="absolute hidden p-2 -translate-y-1/2 top-1/2 -right-10 group-hover:block"
                                                    >
                                                        <IoEllipsisHorizontal size={18} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="mt-2 h-fit text-[rgb(38,38,38)] hover:opacity-50"
                                        role="button"
                                    >
                                        <IoHeartOutline size={14} />
                                    </div>
                                </div>
                                <div className="mt-4 ml-[54px]">
                                    <button className="flex items-center">
                                        <div className="h-[1px] w-6 border-b border-solid border-secondaryText align-middle mr-4"></div>
                                        <span className="text-xs font-semibold text-secondaryText">
                                            View replies (3)
                                        </span>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="px-4 pb-4 pt-1.5 mt-1 border-t border-solid border-separator">
                        <div className="pb-1">
                            <PostActions
                                isLiked={isLiked}
                                handleToggleLiked={() => setIsLiked(!isLiked)}
                                controls={controls}
                            />
                        </div>
                        <div className="text-sm font-semibold">53 likes</div>
                        <div className="text-xs text-secondary">26 minutes ago</div>
                    </div>
                    <form className="pt-1.5 pr-4 flex items-center border-t border-solid border-separator pb-1.5">
                        <button className="px-4 py-2 text-black" type="button">
                            <IoHappyOutline size={24} />
                        </button>
                        <PostCommentInput
                            onChange={handleTypeComment}
                            value={commentText}
                            autoComplete="off"
                            autoCorrect="off"
                            placeholder="Add a comment..."
                            className="flex-1"
                            rows={1}
                        />
                        <button type="submit" className="ml-2 text-sm font-semibold text-primary">
                            Post
                        </button>
                    </form>
                </div>
            </article>
        </>
    );
};

export default PostModal;
