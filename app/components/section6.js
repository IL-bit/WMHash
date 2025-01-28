"use client";
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import planet from '../../public/img/planet.svg';

const Section6 = () => {
  const lang = useSelector((state) => state.language);
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
    const section6Rus = {
      h2: {
        1: 'Присоединяйтесь к',
        2: 'WildMinerHash',
        3: 'уже сегодня!'
      },
      h3: {
        1: 'Начните майнить и зарабатывать, играя',
        2: 'вместе с тысячами участников по всему миру'
      },
      button: 'Перейти в Telegram-бот'
    };
    const section6 = lang === 'eng' ? section6Eng : section6Rus;
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
    const handleLinkClick = (link) => {
      window.open(link, "_blank");
    };
  return (
    <>
    <section className="col-xxl-5 col-xl-12 col-lg-12 text-center" id="sixth_1">
      <h2>{section6.h2[1]}<br/><span>{section6.h2[2]}</span><br/>{section6.h2[3]}</h2>
      <h3>{section6.h3[1]}<br/>{section6.h3[2]}</h3>
      <button onClick={() => handleLinkClick("https://t.me/WildMinerHash_bot")}>{section6.button}</button>
    </section>
    <section className="col-xxl-7 col-xl-12 col-lg-12 text-center" id="sixth_2">
      <Image src={planet} alt="#" className='img-fluid' ref={imgRef}/>
    </section>    
    </>

  )
}
export default Section6;