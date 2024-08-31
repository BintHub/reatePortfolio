import React from 'react'
import user from '/User.png'
import fb from '/fb.svg'
import insta from '/insta.svg'
import x from '/x.svg'
import linkin from '/linkin.svg'
import vector from '/Vector.png'
// import overlay from '/overlay.png'

const User = () => {
  return (
    <>
    <div className="mt-28  grid grid-cols-2 gap-10">
    <div className="pl-32 ml-11 font-poppines">
      <h6 className="font-semibold">Hola! I’m  <br /><br /><span className="text-red text-lg font-semibold">Justin Vaccaro</span></h6>
      <h2 className="text-6xl font-bold">Creative</h2>
      <h2 className="text-6xl font-bold pl-12 ">Designer</h2>
      <p className="mt-4">Since creative designers often interact with creative <br/>
      teams, managers and clients, they need strong<br/>
      communication skills.</p>
      <div className="flex gap-10 mt-7">
        <img src= {fb} alt="fb" />
        <img src= {insta} alt="instagram" />
        <img src= {x} alt="twitter" />
        <img src= {linkin} alt="linkedIn" />
      </div>
      <button className='text-white bg-red font-poppines text-base h-9 w-32 p-1 pl-4 mt-8'>CV Here</button>
    </div>
    <div className='h-screen relative'>
    <img className='h-4/6 absolute top-20 left-20' src= {vector} alt="red circle" />
    <img className='h-full absolute left-16' src= {user} alt="user Image" />
    {/* <img  className='h-4/6 abosolute top-full left-20' src={overlay} alt="fade" /> */}
    </div>
</div>
</>
  )
}

export default User