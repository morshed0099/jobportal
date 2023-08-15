import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ image, descripion, link1, link2 }) => {
    return (
        <div className='p-4 border shadow-sm rounded-md hover:scale-105 duration-700 m-2'>
            <div>
                <img className='w-full h-[400px]' src={image} alt="" />
            </div>
            <div>
                <p>{descripion}</p>
            </div>
            <div className='mt-4 flex justify-center gap-4'>
                <Link to={link1}> <button className='px-4 py-2 hover:bg-green-500 bg-white border rounded-2xl hover:opacity-75'>code </button>  </Link>
                <Link to={link2}>
                    <button className='px-4 py-2 hover:bg-green-500 bg-white border rounded-2xl hover:opacity-75'>Lives Site</button>
                </Link>
            </div>
        </div>
    );
};

export default Projects;