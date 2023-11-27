import classNames from 'classnames';
import React from 'react';

interface InputFieldProps extends React.HTMLProps<HTMLInputElement> {
    error?: any;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>((params, ref) => {
    const { name, placeholder, error, value, ...props } = params;

    return (
        <div
            ref={null}
            className={classNames(
                'w-full bg-[#fafafa] dark:bg-transparent dark:border-stroke border border-solid border-separator rounded-sm mb-1.5 focus-within:border-focusStroke flex items-center',
            )}
        >
            <label htmlFor={name} className="relative cursor-text flex-1 max-w-[calc(100%-8px)]">
                <span
                    className={classNames(
                        'absolute text-xs leading-9 h-9 left-2 text-secondaryText dark:text-darkSecondaryText transition-transform duration-100 origin-left select-none right-0',
                        { 'placeholder-text-animate': value },
                    )}
                >
                    {placeholder}
                </span>
                <input
                    ref={ref}
                    id={name}
                    className={classNames(
                        'text-sm pl-2 pb-1.5 pt-2 bg-transparent w-full outline-none h-9',
                        { 'text-xs pb-0.5 pl-2 pt-3.5': value },
                    )}
                    {...props}
                />
            </label>
            {error && <div className="mx-2 h-[22px] w-[22px] bg-error-icon"></div>}
        </div>
    );
});

export default InputField;
