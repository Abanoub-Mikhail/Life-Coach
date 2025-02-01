import Link from 'next/link'
import React from 'react'

const ProgramsCard = ({time, price, offer}) => {
  return (
    <div className="card-body text-white text-center rounded-4 py-5 text-capitalize">
        <div className="title mb-4">
            <h3 className=' fw-bolder '>{time}</h3>
        </div>
        <div className="body-content">
            <h2 className=' fw-bolder mb-4'>{price}</h2>
            <h4 className=' fw-bold mb-3 mb-4'>{offer}</h4>
            <div className="button">
                <Link href='#' className='btn fw-bolder'>subscribe now</Link>
            </div>
        </div>
        
    </div>
  )
}

export default ProgramsCard