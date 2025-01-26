"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import planet from '../../public/img/planet.svg';

const Section6 = () => {
    const section6Eng = {
        h2: {
            1:'Join',
            2:'WildMinerHash',
            3:'Today!'
        },
        h3: {
            1: 'Start mining and earning as you play with',
            2: 'thousands of participants worldwide.'
        },
        button: 'Go to Telegram Bot'
    };
    const imgRef = useRef(null);
  
    useEffect(() => {  
      const img = imgRef.current;
      img.style.opacity = 0;
  
      const animation = () => {  
        setTimeout(() => {
          img.style.opacity = 1;
          img.style.transition = 'all 1s ease-in-out';
        }, 500);
      };
  
      const handleScroll = () => {
        if (imgRef.current) {
          const imgTop = imgRef.current.offsetTop;
          const imgHeight = imgRef.current.offsetHeight;
          const windowScrollTop = window.scrollY;
          const windowHeight = window.innerHeight;
      
          if (windowScrollTop + windowHeight > imgTop && windowScrollTop < imgTop + imgHeight) {
            animation();
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <>
        <section className="col-xxl-5 col-xl-12 col-lg-12 text-center" id="sixth_1">
            <h2>{section6Eng.h2[1]}<br/><span>{section6Eng.h2[2]}</span><br/>{section6Eng.h2[3]}</h2>
            <h3>{section6Eng.h3[1]}<br/>{section6Eng.h3[2]}</h3>
            <button>{section6Eng.button}</button>
        </section>
        <section className="col-xxl-7 col-xl-12 col-lg-12 text-center" id="sixth_2">
            <Image src={planet} alt='#' className='img-fluid' ref={imgRef}/>
        </section>    
    </>

  )
}
export default Section6;