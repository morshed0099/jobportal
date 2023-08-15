import React from 'react';
import { Link } from 'react-router-dom';

const ItCompany = ({imagesrc,companyName,description,id}) => {
   

    return (   
            <div>              
                <div data-aos="fade-up" className='mt-8 border hover:scale-105 duration-700 shadow-md rounded-e-md p-4'>
                    <div>
                        <img  src={imagesrc} className='rounded-md w-full h-[300px]' alt="" />
                    </div>
                    <div>
                        <h4 className='text-2xl font-semibold mt-4 text-center'>{companyName}</h4>
                    </div>
                    <div>
                        <p className='text-gray-600'>
                            <i>
                              {description.slice(0,300)+"..."}
                            </i>
                        </p>
                    </div>
                    <div>
                       <Link to={`/companydetails/${id}`}> <h5 className='text-1xl mt-4 text-center text-green-600 cursor-pointer font-semibold'>More ...</h5></Link>
                    </div>                   
                </div>
            </div>
        
    );
};

export default ItCompany;