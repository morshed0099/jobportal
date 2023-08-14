import React from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';

const JobDetails = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl font-bold text-center mt-14'>Ttile of job</h2>
            <p className='text-justify mt-4 mb-2'>
                We are looking for a skilled react.js developer to join our front-end development team. In this role, you will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack. You will also be responsible for profiling and improving front-end performance and documenting our front-end codebase.

                To ensure success as a react.js developer, you should have in-depth knowledge of JavaScript and React concepts, excellent front-end coding skills, and a good understanding of progressive web applications. Ultimately, a top-class react.js developer should be able to design and build modern user interface components to enhance application performance.
            </p>
            <h2 className='text-2xl font-bold mt-4 mb-4'>React.js Developer Responsibilities:</h2>
            <li className='list-disc'>Meeting with the development team to discuss user interface ideas and applications.</li>
            <li className='list-disc'>Reviewing application requirements and interface designs.</li>
            <li className='list-disc'>Identifying web-based user interactions.</li>
            <li className='list-disc'>Developing and implementing highly responsive user interface components using react concepts.</li>
            <li className='list-disc'>Writing application interface codes using JavaScript following react.js workflows.</li>
            <li className='list-disc'>Troubleshooting interface software and debugging application codes.</li>
            <li className='list-disc'>Developing and implementing front-end architecture to support user interface concepts.</li>
            <li className='list-disc'>Monitoring and improving front-end performance.</li>
            <li className='list-disc'>Documenting application changes and developing updates.</li>
            <li className='list-disc'>Bachelor’s degree in computer science, information technology, or a similar field.</li>
            <li className='list-disc'>Previous experience working as a react.js developer.</li>
            <li className='list-disc'>In-depth knowledge of JavaScript, CSS, HTML, and front-end languages.</li>
            <li className='list-disc'>Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.</li>
            <li className='list-disc'>Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.</li>

            <div>
                <div className='flex mt-8 mb-8 w-full relative'>
                    <RiLockPasswordFill size={24} className='text-green-600 absolute ' />
                    <input name='password' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your resume link ' type='text' />
                </div>
            </div>
            <button className='px-6 py-3 text-white bg-green-600 rounded-2xl text-1xl font-bold'>Apply</button>
        </div>


    );
};

export default JobDetails;