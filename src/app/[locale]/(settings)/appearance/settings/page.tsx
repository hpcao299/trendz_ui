import AppearanceOptions from './AppearanceOptions';

const AppearanceSettings = () => {
    return (
        <div className="ml-12 mr-16">
            <div className="mt-8 text-2xl">Switch appearance</div>
            <div className="mt-2 mb-5 text-sm text-secondaryText dark:text-secondaryText">
                Customize your app's appearance to match your surroundings and enjoy a comfortable
                visual experience.
            </div>
            <AppearanceOptions />
        </div>
    );
};

export default AppearanceSettings;
