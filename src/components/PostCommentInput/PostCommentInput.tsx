import React from 'react';

interface PostCommentInputProps extends Omit<React.HTMLProps<HTMLTextAreaElement>, 'onChange'> {
    value: string;
    onChange: (value: string) => void;
}

const PostCommentInput: React.FC<PostCommentInputProps> = ({
    onChange,
    value,
    className,
    ...props
}) => {
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
        onChange(e.target.value);

        // max height of auto resizing textarea element is 80px
        const maxHeight = 80;
        e.target.style.height = 'auto';
        e.target.style.height = Math.min(e.target.scrollHeight, maxHeight) + 'px';
    };

    return (
        <textarea
            onChange={handleChange}
            value={value}
            className={`resize-none text-sm leading-[18px] outline-none h-4.5 ${className}`}
            {...props}
        />
    );
};

export default PostCommentInput;
