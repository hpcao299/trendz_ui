'use client';

import { InputField } from '@/components/custom-fields';
import config from '@/config';
import { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import Image from 'next/image';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface IPasswordResetForm {
    identity: string;
}

const defaultValues: IPasswordResetForm = {
    identity: '',
};

const PasswordResetPage: NextPage = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IPasswordResetForm>({ defaultValues });
    const t = useTranslations('Auth');

    const onSubmit: SubmitHandler<IPasswordResetForm> = data => {
        console.log(data);
    };

    return (
        <div className="flex flex-col flex-1 w-full">
            <div className="w-full border-b border-solid border-separator dark:border-darkSeparator">
                <div className="w-full max-w-[calc(935px+40px)] flex items-center px-5 h-desktop-nav mx-auto">
                    <Link href={config.routes.home}>
                        <Image
                            src="/trendz_logo.png"
                            alt="Trendz Logo"
                            width={130}
                            height={24}
                            priority
                            className="w-auto h-[24px] dark:hidden"
                        />
                        <Image
                            src="/trendz_dark_logo.png"
                            alt="Trendz Logo"
                            width={130}
                            height={24}
                            priority
                            className="w-auto h-[24px] hidden dark:inline-block"
                        />
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-center flex-1 w-full">
                <div className="w-[388px] border border-solid border-separator dark:border-darkSeparator flex flex-col items-center h-max mb-2.5">
                    <div className="px-11">
                        <div className="flex justify-center mt-6 mb-4">
                            <div className="w-24 h-24 bg-lock-icon"></div>
                        </div>
                        <div className="mb-3 text-base font-semibold text-center">
                            Trouble logging in?
                        </div>
                        <div className="text-sm text-center text-secondaryText dark:text-darkSecondaryText">
                            Enter your email, phone, or username and we'll send you a link to get
                            back into your account.
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-4">
                            <Controller
                                name="identity"
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field }) => (
                                    <InputField
                                        type="email"
                                        error={Boolean(errors.identity)}
                                        placeholder={t('email')}
                                        {...field}
                                    />
                                )}
                            />
                            <button
                                disabled={!isValid}
                                className="w-full mt-2 btn-sm btn-primary disabled:opacity-70"
                            >
                                Send login link
                            </button>
                        </form>
                        <div className="mb-4.5 mt-8 flex items-center w-full">
                            <div className="flex-1 h-[1px] bg-separator dark:bg-darkSeparator"></div>
                            <div className="font-bold text-sm mx-4.5 text-secondaryText dark:text-darkSecondaryText">
                                {t('or')}
                            </div>
                            <div className="flex-1 h-[1px] bg-separator dark:bg-darkSeparator"></div>
                        </div>
                        <Link
                            href={config.routes.signup}
                            className="block text-sm font-semibold text-center text-highlightBackground dark:text-stroke hover:opacity-50"
                        >
                            Create new account
                        </Link>
                    </div>
                    <Link
                        href={config.routes.login}
                        className="mt-16 border border-solid border-separator h-11 bg-[#f5f5f5] dark:bg-darkBackground dark:border-darkSeparator w-full flex items-center justify-center text-sm text-secondaryText group font-semibold"
                    >
                        <span className="group-hover:opacity-50">Back to login</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PasswordResetPage;
