import React from 'react'
import './Navigation.css'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className='navigate text-white'>
        <h4 className=' d-flex align-items-center gap-2 text-capitalize'>
            <Link href='/'>home</Link>
            <span><i className="fa-solid fa-angle-right"></i></span>
            <span>service</span>
        </h4>
    </div>
  )
}

export default Navigation