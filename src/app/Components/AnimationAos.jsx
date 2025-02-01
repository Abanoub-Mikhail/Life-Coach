'use client'
import Aos from 'aos';
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';

const AnimationAos = () => {
    useEffect(() => {
        Aos.init({
          duration: 500, 
          once: false,  
        });
      }, []);
      return null
}

export default AnimationAos