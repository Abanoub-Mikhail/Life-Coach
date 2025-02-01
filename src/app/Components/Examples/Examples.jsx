import React from 'react'
import Carousel from './Carousel'
import './Examples.css'

const Examples = () => {
  return (
    <section className=' examples'>
        <div className="container">
            <div className="header text-center text-capitalize text-white mb-5 pb-5">
                <h2 className='fw-bolder fs-1' data-aos="flip-left">Transformation</h2>
            </div>
              <Carousel/>
        </div>
    </section>
  )
}

export default Examples