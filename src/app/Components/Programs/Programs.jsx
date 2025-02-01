import React from 'react';
import './Programs.css';
import ProgramsCard from './ProgramsCard';

const Programs = () => {
  return (
    <section className='py-5 programs'>
        <div className="container">
        <div className="header text-center text-white mb-4 pb-3" data-aos="flip-left">
            <h2 className='text-capitalize mb-4 fw-bold'>choose the <span className='gradient-text fw-bolder'>program</span></h2>
            <p className='text-capitalize fs-4'>are you want to <span className='fw-bolder'>change your life</span></p>
        </div>
        <div className="row align-items-center justify-content-center gap-3">
            <div className="col-md-4">
                <div className="card bg-transparent" data-aos="zoom-in">
                    <ProgramsCard time={'monthly'} price={200} offer={'monthly offer'}/>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-transparent" data-aos="zoom-in">
                    <ProgramsCard time={'year'} price={500} offer={'yearly offer'}/>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Programs