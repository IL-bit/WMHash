import React from 'react';
import Image from 'next/image';
import img_0 from '../../public/img/S.svg';
import img_1 from '../../public/img/person.svg';
import img_2 from '../../public/img/blocks.svg';

const Section1 = () => {
  const section1Eng = {
    h1: {
      1: 'Your Path to Innovation',
      2: 'in Gaming and Mining'
    },
    p: {
      1: 'Join a community where',
      2: 'gaming turns into a revenue stream.'        
    },
    button: 'Dive into WildMinerHash',
    items: [
      {
        h4: 'Play and Earn:',
        p: {
          1: 'Earn tokens for every',
          2: 'gaming action.'
        },
        image: img_0
      },
      {
        h4: 'A community of over 50,000 members',
        p: {
          1: 'Players from around the world',
          2: 'interact daily and grow',
          3: 'together with us.'
        },
        image: img_1
      },
      {
        h4: 'A Unique Ecosystem:',
        p: {
          1: 'Events, quests, and bonuses',
          2: 'make the gameplay dynamic',
          3: 'and engaging.'
        },
        image: img_2
      }
    ]
  };
  return (
    <section className="col-xxl-12 text-center" id='first'>
        <h1><span>{section1Eng.h1[1]}</span><br/>{section1Eng.h1[2]}</h1>
        <p>{section1Eng.p[1]}<br/>{section1Eng.p[2]}</p>
        <button>{section1Eng.button}</button>
        <div className='items'>
          {section1Eng.items.map((item, index) => (
            <div className="item" key={index}>
              <Image src={item.image} alt="#"/>
              <div className='text'>
                <h4>{item.h4}</h4>
                <p>{item.p[1]}<br/>{item.p[2]}<br/>{item.p[3]}</p>                
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}
export default Section1;