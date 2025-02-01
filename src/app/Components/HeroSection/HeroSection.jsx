import React from 'react'
import './HeroSection.css'
import AnimatedWord from './AnimatedWord'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className='hero-section'>
        <div className="overlay d-flex align-items-center justify-content-center ">
            <div className="container">
                <div className="badge text-uppercase mb-3">
                    <p className='m-0 p-0'>best seller</p>
                </div>
                <div className="slogan mb-5">
                    <h2 className='text-white text-capitalize fw-bolder mb-4'>hey! build your body</h2>
                    <AnimatedWord/>
                </div>
                <div className="buttons d-flex align-items-center gap-3">
                    <Link className='btn text-white text-uppercase fw-bold p-3' href='#'>contact us</Link>
                    <Link className='btn text-white text-uppercase fw-bold p-3' href='#'>calculate calories</Link>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default HeroSection

