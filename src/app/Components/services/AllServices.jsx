import React from 'react'
import Cards from './Cards'
import './AllServices.css'

const AllServices = () => {
  return (
    <section className='all-services position-relative py-5 '>
        <div className="container">
        <div className="row gy-4">
                <div className="col-md-4" data-aos="zoom-in">
                        <Cards system={'نظام غذائي test'}/>
                </div>
                <div className="col-md-4" data-aos="zoom-in">
                        <Cards system={'work out 1'}/>
                </div>
                <div className="col-md-4" data-aos="zoom-in">
                        <Cards system={'work out 2'}/>
                </div>
                <div className="col-md-4" data-aos="zoom-in">
                        <Cards system={'get fit plan'}/>
                </div>
        </div>
        </div>
    </section>
  )
}

export default AllServices