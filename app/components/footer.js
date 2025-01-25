import React from 'react';
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
  return (
    <footer className="row">
        <div className="col-xxl-12 text-center footer">
            <h2>{footerEng.h2}</h2>
            <div className="items">
                <div className="qr"></div>
                <button className="item"><Image src={master} alt="#" /></button>
                <button className="item"><Image src={youtube} alt="#" /></button>  
                <button className="item"><Image src={twitter} alt="#" /></button>                              
                <button className="item"><Image src={tg} alt="#" /></button>
                <button className="item"><Image src={binance} alt="#" /></button>
                <button className="bot">@WildMinerHash_bot</button>
            </div>
            <Image src={logo} alt='#'/>
        </div>
    </footer>
  )
}
export default Footer;