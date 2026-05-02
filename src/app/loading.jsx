import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100">

                <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>

                <p className="mt-4 text-gray-500 font-medium">
                    Loading...
                </p>

            </div>
        </div>
    );
};

export default Loading;