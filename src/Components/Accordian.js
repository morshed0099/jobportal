import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

const Accordian = ({ title, answer,isactive }) => {
    const [accordian, setAccordian] = useState(false)
    return (
        <div>
            <div>
                <div onClick={() => setAccordian(!accordian)} className='flex justify-between px-6 py-2 w-full border border-1'>
                    <p className='text-1xl font-bold'>{title}</p>
                    <MdOutlineKeyboardArrowUp className={`duration-700 ${accordian ? "rotate-180 " : ""}`} size={24} />
                </div>
                <div className={`duration-700 ${accordian ? "px-4 py-2 bg-gray-200" : "mt-0 hidden"}  `}>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default Accordian;