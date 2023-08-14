import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SocialMediaLink = () => {
    return (
        <>
            <Link to='https://www.facebook.com/morshed0099/'><BsFacebook className='p-1 bg-white border shadow-md rounded-full w-11 h-11 hover:rotate-12 hover:text-green-600 duration-1000' size={34} /></Link>
            <Link to='https://www.youtube.com/channel/UCLQGk6b6p1z-zV6bHC2zcJA'> <BsYoutube className='p-1 bg-white border shadow-md rounded-full w-11 h-11 hover:rotate-12 hover:text-green-600 duration-1000' size={34} /></Link>
            <Link to='https://www.linkedin.com/in/md-goalm-morshed/'> <BsLinkedin className='p-1 bg-white border shadow-md rounded-full w-11 h-11 hover:rotate-12 hover:text-green-600 duration-1000' size={34} /></Link>
            <Link to='https://github.com/morshed0099'> <BsGithub className='p-1 bg-white border shadow-md rounded-full w-11 h-11 hover:rotate-12 hover:text-green-600 duration-1000' size={34} /></Link>
        </>
    );
};

export default SocialMediaLink;