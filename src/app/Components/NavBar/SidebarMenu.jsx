import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '/public/lifecoach-logo.png'


const SidebarMenu = ({visible, setVisible}) => {
  return (
    <div className={`${visible && 'visibility-bg'} side-nav position-fixed small-screen`} onClick={(e)=>{setVisible(false),true}}>
          <div className={`slider ${visible && 'slide-rtl'}`}>
            <div className="logo d-flex align-items-center justify-content-between mb-5 border-bottom py-3">
            <Link href="/"><Image src={logo} alt='Logo' width={150}/></Link>
            <span className=' fw-bolder text-uppercase p-2 fs-5'onClick={()=>{setVisible(false)}} >X</span>
            </div>
            <div className="links">
              <ul className=' list-unstyled'>
                <li><Link href='#' className=' py-2 d-inline-block w-100 border-bottom fw-bolder'>Home</Link></li>
                <li><Link href='#' className=' py-2 d-inline-block w-100 border-bottom fw-bolder'>Store</Link></li>
                <li><Link href='#' className=' py-2 d-inline-block w-100 fw-bolder'>About Us</Link></li>
              </ul>
            </div>
            <div className="enroll mb-4">
              <button className='btn text-capitalize w-100 rounded-5 py-2'>enroll now</button>
            </div>
            <div className="find-us">
              <p className=' py-3 border-bottom text-uppercase fw-bold mb-4'>find with us</p>
              <div className="social d-flex align-items-center gap-2">
                <Link href='/' className="icon d-flex align-items-center justify-content-center position-relative"><i className="fa-brands fa-facebook-f"></i></Link>
                <Link href='/' className="icon d-flex align-items-center justify-content-center position-relative"><i className="fa-brands fa-twitter"></i></Link>
                <Link href='/' className="icon d-flex align-items-center justify-content-center position-relative"><i className="fa-brands fa-instagram"></i></Link>
                <Link href='/' className="icon d-flex align-items-center justify-content-center position-relative"><i className="fa-brands fa-linkedin"></i></Link>
              </div>
            </div>
          </div>
    </div>
  )
}

export default SidebarMenu