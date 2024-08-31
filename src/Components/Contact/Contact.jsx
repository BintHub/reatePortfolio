import React from 'react'
import Footer from './Footer';
import logo from '/biglogo.svg'

const Contact = () => {
  return (
    <>
    <div className='text-center mt-48'>
      <div>
        <h2 className='font-semibold text-6xl text-red font-poppins mb-2'>Contact me</h2>
        <p className='text-xl font-normal font-poppins'>Truth is a deep kindnessnthat teaches us to be content 
        in our everyday life and share <br />with the people the same happiness.the feeling of sunday is the
         same everywhere: <br />heavy,melancholy,standing still <br>
        </br></p>
      </div>
      <div className='' >
        <img  className='mt-28 m-auto' src= {logo} alt="biglogo" />
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Contact