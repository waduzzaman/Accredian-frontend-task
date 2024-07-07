// src/components/ReferralModal.js

import React from 'react';

const ReferralModal = ({ open, onClose }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center ${open ? 'visible' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-lg font-semibold mb-4">Refer a Friend</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Your Name</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Your Email</label>
                        <input
                            type="email"
                            className="input input-bordered w-full"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Friend's Name</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Enter your friend's name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Friend's Email</label>
                        <input
                            type="email"
                            className="input input-bordered w-full"
                            placeholder="Enter your friend's email"
                            required
                        />
                    </div>
                </form>
                <div className="flex justify-end mt-4 space-x-2">
                    <button
                        className="btn btn-outline btn-sm"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={handleClose}
                    >
                        Refer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReferralModal;
