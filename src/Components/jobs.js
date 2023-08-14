import React from 'react';
import { MdLocationPin } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'


const jobs = ({ title, companyName, companyLogo, location, email, phoneNumber }) => {
    return (
        <div>
            <div className='p-4 mt-8 border rounded-md shadow-sm bg-gray-800 text-white hover:bg-gray-900 duration-1000 transition '>

                <div className='flex items-center gap-4 '>
                    <h4 className='2xl font-semibold'>{companyName}</h4>
                    <img className='w-10 h-10 rounded' src={companyLogo} alt="" />
                </div>
                <h3 className='text-2xl font-bold mb-2 p-3'>{title}</h3>
                <h4 className='flex gap-2 font-semibold'>
                    <MdLocationPin size={24} className='text-green-600' />
                    {location}
                </h4>
                <h4 className='flex gap-2 mt-2 font-semibold'>
                    <AiOutlineMail size={24} className='text-green-600' />
                    {email}
                </h4>
                <h4 className='flex gap-2 mt-2 font-semibold'>
                    <BsFillTelephoneFill size={24} className='text-green-600' />
                    {phoneNumber}
                </h4>
                <button className='mt-4 px-4 py-3 border text-white rounded-full w-full'>Apply</button>
            </div>
        </div>
    );
};

export default jobs;