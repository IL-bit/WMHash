"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import logo from '../../public/img/logo.svg';
import youtube from '../../public/img/youtube.svg';
import tg from '../../public/img/tg.svg';
import twitter from '../../public/img/twitter.svg';
import binance from '../../public/img/binance.svg';
import master from '../../public/img/master.svg';

const Footer = () => {
    const footerEng = {
        h2: 'Earn now:'
    };
    const qrRef = useRef(null);
    const itemRefs = useRef([]);
    const botRef = useRef(null);
    const footerRef = useRef(null);
  
    useEffect(() => {
      const qr = qrRef.current;
      qr.style.opacity = 0;
  
      const items = itemRefs.current;
      items.forEach((item, index) => {
        item.style.transform = 'translateY(100%)';
        item.style.opacity = 0;
      });
  
      const bot = botRef.current;
      bot.style.opacity = 0;
  
      const animation = () => {
        qr.style.opacity = 1;
        qr.style.transition = 'all 0.5s ease-in-out';
  
        items.forEach((item, index) => {
          setTimeout(() => {
            item.style.transform = 'translateY(0)';
            item.style.opacity = 1;
            item.style.transition = 'all 0.5s ease-in-out';
          }, 500 + index * 500);
        });
  
        setTimeout(() => {
          bot.style.opacity = 1;
          bot.style.transition = 'all 0.5s ease-in-out';
        }, 2000);
      };
  
      const handleScroll = () => {
        if (footerRef.current) {
          const footerTop = footerRef.current.offsetTop;
          const footerHeight = footerRef.current.offsetHeight;
          const windowScrollTop = window.scrollY;
          const windowHeight = window.innerHeight;
  
          if (windowScrollTop + windowHeight > footerTop && windowScrollTop < footerTop + footerHeight) {
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
    <footer ref={footerRef} className="row">
        <div className="col-xxl-12 col-xl-12 col-lg-12 text-center footer">
            <h2>{footerEng.h2}</h2>
            <div className="items">
                <div ref={qrRef} className="qr"></div>
                <button ref={(ref) => (itemRefs.current[0] = ref)} className="item"><Image src={master} alt="#" /></button>
                <button ref={(ref) => (itemRefs.current[1] = ref)} className="item"><Image src={youtube} alt="#" /></button>  
                <button ref={(ref) => (itemRefs.current[2] = ref)} className="item"><Image src={twitter} alt="#" /></button>                              
                <button ref={(ref) => (itemRefs.current[3] = ref)} className="item"><Image src={tg} alt="#" /></button>
                <button ref={(ref) => (itemRefs.current[4] = ref)} className="item"><Image src={binance} alt="#" /></button>
                <button ref={botRef} className="bot">@WildMinerHash_bot</button>
            </div>
            <Image src={logo} alt='#'/>
        </div>
    </footer>
  )
}
export default Footer;