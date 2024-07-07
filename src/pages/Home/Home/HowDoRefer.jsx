import React from 'react';

const HowDoRefer = () => {
    return (
        <div className="flex flex-col items-center relative bg-blue-50 py-10">
            <h3 className="text-2xl font-semibold mb-4 my-2">How Do <span className="text-blue-500">Refer?</span></h3>
            <div className="w-2/3 bg-blue-100">
            <img className="w-full" src="/src/assets/design.png" alt="Design" />
        </div>
            <button className="absolute bottom-10 px-12 text-white py-1 bg-blue-500 rounded-md bg-blue-00">
                Refer Now
            </button>
        </div>
    );
};

export default HowDoRefer;
