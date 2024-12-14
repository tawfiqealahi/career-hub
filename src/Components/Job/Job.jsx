import React from 'react'

const Job = ({job}) => {
    const {logo}=job;
  return (
    <div>
        <img src={logo} alt="logo"  />
        <h1>{job.job_title}</h1>
    </div>
  )
}

export default Job