import { useTranslations } from 'next-intl';
import Image from 'next/image';

const AccountEditPage = () => {
    const t = useTranslations('Settings');

    return (
        <div>
            <div className="mt-8 mb-6 ml-12 text-2xl">{t('edit-profile')}</div>
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
                        className="text-sm font-semibold hover:text-black text-primary dark:hover:text-darkLink"
                    >
                        {t('change-profile-photo')}
                    </div>
                </div>
                <form action="" className="my-4">
                    <div className="flex mb-4">
                        <aside className="px-8 flex-[0_0_194px] text-right">
                            <label htmlFor="website" className="text-base font-semibold">
                                {t('website')}
                            </label>
                        </aside>
                        <div className="flex-1 pr-[60px]">
                            <div className="max-w-[355px]">
                                <input
                                    name="website"
                                    id="website"
                                    disabled
                                    type="text"
                                    placeholder={t('website')}
                                    className="border border-solid px-2.5 h-8 text-base border-btnHover dark:bg-highlightBackground dark:border-darkSeparator rounded-sm w-full"
                                />
                                <div className="my-2 text-xs text-secondaryText">
                                    {t('website-desc')}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <aside className="px-8 flex-[0_0_194px] text-right">
                            <label htmlFor="bio" className="text-base font-semibold">
                                {t('bio')}
                            </label>
                        </aside>
                        <div className="flex-1 pr-[60px]">
                            <div className="max-w-[355px]">
                                <textarea
                                    name="bio"
                                    id="bio"
                                    placeholder={t('bio')}
                                    className="border border-solid px-2.5 py-1.5 h-8 text-base border-btnHover dark:border-stroke bg-transparent rounded-sm w-full min-h-[60px]"
                                    autoComplete="false"
                                ></textarea>
                                <div className="text-xs text-secondaryText">3 / 150</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <aside className="px-8 flex-[0_0_194px] text-right">
                            <label htmlFor="gender" className="text-base font-semibold">
                                {t('gender')}
                            </label>
                        </aside>
                        <div className="flex-1 pr-[60px]">
                            <div className="max-w-[355px]">
                                <button className="w-full hover:opacity-50" type="button">
                                    <input
                                        name="gender"
                                        id="gender"
                                        value="Male"
                                        className="border border-solid px-2.5 py-1.5 h-8 text-base border-btnHover dark:border-stroke bg-transparent rounded-sm w-full outline-none select-none"
                                        readOnly
                                    />
                                </button>
                                <div className="my-2 text-xs text-secondaryText">
                                    {t('gender-desc')}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <aside className="px-8 flex-[0_0_194px]"></aside>
                        <div className="flex-1 pr-[60px]">
                            <div className="max-w-[355px]">
                                <button disabled type="submit" className="btn-sm btn-primary">
                                    {t('submit')}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AccountEditPage;
