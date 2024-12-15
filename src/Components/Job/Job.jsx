import React, { useState } from 'react'
import { MdOutlineLocationOn } from 'react-icons/md';
import { PiCurrencyCircleDollar } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;
    
  return (
    <div>
        <div className="card card-compact bg-base-100 max-h-96 my-10  shadow-xl">
  <figure>
    <img className='w-72'
      src={logo}
      alt="logo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p> {company_name} </p>
    <div>
        <button className='px-5 py-2 mr-4 text-[#7E90FE] font-extrabold border rounded border-[#7E90FE]'>{remote_or_onsite}</button>
        <button className='px-5 py-2 text-[#7E90FE] font-extrabold border rounded border-[#7E90FE]'>{job_type}</button>
    </div>
   
   <div className='my-4 flex '>
        <h2  className='flex mr-5 ' > <MdOutlineLocationOn className='text-2xl mr-2' ></MdOutlineLocationOn> {location} </h2>
        
    
   
        <h2 className='flex'><PiCurrencyCircleDollar className='text-2xl mr-2' /> {salary}
        </h2>
    
   </div>
    <div className="card-actions ">
    <Link to={`/job/${id}`}>  <button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default Job