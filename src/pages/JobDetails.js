import React from 'react';
import { toast } from 'react-hot-toast';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const data = useLoaderData()
    const { jobdetails, description, jobTitle, responsibilities } = data

    const handelsubmit = (e) => {
        e.preventDefault()
        toast.success('job applying succes !!')

    }
    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl font-bold text-center mt-14'>{jobTitle}</h2>
            <p className='text-justify mt-4 mb-2'>
                {description}
            </p>
            <h2 className='text-2xl font-bold mt-4 mb-4'>React.js Developer Responsibilities:</h2>
            {
                responsibilities.map(res => <li className='list-disc'>{res}</li>)
            }



            <form onSubmit={(e) => handelsubmit(e)} >
                <div>
                    <div className='flex mt-8 mb-8 w-full relative'>
                        <RiLockPasswordFill size={24} className='text-green-600 absolute ' />
                        <input required name='password' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your resume link ' type='text' />
                    </div>
                </div>
                <button  className='px-6 py-3 text-white bg-green-600 rounded-2xl text-1xl font-bold'>Apply</button>
            </form>
        </div>


    );
};

export default JobDetails;