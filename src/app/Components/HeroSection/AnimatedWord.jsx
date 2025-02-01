'use client'
import React, { useEffect, useState } from 'react'

const AnimatedWord = () => {
    const words = ['with gym instructor', 'with follow life style'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <h3 className="word-container text-white text-capitalize fw-bolder">
      {words.map((word, index) => (
        <span
          key={index}
          className={`word ${index === currentWordIndex ? 'visible' : ''}`}>
          {word}
        </span>
      ))}
    </h3>
  )
}

export default AnimatedWord