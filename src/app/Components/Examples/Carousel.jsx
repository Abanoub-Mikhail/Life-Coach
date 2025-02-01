'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image';
import imag1 from '/public/sloide1.png'

const Carousel = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className="slider-container px-lg-5" data-aos="zoom-in">
      <Slider {...settings}>
      <div className='cart'>
        <div className="image mx-3">
            <Image src={imag1} alt='slider-image' className='rounded-4' loading='lazy'/>
        </div>
      </div>
      <div className='cart'>
        <div className="image mx-3">
            <Image src={imag1} alt='slider-image' className='rounded-4' loading='lazy'/>
        </div>
      </div>
      <div className='cart'>
        <div className="image mx-3">
            <Image src={imag1} alt='slider-image' className='rounded-4'loading='lazy'/>
        </div>
      </div>
    </Slider>
    </div>
    
  )
}

export default Carousel