// 'use client';

// import { InputField } from '@/components/custom-fields';
// import config from '@/config';
// import constants from '@/constants';
// import { NextPage } from 'next';
// import { useTranslations } from 'next-intl';
// import Link from 'next-intl/link';
// import Image from 'next/image';
// import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// interface ILoginForm {
//     email: string;
//     password: string;
// }

// const defaultValues: ILoginForm = {
//     email: '',
//     password: '',
// };

// const LoginPage: NextPage = () => {
//     const {
//         control,
//         handleSubmit,
//         formState: { isValid },
//     } = useForm<ILoginForm>({ defaultValues });
//     const t = useTranslations('Auth');

//     const onSubmit: SubmitHandler<ILoginForm> = data => {
//         console.log(data);
//     };

//     return (
//         <>
//             <div className="w-[350px] border border-solid border-separator dark:border-darkSeparator py-2.5 px-10 flex flex-col items-center h-max mb-2.5">
//                 <div className="mb-14 mt-9">
//                     <Image
//                         src="/trendz_logo.png"
//                         alt="Trendz Logo"
//                         width={198}
//                         height={32}
//                         priority
//                         className="w-auto h-8 px-3 dark:hidden"
//                     />
//                     <Image
//                         src="/trendz_dark_logo.png"
//                         alt="Trendz Logo"
//                         width={198}
//                         height={32}
//                         priority
//                         className="hidden w-auto h-8 px-3 dark:inline-block"
//                     />
//                 </div>
//                 <form onSubmit={handleSubmit(onSubmit)} className="w-full mb-2">
//                     <Controller
//                         name="email"
//                         control={control}
//                         rules={{
//                             required: true,
//                             pattern: constants.regExps.email,
//                         }}
//                         render={({ field }) => (
//                             <InputField type="email" placeholder={t('email')} {...field} />
//                         )}
//                     />
//                     <Controller
//                         name="password"
//                         control={control}
//                         rules={{
//                             required: true,
//                             minLength: 6,
//                         }}
//                         render={({ field }) => (
//                             <InputField
//                                 type="password"
//                                 placeholder={t('password')}
//                                 showHidden
//                                 {...field}
//                             />
//                         )}
//                     />
//                     <button
//                         disabled={!isValid}
//                         className="w-full mt-3 btn-sm btn-primary disabled:opacity-70"
//                     >
//                         {t('login')}
//                     </button>
//                 </form>
//                 <div className="flex items-center w-full mt-3">
//                     <div className="flex-1 h-[1px] bg-separator dark:bg-darkSeparator"></div>
//                     <div className="font-bold text-sm mx-4.5 text-secondaryText dark:text-darkSecondaryText">
//                         {t('or')}
//                     </div>
//                     <div className="flex-1 h-[1px] bg-separator dark:bg-darkSeparator"></div>
//                 </div>
//                 <button className="flex items-center bg-transparent outline-none text-[#385185] dark:text-[#5B84B1] text-sm font-semibold mt-6 mb-5">
//                     <span className="inline-block w-4 h-4 mr-2 bg-facebook-icon-primary"></span>{' '}
//                     {t('login-with-facebook')}
//                 </button>
//                 <Link
//                     href={config.routes.passwordReset}
//                     className="text-xs text-link dark:text-primary mb-2.5"
//                 >
//                     {t('forgot-password')}
//                 </Link>
//             </div>
//             <div className="w-[350px] border border-solid border-separator dark:border-darkSeparator flex justify-center items-center py-6">
//                 <span className="text-sm">
//                     {t('dont-have-an-account')}{' '}
//                     <Link href={config.routes.signup} className="text-primary">
//                         {t('signup')}
//                     </Link>
//                 </span>
//             </div>
//             <button>signin with google</button>
//         </>
//     );
// };

// export default LoginPage;

'use client';

import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const LoginPage = () => {
    const searchParams = useSearchParams();
    const t = useTranslations('Auth');

    const error = searchParams.get('error');

    const handleLoginGoogle = () => {
        signIn('google');
    };

    return (
        <div className="flex flex-col flex-1 w-full">
            <div className="flex items-center justify-center w-full py-5 border-b border-solid border-separator dark:border-darkSeparator">
                <Image
                    src="/trendz_logo.png"
                    alt="Trendz Logo"
                    width={174}
                    height={32}
                    priority
                    className="w-auto h-[32px] dark:hidden"
                />
                <Image
                    src="/trendz_dark_logo.png"
                    alt="Trendz Logo"
                    width={174}
                    height={32}
                    priority
                    className="w-auto h-[32px] hidden dark:inline-block"
                />
            </div>
            <div className="flex flex-col items-center justify-center flex-1 w-full">
                {error && (
                    <div
                        className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                        role="alert"
                    >
                        <svg
                            className="flex-shrink-0 inline w-4 h-4 me-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>{t('error')}</div>
                    </div>
                )}

                <button
                    className="flex items-center h-16 px-4 py-3 text-base font-semibold rounded-lg btn-secondary min-w-[300px]"
                    onClick={handleLoginGoogle}
                >
                    <Image
                        src="https://authjs.dev/img/providers/google.svg"
                        alt="Google Logo"
                        height={24}
                        width={24}
                    />
                    <span className="flex-1 text-center">{t('login-with-google')}</span>
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
