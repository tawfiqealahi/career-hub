import React from 'react'
import img1 from '../../assets/icons/accounts.png'
import img2 from '../../assets/icons/chip.png'
import img3 from '../../assets/icons/creative.png'
import img4 from '../../assets/icons/marketing.png'

const CategoryList = () => {
  const cards = [
    {
      id:1,
      image: img1 ,
      title: "Account & Finance" ,
      available: "300 jobs available",
    },
    {
      id:2,
      image:img2 ,
      title: "Creative Design",
      available: "100+ jobs available",
    },
    {
      id:3,
      image:img3 ,
      title: "Marketing & Sales",
      available: "350+ jobs available",
    },
    {
      id:4,
      image: img4 ,
      title: "Engineering Job",
      available: "150+ jobs available",
    }
  ]
  return (
    <div  className="text-center">
        <h2 className="text-5xl font-extrabold mt-11 mb-5 ">Job Category List</h2>
        <p >Explore thousand of job oppertunities with all the information tou need.Its Your future</p>
        <div className='grid grid-cols-4 gap-2 my-11'>
       {
        cards.map(card => 
          <div className="card bg-base-100 w-60 shadow-xl border  border-green-200  rounded-2xl ">
          <figure className="px-10 pt-10">
            <img
              src={card.image}
              alt='image'
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  font-bold ">{card.title}</h2>
            <p className='text-gray-400'>{card.available}</p>
            <div className="card-actions">
              
            </div>
          </div>
        </div>
         )
       }
        </div>
    </div>
  )
}

export default CategoryList