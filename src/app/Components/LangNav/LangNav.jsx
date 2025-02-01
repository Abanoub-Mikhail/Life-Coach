'use client'
import React, { useState } from 'react'
import './LangNav.css'

const LangNav = () => {

    const [lang , setLang]= useState('EN')

  return (
    <div className=' w-100  lang'>
      <div className="container">
        <div className="dropdown p-3 ms-auto position-relative">
        <h3 className='px-4 border-start m-0 p-0 fw-bolder text-white'>{lang}</h3>
        <div className="dropdown-content bg-white position-absolute rounded-3 overflow-hidden">
          <p className='m-0 p-3 px-4 border-bottom' onClick={()=>{setLang('EN')}}>EN (English)</p>
          <p className='m-0 p-3 px-4' onClick={()=>{setLang('AR')}}>AR (Arabic)</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LangNav