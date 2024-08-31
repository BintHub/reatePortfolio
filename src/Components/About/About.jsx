import React from 'react'
import './about.css';
import man from '/User2.png'
 import spiral from '/spiral.svg'

const About = () => {
  return (
    <>
    <div className='text-center mt-16 h-screen'>
      <div>
        <h2 className='font-semibold text-6xl font-poppins mb-2'>About me</h2>
        <p className='text-xl font-normal font-poppins'>I'm Justin Vaccaro and i do web design, Graphic Design, User Experiences. habitant et <br />
        netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,<br />
         ultricies eget, tempor sit amet.</p>
      </div>
      <div className='aboutBg pl-44 h-full mt-0' >
        <img  className='spiral h-full pl-40 mt-10' src= {man} alt="user2" />
      </div>
    </div>
    </>
  )
}

export default About