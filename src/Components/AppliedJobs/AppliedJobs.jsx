import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

  import { getStoredJobApplication } from '../../Utility/localStorage';



const AppliedJobs = () => {
  
  const jobs =useLoaderData();
  const {logo}=jobs;



  const [appliedJobs,setAppliedJobs]=useState([]);
  const [displayJobs,setDisplayJobs]=useState([]);

  // add event handler

  const handleJobsFilter= filter =>{
    if(filter==='all'){
      setDisplayJobs(appliedJobs)
    }
    else if(filter==='remote'){
      const remoteJobs = appliedJobs.filter(job=> job.remote_or_onsite==='Remote');
      setDisplayJobs(remoteJobs)
    }
    else if(filter==='onsite'){
      const onsiteJobs = appliedJobs.filter(job=>job.remote_or_onsite==='Onsite');
      setDisplayJobs(onsiteJobs); 
    }
  }




  useEffect( ()=>{
    
   const storedJobIds = getStoredJobApplication();
   if(jobs.length>0){
    // const jobsApplied =jobs.filter(job =>storedJobIds.includes(job.id))  ;

    const jobsApplied = [];
    for(const id of storedJobIds){
      const job = jobs.find(job=> job.id===id)
      if(job){
        jobsApplied.push(job)
      }
    }

     setAppliedJobs(jobsApplied);

     setDisplayJobs(jobsApplied);


    // console.log( storedJobIds,jobsApplied) 
   }
  } ,[jobs])
  return (
    <div>
        <h1 className='text-2xl' >Job I Applied: {appliedJobs.length}</h1>
        

        <details className="dropdown">
  <summary className="btn m-1">Job Type</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>handleJobsFilter('all')} ><a>All</a></li>
    <li onClick={()=>handleJobsFilter('remote')} ><a>Remote</a></li>
    <li onClick={()=>handleJobsFilter('onsite')} ><a>On Site</a></li>
  </ul>
</details>

        <ul className='grid md:grid-cols-3 gap-4 my-5'>
          {
            displayJobs.map(job=> <li className='border border rounded-md bg-zinc-700 text-center' key={job.id} >
              <h2 className='font-bold text-4xl'>{job.job_title} </h2>
              <h4 className='text-xl'>{job.company_name} </h4>
              <span className='text-lg text-green-400'> {job.remote_or_onsite} </span>
              

  
            </li>  )
          }
        </ul>





    </div>
  )
}

export default AppliedJobs