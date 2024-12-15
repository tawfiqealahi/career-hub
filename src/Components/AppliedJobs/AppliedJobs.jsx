import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

  import { getStoredJobApplication } from '../../Utility/localStorage';


const AppliedJobs = () => {
  const [appliedJobs,setAppliedJobs]=useState([]);
  const jobs =useLoaderData();
  useEffect( ()=>{
   const storedJobIds = getStoredJobApplication();
   if(jobs.length>0){
    const jobsApplied =jobs.filter(job =>storedJobIds.includes(job.id))

    setAppliedJobs(jobsApplied)

    console.log(jobs,storedJobIds,jobsApplied) 
   }
  } ,[])
  return (
    <div>
        <h1 className='text-2xl' >Job I Applied: {appliedJobs.length}</h1>
    </div>
  )
}

export default AppliedJobs