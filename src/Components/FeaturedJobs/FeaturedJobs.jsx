import React, { useEffect, useState } from 'react'
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(  ()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))

    } ,[])
  return (
   <div>
     <div  className="text-center">
        <div className="text-5xl text-center">Featured Jobs: {jobs.length} </div>
        <p >Explore thousand of job oppertunities with all the information tou need.Its Your future</p>
    </div>
    <div>
        {
            jobs.map(job=> <Job
            key={job.id}
            job={job}
            ></Job>)
        }
    </div>
   </div>
  )
}

export default FeaturedJobs