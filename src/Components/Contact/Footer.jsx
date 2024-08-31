import React from 'react'
import fb from '/fb.svg'
import insta from '/insta.svg'
import x from '/x.svg'
import linkin from '/linkin.svg'

const Footer = () => {
  return (
    <>
    <div className='items-center'>
      <div className="flex justify-center gap-10 mt-24">
        <img src= {fb} alt="fb" />
        <img src= {insta} alt="instagram" />
        <img src= {x} alt="twitter" />
        <img src= {linkin} alt="linkedIn" />
      </div>
      <p className='mt-14'>2021 AbbVie inc..All right reserved</p>
      </div>
      </>
  )
}

export default Footer