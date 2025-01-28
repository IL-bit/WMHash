"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup, changeLang } from '../actions';
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
    const isOpen = useSelector((state) => state.pop_up);
    const lang = useSelector((state) => state.language);
    const dispatch = useDispatch();
    
    const handleToggle = () => {
        dispatch(togglePopup());
    };
    const handlelanguage = () => {
        dispatch(changeLang());
    };
    const handleLinkClick = (link) => {
        const sectionId = link;
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveLink(link);
      };

    const headerUl = {
        eng: {
            1: 'About the Game',
            2: 'Roadmap',
            3: 'Q&A',
            4: 'Resources'
        },
        rus: {
            1: 'О игре',
            2: 'План развития',
            3: 'Вопросы и ответы',
            4: 'Ресурсы'
        }
    };
    const currentHeaderUl = headerUl[lang];
  return (
    <header className="row">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-12">
            <div className="header">
                <Image src={LogoSvg} alt='#' className='logo'/>
                <nav>
                    <ul>
                        <li onClick={() => handleLinkClick("second")} style={{ color: activeLink === "second" ? '#16ABFF' : '' }}>{currentHeaderUl[1]}</li>
                        <li onClick={() => handleLinkClick("fourth")} style={{ color: activeLink === "fourth" ? '#16ABFF' : '' }}>{currentHeaderUl[2]}</li>
                        <li onClick={() => handleLinkClick("fifth_2")} style={{ color: activeLink === "fifth_2" ? '#16ABFF' : '' }}>{currentHeaderUl[3]}</li>
                        <li onClick={() => handleLinkClick("footer")} style={{ color: activeLink === "footer" ? '#16ABFF' : '' }}>{currentHeaderUl[4]}</li>
                    </ul>
                </nav>
                <div className="btns">
                    <button><Link href="https://www.binance.com/ru/square/profile/wildminerhash" ><Image src={binanceSvg} alt='#'/></Link></button>
                    <button><Link href="https://coinmarketcap.com/community/profile/WildMinerHash/" ><Image src={masterSvg} alt='#'/></Link></button>
                    <button><Link href="https://x.com/wildminerhash" ><Image src={twiterSvg} alt='#'/></Link></button>
                    <button><Link href="https://www.youtube.com/@WildMinerHash" ><Image src={YouTubeSvg} alt='#'/></Link></button>
                    <button><Link href="https://t.me/WildMinerHash" ><Image src={tgSvg} alt='#'/></Link></button>
                    <button className='lang' onClick={handlelanguage}>{lang == 'eng' ? 'eng' : 'rus'}</button> 
                    <button className='burger' onClick={handleToggle}></button>             
                </div>
            </div>
        </div>
    </header>
  )
}
export default Header;