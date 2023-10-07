import React from 'react';

const Spinner = () => {
    return (
        <div className="flex items-center justify-center mt-4">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#36B776]"></div>
        </div>
    );
};

export default Spinner;