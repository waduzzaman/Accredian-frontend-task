import React from 'react';
import { FaHeadset, FaComment, FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowRightArrowLeft, FaArrowsTurnRight } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';

const GetInTouch = () => {
    return (
        <div className="max-w-7xl mx-auto h-72 flex items-center justify-center my-10 px-4 bg-blue-500 rounded-lg gap-5">
            {/* Customer Care Icon */}
            <div className='bg-white rounded-lg p-3 border-4 border-blue-300'>
                <FaHeadset className="text-4xl text-blue-500" />
            </div>

            {/* Headings and Chat Bubble */}
            <div className="ml-8 text-white">
                <h3 className="text-xl font-semibold ">Get in Touch with Us</h3>
                <p className="0 mt-1">Have questions? We're here to help!</p>
                {/*  */}
            </div>

            {/* Get in Touch Button */}
            <div className="mr-0 ml-36 flex items-center rounded-md bg-white">
                <div><h2 className="text-blue-500 px-2 py-2 rounded-md capitalize">get in touch</h2></div>
                <div><RiArrowRightSLine className="text-blue-500" /></div>
            
        </div>
            
        </div>
    );
};

export default GetInTouch;
