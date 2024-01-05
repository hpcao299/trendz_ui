'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { IoCheckmarkCircle } from 'react-icons/io5';

interface LanguageOptionProps {
    onClick?: () => void;
    title: string;
    isActive?: boolean;
}

const LanguagePreferences = () => {
    const t = useTranslations('Settings');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleChangeLanguage = (locale: string) => {
        router.push(pathname, { locale });
    };

    return (
        <div className="mt-8 ml-12 mr-16">
            <div className="mb-4 text-2xl">{t('lan-preferences')}</div>
            <div className="text-base font-bold">{t('app-language')}</div>
            <div className="mt-2 mb-5 text-sm text-secondaryText dark:text-secondaryText">
                {t('app-language-desc')}
            </div>
            <div>
                <input
                    type="text"
                    className="w-full px-4 py-3 text-base rounded-lg outline-none h-[42px] bg-btnBackground dark:bg-highlightBackground"
                    placeholder="Search"
                    autoComplete="false"
                />
                <div className="overflow-y-auto h-[476px]">
                    <LanguageOption
                        title="English"
                        isActive={locale === 'en'}
                        onClick={() => handleChangeLanguage('en')}
                    />
                    <LanguageOption
                        title="Tiếng Việt"
                        isActive={locale === 'vi'}
                        onClick={() => handleChangeLanguage('vi')}
                    />
                    <LanguageOption
                        title="中国人"
                        isActive={locale === 'zh'}
                        onClick={() => handleChangeLanguage('zh')}
                    />
                </div>
            </div>
        </div>
    );
};

const LanguageOption: React.FC<LanguageOptionProps> = ({ title, isActive, onClick }) => {
    return (
        <button
            className={`flex items-center justify-between h-12 px-4 py-3 text-base transition-colors duration-100 rounded-lg hover:bg-lightHover dark:hover:bg-darkLightHover w-full ${
                !isActive && 'text-secondaryText dark:text-darkSecondaryText'
            }`}
            onClick={onClick}
        >
            <span>{title}</span>
            <div className="relative w-6 h-6 border border-solid rounded-full border-separator dark:border-darkSeparator text-primary">
                {isActive && (
                    <IoCheckmarkCircle size={28} className="absolute -top-[3px] -left-[3px]" />
                )}
            </div>
        </button>
    );
};

export default LanguagePreferences;
