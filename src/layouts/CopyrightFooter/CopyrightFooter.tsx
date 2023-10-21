import React from 'react';

const CopyrightFooter: React.FC = () => {
    return (
        <div className="flex items-center justify-center pb-12 text-xs text-secondaryText">
            <div className="relative inline-block overflow-hidden w-max">
                <select className="w-full outline-none">
                    <option value="en">English</option>
                    <option value="vi">Tiếng Việt</option>
                </select>
            </div>
            <span className="ml-4">© 2023 Trendz from Jack Cao</span>
        </div>
    );
};

export default CopyrightFooter;
