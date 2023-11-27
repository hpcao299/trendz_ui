import classNames from 'classnames';
import React, { useState } from 'react';

interface InputFieldProps extends React.HTMLProps<HTMLInputElement> {}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>((params, ref) => {
    const [value, setValue] = useState<string>('');
    const { name, placeholder, ...props } = params;

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        setValue(e.target.value);
    };

    return (
        <div
            className="w-full bg-[#fafafa] dark:bg-transparent dark:border-stroke border border-solid border-separator rounded-sm mb-1.5 focus-within:border-focusStroke"
            ref={null}
        >
            <label htmlFor={name} className="relative cursor-text">
                <span
                    className={classNames(
                        'absolute text-xs leading-9 h-9 left-2 text-secondaryText dark:text-darkSecondaryText transition-transform duration-100 origin-left select-none right-0',
                        { 'placeholder-text-animate': value.length > 0 },
                    )}
                >
                    {placeholder}
                </span>
                <input
                    id={name}
                    className={classNames(
                        'text-sm pl-2 pb-1.5 pt-2 bg-transparent w-[calc(100%-8px)] outline-none h-9',
                        { 'text-xs pb-0.5 pl-2 pt-3.5': value.length > 0 },
                    )}
                    ref={ref}
                    {...props}
                    value={value}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
});

export default InputField;
