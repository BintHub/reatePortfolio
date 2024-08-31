import React from 'react'
import pic from '/unsplash-cup.png'
import pic1 from '/unsplash-grain.png'
import pic2 from '/unsplash-home.png'
import pic3 from '/unsplash-building.png'
import pic4 from '/unsplash-flower.png'

const Portfolio = () => {
  return (
    <>
    <div className='text-center mt-40 '>
      <div>
        <h3 className='font-normal text-xl font-poppins mb-2'>Our Regular Updated</h3>
        <h2 className='text-6xl font-semibold font-poppins'>Portfolio</h2>
      </div>
      {/* flex or grid arrangement */}
      <div className='flex flex-auto mt-24' >
        <img className='w-3/6' src= {pic} alt="pictures" />
        <img className='w-1/4 h-1/4' src= {pic1} alt="pictures" />
        <img className='w-1/4 h-1/4' src= {pic2} alt="pictures" />
        <div className= 'block'>
        <img className='w-1/4 h-1/4' src= {pic3} alt="pictures" />
        <img className='w-1/4 h-1/4' src= {pic4} alt="pictures" />
        </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio