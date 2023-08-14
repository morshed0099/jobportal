import React from 'react';

import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom';


const ItCompany = ({imagesrc,companyName,description,twitter,youtube,facebook,linkedin}) => {
   
    const id="03"
    return (   
            <div>              
                <div className='mt-8 border shadow-md rounded-e-md p-4'>
                    <div>
                        <img src={imagesrc} className='rounded-md w-full' alt="" />
                    </div>
                    <div>
                        <h4 className='text-2xl font-semibold mt-4 text-center'>Lemon Hive</h4>
                    </div>
                    <div>
                        <p className='text-gray-600'>
                            <i>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum tempora sunt deserunt magnam, ea sapiente laborum odit error provident.
                            </i>
                        </p>
                    </div>
                    <div>
                       <Link to={`/companydetails/${id}`}> <h5 className='text-1xl mt-4 text-center text-green-600 cursor-pointer font-semibold'>More ...</h5></Link>
                    </div>
                    <div className='flex justify-center gap-4 mt-4'>
                        <Link to='#'>
                            <BsTwitter className='w-8 h-8 bg-white hover:text-green-600 duration-1000 transition shadow-md rounded-full p-1' size={34} />
                        </Link>
                        <Link to='#'>
                            <BsYoutube className='w-8 h-8 bg-white hover:text-green-600 duration-1000 transition shadow-md rounded-full p-1' size={34} />
                        </Link>
                        <Link to='#'>
                            <BsFacebook className='w-8 h-8 bg-white hover:text-green-600 duration-1000 transition shadow-md rounded-full p-1' size={34} />
                        </Link>
                        <Link>
                            <BsLinkedin className='w-8 h-8 bg-white hover:text-green-600 duration-1000 transition shadow-md rounded-full p-1' size={34} />
                        </Link>
                    </div>
                </div>
            </div>
        
    );
};

export default ItCompany;