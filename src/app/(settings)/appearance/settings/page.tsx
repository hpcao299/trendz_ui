import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const AppearanceSetting = () => {
    return (
        <div className="ml-12 mr-16">
            <div className="mt-8 text-2xl">Switch appearance</div>
            <div className="mt-2 mb-5 text-sm text-secondaryText">
                Customize your app's appearance to match your surroundings and enjoy a comfortable
                visual experience.
            </div>
            <div>
                <div
                    className="flex items-center justify-between h-12 px-4 py-3 text-base transition-colors duration-100 rounded-lg hover:bg-lightHover"
                    role="button"
                >
                    <div className="flex items-center">
                        <IoSunnyOutline size={24} />
                        <span className="ml-2">Day theme</span>
                    </div>
                    <div className="relative w-6 h-6 border border-solid rounded-full border-separator bg-primary"></div>
                </div>
                <div
                    className="flex items-center justify-between h-12 px-4 py-3 text-base transition-colors duration-100 rounded-lg hover:bg-lightHover text-secondaryText"
                    role="button"
                >
                    <div className="flex items-center">
                        <IoMoonOutline size={22} />
                        <span className="ml-2">Night theme</span>
                    </div>
                    <div className="relative w-6 h-6 border border-solid rounded-full border-separator text-primary"></div>
                </div>
            </div>
        </div>
    );
};

export default AppearanceSetting;
