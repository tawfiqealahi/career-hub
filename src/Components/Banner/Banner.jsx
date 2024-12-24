import React from 'react'
import image from '../../assets/images/user.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='mt-[-2rem] md:mt-[-4.5rem]'>
      <div className="hero bg-base-200 min-h-screen flex flex-col-reverse md:flex-row-reverse ">
        <div className="hero-content flex md:flex-col lg:flex-row-reverse">
          <img
            src={image}
            className="w-64 md:w-[30rem] rounded-lg shadow-2xl" />
          <div>
            <div>
              <h1 className="text-3xl text-center md:text-6xl  font-bold">One Step Closer To Your </h1>
              <h1 className='text-2xl md:text-5xl  text-center mb-10 font-bold text-primary' >Dream Job</h1>
              <p className="py-6 text-base md:text-lg  text-center ">
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it.  Manage all your job application from start to finish.
              </p>
            </div>
            <Link to='/jobs' ><button className='btn btn-primary mt-3' >Show All Jobs</button></Link>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Banner