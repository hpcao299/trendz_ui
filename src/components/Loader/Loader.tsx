import React from 'react';

const Loader: React.FC = () => {
    const beforePseudoClass =
        'before:block before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0 before:m-auto before:h-8 before:w-8 before:border-[3px] before:border-solid before:border-black dark:before:border-darkSecondaryText dark:before:border-b-transparent before:border-b-transparent before:rounded-full before:animate-loader-border';
    const afterPseudoClass =
        'after:absolute after:top-0 after:right-0 after:left-0 after:bottom-0 after:m-auto after:h-1.5 after:w-1.5 after:bg-black dark:after:bg-darkSecondaryText after:rounded-full after:animate-loader-point';

    return (
        <div className={`h-8 w-8 block relative`}>
            <span
                className={`${beforePseudoClass} ${afterPseudoClass} absolute top-0 bottom-0 left-0 right-0 block w-8 h-8 m-auto`}
            ></span>
        </div>
    );
};

export default Loader;
