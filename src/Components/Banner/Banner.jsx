import React from 'react'
import image from '../../assets/images/user.png'

const Banner = () => {
  return (
    <div className='mt-[-4.5rem]'>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={image}
      className="w-[30rem] rounded-lg shadow-2xl" />
    <div>
      <h1 className=" text-center text-6xl  font-bold">One Step Closer To Your </h1>
      <h1 className='text-5xl  text-center mb-10 font-bold text-primary' >Dream Job</h1>
      <p className="py-6 text-lg  text-center ">
      Explore thousands of job opportunities with all the information you need. Its your future. Come find it.  Manage all your job application from start to finish.
      </p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner