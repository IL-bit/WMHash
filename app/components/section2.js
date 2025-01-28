"use client";
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import LogoSvg from '../../public/img/logo_2.svg';
import img_1 from '../../public/img/move.svg';
import img_2 from '../../public/img/ok.svg';
import img_3 from '../../public/img/defence.svg';
import img_4 from '../../public/img/referal.svg';

const Section2 = () => {
    const lang = useSelector((state) => state.language);
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
    };
    const section2Rus = {
      h2: 'Что такое WildMiner Hash?',
      p: '– это уникальная игра, которая сочетает в себе элементы гейминга и майнинга токенов. Мы создали пространство, где каждый игрок может не только наслаждаться процессом, но и получать ощутимые награды.',
      button: 'Перейти в Telegram-бот',
      p2: {
        1: 'Перейдите в Телеграм бот и начните',
        2: 'своё приключение'
      },
      items: [
        {
          h4: 'Интуитивный игровой процесс:',
          p: {
            1: 'Подходит как для новичков, так и для ',
            2: 'опытных пользователей. Все механики',
            3: 'понятны и просты в освоении.'
          },
          image: img_1
        },
        {
          h4: 'Честное распределение наград:',
          p: {
            1: 'Система Shares гарантирует',
            2: 'справедливость для всех участников.',
            3: 'независимо от мощности устройства.'
          },
          image: img_2
        },
        {
          h4: 'Безопасность и защита:',
          p: {
            1: 'Эффективная система антиботов',
            2: 'обеспечивает честную игру для всех.'
          },
          image: img_3
        },
        {
          h4: 'Реферальная программа:',
          p: {
            1: 'Получайте бонусы за приглашение',
            2: 'друзей и развивайте своё сообщество.'
          },
          image: img_4
        }
      ]
    };
    const section2 = lang === 'eng' ? section2Eng : section2Rus;
    const whatIsRef = useRef(null);
    const itemRefs = useRef([]);
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const whatIs = whatIsRef.current;
      whatIs.style.opacity = 0;
  
      const items = itemRefs.current;
      items.forEach((item, index) => {
        item.style.transform = 'translateY(100%)';
        item.style.opacity = 0;
      });
  
      const animation = () => {
        whatIs.style.opacity = 1;
        whatIs.style.transition = 'all 1s ease-in-out';
  
        items.forEach((item, index) => {
          setTimeout(() => {
            item.style.transform = 'translateY(0)';
            item.style.opacity = 1;
            item.style.transition = 'all 1s ease-in-out';
          }, 500 + index * 500);
        });
      };
  
      const handleScroll = () => {
        if (sectionRef.current) {
          const sectionTop = sectionRef.current.offsetTop;
          const sectionHeight = sectionRef.current.offsetHeight;
          const windowScrollTop = window.scrollY;
          const windowHeight = window.innerHeight;
  
          if (windowScrollTop + windowHeight > sectionTop && windowScrollTop < sectionTop + sectionHeight) {
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
    <section ref={sectionRef} className="col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-12 text-center" id='second'>
      <div className='what_is' ref={whatIsRef}>
        <Image src={LogoSvg} alt='#' />
        <div className="text">
          <h2>{section2.h2}</h2>
          <p>{section2.p}</p>
        </div>
      </div>
      <div className="items">
        {section2.items.map((item, index) => (
          <div className="item" key={index} ref={(ref) => (itemRefs.current[index] = ref)}>
            <Image src={item.image} alt="#"/>
            <div className='text'>
              <h4>{item.h4}</h4>
              <p>{item.p[1]}<br/>{item.p[2]}<br/>{item.p[3]}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => handleLinkClick("https://t.me/WildMinerHash_bot")}>{section2.button}</button>
      <p>{section2.p2[1]}<br/>{section2.p2[2]}</p>
    </section>
  )
}
export default Section2;