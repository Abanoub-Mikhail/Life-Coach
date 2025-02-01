import React from 'react'
import './Features.css'


const Features = () => {
  return (
    <section className='features text-center'>
        <div className="container">
            <div className="header text-white mb-5 pb-3" data-aos="flip-left"> 
                <h2 className=' text-capitalize mb-4 fw-bold'>why <span className='gradient-text fw-bolder'>choose</span> us?</h2>
                <h4>Are You Want to <span className='fw-bolder'>Change Your Life?</span></h4>
            </div>
            <div className="body">
                <div className="row gy-3 px-4" data-aos="zoom-in">
                    <div className="col-md-3">
                        <div className="feature">
                            <div className="progress-bar progress-bar1 m-auto mb-3">
                                <span className=' fw-bold'>90%</span>
                            </div>
                            <h3 className=' text-uppercase text-white fw-bold'>gym</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature">
                            <div className="progress-bar progress-bar2 m-auto mb-3">
                                <span className=' fw-bold'>60%</span>
                            </div>
                            <h3 className=' text-uppercase text-white fw-bold'>yoga</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature">
                            <div className="progress-bar progress-bar3 m-auto mb-3">
                                <span className=' fw-bold'>70%</span>
                            </div>
                            <h3 className=' text-uppercase text-white fw-bold'>NUTRITION</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="feature">
                            <div className="progress-bar progress-bar4 m-auto mb-3">
                                <span className=' fw-bold'>95%</span>
                            </div>
                            <h3 className=' text-uppercase text-white fw-bold'>running</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features