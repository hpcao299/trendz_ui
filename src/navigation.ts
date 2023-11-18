import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'zh', 'vi'] as const;
export const pathnames = {};

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
    locales,
    pathnames,
});
