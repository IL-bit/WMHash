import React from 'react';
import Image from 'next/image';
import LogoSvg from '../../public/img/logo_2.svg';
import img_1 from '../../public/img/move.svg';
import img_2 from '../../public/img/ok.svg';
import img_3 from '../../public/img/defence.svg';
import img_4 from '../../public/img/referal.svg';

const Section2 = () => {
    const section2Eng = {
        h2: 'What is WildMiner Hash?',
        p: "WildMiner Hash is a unique game blending gaming and token mining. We've crafted a space where every player can enjoy the process and earn tangible rewards.",
        button: 'Join Our Telegram Bot',
        p2: {
            1: 'Step into the Telegram bot and start',
            2: 'your adventure.'
        },
        items: [
            {
                h4: 'Intuitive Gameplay',
                p: {
                    1: 'Suitable for both newcomers and',
                    2: 'seasoned gamers, all mechanics are clear',
                    3: 'and easy to grasp.',
                },
                image: img_1,
            },
            {
                h4: 'Fair Reward Distribution',
                p: {
                    1: 'Our Shares system ensures fairness for',
                    2: 'all participants, regardless of device',
                    3: 'power.',
                },
                image: img_2,
            },
            {
                h4: 'Security and Protection',
                p: {
                    1: 'n effective anti-bot system guarantees a',
                    2: 'fair playing field for everyone.'
                },
                image: img_3,
            },
            {
                h4: 'Referral Program',
                p: {
                    1: 'Earn bonuses for inviting friends and',
                    2: 'grow your community.'
                },
                image: img_4,
            }
        ]
    }
  return (
    <section className="col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-12 text-center" id='second'>
        <div className='what_is'>
            <Image src={LogoSvg} alt='#' />
            <div className="text">
                <h2>{section2Eng.h2}</h2>
                <p>{section2Eng.p}</p>
            </div>
        </div>
        <div className="items">
            {section2Eng.items.map((item, index) => (
                <div className="item" key={index}>
                <Image src={item.image} alt="#"/>
                    <div className='text'>
                        <h4>{item.h4}</h4>
                        <p>{item.p[1]}<br/>{item.p[2]}<br/>{item.p[3]}</p>                
                    </div>
                </div>
            ))}
        </div>
        <button>{section2Eng.button}</button>
        <p>{section2Eng.p2[1]}<br/>{section2Eng.p2[2]}</p>
    </section>
  )
}
export default Section2;