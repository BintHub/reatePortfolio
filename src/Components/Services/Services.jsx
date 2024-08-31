import React from 'react'
import uiux from '/uiux.svg'
import web from '/web.svg'
import wpDev from '/wp.svg'

const Services = () => {
  return (
    <>
    <div className='mt-64'>
      <div className='text-center'>
         <h1 className='font-semibold text-6xl font-poppins mb-2' >Services</h1>
         <p className='text-xl font-poppins'>Our team members are experts in all facets of the design industry including: print <br />
           design, illustration, branding, identity and more.</p>
      </div>
      <div>
        <div className='grid grid-cols-3 gap-0 mt-20 ml-44'>
          <div className=''>
            <img className='' src={uiux} />
            <h3 className='font-semibold text-2xl mt-8'>UI/UX Design</h3>
            <p className=''>Why money's in that office,<br /> 
              right If she start giving me <br /> 
              some bullshit about it ain't <br />
              there someplace <br />or anywhere.</p>
          </div>
          <div className=''>
            <img className='' src={web} />
            <h3 className='mt-8 font-semibold text-2xl'>Web Design</h3>
            <p className=''>Why money's in that office,<br /> 
              right If she start giving me <br /> 
              some bullshit about it ain't <br />
              there someplace <br />or anywhere.</p>
          </div>
          <div className=''>
            <img  className=''src={wpDev} />
            <h3 className='font-semibold text-2xl mt-8'>WP Developing</h3>
            <p className=''>Why money's in that office,<br /> 
              right If she start giving me <br /> 
              some bullshit about it ain't <br />
              there someplace <br />or anywhere.</p>
          </div>
       </div>
      </div>
   </div>
    </>
  )
}

export default Services