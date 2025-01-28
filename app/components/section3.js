"use client";
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
const Section3 = () => {
  const lang = useSelector((state) => state.language);
  const section3Eng = {
    h2: 'Achievements and Reviews',
    items: [
      {
        p: {
          1: 'Blocks Mined',
        }
      },
      {
        p: {
          1: 'Join thousands',
          2: 'of players in',
          3: 'global rankings.'
        }
      },
      {
        p: {
          1: 'Regular Events',
          2: 'and Contests'
        }
      }
    ]
  };
  const section3Rus = {
    h2: 'Наши достижения',
    items: [
      {
        p: {
          1: 'Добытых блоков'
        }
      },
      {
        p: {
          1: 'Тысячи игроков в',
          2: 'мировом',
          3: 'рейтинге'
        }
      },
      {
        p: {
          1: 'Регулярные',
          2: 'ивенты и конкурсы'
        }
      }
    ]
  };
  const section3 = lang === 'eng' ? section3Eng : section3Rus;
  const h2Ref = useRef(null);
  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const item3Ref = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const h2 = h2Ref.current;
    h2.style.opacity = 0;

    const item1 = item1Ref.current;
    item1.style.opacity = 0;

    const item2 = item2Ref.current;
    item2.style.opacity = 0;

    const item3 = item3Ref.current;
    item3.style.opacity = 0;

    const animation = () => {
      h2.style.opacity = 1;
      h2.style.transition = 'all 2s ease-in-out';

      item1.style.transform = 'translateY(0)';
      item1.style.opacity = 1;
      item1.style.transition = 'all 2s ease-in-out';

      setTimeout(() => {
        item2.style.transform = 'translateY(0)';
        item2.style.opacity = 1;
        item2.style.transition = 'all 2s ease-in-out';
      }, 500);

      setTimeout(() => {
        item3.style.transform = 'translateY(0)';
        item3.style.opacity = 1;
        item3.style.transition = 'all 2s ease-in-out';
      }, 1000);
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
  return (
    <section ref={sectionRef} className="col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-12 text-center" id="third">
      <h2 ref={h2Ref}>{section3.h2}</h2>
      <div className="items">
        <div className="item item-1" ref={item1Ref}>
          <div className="text">
            <h4>{section3.items[0].p[1]}</h4>
          </div>
        </div>
        <div className="item item-2" ref={item2Ref}>
          <div className="text">
            <h4>{section3.items[1].p[1]}<br/>{section3.items[1].p[2]}<br/>{section3.items[1].p[3]}</h4>
          </div>
        </div>
        <div className="item item-3" ref={item3Ref}>
          <div className="text">
            <h4>{section3.items[2].p[1]}<br/>{section3.items[2].p[2]}</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Section3;