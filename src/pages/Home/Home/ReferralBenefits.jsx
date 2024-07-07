import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FaGraduationCap } from 'react-icons/fa';
import ReferralModal from './ReferalModal'; // Import the ReferralModal component

const ReferralBenefits = () => {
    const [enrolled, setEnrolled] = useState(false); // State for Enrolled toggle
    const [selectedProgram, setSelectedProgram] = useState(null); // State for selected program
    const [referralPrograms, setReferralPrograms] = useState([]); // State for referral programs
    const [displayAllPrograms, setDisplayAllPrograms] = useState(false); // State for displaying all programs
    const [modalOpen, setModalOpen] = useState(false); // State for modal open/close

    useEffect(() => {
        // Fetch the JSON file from the public folder
        fetch('/referralPrograms.json')
            .then(response => response.json())
            .then(data => {
                setReferralPrograms(data);
                setSelectedProgram(data[0]); // Set the first program as default selected
            })
            .catch(error => console.error('Error fetching the JSON file:', error));
    }, []);

    const menuItems = [
        'All Program',
        'Product Management',
        'Strategy & Leadership',
        'Business Management',
        'Fintech',
        'Senior Management',
        'Data Science',
        'Digital Transformation',
        'Business Analytics',
    ];

    const handleMenuItemClick = (menuItem) => {
        if (menuItem === 'All Program') {
            setDisplayAllPrograms(true);
            setSelectedProgram(null);
        } else {
            setDisplayAllPrograms(false);
            const program = referralPrograms.find(p => p.programName.includes(menuItem));
            setSelectedProgram(program);
        }
    };

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <div className="max-w-7xl mx-auto flex justify-center mt-10 space-x-10">
            {/* Left Menu Stack */}
            <div className="space-y-4 capitalize bg-white shadow-lg p-2 my-10 rounded-e-md">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-gray-100 p-4 cursor-pointer capitalize ${displayAllPrograms && item === 'All Program' ? 'bg-blue-500 text-white' : selectedProgram && selectedProgram.programName.includes(item) ? 'bg-blue-500 text-white' : ''}`}
                        onClick={() => handleMenuItemClick(item)}
                    >
                        <div className=''>
                            {item}
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Content */}
            <div className="flex-1">
                {/* Enrolled Toggle */}
                <div className="flex justify-end mb-4">
                    <label htmlFor="enrolledToggle" className="mr-2">
                        Enrolled
                    </label>
                    <input
                        type="checkbox"
                        id="enrolledToggle"
                        className="toggle toggle-info"
                        checked={enrolled}
                        onChange={() => setEnrolled(!enrolled)}
                    />
                </div>

                {/* Table */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <table className="min-w-full border-collapse table-fixed">
                        <thead className="bg-blue-500 text-white">
                            <tr className="border-gray-300">
                                <th className="px-4 py-2 border-r">Programs</th>
                                <th className="px-4 py-2 border-r">Referrer Bonus</th>
                                <th className="px-4 py-2">Referee Bonus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayAllPrograms
                                ? referralPrograms.map((program, index) => (
                                    <tr
                                        key={index}
                                        className={`border-gray-300 capitalize ${selectedProgram && selectedProgram.programName === program.programName ? 'bg-blue-500 text-white' : ''}`}
                                        onClick={() => handleMenuItemClick(program.programName)}
                                    >
                                        <td className="flex items-center px-4 py-2 border-r">
                                            <FaGraduationCap className="mr-2" />
                                            {program.programName}
                                        </td>
                                        <td className="px-4 py-2 border-r">{program.referrerBonus}</td>
                                        <td className="px-4 py-2">{program.refereeBonus}</td>
                                    </tr>
                                ))
                                : selectedProgram && (
                                    <tr
                                        className="border-gray-300 capitalize"
                                        onClick={() => handleMenuItemClick(selectedProgram.programName)}
                                    >
                                        <td className="flex items-center px-4 py-2 border-r">
                                            <FaGraduationCap className="mr-2" />
                                            {selectedProgram.programName}
                                        </td>
                                        <td className="px-4 py-2 border-r">{selectedProgram.referrerBonus}</td>
                                        <td className="px-4 py-2">{selectedProgram.refereeBonus}</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>

                {/* Show More Button */}
                <div className="flex justify-end mt-4">
                    <button className="flex items-center space-x-1 border text-gray-600  p-2 px-5 rounded-xl">
                        Show More <IoIosArrowDown className="mt-1 pl-2 w-8" />                        
                    </button>
                </div>

                {/* Refer Now Button */}
                <div className="flex justify-center mt-4">
                    <button 
                        className="bg-blue-500 text-white px-6 py-2 rounded-md"
                        onClick={handleModalOpen}
                    >
                        Refer Now 
                    </button>
                </div>
            </div>

            {/* Referral Modal */}
            <ReferralModal open={modalOpen} onClose={handleModalClose} />
        </div>
    );
};

export default ReferralBenefits;
