import React from 'react'
import './Banner.css'
import Navigation from '../Navigation/Navigation'

const Banner = () => {
  return (
    <section className='service-banner'>
        <div className="overlay">
            <div className="container py-4">
                <div className=' mb-4'>
                <Navigation/>
                </div>
                <div className="title text-capitalize text-white d-flex align-items-center gap-4" data-aos="flip-left">
                    <h2 className=' fw-bold'>all services</h2>
                    <div className="badge p-3">
                        <h6 className='m-0 fw-bold'><span>🎉</span> 4 services</h6>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Banner