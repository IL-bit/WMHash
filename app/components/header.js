"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoSvg from '../../public/img/logo.svg';
import YouTubeSvg from '../../public/img/youtube.svg';
import tgSvg from '../../public/img/tg.svg';
import twiterSvg from '../../public/img/twitter.svg';
import binanceSvg from '../../public/img/binance.svg';
import masterSvg from '../../public/img/master.svg';

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);
    
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const headerUlEng = {
      1: 'About the Game',
      2: 'Roadmap',
      3: 'Q&A',
      4: 'Resources'
    }
  return (
    <header className="row">
        <div className="col-xxl-12">
            <div className="header">
                <Image src={LogoSvg} alt='#' className='logo'/>
                <nav>
                    <ul>
                        <li onClick={() => handleLinkClick(1)} style={{ color: activeLink === 1 ? '#16ABFF' : '' }}>{headerUlEng[1]}</li>
                        <li onClick={() => handleLinkClick(2)} style={{ color: activeLink === 2 ? '#16ABFF' : '' }}>{headerUlEng[2]}</li>
                        <li onClick={() => handleLinkClick(3)} style={{ color: activeLink === 3 ? '#16ABFF' : '' }}>{headerUlEng[3]}</li>
                        <li onClick={() => handleLinkClick(4)} style={{ color: activeLink === 4 ? '#16ABFF' : '' }}>{headerUlEng[4]}</li>
                    </ul>
                </nav>
                <div className="btns">
                    <button><Link href="#" ><Image src={binanceSvg} alt='#'/></Link></button>
                    <button><Link href="#" ><Image src={masterSvg} alt='#'/></Link></button>
                    <button><Link href="#" ><Image src={twiterSvg} alt='#'/></Link></button>
                    <button><Link href="#" ><Image src={YouTubeSvg} alt='#'/></Link></button>
                    <button><Link href="#" ><Image src={tgSvg} alt='#'/></Link></button>
                    <button className='lang'>eng</button>              
                </div>
            </div>
        </div>
    </header>
  )
}
export default Header;