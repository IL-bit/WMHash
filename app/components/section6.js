import React from 'react';
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
    }
  return (
    <>
        <section className="col-xxl-5 col-xl-12 col-lg-12 text-center" id="sixth_1">
            <h2>{section6Eng.h2[1]}<br/><span>{section6Eng.h2[2]}</span><br/>{section6Eng.h2[3]}</h2>
            <h3>{section6Eng.h3[1]}<br/>{section6Eng.h3[2]}</h3>
            <button>{section6Eng.button}</button>
        </section>
        <section className="col-xxl-7 col-xl-12 col-lg-12 text-center" id="sixth_2">
            <Image src={planet} alt='#' className='img-fluid'/>
        </section>    
    </>

  )
}
export default Section6;