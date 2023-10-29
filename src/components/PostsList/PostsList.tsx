import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoChatbubble, IoHeart } from 'react-icons/io5';

const PostsList: React.FC = () => {
    return (
        <div className="flex flex-wrap gap-1">
            {Array.from({ length: 13 }).map((a, i) => (
                <div className="relative flex-[calc(33.33%-8px)] max-w-[calc(33.33%-8px)] w-[calc(33.33%-8px)] group">
                    <Link href={`/p/${new Date().getTime()}`} key={i} className="block">
                        <div className="w-full overflow-hidden pb-[100%]">
                            <Image
                                src="/example_post1.jpeg"
                                alt="Photo by Thanh Thuy"
                                width={309}
                                height={309}
                                className="absolute top-0 left-0 object-cover w-full h-full"
                            />
                        </div>
                        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-[rgb(0,0,0,0.3)] opacity-0 group-hover:opacity-100 flex items-center justify-center">
                            <div className="flex items-center text-base font-bold text-white">
                                <div className="flex items-center mr-7">
                                    <IoHeart size={20} />
                                    <span className="ml-1.5">78</span>
                                </div>
                                <div className="flex items-center">
                                    <IoChatbubble size={20} />
                                    <span className="ml-1.5">78</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute text-white top-2 right-2">
                            <svg
                                aria-label="Carousel"
                                fill="currentColor"
                                height="22"
                                role="img"
                                viewBox="0 0 48 48"
                                width="22"
                            >
                                <title>Carousel</title>
                                <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
                            </svg>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default PostsList;
