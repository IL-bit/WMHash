"use client";
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import img_0 from '../../public/img/S.svg';
import img_1 from '../../public/img/person.svg';
import img_2 from '../../public/img/blocks.svg';

const Section1 = () => {
  const lang = useSelector((state) => state.language);
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
  const section1Rus = {
    h1: {
      1: 'Ваш путь к инновациям',
      2: 'в гейминге и майнинге'
    },
    p: {
      1: 'Присоединяйтесь к сообществу,',
      2: 'где гейминг превращается в источник дохода.'
    },
    button: 'Погружайтесь в WildMinerHash',
    items: [
      {
        h4: 'Играйте и зарабатывайте:',
        p: {
          1: 'Получайте токены за каждое',
          2: 'игровое действие.'
        },
        image: img_0
      },
      {
        h4: 'Сообщество более 50 тыс, участников',
        p: {
          1: 'Игроки со всего мира',
          2: 'ежедневно взаимодействуют',
          3: 'и растут вместе с нами.'
        },
        image: img_1
      },
      {
        h4: 'Уникальная экосистема:',
        p: {
          1: 'События, задания и бонусы',
          2: 'делают игровой процесс',
          3: 'динамичным и интересным.'
        },
        image: img_2
      }
    ]
  };
  const section1 = lang === 'eng' ? section1Eng : section1Rus;
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    section.style.transform = 'translateY(100%)';
    section.style.opacity = 0;

    const animation = () => {
      section.style.transform = 'translateY(0)';
      section.style.opacity = 1;
      section.style.transition = 'all 2s ease-in-out';
    };

    setTimeout(animation, 500);
  }, []);
  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <section ref={sectionRef} className="col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-12 text-center" id='first'>
      <h1><span>{section1.h1[1]}</span><br/>{section1.h1[2]}</h1>
      <p>{section1.p[1]}<br/>{section1.p[2]}</p>
      <button onClick={() => handleLinkClick("https://t.me/WildMinerHash_bot")}>{section1.button}</button>
      <div className='items'>
        {section1.items.map((item, index) => (
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