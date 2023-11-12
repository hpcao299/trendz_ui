import { useTranslations } from 'next-intl';
import { IoCheckmarkCircle } from 'react-icons/io5';

const LanguagePreferences = () => {
    const t = useTranslations('Settings');

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
                    <div
                        className="flex items-center justify-between h-12 px-4 py-3 text-base transition-colors duration-100 rounded-lg hover:bg-lightHover dark:hover:bg-darkLightHover"
                        role="button"
                    >
                        <span>English</span>
                        <div className="relative w-6 h-6 border border-solid rounded-full border-separator dark:border-darkSeparator text-primary">
                            <IoCheckmarkCircle
                                size={28}
                                className="absolute -top-[3px] -left-[3px]"
                            />
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-between h-12 px-4 py-3 text-base transition-colors duration-100 rounded-lg hover:bg-lightHover dark:hover:bg-darkLightHover text-secondaryText dark:text-darkSecondaryText"
                        role="button"
                    >
                        <span>Tiếng Việt</span>
                        <div className="relative w-6 h-6 border border-solid rounded-full border-separator dark:border-darkSeparator text-primary">
                            {/* <IoCheckmarkCircle
                                        size={28}
                                        className="absolute -top-[3px] -left-[3px]"
                                    /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguagePreferences;
