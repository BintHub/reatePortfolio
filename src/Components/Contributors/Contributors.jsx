import React from 'react'
import behance from '/behance.png'
import google from '/google.png'
import dribble from '/dribble.png'
import uplabs from '/uplabs.png'
import designs from '/99designs.png'

const Contributors = () => {
  return (
    <>
    <div className='text-center mt-16'>
      <div>
        <h2 className='font-semibold text-6xl font-poppins mb-2 mt-20'>Contributors</h2>
        <p className='text-xl font-normal font-poppins mt-4'>They support products that simplify and automate 
          decent mechanic processes saving <br />time for activities</p>
      </div>
      <div className='items-center mt-24'>
      <div className='flex justify-evenly ' >
        <img  className='' src= {behance} alt="logo" />
        <img  className='' src= {google} alt="logo" />
        <img  className='' src= {dribble} alt="logo" />
      </div>
      <div className='flex justify-evenly mt-24' >
        <img  className='' src= {uplabs} alt="logo" />
        <img  className='' src= {designs} alt="logo" />
      </div>
      </div>
    </div>
    </>
  )
}

export default Contributors

