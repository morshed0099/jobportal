import React, { useEffect, useState } from 'react';
import Jobs from './Jobs';

const AllJobs = () => {
    const [activeRoute, setActiveRoute] = useState('')
    const [category, setCategory] = useState([])
    const [alljob, setAlljob] = useState([])
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        fetch('https://jobportal-sarver.vercel.app/category')
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })
    }, [])

    useEffect(() => {
        setLoader(true)
        fetch(`https://jobportal-sarver.vercel.app/alljobs/?categoyname=${activeRoute}`)
            .then(res => res.json())
            .then(data => {
                setAlljob(data)
                setLoader(false)
            })
    }, [activeRoute])
    const handelCategory = (e) => {
        setActiveRoute(e.target.value)

    }
    return (
        <div className='container mx-auto'>

            <h2 className='text-2xl font-bold mt-14 mb-4'>All Jobs </h2>
           
            <div className='flex justify-end gap-4 mt-14'>
                {
                    category.map(cat => <button onClick={(e) => handelCategory(e)} className={`${activeRoute === cat.categoryName ? "px-4 py-3 bg-green-500 rounded-2xl text-white font-bold" : "px-4 border  py-3 rounded-2xl bg-white font-bold"}`} value={cat.categoryName}>{cat.categoryName}</button>)
                }
            </div>
          

            {/* all jobs          */}

            <div className='grid xl:grid-cols-3 gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                loader && <h1 className='text-2xl mt-8 font-bold text-green-500 text-center'>Please wait </h1>
            }
                {
                    alljob.map(job => <Jobs
                        companyLogo={job.logo}
                        companyName={job.conpanyName}
                        email={job.email}
                        location={job.location}
                        title={job.jobTitle}
                        phoneNumber={job.phoneNumber}
                        key={job._id}
                        id={job._id}
                    >

                    </Jobs>)
                }
            </div>
        </div>
    );
};

export default AllJobs;