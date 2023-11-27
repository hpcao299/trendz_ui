'use client';

import { InputField } from '@/components/custom-fields';
import config from '@/config';
import { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const SignupPage: NextPage = () => {
    const t = useTranslations('Auth');

    return (
        <>
            <div className="w-[350px] border border-solid border-separator dark:border-darkSeparator py-2.5 px-10 flex flex-col items-center h-max mb-2.5">
                <div className="mb-6 mt-9">
                    <Image
                        src="/trendz_logo.png"
                        alt="Trendz Logo"
                        width={198}
                        height={32}
                        priority
                        className="w-auto h-8 px-3 dark:hidden"
                    />
                    <Image
                        src="/trendz_dark_logo.png"
                        alt="Trendz Logo"
                        width={198}
                        height={32}
                        priority
                        className="hidden w-auto h-8 px-3 dark:inline-block"
                    />
                </div>
                <span className="text-base font-bold leading-5 text-center text-secondaryText dark:text-darkSecondaryText">
                    {t('signup-desc')}
                </span>
                <button className="w-full px-4 py-2 font-bold text-white bg-primary hover:bg-darkPrimary rounded-lg mt-4.5 text-sm flex items-center justify-center">
                    <span className="inline-block w-4 h-4 mr-2 bg-facebook-icon"></span>{' '}
                    {t('login-with-facebook')}
                </button>
                <div className="my-4.5 flex items-center w-full">
                    <div className="flex-1 h-[1px] bg-separator dark:bg-darkSeparator"></div>
                    <div className="font-bold text-sm mx-4.5 text-secondaryText dark:text-darkSecondaryText">
                        {t('or')}
                    </div>
                    <div className="flex-1 h-[1px] bg-separator dark:bg-darkSeparator"></div>
                </div>
                <form action="" className="w-full mb-7">
                    <InputField name="email" type="email" placeholder={t('email')} />
                    <InputField name="full_name" type="text" placeholder={t('fullname')} />
                    <InputField name="username" type="text" placeholder={t('username')} />
                    <InputField name="password" type="password" placeholder={t('password')} />
                    <div className="mb-2.5 mt-3.5 text-xs text-secondaryText text-center">
                        {t('signup-terms-desc')} <strong>{t('signup-terms')}</strong>
                    </div>
                    <button className="w-full mt-3 btn-sm btn-primary">{t('signup')}</button>
                </form>
            </div>
            <div className="w-[350px] border border-solid border-separator dark:border-darkSeparator flex justify-center items-center py-6">
                <span className="text-sm">
                    {t('have-an-account')}{' '}
                    <Link href={config.routes.login} className="text-primary">
                        {t('login')}
                    </Link>
                </span>
            </div>
        </>
    );
};

export default SignupPage;
