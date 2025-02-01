import React from 'react'
import './Footer.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/lifecoach-logo.png'

const Footer = () => {
  return (
    <footer className=' py-5'>
        <div className="container">
            <div className="row gy-3">
                <div className="col-md-4">
                    <div className="contacts">
                        <div className="logo mb-4">
                            <Link href='#'><Image src={logo} width={150} alt='logo'/></Link>
                        </div>
                        <div className="social d-flex align-items-center gap-2 mb-4">
                            <Link href='/' className="icon d-flex align-items-center justify-content-center position-relative"><i className="fa-brands fa-facebook-f"></i></Link>
                            <Link href='/' className="icon d-flex align-items-center justify-content-center position-relative"><i className="fa-brands fa-twitter"></i></Link>
                            <Link href='/' className="icon d-flex align-items-center justify-content-center position-relative"><i className="fa-brands fa-instagram"></i></Link>
                            <Link href='/' className="icon d-flex align-items-center justify-content-center position-relative"><i className="fa-brands fa-linkedin"></i></Link>
                        </div>
                        <div className="enroll">
                            <button className='btn text-capitalize w-75 rounded-5 py-2'>enroll now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="usful-links">
                        <h2 className=' mb-3 fw-bolder text-capitalize fs-4'>useful links</h2>
                        <div className="links">
                            <Link href='#' className='text-capitalize mb-2 d-block pb-1'>about us</Link>
                            <Link href='#' className='text-capitalize mb-2 d-block pb-1 '>privacy policy</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="usful-links">
                        <h2 className=' mb-3 fw-bolder text-capitalize fs-4'>get contact</h2>
                        <div className="links">
                            <span className='d-flex gap-1 text-capitalize mb-2 fw-bold '>phone: <Link href='#' className=' d-block pb-1 text-capitalize fw-light'>01234567891</Link></span>
                            <span className='d-flex gap-1 mb-2 fw-bold '>Email: <Link href='#' className=' d-block pb-1 fw-light'>test@gmail.com</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer