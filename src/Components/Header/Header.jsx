import React from 'react'
import User from './User';
import Logo from '/navlogo.svg'

const Header = () => {
  return (
    <>
  <div id='header h-screen'>
   <div className='bg-white py-2 px-3 mt-4 '> 
   <ol className='flex items-center justify-around'>
      <li className=''>
         <img  src= {Logo}  alt="logo" />
      </li>
      <li className='flex items-center justify-between gap-6 '>
         <a className='text-black font-poppines hover:text-red hover:underline' href="#t">Home</a>
         <a className='text-black font-poppines 'href="#">Contributors</a>
         <a className='text-black font-poppines 'href="#"> About me</a>
         <a className='text-black font-poppines ' href="#">Services</a>
         <a className='text-black font-poppines 'href="#">Portfolio</a>
         <a className='text-black font-poppines 'href="#">Contact</a>
      </li>
      <li className='flex items-center justify-between gap-4'>
      <a  className='text-white bg-black font-poppines text-base h-9 w-32 p-1 pl-4' href="#">Portfolio Here</a>
      </li>
    </ol>
  </div>
     <User/>
 </div>
  
    
    </>
  )
}

export default Header