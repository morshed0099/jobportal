import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SocialMediaLink from '../Components/SocialMediaLink';

const CompanyDetails = () => {
  const data = useLoaderData()
  const { comapany_name, description, image } = data
  return (
    <>
      <div className='container mx-auto mt-14'>
        <h2 className='text-2xl font-bold mb-4  '>{comapany_name}</h2>
        <img className='mt-8 mb-4 rounded-2xl' src={image} alt="" />
        <p className='text-justify '>
          {description}
        </p>
        <div className='flex gap-4 mt-6'>
          <SocialMediaLink />
        </div>
      </div>
    </>

  );
};

export default CompanyDetails;