'use client'
import React, { useState } from 'react';

const FAQ = ({question,answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="max-w-5xl mx-auto mt-8">
        <div className="border border-gray-200 rounded-lg shadow-md">
            <div
            className="flex items-center justify-between px-4 py-3 cursor-pointer"
            onClick={toggleFAQ}
            >
            <h2 className="text-lg font-medium"> {question}  </h2>
            <svg
                className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                />
            </svg>
            </div>
            {isOpen && (
            <div className="px-4 py-3 border-t border-gray-200">
                <p className=" text-base leading-7 font-normal">
                    {answer}
                </p>
            </div>
            )}
        </div>
        </div>
    );
};

export default FAQ;
