import React, { useState } from 'react';

const FAQSection = () => {
    const [activeMenu, setActiveMenu] = useState('Eligibility'); // State to track active menu

    // FAQ data - replace with actual FAQ content
    const faqs = {
        Eligibility: [
            { question: 'Who is eligible to participate?', answer: '...' },
            { question: 'What are the eligibility criteria?', answer: '...' },
        ],
        'How to use': [
            { question: 'How do I use this service?', answer: '...' },
            { question: 'What are the steps to use this feature?', answer: '...' },
        ],
        'Terms & Conditions': [
            { question: 'What are the terms of service?', answer: '...' },
            { question: 'What are the conditions for participation?', answer: '...' },
        ],
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu); // Set active menu on click
    };

    return (
        <div className="max-w-7xl mx-auto flex justify-center mt-10 space-x-10">

         
            {/* Left Menu */}
            <div className="space-y-4">
                {Object.keys(faqs).map((menu, index) => (
                    <div
                        key={index}
                        className={`p-4 cursor-pointer capitalize bg-gray-100 ${activeMenu === menu ? 'bg-blue-500 text-white' : ''}`}
                        onClick={() => handleMenuClick(menu)}
                    >
                        {menu}
                    </div>
                ))}
            </div>

            {/* Right Content */}
            <div className="flex-1">
                {/* FAQ Content */}
                <div className="mt-4">
                    {faqs[activeMenu].map((faq, index) => (
                        <div key={index} className="border-b border-gray-300">
                            <div className="flex justify-between items-center p-4 cursor-pointer">
                                <div className="text-lg font-semibold">{faq.question}</div>
                                <div className="text-gray-600">{/* Add icon for toggle */}</div>
                            </div>
                            <div className={`p-4 ${index === 0 ? '' : 'hidden'}`}>{faq.answer}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
