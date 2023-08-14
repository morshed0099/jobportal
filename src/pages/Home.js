import React, { useState } from 'react';


const Home = () => {
    const [activeRoute, setActiveRoute] = useState('all')

    return (
        <>
        {/* job section  */}
            <div className='mt-14 flex justify-end gap-4'>
                <button onClick={() => setActiveRoute('all')} className={`px-6 py-2 bg-white border shadow-md font-medium rounded-md ${activeRoute === 'all' && 'bg-green-600 text-white'} `} >All Jobs</button>
                <button onClick={() => setActiveRoute('fresher')} className={`px-6 py-2 bg-white border shadow-md font-medium rounded-md ${activeRoute === 'fresher' && 'bg-green-600 text-white'} `} >Fresher Jobs</button>
                <button onClick={() => setActiveRoute('experience')} className={`px-6 py-2 bg-white border shadow-md  font-medium rounded-md ${activeRoute === 'experience' && 'bg-green-600 text-white'} `}  >Experience Jobs</button>
            </div>
            <div>
                {activeRoute === 'all' && (
                    <div>
                        alll
                    </div>
                )}
                {activeRoute === 'fresher' && (
                    <div>
                        fresher
                    </div>
                )}
                {activeRoute === 'experience' && (
                    <div>
                        experience
                    </div>
                )}
            </div>

            {/* top it comapny section  */}

            <div className='mt-14'>
                <h2 className='text-3xl font-bold '>Top IT Company of Bangladesh</h2>

            </div>
        </>
    );
};

export default Home;