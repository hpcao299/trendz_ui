import { IoCheckmarkCircle } from 'react-icons/io5';

const LanguagePreferences = () => {
    return (
        <div className="mt-8 ml-12 mr-16">
            <div className="mb-4 text-2xl">Language preferences</div>
            <div className="text-base font-bold">App language</div>
            <div className="mt-2 mb-5 text-sm text-secondaryText">
                See buttons, titles, and other texts on Instagram in your preferred language.
            </div>
            <div>
                <input
                    type="text"
                    className="w-full px-4 py-3 text-base rounded-lg outline-none h-[42px] bg-btnBackground"
                    placeholder="Search"
                    autoComplete="false"
                />
                <div className="overflow-y-auto h-[476px]">
                    <div
                        className="flex items-center justify-between h-12 px-4 py-3 text-base transition-colors duration-100 rounded-lg hover:bg-lightHover"
                        role="button"
                    >
                        <span>English</span>
                        <div className="relative w-6 h-6 border border-solid rounded-full border-separator text-primary">
                            <IoCheckmarkCircle
                                size={28}
                                className="absolute -top-[3px] -left-[3px]"
                            />
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-between h-12 px-4 py-3 text-base transition-colors duration-100 rounded-lg hover:bg-lightHover text-secondaryText"
                        role="button"
                    >
                        <span>Tiếng Việt</span>
                        <div className="relative w-6 h-6 border border-solid rounded-full border-separator text-primary">
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
