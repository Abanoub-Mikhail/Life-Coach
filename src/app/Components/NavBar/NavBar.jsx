'use client'
import React, { useEffect, useState } from 'react'
import './NavBar.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/lifecoach-logo.png'
import SidebarMenu from './SidebarMenu'
import SideFreshCart from './SideFreshCart'

const NavBar = () => {
  const [visible , setVisible] = useState(false);
  const [openFreshCart , setOpenFreshCart] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className=' bg-white py-2 nav'>

      {/* MAIN NAV */}
        <div className={`container d-flex align-items-center justify-content-between`}>
          <div className="logo">
            <Link href="/"><Image src={logo} alt='Logo' width={130} loading='lazy'/></Link>
          </div>
          <div className="links large-screen">
            <ul className=' list-unstyled d-flex align-items-center justify-content-between mb-0'>
              <li><Link href='/' className=' text-capitalize fw-bolder py-2 px-3'>home</Link></li>
              <li><Link href='#' className=' text-capitalize fw-bolder py-2 px-3'>store</Link></li>
              <li><Link href='/services' className=' text-capitalize fw-bolder py-2 px-3'>services</Link></li>
              <li><Link href='#' className=' text-capitalize fw-bolder py-2 px-3'>about us</Link></li>
            </ul>
          </div>
          <div className="services d-flex align-items-center gap-3">
            <div className="cart-logo position-relative p-2"onClick={()=>{setOpenFreshCart(true)}}>
              <span className='counter rounded-5 text-white d-flex align-items-center justify-content-center fw-bold'>0</span>
              <span><i className="fa-solid fa-cart-shopping"></i></span>
            </div>
            <div className="main-button d-flex align-items-center gap-2">
            <Link href='#' className=' btn text-white fw-bold text-capitalize px-3'>join now</Link>
            <div className="burger-menu text-white px-3 py-1 rounded-3 fs-4 " onClick={()=>{setVisible(true)}}>
              <i className="fa-solid fa-bars"></i>
            </div>
            </div>
          </div>
        </div>
        <div className={`container-fluid d-flex align-items-center justify-content-between scroll-nav ${isFixed ? 'position-fixed z-3 bg-white translate-down':'visually-hidden'}`}>
          <div className="logo">
            <Link href="/"><Image src={logo} alt='Logo' width={130} loading='lazy'/></Link>
          </div>
          <div className="links large-screen">
            <ul className=' list-unstyled d-flex align-items-center justify-content-between mb-0'>
              <li><Link href='/' className=' text-capitalize fw-bolder py-2 px-3'>home</Link></li>
              <li><Link href='#' className=' text-capitalize fw-bolder py-2 px-3'>store</Link></li>
              <li><Link href='/services' className=' text-capitalize fw-bolder py-2 px-3'>services</Link></li>
              <li><Link href='#' className=' text-capitalize fw-bolder py-2 px-3'>about us</Link></li>
            </ul>
          </div>
          <div className="services d-flex align-items-center gap-3">
            <div className="cart-logo position-relative p-2"onClick={()=>{setOpenFreshCart(true)}}>
              <span className='counter rounded-5 text-white d-flex align-items-center justify-content-center fw-bold'>0</span>
              <span><i className="fa-solid fa-cart-shopping"></i></span>
            </div>
            <div className="main-button d-flex align-items-center gap-2">
            <Link href='#' className=' btn text-white fw-bold text-capitalize px-3'>join now</Link>
            <div className="burger-menu text-white px-3 py-1 rounded-3 fs-4 " onClick={()=>{setVisible(true)}}>
              <i className="fa-solid fa-bars"></i>
            </div>
            </div>
          </div>
        </div>


        {/* SIDE NAV */}
        <SidebarMenu visible={visible} setVisible={setVisible}/>


        {/* SIDE FRESH CART */}
        <SideFreshCart openFreshCart={openFreshCart} setOpenFreshCart={setOpenFreshCart}/>
    </nav>
  )
}

export default NavBar