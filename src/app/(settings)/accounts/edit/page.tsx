import { CopyrightFooter } from '@/layouts';
import Image from 'next/image';
import React from 'react';

const AccountEditPage = () => {
    return (
        <>
            <div className="py-9 min-h-with-copyright-footer">
                <div className="mt-8 mb-6 text-2xl ml-11">Edit profile</div>
                <div className="mt-8">
                    <div className="ml-[194px] relative">
                        <Image
                            src="/example_profile.jpeg"
                            alt="Change profile photo"
                            width={38}
                            height={38}
                            className="w-[38px] h-[38px] rounded-full absolute right-[calc(100%+32px)]"
                        />
                        <span className="block text-base">t_thuy.1607</span>
                        <div
                            role="button"
                            className="text-sm font-semibold hover:text-black text-primary"
                        >
                            Change profile photo
                        </div>
                    </div>
                    <form action="" className="my-4">
                        <div className="flex mb-4">
                            <aside className="px-8 flex-[0_0_194px] text-right">
                                <label htmlFor="website" className="text-base font-semibold">
                                    Website
                                </label>
                            </aside>
                            <div className="flex-1 pr-[60px]">
                                <div className="max-w-[355px]">
                                    <input
                                        name="website"
                                        id="website"
                                        disabled
                                        type="text"
                                        placeholder="Website"
                                        className="border border-solid px-2.5 h-8 text-base border-btnHover rounded-sm w-full"
                                    />
                                    <div className="my-2 text-xs text-secondaryText">
                                        Editing your links is only available on mobile. Visit the
                                        Instagram app and edit your profile to change the websites
                                        in your bio.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <aside className="px-8 flex-[0_0_194px] text-right">
                                <label htmlFor="bio" className="text-base font-semibold">
                                    Bio
                                </label>
                            </aside>
                            <div className="flex-1 pr-[60px]">
                                <div className="max-w-[355px]">
                                    <textarea
                                        name="bio"
                                        id="bio"
                                        placeholder="Bio"
                                        className="border border-solid px-2.5 py-1.5 h-8 text-base border-btnHover rounded-sm w-full min-h-[60px]"
                                    ></textarea>
                                    <div className="text-xs text-secondaryText">3 / 150</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <aside className="px-8 flex-[0_0_194px] text-right">
                                <label htmlFor="gender" className="text-base font-semibold">
                                    Gender
                                </label>
                            </aside>
                            <div className="flex-1 pr-[60px]">
                                <div className="max-w-[355px]">
                                    <button className="w-full hover:opacity-50" type="button">
                                        <input
                                            name="gender"
                                            id="gender"
                                            value="Male"
                                            className="border border-solid px-2.5 py-1.5 h-8 text-base border-btnHover rounded-sm w-full outline-none select-none"
                                            readOnly
                                        />
                                    </button>
                                    <div className="my-2 text-xs text-secondaryText">
                                        This won’t be part of your public profile.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-4">
                            <aside className="px-8 flex-[0_0_194px]"></aside>
                            <div className="flex-1 pr-[60px]">
                                <div className="max-w-[355px]">
                                    <button
                                        disabled
                                        type="submit"
                                        className="h-8 px-4 text-sm font-semibold text-white rounded-lg bg-primary hover:opacity-80"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <CopyrightFooter />
        </>
    );
};

export default AccountEditPage;
