import Link from 'next/link'
import React from 'react'

const Cards = ({system}) => {
  return (
    <div className='cards bg-white text-center text-capitalize py-5  rounded-4'>
        <div className="header mb-5">
            <h2 className=' fw-bolder'>{system}</h2>
        </div>
        <div className="body">
            <Link href='#' className='rounded-3 text-white fs-5'>See More</Link>
        </div>
    </div>
  )
}

export default Cards