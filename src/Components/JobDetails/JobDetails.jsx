import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../Utility/localStorage';


const JobDetails = () => {

    const jobs =useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job= jobs.find(job=>job.id===idInt)
    console.log(job)

    // react toastify 
    const handleApplyJob = () =>{ 
        saveJobApplication(idInt);
        toast("You have applied successfully")

    };


  return (
    <div>
        <div className='grid md:grid-cols-4 gap-5 sm:grid-col-1 my-11  ' >
            <div className=' md:col-span-3  rounded-lg m-1 text-center py-3 border border-green-300' >
            <h2 className='text-3xl font-bold'>{job?.job_title} </h2>

                <h2 className='text-4xl' >Details come here for your curiousity </h2>
                <p>{job?.company_name}</p>
            </div>
            <div  className=' md:col-span-1 px-4  rounded-lg m-1 text-center py-3 border border-green-300' >
                <h2 className="text-2xl my-2">Interested ??  </h2>
                <button onClick={handleApplyJob} className='btn btn-primary w-full'>Apply Now</button>
            </div>

        </div>
        
        <ToastContainer />
    </div>
  )
}

export default JobDetails