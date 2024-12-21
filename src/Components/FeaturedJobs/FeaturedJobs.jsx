import React, { useEffect, useState } from 'react'
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([]);
    const [dataLength,setDataLength]=useState(4)

    useEffect(  ()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))

    } ,[])
  return (
   <div>
     <div  className="text-center">
        <div className="text-5xl font-extrabold mt-11 mb-5 ">Featured Jobs</div>
        <p >Explore thousand of job oppertunities with all the information tou need.Its Your future</p>
    </div>
    <div className='grid grid-cols-2 gap-6'>
        {
            jobs.slice(0,dataLength).map(job=> <Job
            key={job.id}
        job={job}
            ></Job>)
           
        }
    </div>
    <div className={dataLength===jobs.length ? 'hidden': '' }>
        
    <button onClick={()=>setDataLength(jobs.length)} className=' btn btn-primary' >Show All Jobs</button>
    </div>
   </div>
  )
}

export default FeaturedJobs